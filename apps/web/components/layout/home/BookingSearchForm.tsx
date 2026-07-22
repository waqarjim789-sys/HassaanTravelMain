"use client";

import React from "react";
import { BookingSearchFormInputField } from "../BookingSearchFormInputField";
import DateInputField from "./DateInputField";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

// ─── Types ───────────────────────────────────────────────────────────────────

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface DateRange {
  start?: string;
  end?: string;
  [key: string]: unknown;
}

interface DateFieldValue {
  tripType: string;
  mode: "specific" | "flexible";
  range: DateRange;
  flexibleMonths: string[];
}

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

/** Safely formats date field (object or plain string) for email */
const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString("en-GB");
};

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const formatFlexibleMonths = (months: string[]) => {
  return months
    .map((monthKey) => {
      const [year, month] = monthKey.split("-");
      const monthIndex = Number(month);

      if (!Number.isNaN(monthIndex) && monthIndex >= 0 && monthIndex <= 11) {
        return MONTH_NAMES[monthIndex];
      }

      const parsed = new Date(monthKey);
      if (!Number.isNaN(parsed.getTime())) {
        return MONTH_NAMES[parsed.getMonth()];
      }

      return monthKey;
    })
    .join(", ");
};

const formatDateField = (value: DateFieldValue | string): string => {
  if (typeof value === "string") {
    return value || "Not specified";
  }

  if (value.mode === "flexible" && value.flexibleMonths?.length > 0) {
    return formatFlexibleMonths(value.flexibleMonths);
  }

  const { start, end } = value.range ?? {};

  if (start && end) {
    return `${formatDate(start)} → ${formatDate(end)}`;
  }

  if (start) {
    return formatDate(start);
  }

  return "Not specified";
};

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

const getContactError = (value: string): string => {
  const trimmed = value.trim();
  if (!trimmed) return "Phone number or email is required";
  if (isValidEmail(trimmed) || isValidPhone(trimmed)) return "";
  // Give a specific hint depending on what they seem to be typing
  if (trimmed.includes("@")) return "Enter a valid email address";
  return "Enter a valid phone number (at least 7 digits)";
};

// ─── Component ────────────────────────────────────────────────────────────────

const BookingSearchForm = () => {
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

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: keyof TouchedState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSwap = () => {
    setFormData((prev) => ({ ...prev, from: prev.to, to: prev.from }));
  };

  // ─── Validation ──────────────────────────────────────────────────────────

  const fromError = touched.from && !formData.from.trim() ? "From is required" : "";
  const toError = touched.to && !formData.to.trim() ? "To is required" : "";
  const travellersError =
    touched.travellers && !formData.travellers.trim() ? "Travellers info is required" : "";
  const contactError = touched.contactNumber ? getContactError(formData.contactNumber) : "";

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
          depart: formatDateField(formData.depart),
          returnDate: formatDateField(formData.returnDate),
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
    <section className="relative z-10 w-full max-w-5xl md:max-w-7xl mx-auto px-4 mt-10">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-13 gap-1 md:gap-1.5 items-stretch w-full"
        noValidate
      >
        {/* FROM */}
        <div className="relative w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            label="From *"
            placeHolder="Country, city or airport"
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
            className="hidden lg:flex absolute top-1/2 -right-3.25 -translate-y-1/2 w-6 h-6 rounded-full border border-blue-500 text-blue-500 bg-white items-center justify-center shadow-sm z-30 hover:bg-blue-50 transition"
          >
            <HiOutlineSwitchHorizontal size={12} />
          </button>
        </div>

        {/* TO */}
        <div className="w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            label="To *"
            placeHolder="Country, city or airport"
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
            label="Depart"
            placeHolder="Add Date"
            value={
              typeof formData.depart === "string"
                ? formData.depart
                : formatDateField(formData.depart)
            }
            handleChange={(value: string) => handleChange("depart", value)}
          />
        </div>

        {/* RETURN */}
        <div className="w-full min-w-0 lg:col-span-2">
          <DateInputField
            label="Return"
            placeHolder="Add Date"
            value={
              typeof formData.returnDate === "string"
                ? formData.returnDate
                : formatDateField(formData.returnDate)
            }
            handleChange={(value: string) => handleChange("returnDate", value)}
          />
        </div>

        {/* TRAVELLERS */}
        <div className="w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            label="Travellers & Cabin *"
            placeHolder="Passenger, Economy"
            value={formData.travellers}
            handleChange={(name: string, value: string) => {
              handleChange("travellers", value);
            }}
          />
          {travellersError && <p className="text-xs text-red-500 mt-1">{travellersError}</p>}
        </div>

        {/* CONTACT NUMBER / EMAIL FIELD (now mandatory + validated) */}
        <div className="w-full min-w-0 lg:col-span-2">
          <BookingSearchFormInputField
            label="Contact / Email *"
            placeHolder="Phone or Email"
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
          {status === "loading" ? "..." : status === "success" ? "✓" : "Submit"}
        </button>
      </form>

      {/* STATUS MESSAGES */}
      {status === "success" && (
        <p className="text-green-600 text-xl text-center mt-3">
          ✅ Request sent successfully! We will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm text-center mt-3">
          ❌ Something went wrong. Please try again.
        </p>
      )}
      {!isFormValid &&
        (touched.from || touched.to || touched.travellers || touched.contactNumber) &&
        status === "idle" && (
          <p className="text-red-500 text-sm text-center mt-3">
            ⚠️ Please fill in all required fields with a valid phone number or email so we can
            contact you.
          </p>
        )}
    </section>
  );
};

export default BookingSearchForm;