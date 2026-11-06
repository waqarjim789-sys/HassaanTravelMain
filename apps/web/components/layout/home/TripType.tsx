"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getHomepageTranslation } from "@/translations/homepage";
import { getDirection } from "@/i18n";

export default function TripTypeDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: "oneWay" | "return") => void;
}) {
  const { language } = useLanguage();
  const tt = getHomepageTranslation(language).tripType;
  const direction = getDirection(language);
  const tripType = value === "oneWay" ? "oneWay" : "return";
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownId = useId();

  useEffect(() => {
    if (!open) return;
    function handleOutside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !containerRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, [open]);

  const handleSelect = (type: "oneWay" | "return") => {
    onChange(type);
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div
      ref={containerRef}
      dir={direction}
      className="relative inline-block"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        // Close this dropdown before allowing Escape to close the date dialog.
        if (event.key === "Escape" && open) {
          event.preventDefault();
          event.stopPropagation();
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-label={tt.toggleAria}
        aria-expanded={open}
        aria-controls={dropdownId}
        className="cursor-pointer flex items-center gap-1.5 border border-gray-300 rounded-lg px-3.5 py-1.5 bg-white text-sm font-medium text-gray-900"
      >
        {tripType === "oneWay" ? tt.oneWayLabel : tt.returnLabel}
        <span aria-hidden="true" className="text-xs">▾</span>
      </button>

      {open && (
        <div
          id={dropdownId}
          role="group"
          aria-label={tt.toggleAria}
          className="absolute start-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md z-10"
        >
          <button
            type="button"
            aria-pressed={tripType === "return"}
            onClick={() => handleSelect("return")}
            className="w-full text-start px-3 py-2 text-sm hover:bg-gray-100 text-black flex items-center gap-4 font-bold"
          >
            <RotateCcw aria-hidden="true" className="size-6" /> {tt.returnLabel}
          </button>

          <button
            type="button"
            aria-pressed={tripType === "oneWay"}
            onClick={() => handleSelect("oneWay")}
            className="w-full text-start px-3 py-2 text-sm hover:bg-gray-100 text-black flex items-center font-bold gap-4"
          >
            <ArrowRight aria-hidden="true" className={`size-6 ${direction === "rtl" ? "rotate-180" : ""}`} /> {tt.oneWayLabel}
          </button>
        </div>
      )}
    </div>
  );
}
