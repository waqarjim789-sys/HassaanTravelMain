"use client";

import { useState } from "react";

import {
  LOCALES,
  Locale,
} from "../i18n";

import {
  useLanguage,
} from "./LanguageProvider";


export default function LanguageSwitcher() {

  const {
    language,
    changeLanguage,
  } = useLanguage();


  const [open, setOpen] =
    useState(false);



  const current =
    LOCALES.find(
      (locale) =>
        locale.code === language
    ) ?? LOCALES[0];



  return (

    <div
      style={{
        position: "relative",
      }}
    >

      <button

        onClick={() =>
          setOpen(!open)
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

        aria-label="Select language"

      >

        <span>
          {current.flag}
        </span>

        <span>
          {current.label}
        </span>

        <span>
          ▼
        </span>

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
            boxShadow:
              "0 10px 30px rgba(0,0,0,.15)",
            overflow: "hidden",
            zIndex: 99999,
          }}

        >

          {LOCALES.map(
            (locale) => (

              <button

                key={locale.code}

                onClick={() => {

                  changeLanguage(
                    locale.code as Locale
                  );

                  setOpen(false);

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

                  textAlign: "left",

                  cursor: "pointer",

                  fontSize: "15px",

                }}

              >

                {locale.flag}{" "}
                {locale.label}

              </button>

            )
          )}

        </div>

      )}

    </div>

  );
}