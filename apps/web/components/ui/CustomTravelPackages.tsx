"use client";

import {
  JSX,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { FaHotel, FaPlaneArrival, FaUserTie, FaUtensils } from "react-icons/fa";
import { FaUsers, FaHeart, FaUser, FaUserFriends } from "react-icons/fa";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { interpolate } from "@/lib/createTranslator";
import {
  getCustomPackagesTranslation,
  type DurationKey,
  type PreferenceKey,
  type TimeSpanKey,
  type TravelTypeKey,
} from "@/translations/customPackages";

// ─── Types ────────────────────────────────────────────────────────────────────

type CountryCode = "SA" | "AE" | "TR" | "EG" | "MA" | "TH" | "FR" | "IT" | "GB" | "US";
type SubmitStatus = "idle" | "loading" | "success" | "error";
type TravelerKey = "adults" | "children" | "infants";

/** `name` stays English: it is what the office receives by email. */
interface Country { code: CountryCode; name: string }
interface TravelTypeOption { id: TravelTypeKey; icon: JSX.Element }
interface PreferenceOption { id: PreferenceKey; icon: JSX.Element }
interface TravelerRowConfig {
  id: TravelerKey;
  label: string;
  value: number;
  setter: Dispatch<SetStateAction<number>>;
  min: number;
  max?: number;
  helperText?: string;
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface CustomTravelPackagesProps {
  mode?: "umrah" | "packages";
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const countries: Country[] = [
  { code: "SA", name: "Saudi Arabia" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "TR", name: "Turkey" },
  { code: "EG", name: "Egypt" },
  { code: "MA", name: "Morocco" },
  { code: "TH", name: "Thailand" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
];

// Airport names keep their IATA codes and stay as they are.
const airportsByCountry: Record<CountryCode, string[]> = {
  SA: ["Jeddah (JED)", "Riyadh (RUH)", "Dammam (DMM)", "Medina (MED)"],
  AE: ["Dubai (DXB)", "Abu Dhabi (AUH)", "Sharjah (SHJ)"],
  TR: ["Istanbul (IST)", "Ankara (ESB)", "Antalya (AYT)"],
  EG: ["Cairo (CAI)", "Luxor (LXR)", "Sharm El-Sheikh (SSH)"],
  MA: ["Casablanca (CMN)", "Marrakech (RAK)", "Fes (FEZ)"],
  TH: ["Bangkok (BKK)", "Phuket (HKT)", "Chiang Mai (CNX)"],
  FR: ["Paris CDG (CDG)", "Paris Orly (ORY)", "Nice (NCE)"],
  IT: ["Rome (FCO)", "Milan (MXP)", "Venice (VCE)"],
  GB: ["London Heathrow (LHR)", "London Gatwick (LGW)", "Manchester (MAN)"],
  US: ["New York JFK (JFK)", "Los Angeles (LAX)", "Chicago (ORD)"],
};

// Values stay English for the office email; labels come from translations.
const timeSpans: TimeSpanKey[] = ["Day", "Night"];

const travelTypes: TravelTypeOption[] = [
  { id: "family", icon: <FaUsers /> },
  { id: "couple", icon: <FaHeart /> },
  { id: "solo", icon: <FaUser /> },
  { id: "friends", icon: <FaUserFriends /> },
];

const durations: DurationKey[] = ["3-5", "7", "10", "14", "custom"];

const preferences: PreferenceOption[] = [
  { id: "hotel", icon: <FaHotel /> },
  { id: "airport", icon: <FaPlaneArrival /> },
  { id: "guide", icon: <FaUserTie /> },
  { id: "meals", icon: <FaUtensils /> },
];

// Simple email & phone validators
const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const isValidPhone = (value: string): boolean =>
  /^[+]?[\d\s()-]{7,}$/.test(value.trim());

// ─── Component ────────────────────────────────────────────────────────────────

export default function CustomTravelPackages({ mode = "packages" }: CustomTravelPackagesProps): JSX.Element {
  const isUmrah = mode === "umrah";

  const { language } = useLanguage();
  const t = getCustomPackagesTranslation(language);
  const direction = getDirection(language);
  const fieldId = useId();

  // Localized country names for display only; falls back to the English name.
  const regionNames = useMemo(() => {
    try {
      return new Intl.DisplayNames([language], { type: "region", fallback: "none" });
    } catch {
      return null;
    }
  }, [language]);

  const getCountryLabel = (item: Country): string =>
    regionNames?.of(item.code) || item.name;

  // ─── State ─────────────────────────────────────────────────────────────────

  const [fullName, setFullName]             = useState<string>("");
  const [email, setEmail]                   = useState<string>("");
  const [phone, setPhone]                   = useState<string>("");
  const [country, setCountry]               = useState<CountryCode>("SA");
  const [airport, setAirport]               = useState<string>("");
  const [timeSpan, setTimeSpan]             = useState<string>("");
  const [travelType, setTravelType]         = useState<TravelTypeKey>("couple");
  const [duration, setDuration]             = useState<DurationKey>("10");
  const [customDays, setCustomDays]         = useState<string>("");
  const [adults, setAdults]                 = useState<number>(2);
  const [children, setChildren]             = useState<number>(0);
  const [infants, setInfants]               = useState<number>(0);
  const [selectedPrefs, setSelectedPrefs]   = useState<PreferenceKey[]>(["airport"]);
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [status, setStatus]                 = useState<SubmitStatus>("idle");
  const [touched, setTouched]               = useState<{ email: boolean; phone: boolean }>({
    email: false,
    phone: false,
  });

  // Clear the "success" reset timer if the component unmounts.
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    return () => {
      if (resetTimer.current !== null) clearTimeout(resetTimer.current);
    };
  }, []);

  const togglePref = (id: PreferenceKey): void => {
    setSelectedPrefs((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  // ─── Validation ────────────────────────────────────────────────────────────

  const emailError = touched.email && !isValidEmail(email)
    ? (email.trim() === "" ? t.errors.emailRequired : t.errors.emailInvalid)
    : "";

  const phoneError = touched.phone && !isValidPhone(phone)
    ? (phone.trim() === "" ? t.errors.phoneRequired : t.errors.phoneInvalid)
    : "";

  const isFormValid = isValidEmail(email) && isValidPhone(phone);

  // ─── Submit ───────────────────────────────────────────────────────────────
  // Payload is unchanged: English values, same keys as before.

  const handleSubmit = async (): Promise<void> => {
    // Mark mandatory fields as touched so errors show if invalid
    setTouched({ email: true, phone: true });

    if (!isFormValid) {
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "travelQuote",
          pageType: isUmrah ? "umrah" : "packages",
          fullName,
          email,
          phone,
          country: countries.find((c) => c.code === country)?.name,
          airport: airport || airportsByCountry[country]?.[0] || "",
          timeSpan,
          travelType,
          duration: duration === "custom" ? `${customDays} Days` : `${duration} Days`,
          adults,
          children,
          infants,
          preferences: selectedPrefs.join(", "),
          specialRequests,
        }),
      });

      if (res.ok) {
        setStatus("success");
        if (resetTimer.current !== null) clearTimeout(resetTimer.current);
        resetTimer.current = setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // ─── Traveler rows configuration ──────────────────────────────────────────

  const travelerRows: TravelerRowConfig[] = [
    { id: "adults", label: t.travelers.adults, value: adults, setter: setAdults, min: 1 },
    { id: "children", label: t.travelers.children, value: children, setter: setChildren, min: 0, max: 10 },
    { id: "infants", label: t.travelers.infants, value: infants, setter: setInfants, min: 0, max: 5 },
  ];

  // ─── Derived button state ─────────────────────────────────────────────────

  const buttonLabel = t.submit[status];

  const buttonClass = {
    idle:    "bg-[#0F91D5] shadow-lg shadow-blue-100 hover:shadow-xl hover:scale-[1.01]",
    loading: "bg-[#0F91D5] opacity-60 cursor-not-allowed",
    success: "bg-green-500 shadow-lg shadow-green-200",
    error:   "bg-red-500 shadow-lg shadow-red-200",
  }[status];

  const heading = isUmrah ? t.heading.umrah : t.heading.packages;
  const description = isUmrah ? t.description.umrah : t.description.packages;

  const ids = {
    country: `${fieldId}-country`,
    airport: `${fieldId}-airport`,
    timeSpan: `${fieldId}-time-span`,
    customDays: `${fieldId}-custom-days`,
    specialRequests: `${fieldId}-special-requests`,
    emailError: `${fieldId}-email-error`,
    phoneError: `${fieldId}-phone-error`,
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <section
      id="umrah-form"
      dir={direction}
      className="relative w-full py-12 sm:py-20 overflow-hidden flex items-center justify-center"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 font-sans">

        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {heading.start}
            <span className="text-[#0F91D5]">{heading.highlight}</span>
            {heading.end}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">{description}</p>
        </div>

        {/* FORM CARD */}
        <div className="w-full bg-white rounded-3xl shadow-2xl shadow-blue-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">

            {/* ── FIRST PANEL ── */}
            <div className="p-8 space-y-8 min-w-0">

              {/* Contact Details (Mandatory) */}
              <div className="space-y-4" role="group" aria-label={t.contact.label}>
                <p className="text-sm font-semibold text-gray-700">
                  {t.contact.label} <span className="text-red-500" aria-hidden="true">*</span>
                </p>

                {/* Full Name (optional) */}
                <input
                  type="text"
                  autoComplete="name"
                  aria-label={t.contact.fullName}
                  placeholder={t.contact.fullName}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:border-[#0F91D5] focus:bg-white transition-all"
                />

                {/* Email (mandatory) */}
                <div>
                  <input
                    type="email"
                    dir="ltr"
                    autoComplete="email"
                    required
                    aria-label={t.contact.email}
                    aria-invalid={!!emailError}
                    aria-describedby={emailError ? ids.emailError : undefined}
                    placeholder={t.contact.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:bg-white transition-all ${
                      emailError ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#0F91D5]"
                    }`}
                  />
                  {emailError && (
                    <p id={ids.emailError} role="alert" className="text-xs text-red-500 mt-1 text-start">
                      {emailError}
                    </p>
                  )}
                </div>

                {/* Phone (mandatory) */}
                <div>
                  <input
                    type="tel"
                    dir="ltr"
                    autoComplete="tel"
                    required
                    aria-label={t.contact.phone}
                    aria-invalid={!!phoneError}
                    aria-describedby={phoneError ? ids.phoneError : undefined}
                    placeholder={t.contact.phone}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:bg-white transition-all ${
                      phoneError ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#0F91D5]"
                    }`}
                  />
                  {phoneError && (
                    <p id={ids.phoneError} role="alert" className="text-xs text-red-500 mt-1 text-start">
                      {phoneError}
                    </p>
                  )}
                </div>
              </div>

              {/* Destination Country */}
              <div className="space-y-2">
                <label htmlFor={ids.country} className="block text-sm font-semibold text-gray-700">
                  {t.destination.label}
                </label>
                <div className="relative">
                  <select
                    id={ids.country}
                    value={country}
                    onChange={(e) => {
                      const newCountry = e.target.value as CountryCode;
                      setCountry(newCountry);
                      setAirport("");
                    }}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:border-[#0F91D5] focus:bg-white transition-all appearance-none ${
                      isUmrah ? "cursor-not-allowed opacity-75" : "pe-10"
                    }`}
                    disabled={isUmrah}
                  >
                    {isUmrah ? (
                      <option value="SA">{getCountryLabel(countries[0]!)}</option>
                    ) : (
                      countries.map((c) => (
                        <option key={c.code} value={c.code}>{getCountryLabel(c)}</option>
                      ))
                    )}
                  </select>

                  {/* Dropdown Arrow - Hidden for Umrah */}
                  {!isUmrah && (
                    <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center px-3 text-gray-500">
                      <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
                {isUmrah && (
                  <p className="text-xs text-gray-500 mt-1">{t.destination.umrahOnly}</p>
                )}
              </div>

              {/* Airport */}
              <div className="space-y-2">
                <label htmlFor={ids.airport} className="block text-sm font-semibold text-gray-700">
                  {t.airport.label}
                </label>
                <select
                  id={ids.airport}
                  value={airport}
                  onChange={(e) => setAirport(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:border-[#0F91D5] focus:bg-white transition-all"
                >
                  <option value="">{t.airport.placeholder}</option>
                  {(airportsByCountry[country] ?? []).map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              {/* Preferred Time Span */}
              <div className="space-y-2">
                <label htmlFor={ids.timeSpan} className="block text-sm font-semibold text-gray-700">
                  {t.timeSpan.label}
                </label>
                <select
                  id={ids.timeSpan}
                  value={timeSpan}
                  onChange={(e) => setTimeSpan(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:border-[#0F91D5] focus:bg-white transition-all"
                >
                  <option value="">{t.timeSpan.placeholder}</option>
                  {timeSpans.map((value) => (
                    <option key={value} value={value}>{t.timeSpan.options[value]}</option>
                  ))}
                </select>
              </div>

              {/* Travel Type */}
              <div className="space-y-3" role="group" aria-label={t.travelType.label}>
                <p className="text-sm font-semibold text-gray-700">{t.travelType.label}</p>
                <div className="grid grid-cols-4 gap-3">
                  {travelTypes.map((option) => {
                    const active = travelType === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setTravelType(option.id)}
                        className={`flex flex-col items-center justify-center gap-2 py-4 rounded-2xl border-2 text-sm font-semibold transition-all min-w-0
                          ${active
                            ? "bg-[#0F91D5] border-[#0F91D5] text-white shadow-lg scale-105"
                            : "bg-white border-gray-200 text-gray-600 hover:border-[#0F91D5] hover:bg-blue-50"
                          }`}
                      >
                        <span aria-hidden="true" className={`text-2xl ${active ? "text-white" : "text-[#0F91D5]"}`}>
                          {option.icon}
                        </span>
                        <span className={`text-xs text-center break-words ${active ? "text-white" : "text-gray-600"}`}>
                          {t.travelType.options[option.id]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Duration */}
              <div className="space-y-3" role="group" aria-label={t.duration.label}>
                <p className="text-sm font-semibold text-gray-700">{t.duration.label}</p>
                <div className="flex flex-wrap gap-2">
                  {durations.map((id) => (
                    <button
                      key={id}
                      type="button"
                      aria-pressed={duration === id}
                      onClick={() => setDuration(id)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${
                        duration === id
                          ? "bg-[#0F91D5] border-[#0F91D5] text-white shadow-md"
                          : "bg-white border-gray-200 text-gray-600 hover:border-[#0F91D5]"
                      }`}
                    >
                      {t.duration.options[id]}
                    </button>
                  ))}
                </div>
                {duration === "custom" && (
                  <input
                    id={ids.customDays}
                    type="number"
                    min={1}
                    aria-label={t.duration.customPlaceholder}
                    placeholder={t.duration.customPlaceholder}
                    value={customDays}
                    onChange={(e) => setCustomDays(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#0F91D5] bg-blue-50 text-gray-700 font-medium focus:outline-none transition-all"
                  />
                )}
              </div>
            </div>

            {/* ── SECOND PANEL ── */}
            <div className="p-8 space-y-8 min-w-0">

              {/* Number of Travelers */}
              <div className="space-y-3" role="group" aria-label={t.travelers.label}>
                <p className="text-sm font-semibold text-gray-700">{t.travelers.label}</p>
                <div className="space-y-3">
                  {travelerRows.map(({ id, label, value, setter, min, max, helperText }) => (
                    <div key={id} className="flex items-center justify-between gap-3 bg-gray-50 rounded-2xl px-5 py-4">
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-800 text-sm">{label}</p>
                        {helperText && (
                          <p className="text-xs text-gray-500">{helperText}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <button
                          type="button"
                          onClick={() => setter((prev) => Math.max(min, prev - 1))}
                          className="w-10 h-10 rounded-full border-2 border-[#0F91D5] text-[#0F91D5] text-xl font-bold flex items-center justify-center hover:bg-[#0F91D5] hover:text-white transition-all"
                          aria-label={interpolate(t.travelers.decrease, { label })}
                        >
                          −
                        </button>
                        <span aria-live="polite" className="w-6 text-center text-lg font-bold text-gray-800">
                          {value}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            if (max && value >= max) return;
                            setter((prev) => prev + 1);
                          }}
                          className={`w-10 h-10 rounded-full border-2 text-xl font-bold flex items-center justify-center transition-all ${
                            max && value >= max
                              ? "border-gray-300 text-gray-300 cursor-not-allowed"
                              : "border-[#0F91D5] text-[#0F91D5] hover:bg-[#0F91D5] hover:text-white"
                          }`}
                          aria-label={interpolate(t.travelers.increase, { label })}
                          disabled={max ? value >= max : false}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Preferences */}
              <div className="space-y-3" role="group" aria-label={t.preferences.label}>
                <p className="text-sm font-semibold text-gray-700">{t.preferences.label}</p>
                <div className="space-y-2.5">
                  {preferences.map((pref) => {
                    const active = selectedPrefs.includes(pref.id);
                    return (
                      <button
                        key={pref.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => togglePref(pref.id)}
                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl border-2 text-start transition-all ${
                          active
                            ? "bg-blue-50 border-[#0F91D5] shadow-sm"
                            : "bg-gray-50 border-gray-200 hover:border-blue-200"
                        }`}
                      >
                        <div aria-hidden="true" className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                          active ? "bg-[#0F91D5] border-[#0F91D5]" : "border-gray-300"
                        }`}>
                          {active && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span aria-hidden="true" className="text-xl text-[#0F91D5] shrink-0">{pref.icon}</span>
                        <span className={`text-sm font-semibold min-w-0 ${active ? "text-blue-900" : "text-gray-700"}`}>
                          {t.preferences.options[pref.id]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label htmlFor={ids.specialRequests} className="block text-sm font-semibold text-gray-700">
                  {t.specialRequests.label}
                </label>
                <textarea
                  id={ids.specialRequests}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder={t.specialRequests.placeholder}
                  rows={3}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:border-[#0F91D5] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "loading"}
                className={`w-full py-4 rounded-2xl font-bold text-white text-base transition-all duration-300 ${buttonClass}`}
              >
                <span role={status === "success" || status === "error" ? "status" : undefined}>
                  {buttonLabel}
                </span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}