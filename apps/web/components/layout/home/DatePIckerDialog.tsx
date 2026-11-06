"use client";
import { X } from "lucide-react";

import { useEffect, useId, useRef, useState } from "react";
import TripType from "./TripType";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { getHomepageTranslation } from "@/translations/homepage";

import {
  FlexibleMonthGrid,
  formatDate,
  getDatePickerLabels,
  MonthCalendar,
} from "./DatePicker";

/** Output type you will receive in parent */
export type DatePickerValue = {
  tripType: "oneWay" | "return";
  mode: "specific" | "flexible";
  range: {
    start: Date | null;
    end: Date | null;
  };
  flexibleMonths: string[];
};

type Mode = "specific" | "flexible";

interface DateRange {
  start: Date | null;
  end: Date | null;
}

export const DatePickerDialog = ({
  onClose,
  onApply,
  initialValue,
}: {
  onClose: () => void;
  onApply: (data: DatePickerValue) => void;
  initialValue?: DatePickerValue;
}) => {
  const { language } = useLanguage();
  const labels = getDatePickerLabels(language);
  const locale = getHomepageTranslation(language).bookingForm.dateLocale;
  const dialogId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [tripType, setTripType] = useState<"oneWay" | "return">(initialValue?.tripType ?? "return");

  const [mode, setMode] = useState<Mode>(initialValue?.mode ?? "specific");
  const [leftYear, setLeftYear] = useState(initialValue?.range.start?.getFullYear() ?? today.getFullYear());
  const [leftMonth, setLeftMonth] = useState(initialValue?.range.start?.getMonth() ?? today.getMonth());
  const [range, setRange] = useState<DateRange>({
    start: initialValue?.range.start ?? null,
    end: initialValue?.tripType === "oneWay" ? null : initialValue?.range.end ?? null,
  });

  const [hovered, setHovered] = useState<Date | null>(null);
  const [flexSelected, setFlexSelected] = useState<string[]>(initialValue?.flexibleMonths ?? []);

  // ✅ FIX 1: Lock body scroll when modal opens
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const previousFocus = document.activeElement;
    dialogRef.current?.focus();
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "Tab") {
        const elements = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]'
        ) ?? []).filter((element) => element.getClientRects().length > 0);
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (!first || !last) { event.preventDefault(); return; }
        if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialogRef.current)) {
          event.preventDefault(); first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [onClose]);

  const rightMonth = (leftMonth + 1) % 12;
  const rightYear = leftMonth === 11 ? leftYear + 1 : leftYear;

  function prevMonth() {
    if (leftMonth === 0) {
      setLeftMonth(11);
      setLeftYear((y) => y - 1);
    } else setLeftMonth((m) => m - 1);
  }

  function nextMonth() {
    if (leftMonth === 11) {
      setLeftMonth(0);
      setLeftYear((y) => y + 1);
    } else setLeftMonth((m) => m + 1);
  }

  function handleDayClick(date: Date) {
    if (date < today) return;
    if (tripType === "oneWay") {
      setRange({ start: date, end: null });
      return;
    }
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
    } else {
      if (date < range.start) {
        setRange({ start: date, end: range.start });
      } else {
        setRange({ start: range.start, end: date });
      }
    }
  }

  function toggleFlex(key: string) {
    setFlexSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  }

  const hasSelection =
    mode === "specific" ? range.start !== null : flexSelected.length > 0;

  function handleApply() {
    if (!hasSelection) return;
    onApply({
      tripType,
      mode,
      range: mode === "specific" ? { start: range.start, end: tripType === "oneWay" ? null : range.end } : { start: null, end: null },
      flexibleMonths: mode === "flexible" ? flexSelected : [],
    });

    onClose();
  }

  return (
    <div
      dir={getDirection(language)}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-9999 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={labels.selectDate}
        id={dialogId}
        tabIndex={-1}
        className="bg-white rounded-2xl px-4 py-5 sm:p-6 md:p-8 w-[min(1080px,96vw)] max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col justify-between"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-auto">
            <TripType value={tripType} onChange={(next) => {
              setTripType(next);
              if (next === "oneWay") setRange((previous) => ({ ...previous, end: null }));
              setHovered(null);
            }} />

            <button
              onClick={onClose}
              aria-label={labels.close}
              type="button"
              className="sm:hidden w-6 h-6 cursor-pointer"
            >
              <X />
            </button>
          </div>

          <div className="flex bg-gray-100 rounded-xl p-0.5 w-full sm:w-auto justify-center">
            {(["specific", "flexible"] as Mode[]).map((m) => (
              <button
                key={m}
                aria-pressed={mode === m}
                onClick={() => setMode(m)}
                type="button"
                className={[
                  "flex-1 sm:flex-none text-center px-5 py-1.5 rounded-lg text-sm font-semibold transition-all",
                  mode === m
                    ? "bg-[#1e3a5f] text-white"
                    : "bg-transparent text-gray-500",
                ].join(" ")}
              >
                {labels[m]}
              </button>
            ))}
          </div>

          <div className="hidden sm:block">
            <button
              type="button"
              onClick={onClose}
              aria-label={labels.close}
              className="w-7 h-7 rounded-full border border-gray-400 bg-white cursor-pointer text-sm font-bold text-gray-500 flex items-center justify-center"
            >
              <X />
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="flex-1 min-h-0 w-full my-auto">
          {mode === "specific" ? (
            <div className="flex items-center gap-2 sm:gap-6 mb-2">
              <button
                type="button"
                aria-label={labels.previous}
                onClick={prevMonth}
                className="w-9 h-9 rounded-full border text-black"
              >
                {getDirection(language) === "rtl" ? "›" : "‹"}
              </button>

              <div className="flex flex-col md:flex-row gap-6 flex-1">
                <div className="flex-1 min-w-0">
                  <MonthCalendar
                    year={leftYear}
                    month={leftMonth}
                    range={range}
                    hovered={tripType === "oneWay" ? null : hovered}
                    onDayClick={handleDayClick}
                    onDayHover={setHovered}
                    minDate={today}
                  />
                </div>

                <div className="hidden md:block w-px bg-gray-200 shrink-0 self-stretch" />

                <div className="flex-1 w-full min-w-0 hidden sm:block">
                  <MonthCalendar
                    year={rightYear}
                    month={rightMonth}
                    range={range}
                    hovered={tripType === "oneWay" ? null : hovered}
                    onDayClick={handleDayClick}
                    onDayHover={setHovered}
                    minDate={today}
                  />
                </div>
              </div>

              <button
                type="button"
                aria-label={labels.next}
                onClick={nextMonth}
                className="w-9 h-9 rounded-full border text-black"
              >
                {getDirection(language) === "rtl" ? "‹" : "›"}
              </button>
            </div>
          ) : (
            <div className="w-full overflow-x-auto pb-4 pt-1 clear-both block touch-pan-x">
              <div className="min-w-137.5 md:min-w-0 w-full md:w-auto">
                <FlexibleMonthGrid
                  selected={flexSelected}
                  onToggle={toggleFlex}
                />
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="  flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-7 pt-5 border-t">
          <span className="text-gray-500 text-sm">
            {mode === "specific"
              ? range.start
                ? `${formatDate(range.start, locale)}${tripType === "return" ? range.end ? " → " + formatDate(range.end, locale) : " — " + labels.pickReturn : ""}`
                : labels.selectDate
              : flexSelected.length > 0
                ? labels.monthsSelected.replace("{count}", flexSelected.length.toLocaleString(locale))
                : labels.selectMonths}
          </span>

          <button
            type="button"
            disabled={!hasSelection}
            onClick={handleApply}
            className={[
              "w-full sm:w-auto text-white rounded-xl px-8 py-3 font-bold",
              hasSelection
                ? "bg-blue-600 cursor-pointer"
                : "bg-blue-300 cursor-not-allowed",
            ].join(" ")}
          >
            {labels.apply}
          </button>
        </div>
      </div>
    </div>
  );
};
