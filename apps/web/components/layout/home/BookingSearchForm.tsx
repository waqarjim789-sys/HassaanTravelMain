"use client";

import React from "react";
import { BookingSearchFormInputField } from "../BookingSearchFormInputField";
import DateInputField from "./DateInputField";
import type { DatePickerValue } from "./DatePIckerDialog";
import { formatDateSelection } from "./DatePicker";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useLanguage } from "@/components/LanguageProvider";
import {
  homepageTranslations,
  getHomepageTranslation,
  type BookingFormTranslation,
} from "@/translations/homepage";
import { getDirection } from "@/i18n";

// ─── Types ───────────────────────────────────────────────────────────────────

type SubmitStatus = "idle" | "loading" | "success" | "error";

type DateFieldValue = DatePickerValue;

interface FormData {
  from: string;
  to: string;
  depart: DateFieldValue | string;
  returnDate: DateFieldValue | string;
  travellers: string;
  contactNumber: string;
}

interface TouchedState {
  from: boolean;
  to: boolean;
  travellers: boolean;
  contactNumber: boolean;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Keep the office email in English while display follows the selected language. */
const formatDateField = (
  value: DateFieldValue | string,
  bf: BookingFormTranslation
): string => formatDateSelection(value, bf.dateLocale) || bf.notSpecified;

// ─── Validation helpers ───────────────────────────────────────────────────────

const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

// Accepts digits, spaces, +, -, () — must have at least 7 digits total
const isValidPhone = (value: string): boolean => {
  const digitsOnly = value.replace(/\D/g, "");
  return /^[+\d\s()-]+$/.test(value.trim()) && digitsOnly.length >= 7;
};

/** A contact value is valid if it's EITHER a valid email OR a valid phone number */
const isValidContact = (value: string): boolean => {
  const trimmed = value.trim();
  if (!trimmed) return false;
  return isValidEmail(trimmed) || isValidPhone(trimmed);
};

const getContactError = (
  value: string,
  bf: BookingFormTranslation
): string => {
  const trimmed = value.trim();
  if (!trimmed) return bf.errContactRequired;
  if (isValidEmail(trimmed) || isValidPhone(trimmed)) return "";
  // Give a specific hint depending on what they seem to be typing
  if (trimmed.includes("@")) return bf.errEmail;
  return bf.errPhone;
};

// ─── Component ────────────────────────────────────────────────────────────────

const BookingSearchForm = () => {
  const { language } = useLanguage();

  const t = getHomepageTranslation(language);
  const direction = getDirection(language);

  const bf = t.bookingForm;

  // The office always receives the request in English
  const emailLabels = homepageTranslations.en.bookingForm;

  const [formData, setFormData] = React.useState<FormData>({
    from: "",
    to: "",
    depart: "",
    returnDate: "",
    travellers: "",
    contactNumber: "",
  });

  const [status, setStatus] = React.useState<SubmitStatus>("idle");
  const [touched, setTouched] = React.useState<TouchedState>({
    from: false,
    to: false,
    travellers: false,
    contactNumber: false,
  });

  const handleChange = (name: keyof FormData, value: string | DatePickerValue) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: keyof TouchedState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSwap = () => {
    setFormData((prev) => ({ ...prev, from: prev.to, to: prev.from }));
  };

  // ─── Validation ──────────────────────────────────────────────────────────

  const fromError = touched.from && !formData.from.trim() ? bf.errFrom : "";
  const toError = touched.to && !formData.to.trim() ? bf.errTo : "";
  const travellersError =
    touched.travellers && !formData.travellers.trim() ? bf.errTravellers : "";
  const contactError = touched.contactNumber
    ? getContactError(formData.contactNumber, bf)
    : "";

  const isFormValid =
    formData.from.trim() !== "" &&
    formData.to.trim() !== "" &&
    formData.travellers.trim() !== "" &&
    isValidContact(formData.contactNumber);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark everything touched so all errors show up if invalid
    setTouched({ from: true, to: true, travellers: true, contactNumber: true });

    if (!isFormValid) {
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "flightSearch",
          from: formData.from,
          to: formData.to,
          depart: formatDateField(formData.depart, emailLabels),
          returnDate: formatDateField(formData.returnDate, emailLabels),
          travellers: formData.travellers,
          contactNumber: formData.contactNumber,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          from: "",
          to: "",
          depart: "",
          returnDate: "",
          travellers: "",
          contactNumber: "",
        });
        setTouched({ from: false, to: false, travellers: false, contactNumber: false });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section dir={direction} className="relative z-10 w-full max-w-5xl md:max-w-7xl mx-auto px-4 mt-10">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-13 gap-1 md:gap-1.5 items-stretch w-full"
        noValidate
      >
        {/* FROM */}
        <div onBlur={() => handleBlur("from")} className="relative w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            name="from"
            label={bf.labelFrom}
            placeHolder={bf.phLocation}
            value={formData.from}
            handleChange={(name: string, value: string) => {
              handleChange("from", value);
            }}
          />
          {fromError && <p className="text-xs text-red-500 mt-1">{fromError}</p>}
          {/* SWAP BUTTON */}
          <button
            type="button"
            onClick={handleSwap}
            aria-label={bf.swap}
            title={bf.swap}
            className={`hidden lg:flex absolute top-1/2 ${direction === "rtl" ? "-left-3.25" : "-right-3.25"} -translate-y-1/2 w-6 h-6 rounded-full border border-blue-500 text-blue-500 bg-white items-center justify-center shadow-sm z-30 hover:bg-blue-50 transition`}
          >
            <HiOutlineSwitchHorizontal size={12} />
          </button>
        </div>

        {/* TO */}
        <div onBlur={() => handleBlur("to")} className="w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            name="to"
            label={bf.labelTo}
            placeHolder={bf.phLocation}
            value={formData.to}
            handleChange={(name: string, value: string) => {
              handleChange("to", value);
            }}
          />
          {toError && <p className="text-xs text-red-500 mt-1">{toError}</p>}
        </div>

        {/* DEPART */}
        <div className="w-full min-w-0 lg:col-span-2">
          <DateInputField
            name="depart"
            label={bf.labelDepart}
            placeHolder={bf.phDate}
            value={formData.depart}
            handleChange={(value) => handleChange("depart", value)}
          />
        </div>

        {/* RETURN */}
        <div className="w-full min-w-0 lg:col-span-2">
          <DateInputField
            name="returnDate"
            label={bf.labelReturn}
            placeHolder={bf.phDate}
            value={formData.returnDate}
            handleChange={(value) => handleChange("returnDate", value)}
          />
        </div>

        {/* TRAVELLERS */}
        <div onBlur={() => handleBlur("travellers")} className="w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            name="travellers"
            label={bf.labelTravellers}
            placeHolder={bf.phTravellers}
            value={formData.travellers}
            handleChange={(name: string, value: string) => {
              handleChange("travellers", value);
            }}
          />
          {travellersError && <p className="text-xs text-red-500 mt-1">{travellersError}</p>}
        </div>

        {/* CONTACT NUMBER / EMAIL FIELD (now mandatory + validated) */}
        <div onBlur={() => handleBlur("contactNumber")} className="w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            name="contactNumber"
            inputDirection="ltr"
            label={bf.labelContact}
            placeHolder={bf.phContact}
            value={formData.contactNumber}
            handleChange={(name: string, value: string) => {
              handleChange("contactNumber", value);
            }}
          />
          {contactError && <p className="text-xs text-red-500 mt-1">{contactError}</p>}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={status === "loading"}
          onClick={() =>
            setTouched({ from: true, to: true, travellers: true, contactNumber: true })
          }
          className="bg-[#0F91D5] hover:bg-blue-600 text-white w-full h-14 lg:h-full lg:col-span-1 rounded-xl font-semibold shadow-sm flex items-center justify-center transition disabled:opacity-60"
        >
          {status === "loading" ? "..." : status === "success" ? "✓" : bf.submit}
        </button>
      </form>

      {/* STATUS MESSAGES */}
      {status === "success" && (
        <p role="status" className="text-green-600 text-xl text-center mt-3">
          ✅ {bf.success}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-red-500 text-sm text-center mt-3">
          ❌ {bf.error}
        </p>
      )}
      {!isFormValid &&
        (touched.from || touched.to || touched.travellers || touched.contactNumber) &&
        status === "idle" && (
          <p role="alert" className="text-red-500 text-sm text-center mt-3">
            ⚠️ {bf.incomplete}
          </p>
        )}
    </section>
  );
};

export default BookingSearchForm;
