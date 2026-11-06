"use client";

import { useState } from "react";
import { X, Info } from 'lucide-react';

import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { getHomepageTranslation } from "@/translations/homepage";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DateRange {
  start: Date | null;
  end: Date | null;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const datePickerLabels = {
  "en": {
    "specific": "Specific dates",
    "flexible": "Flexible dates",
    "apply": "Apply",
    "close": "Close",
    "previous": "Previous month",
    "next": "Next month",
    "selectDate": "Select a date",
    "pickReturn": "Pick a return date",
    "selectMonths": "Select months",
    "monthsSelected": "{count} months selected",
    "month": "Month",
    "help": "Date selection help",
    "helpText": "Select your outbound and return dates. Hover over days to preview a range before confirming."
  },
  "nl": {
    "specific": "Specifieke datums",
    "flexible": "Flexibele datums",
    "apply": "Toepassen",
    "close": "Sluiten",
    "previous": "Vorige maand",
    "next": "Volgende maand",
    "selectDate": "Selecteer een datum",
    "pickReturn": "Kies een retourdatum",
    "selectMonths": "Selecteer maanden",
    "monthsSelected": "{count} maanden geselecteerd",
    "month": "Maand",
    "help": "Hulp bij datumselectie",
    "helpText": "Selecteer uw heen- en terugreisdatum. Beweeg over de dagen om een periode te bekijken voordat u bevestigt."
  },
  "de": {
    "specific": "Bestimmte Daten",
    "flexible": "Flexible Daten",
    "apply": "Übernehmen",
    "close": "Schließen",
    "previous": "Vorheriger Monat",
    "next": "Nächster Monat",
    "selectDate": "Datum auswählen",
    "pickReturn": "Rückreisedatum auswählen",
    "selectMonths": "Monate auswählen",
    "monthsSelected": "{count} Monate ausgewählt",
    "month": "Monat",
    "help": "Hilfe zur Datumsauswahl",
    "helpText": "Wählen Sie Ihre Hin- und Rückreisedaten. Bewegen Sie den Mauszeiger über die Tage, um den Zeitraum vor der Bestätigung anzusehen."
  },
  "fr": {
    "specific": "Dates précises",
    "flexible": "Dates flexibles",
    "apply": "Appliquer",
    "close": "Fermer",
    "previous": "Mois précédent",
    "next": "Mois suivant",
    "selectDate": "Choisir une date",
    "pickReturn": "Choisir une date de retour",
    "selectMonths": "Choisir des mois",
    "monthsSelected": "{count} mois sélectionnés",
    "month": "Mois",
    "help": "Aide au choix des dates",
    "helpText": "Choisissez vos dates de départ et de retour. Survolez les jours pour prévisualiser la période avant de confirmer."
  },
  "it": {
    "specific": "Date specifiche",
    "flexible": "Date flessibili",
    "apply": "Applica",
    "close": "Chiudi",
    "previous": "Mese precedente",
    "next": "Mese successivo",
    "selectDate": "Seleziona una data",
    "pickReturn": "Scegli la data di ritorno",
    "selectMonths": "Seleziona i mesi",
    "monthsSelected": "{count} mesi selezionati",
    "month": "Mese",
    "help": "Aiuto per la scelta delle date",
    "helpText": "Seleziona le date di andata e ritorno. Passa il cursore sui giorni per visualizzare il periodo prima di confermare."
  },
  "es": {
    "specific": "Fechas específicas",
    "flexible": "Fechas flexibles",
    "apply": "Aplicar",
    "close": "Cerrar",
    "previous": "Mes anterior",
    "next": "Mes siguiente",
    "selectDate": "Seleccione una fecha",
    "pickReturn": "Elija una fecha de regreso",
    "selectMonths": "Seleccione meses",
    "monthsSelected": "{count} meses seleccionados",
    "month": "Mes",
    "help": "Ayuda para elegir fechas",
    "helpText": "Seleccione las fechas de ida y vuelta. Pase el cursor sobre los días para ver el intervalo antes de confirmar."
  },
  "ar": {
    "specific": "تواريخ محددة",
    "flexible": "تواريخ مرنة",
    "apply": "تطبيق",
    "close": "إغلاق",
    "previous": "الشهر السابق",
    "next": "الشهر التالي",
    "selectDate": "اختر تاريخًا",
    "pickReturn": "اختر تاريخ العودة",
    "selectMonths": "اختر الأشهر",
    "monthsSelected": "تم اختيار {count} من الأشهر",
    "month": "الشهر",
    "help": "مساعدة في اختيار التواريخ",
    "helpText": "اختر تاريخي المغادرة والعودة. مرّر المؤشر فوق الأيام لمعاينة الفترة قبل التأكيد."
  },
  "ur": {
    "specific": "مخصوص تاریخیں",
    "flexible": "لچکدار تاریخیں",
    "apply": "لاگو کریں",
    "close": "بند کریں",
    "previous": "پچھلا مہینہ",
    "next": "اگلا مہینہ",
    "selectDate": "تاریخ منتخب کریں",
    "pickReturn": "واپسی کی تاریخ منتخب کریں",
    "selectMonths": "مہینے منتخب کریں",
    "monthsSelected": "{count} مہینے منتخب ہیں",
    "month": "مہینہ",
    "help": "تاریخ منتخب کرنے میں مدد",
    "helpText": "روانگی اور واپسی کی تاریخیں منتخب کریں۔ تصدیق سے پہلے مدت دیکھنے کے لیے دنوں پر ماؤس لے جائیں۔"
  }
} as const;

export function getDatePickerLabels(language: string) {
  return datePickerLabels[language as keyof typeof datePickerLabels] ?? datePickerLabels.en;
}

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

export function formatDate(d: Date | null, locale = "en-GB") {
  if (!d || Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(locale, {
    calendar: "gregory",
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
  const { language } = useLanguage();
  const locale = getHomepageTranslation(language).bookingForm.dateLocale;
  const weekdays = Array.from({ length: 7 }, (_, i) => new Date(2024, 0, 1 + i));
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
        {new Date(year, month, 1).toLocaleDateString(locale, { calendar: "gregory", month: "long", year: "numeric" })}
      </p>
      <div className="grid grid-cols-7 gap-y-0.5">
        {weekdays.map((d, i) => (
          <span
            key={i}
            title={d.toLocaleDateString(locale, { weekday: "long" })}
            className="text-center text-[13px] font-semibold text-gray-500 pb-2"
          >
            {d.toLocaleDateString(locale, { weekday: "short" })}
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
              aria-label={date.toLocaleDateString(locale, { calendar: "gregory", dateStyle: "full" })}
              aria-pressed={isStart || isEnd || isInRange}
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
              {date.getDate().toLocaleString(locale)}
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
  const { language } = useLanguage();
  const locale = getHomepageTranslation(language).bookingForm.dateLocale;
  const labels = getDatePickerLabels(language);
  const now = new Date();
  const months: { year: number; month: number }[] = [];
  for (let i = 0; i < 12; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    months.push({ year: d.getFullYear(), month: d.getMonth() });
  }

  return (
    <div>
      <p className="font-bold text-xl mb-5">{labels.month}</p>
      <div className="grid grid-cols-6 gap-3">
        {months.map(({ year, month }) => {
          const key = `${year}-${month}`;
          const active = selected.includes(key);
          return (
            <button
              key={key}
              type="button"
              onClick={() => onToggle(key)}
              aria-pressed={active}
              className={[
                "rounded-xl py-4 px-2 cursor-pointer text-center transition-all duration-150",
                active
                  ? "border-2 border-[#1e3a5f] bg-[#e8eef6]"
                  : "border-2 border-transparent bg-gray-100",
              ].join(" ")}
            >
              <div className="text-xs text-gray-500 mb-0.5">{year}</div>
              <div className="text-[15px] font-semibold text-gray-900">
                {new Date(year, month, 1).toLocaleDateString(locale, { calendar: "gregory", month: "long", year: "numeric" })}
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
  const { language } = useLanguage();
  const labels = getDatePickerLabels(language);
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        aria-label={labels.help}
        aria-expanded={show}
        className="w-7 h-7 rounded-full border border-gray-400 bg-white cursor-pointer text-sm font-bold text-gray-500 flex items-center justify-center"
      >
        <Info/>
      </button>
      {show && (
        <div dir={getDirection(language)} className="absolute end-0 top-9 w-56 bg-[#1e3a5f] text-white rounded-xl p-3 text-[13px] leading-relaxed z-50 shadow-2xl">
          {labels.helpText}
          <button
            type="button"
            onClick={() => setShow(false)}
            aria-label={labels.close}
            className="absolute top-1.5 end-2 bg-transparent border-none text-white cursor-pointer text-base"
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

/** Format stored dates for display without replacing the original selection. */
export function formatDateSelection(
  value: string | {
    mode: "specific" | "flexible";
    range: DateRange;
    flexibleMonths: string[];
  },
  locale = "en-GB"
): string {
  if (typeof value === "string") return value;
  if (value.mode === "flexible") {
    return value.flexibleMonths.map((key) => {
      // FlexibleMonthGrid uses zero-based month numbers (January = 0).
      const match = /^(\d{4})-(\d{1,2})$/.exec(key);
      if (!match) return key;
      const year = Number(match[1]);
      const month = Number(match[2]);
      if (month < 0 || month > 11) return key;
      return new Date(year, month, 1).toLocaleDateString(locale, {
        calendar: "gregory",
        month: "long",
        year: "numeric",
      });
    }).join(", ");
  }
  const start = formatDate(value.range.start, locale);
  const end = formatDate(value.range.end, locale);
  return start && end ? `${start} → ${end}` : start;
}
