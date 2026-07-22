"use client";
import { JSX, useState } from "react";
import { FaHotel, FaPlaneArrival, FaUserTie, FaUtensils } from "react-icons/fa";
import { FaUsers, FaHeart, FaUser, FaUserFriends } from "react-icons/fa";

// ─── Types ────────────────────────────────────────────────────────────────────

type CountryCode = "SA" | "AE" | "TR" | "EG" | "MA" | "TH" | "FR" | "IT" | "GB" | "US";
type SubmitStatus = "idle" | "loading" | "success" | "error";

interface Country { code: CountryCode; name: string }
interface TravelTypeOption { id: string; label: string; icon: JSX.Element }
interface DurationOption { id: string; label: string }
interface PreferenceOption { id: string; label: string; icon: JSX.Element }
interface TravelerRowConfig {
  label: string;
  value: number;
  setter: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  max?: number;
  helperText?: string;
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface CustomTravelPackagesProps {
  mode?: 'umrah' | 'packages';
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

const timeSpans: string[] = ["Day", "Night"];

const travelTypes: TravelTypeOption[] = [
  { id: "family",  label: "Family",  icon: <FaUsers /> },
  { id: "couple",  label: "Couple",  icon: <FaHeart /> },
  { id: "solo",    label: "Solo",    icon: <FaUser /> },
  { id: "friends", label: "Friends", icon: <FaUserFriends /> },
];

const durations: DurationOption[] = [
  { id: "3-5",    label: "3–5 Days" },
  { id: "7",      label: "7 Days" },
  { id: "10",     label: "10 Days" },
  { id: "14",     label: "14 Days" },
  { id: "custom", label: "Custom" },
];

const preferences: PreferenceOption[] = [
  { id: "hotel",   label: "Hotel Accommodation", icon: <FaHotel /> },
  { id: "airport", label: "Airport Pick & Drop",  icon: <FaPlaneArrival /> },
  { id: "guide",   label: "Tour Guide",           icon: <FaUserTie /> },
  { id: "meals",   label: "Meals Included",       icon: <FaUtensils /> },
];

// Simple email & phone validators
const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const isValidPhone = (value: string): boolean =>
  /^[+]?[\d\s()-]{7,}$/.test(value.trim());

// ─── Component ────────────────────────────────────────────────────────────────

export default function CustomTravelPackages({ mode = 'packages' }: CustomTravelPackagesProps): JSX.Element {
  const isUmrah = mode === 'umrah';

  // ─── State ─────────────────────────────────────────────────────────────────

  const [fullName, setFullName]             = useState<string>("");
  const [email, setEmail]                   = useState<string>("");
  const [phone, setPhone]                   = useState<string>("");
  const [country, setCountry]               = useState<CountryCode>("SA");
  const [airport, setAirport]               = useState<string>("");
  const [timeSpan, setTimeSpan]             = useState<string>("");
  const [travelType, setTravelType]         = useState<string>("couple");
  const [duration, setDuration]             = useState<string>("10");
  const [customDays, setCustomDays]         = useState<string>("");
  const [adults, setAdults]                 = useState<number>(2);
  const [children, setChildren]             = useState<number>(0);
  const [infants, setInfants]               = useState<number>(0);
  const [selectedPrefs, setSelectedPrefs]   = useState<string[]>(["airport"]);
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [status, setStatus]                 = useState<SubmitStatus>("idle");
  const [touched, setTouched]               = useState<{ email: boolean; phone: boolean }>({
    email: false,
    phone: false,
  });

  const togglePref = (id: string): void => {
    setSelectedPrefs((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  // ─── Validation ────────────────────────────────────────────────────────────

  const emailError = touched.email && !isValidEmail(email)
    ? (email.trim() === "" ? "Email is required" : "Enter a valid email address")
    : "";

  const phoneError = touched.phone && !isValidPhone(phone)
    ? (phone.trim() === "" ? "Phone number is required" : "Enter a valid phone number")
    : "";

  const isFormValid = isValidEmail(email) && isValidPhone(phone);

  // ─── Submit ───────────────────────────────────────────────────────────────

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
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // ─── Traveler rows configuration ──────────────────────────────────────────

  const travelerRows: TravelerRowConfig[] = [
    { label: "Adults (12+)", value: adults, setter: setAdults, min: 1 },
    { label: "Children (2-11)", value: children, setter: setChildren, min: 0, max: 10 },
    { label: "Infants (0-1)", value: infants, setter: setInfants, min: 0, max: 5 },
  ];

  // ─── Derived button state ─────────────────────────────────────────────────

  const buttonLabel = {
    idle:    "Get Your Custom Quote →",
    loading: "Sending...",
    success: "✓ Quote Request Sent!",
    error:   "❌ Failed — Try Again",
  }[status];

  const buttonClass = {
    idle:    "bg-[#0F91D5] shadow-lg shadow-blue-100 hover:shadow-xl hover:scale-[1.01]",
    loading: "bg-[#0F91D5] opacity-60 cursor-not-allowed",
    success: "bg-green-500 shadow-lg shadow-green-200",
    error:   "bg-red-500 shadow-lg shadow-red-200",
  }[status];

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <section className="relative w-full py-12 sm:py-20 overflow-hidden flex items-center justify-center">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 font-sans">

        {/* HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {isUmrah ? (
              <>Make Your <span className="text-[#0F91D5]">Umrah</span> Package</>
            ) : (
              <>Make Your <span className="text-[#0F91D5]">Custom</span> Travel Package</>
            )}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {isUmrah ? (
              "Build your perfect Umrah journey tailored to your preferences. Choose your destination, travel style, and let us create an unforgettable spiritual experience."
            ) : (
              "Build your perfect journey tailored to your preferences. Choose your destination, travel style, and let us create an unforgettable experience."
            )}
          </p>
        </div>

        {/* FORM CARD */}
        <div className="w-full bg-white rounded-3xl shadow-2xl shadow-blue-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">

            {/* ── LEFT PANEL ── */}
            <div className="p-8 space-y-8">

              {/* Contact Details (Mandatory) */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-gray-700">
                  Contact Details <span className="text-red-500">*</span>
                </label>

                {/* Full Name (optional) */}
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:border-[#0F91D5] focus:bg-white transition-all"
                />

                {/* Email (mandatory) */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:bg-white transition-all ${
                      emailError ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#0F91D5]"
                    }`}
                  />
                  {emailError && (
                    <p className="text-xs text-red-500 mt-1">{emailError}</p>
                  )}
                </div>

                {/* Phone (mandatory) */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:bg-white transition-all ${
                      phoneError ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#0F91D5]"
                    }`}
                  />
                  {phoneError && (
                    <p className="text-xs text-red-500 mt-1">{phoneError}</p>
                  )}
                </div>
              </div>

              {/* Destination Country */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Destination Country</label>
                <div className="relative">
                  <select
                    value={country}
                    onChange={(e) => { 
                      const newCountry = e.target.value as CountryCode;
                      setCountry(newCountry);
                      setAirport("");
                    }}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:border-[#0F91D5] focus:bg-white transition-all appearance-none ${
                      isUmrah ? 'cursor-not-allowed opacity-75' : ''
                    }`}
                    disabled={isUmrah}
                  >
                    {isUmrah ? (
                      <option value="SA">Saudi Arabia</option>
                    ) : (
                      countries.map((c) => (
                        <option key={c.code} value={c.code}>{c.name}</option>
                      ))
                    )}
                  </select>
                  
                  {/* Dropdown Arrow - Hidden for Umrah */}
                  {!isUmrah && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
                {isUmrah && (
                  <p className="text-xs text-gray-500 mt-1">* Only Saudi Arabia for Umrah services</p>
                )}
              </div>

              {/* Airport */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Airport</label>
                <select
                  value={airport}
                  onChange={(e) => setAirport(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:border-[#0F91D5] focus:bg-white transition-all"
                >
                  <option value="">Select Airport</option>
                  {(airportsByCountry[country] ?? []).map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              {/* Preferred Time Span */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Preferred Time Span</label>
                <select
                  value={timeSpan}
                  onChange={(e) => setTimeSpan(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-700 font-medium focus:outline-none focus:border-[#0F91D5] focus:bg-white transition-all"
                >
                  <option value="">Day/Night</option>
                  {timeSpans.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              {/* Travel Type */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700">Travel Type</label>
                <div className="grid grid-cols-4 gap-3">
                  {travelTypes.map((t) => {
                    const active = travelType === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTravelType(t.id)}
                        className={`flex flex-col items-center justify-center gap-2 py-4 rounded-2xl border-2 text-sm font-semibold transition-all
                          ${active
                            ? "bg-[#0F91D5] border-[#0F91D5] text-white shadow-lg scale-105"
                            : "bg-white border-gray-200 text-gray-600 hover:border-[#0F91D5] hover:bg-blue-50"
                          }`}
                      >
                        <span className={`text-2xl ${active ? "text-white" : "text-[#0F91D5]"}`}>
                          {t.icon}
                        </span>
                        <span className={`text-xs ${active ? "text-white" : "text-gray-600"}`}>
                          {t.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Duration */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700">Duration</label>
                <div className="flex flex-wrap gap-2">
                  {durations.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDuration(d.id)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${
                        duration === d.id
                          ? "bg-[#0F91D5] border-[#0F91D5] text-white shadow-md"
                          : "bg-white border-gray-200 text-gray-600 hover:border-[#0F91D5]"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
                {duration === "custom" && (
                  <input
                    type="number"
                    min={1}
                    placeholder="Enter number of days"
                    value={customDays}
                    onChange={(e) => setCustomDays(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#0F91D5] bg-blue-50 text-gray-700 font-medium focus:outline-none transition-all"
                  />
                )}
              </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="p-8 space-y-8">

              {/* Number of Travelers */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700">Number of Travelers</label>
                <div className="space-y-3">
                  {travelerRows.map(({ label, value, setter, min, max, helperText }) => (
                    <div key={label} className="flex items-center justify-between bg-gray-50 rounded-2xl px-5 py-4">
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{label}</p>
                        {helperText && (
                          <p className="text-xs text-gray-500">{helperText}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setter((prev) => Math.max(min, prev - 1))}
                          className="w-10 h-10 rounded-full border-2 border-[#0F91D5] text-[#0F91D5] text-xl font-bold flex items-center justify-center hover:bg-[#0F91D5] hover:text-white transition-all"
                          aria-label={`Decrease ${label}`}
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-lg font-bold text-gray-800">{value}</span>
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
                          aria-label={`Increase ${label}`}
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
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700">Additional Preferences</label>
                <div className="space-y-2.5">
                  {preferences.map((pref) => {
                    const active = selectedPrefs.includes(pref.id);
                    return (
                      <button
                        key={pref.id}
                        type="button"
                        onClick={() => togglePref(pref.id)}
                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl border-2 text-left transition-all ${
                          active
                            ? "bg-blue-50 border-[#0F91D5] shadow-sm"
                            : "bg-gray-50 border-gray-200 hover:border-blue-200"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                          active ? "bg-[#0F91D5] border-[#0F91D5]" : "border-gray-300"
                        }`}>
                          {active && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-xl text-[#0F91D5]">{pref.icon}</span>
                        <span className={`text-sm font-semibold ${active ? "text-blue-900" : "text-gray-700"}`}>
                          {pref.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Special Requests</label>
                <textarea
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Any special requirements or requests..."
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
                {buttonLabel}
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}