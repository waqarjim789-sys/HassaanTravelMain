"use client";
import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import {
  homepageTranslations,
  type LanguageCode,
} from "@/translations/homepage";

export default function TripTypeDropdown({value, onChange}: {value: string, onChange: (value: "oneWay" | "return") => void}) {
  const { language } = useLanguage();

  const t =
    homepageTranslations[language as LanguageCode] || homepageTranslations.en;

  const tt = t.tripType;

  const [tripType, setTripType] = useState(value || "return");
  const [open, setOpen] = useState(false);

  const tripTypeLabel =
    tripType === "oneWay" ? tt.oneWayLabel : tt.returnLabel;

  const handleSelect = (type: "oneWay" | "return") => {
    setTripType(type);
    setOpen(false);
    onChange(type);

    if (type === "oneWay") {
      // 👉 your custom action here
      console.log("One way booking selected");
    }
  };

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
      type="button"
        onClick={() => setOpen(!open)}
        aria-label={tt.toggleAria}
        aria-expanded={open}
        className="cursor-pointer flex items-center gap-1.5 border border-gray-300 rounded-lg px-3.5 py-1.5 bg-white text-sm font-medium text-gray-900"
      >
        {tripTypeLabel}
        <span className="text-xs">▾</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md z-10">
          <button
            onClick={() => handleSelect("return")}
            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 text-black flex items-center gap-4 font-bold"
          >
            <RotateCcw className="size-6" /> {tt.returnLabel}
          </button>

          <button
            onClick={() => handleSelect("oneWay")}
            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 text-black flex items-center font-bold gap-4"
          >
            <ArrowRight className="size-6" /> {tt.oneWayLabel}
          </button>
        </div>
      )}
    </div>
  );
}
