"use client";

import { useState } from "react";
import { X } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface DateRange {
  start: Date | null;
  end: Date | null;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return (day + 6) % 7;
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function inRange(date: Date, range: DateRange) {
  if (!range.start || !range.end) return false;
  return date > range.start && date < range.end;
}

export function formatDate(d: Date | null) {
  if (!d) return "";
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ─── Sub-components ───────────────────────────────────────────────────────────

export function MonthCalendar({
  year,
  month,
  range,
  hovered,
  onDayClick,
  onDayHover,
  minDate,
}: {
  year: number;
  month: number;
  range: DateRange;
  hovered: Date | null;
  onDayClick: (d: Date) => void;
  onDayHover: (d: Date | null) => void;
  minDate?: Date;
}) {
  const days = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const effectiveRange: DateRange = {
    start: range.start,
    end:
      range.end ??
      (hovered && range.start && hovered > range.start ? hovered : null),
  };

  const cells: (Date | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: days }, (_, i) => new Date(year, month, i + 1)),
  ];

  return (
    <div className="flex-1">
      <p className="text-center font-bold text-lg mb-4 text-black">
        {MONTHS[month]}
      </p>
      <div className="grid grid-cols-7 gap-y-0.5">
        {WEEKDAYS.map((d, i) => (
          <span
            key={i}
            className="text-center text-[13px] font-semibold text-gray-500 pb-2"
          >
            {d}
          </span>
        ))}
        {cells.map((date, i) => {
          if (!date) return <span key={`empty-${i}`} />;
          const isStart = !!(range.start && sameDay(date, range.start));
          const isEnd = !!(range.end && sameDay(date, range.end));
          const isInRange = inRange(date, effectiveRange);
          const isDisabled = minDate ? date < minDate : false;
          const isToday = sameDay(date, new Date());

          let bgClass = "bg-transparent";
          let textClass = "text-gray-900";
          let roundClass = "rounded-full";

          if (isStart || isEnd) {
            bgClass = "bg-[#1e3a5f]";
            textClass = "text-white";
            roundClass = isStart ? "rounded-full" : "rounded-full";
          } else if (isInRange) {
            bgClass = "bg-[#e8eef6]";
            textClass = "text-gray-900";
            roundClass = "rounded-none";
          }

          if (isDisabled) textClass = "text-gray-300";

          return (
            <button
              key={i}
              type="button"
              disabled={isDisabled}
              onClick={() => onDayClick(date)}
              onMouseEnter={() => onDayHover(date)}
              onMouseLeave={() => onDayHover(null)}
              className={[
                "relative border-none py-1.5 text-sm transition-colors duration-150",
                isStart || isEnd ? "font-bold" : "font-normal",
                isDisabled ? "cursor-not-allowed" : "cursor-pointer",
                bgClass,
                textClass,
                roundClass,
                isToday && !isStart && !isEnd
                  ? " outline-[#1e3a5f] -outline-offset-2"
                  : "",
              ].join(" ")}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function FlexibleMonthGrid({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (key: string) => void;
}) {
  const now = new Date();
  const months: { year: number; month: number }[] = [];
  for (let i = 0; i < 12; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    months.push({ year: d.getFullYear(), month: d.getMonth() });
  }

  return (
    <div>
      <p className="font-bold text-xl mb-5">Month</p>
      <div className="grid grid-cols-6 gap-3">
        {months.map(({ year, month }) => {
          const key = `${year}-${month}`;
          const active = selected.includes(key);
          return (
            <button
              key={key}
              type="button"
              onClick={() => onToggle(key)}
              className={[
                "rounded-xl py-4 px-2 cursor-pointer text-center transition-all duration-150",
                active
                  ? "border-2 border-[#1e3a5f] bg-[#e8eef6]"
                  : "border-2 border-transparent bg-gray-100",
              ].join(" ")}
            >
              <div className="text-xs text-gray-500 mb-0.5">{year}</div>
              <div className="text-[15px] font-semibold text-gray-900">
                {MONTHS[month]}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── InfoTooltip ──── //
export function InfoTooltip() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        className="w-7 h-7 rounded-full border border-gray-400 bg-white cursor-pointer text-sm font-bold text-gray-500 flex items-center justify-center"
      >
        <X/>
      </button>
      {show && (
        <div className="absolute right-0 top-9 w-56 bg-[#1e3a5f] text-white rounded-xl p-3 text-[13px] leading-relaxed z-50 shadow-2xl">
          Select your outbound and return dates. Hover over days to preview a
          range before confirming.
          <button
            type="button"
            onClick={( ) => setShow(false)}
            className="absolute top-1.5 right-2 bg-transparent border-none text-white cursor-pointer text-base"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Main Dialog ──────────────────────────────────────────────────────────────

// ─── Page ─────────────────────────────────────────────────────────────────────
