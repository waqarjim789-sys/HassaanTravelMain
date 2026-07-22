"use client";

import { useState } from "react";
import { LANGUAGES } from "../lib/language";
import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const current =
    LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
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
      >
        <span>{current!.flag}</span>
        <span>{current!.name}</span>
        <span>▼</span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "45px",
            right: 0,
            width: "220px",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,.15)",
            overflow: "hidden",
            zIndex: 99999,
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setOpen(false);
              }}
              style={{
                width: "100%",
                border: "none",
                background: lang.code === language ? "#0B6B3A" : "#fff",
                color: lang.code === language ? "#fff" : "#333",
                padding: "14px",
                textAlign: "left",
                cursor: "pointer",
                fontSize: "15px",
              }}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}