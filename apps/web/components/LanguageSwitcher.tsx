"use client";

import { useEffect, useId, useRef, useState } from "react";

import {
  LOCALES,
  getDirection,
  getLocaleMeta,
} from "../i18n";

import {
  useLanguage,
} from "./LanguageProvider";

const selectLanguageLabels = {
  en: "Select language",
  nl: "Taal selecteren",
  de: "Sprache auswählen",
  fr: "Choisir la langue",
  it: "Seleziona la lingua",
  es: "Seleccionar idioma",
  ar: "اختر اللغة",
  ur: "زبان منتخب کریں",
} as const;

const FLAG_CODES: Record<string, string> = {
  en: "gb",
  nl: "nl",
  de: "de",
  fr: "fr",
  it: "it",
  es: "es",
  ar: "sa",
  ur: "pk",
};

function Flag({
  code,
  size = 22,
}: {
  code: string;
  size?: number;
}) {
  const countryCode =
    FLAG_CODES[code.toLowerCase()] || "gb";

  return (
    <img
      src={`https://flagcdn.com/w40/${countryCode}.png`}
      srcSet={`https://flagcdn.com/w80/${countryCode}.png 2x`}
      alt=""
      width={size}
      height={Math.round(size * 0.67)}
      style={{
        width: `${size}px`,
        height: `${Math.round(size * 0.67)}px`,
        objectFit: "cover",
        display: "inline-block",
        borderRadius: "2px",
        flexShrink: 0,
      }}
    />
  );
}

export default function LanguageSwitcher() {
  const {
    language,
    changeLanguage,
  } = useLanguage();

  const [open, setOpen] =
    useState(false);

  const current = getLocaleMeta(language);
  const direction = getDirection(language);
  const selectLabel = selectLanguageLabels[language] ?? selectLanguageLabels.en;
  const dropdownId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !containerRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      dir={direction}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
      style={{
        position: "relative",
      }}
    >
      <button
        ref={triggerRef}
        aria-expanded={open}
        aria-controls={dropdownId}
        onClick={() =>
          setOpen((previous) => !previous)
        }
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "8px 12px",
          cursor: "pointer",
          fontWeight: 600,
        }}
        aria-label={selectLabel}
        type="button"
      >
        <Flag
          code={current.code}
          size={22}
        />

        <span lang={current.code} dir={getDirection(current.code)}>
          {current.label}
        </span>

        <span aria-hidden="true">
          ▼
        </span>
      </button>

      {open && (
        <div
          id={dropdownId}
          role="group"
          aria-label={selectLabel}
          style={{
            position: "absolute",
            top: "100%",
            marginTop: "4px",
            insetInlineEnd: 0,
            width: "220px",
            maxWidth: "calc(100vw - 32px)",
            maxHeight: "min(70vh, 420px)",
            overflowY: "auto",
            background: "#fff",
            borderRadius: "12px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,.15)",
            overflowX: "hidden",
            zIndex: 99999,
          }}
        >
          {LOCALES.map(
            (locale) => (
              <button
                key={locale.code}
                aria-pressed={locale.code === language}
                onClick={() => {
                  changeLanguage(
                    locale.code
                  );

                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                style={{
                  width: "100%",
                  border: "none",
                  background:
                    locale.code === language
                      ? "#0B6B3A"
                      : "#fff",
                  color:
                    locale.code === language
                      ? "#fff"
                      : "#333",
                  padding: "14px",
                  textAlign: "start",
                  cursor: "pointer",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
                type="button"
              >
                <Flag
                  code={locale.code}
                  size={24}
                />

                <span lang={locale.code} dir={getDirection(locale.code)}>
                  {locale.label}
                </span>
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}