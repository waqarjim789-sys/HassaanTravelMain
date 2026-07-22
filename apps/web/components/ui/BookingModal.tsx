"use client";

import { X } from "lucide-react";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  telephone: string;
  employ: string;
  travelDate: string;
  additionalWishes: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Form Config ──────────────────────────────────────────────────────────────

const formFieldsConfig = [
  {
    id: "row-1",
    isRow: true,
    fields: [
      { label: "Name",   name: "name",  type: "text",  placeholder: "Your Name",       required: true },
      { label: "E-mail", name: "email", type: "email", placeholder: "your@email.com",  required: true },
    ],
  },
  {
    id: "row-2",
    isRow: true,
    fields: [
      { label: "Telephone", name: "telephone", type: "tel",  placeholder: "+31 123 456 789", required: true },
      { label: "Employ",    name: "employ",    type: "text", placeholder: "",                required: false },
    ],
  },
  {
    id: "travelDate",
    isRow: false,
    label: "Travel date",
    name: "travelDate",
    type: "date",
    placeholder: "",
    required: true,
  },
  {
    id: "additionalWishes",
    isRow: false,
    label: "Additional wishes",
    name: "additionalWishes",
    type: "textarea",
    placeholder: "Tell us about your travel plans…",
    required: false,
    rows: 4,
  },
];

// ─── Default State ────────────────────────────────────────────────────────────

const defaultForm: FormState = {
  name: "",
  email: "",
  telephone: "",
  employ: "",
  travelDate: "",
  additionalWishes: "",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState<FormState>(defaultForm);
  const [status, setStatus]     = useState<SubmitStatus>("idle");

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "booking", ...formData }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData(defaultForm);
        // Close modal after 1.5s so user sees the success message
        setTimeout(() => {
          setStatus("idle");
          onClose();
        }, 1500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="absolute inset-0 top-1/2 xl:top-0 z-50 flex items-center justify-center p-4">

      {/* DARK OVERLAY */}
      <div
        className="absolute inset-0  bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* MODAL CARD */}
      <div className="bg-white rounded-2xl w-full max-w-135 shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 pt-6 pb-4">
          <h3 className="text-xl font-bold text-gray-900 tracking-tight">
            Book your trip
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* FORM BODY */}
        <form onSubmit={handleFormSubmit} className="px-6 pb-6 space-y-4">
          {formFieldsConfig.map((rowItem) => {

            // 2-column row (Name/Email or Tel/Employ)
            if (rowItem.isRow && rowItem.fields) {
              return (
                <div key={rowItem.id} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {rowItem.fields.map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-bold text-gray-900 mb-1.5">
                        {field.label}
                      </label>
                      <input
                        required={field.required}
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof FormState]}
                        onChange={handleChange}
                        placeholder={field.placeholder || undefined}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-[#0F91D5] transition-colors placeholder:text-gray-300 text-gray-800"
                      />
                    </div>
                  ))}
                </div>
              );
            }

            // Textarea
            if (rowItem.type === "textarea") {
              return (
                <div key={rowItem.id}>
                  <label className="block text-xs font-bold text-gray-900 mb-1.5">
                    {rowItem.label}
                  </label>
                  <textarea
                    name={rowItem.name}
                    value={formData[rowItem.name as keyof FormState]}
                    onChange={handleChange}
                    rows={rowItem.rows}
                    placeholder={rowItem.placeholder || undefined}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-[#0F91D5] transition-colors placeholder:text-gray-300 resize-none text-gray-800"
                  />
                </div>
              );
            }

            // Standard input (Travel Date)
            return (
              <div key={rowItem.id}>
                <label className="block text-xs font-bold text-gray-900 mb-1.5">
                  {rowItem.label}
                </label>
                <input
                  required={rowItem.required}
                  type={rowItem.type}
                  name={rowItem.name}
                  value={formData[rowItem.name as keyof FormState]}
                  onChange={handleChange}
                  placeholder={rowItem.placeholder || undefined}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-[#0F91D5] transition-colors text-gray-800"
                />
              </div>
            );
          })}

          {/* STATUS MESSAGES */}
          {status === "success" && (
            <p className="text-green-600 text-sm text-center">✅ Request sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm text-center">❌ Something went wrong. Please try again.</p>
          )}

          {/* SUBMIT BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full bg-[#0F91D5] hover:bg-[#0d82c0] text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm cursor-pointer disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : status === "success" ? "✓ Sent!" : "Send request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}