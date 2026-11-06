"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { getUaeTranslation, type TitlePart } from "@/translations/uae";

// The office always receives this WhatsApp message in English.
const WHATSAPP_URL =
  "https://wa.me/31104857673?text=Hello%20Hassaan%20Travel,%20I%20want%20information%20about%20UAE%20Visa";

/** Renders a card title from translated parts (blue = highlighted). */
function CardTitle({ parts }: { parts: TitlePart[] }) {
  return (
    <>
      {parts.map((part, index) => (
        <span
          key={index}
          className={part.highlight ? "text-[#0F91D5]" : "text-gray-900 font-bold"}
        >
          {part.text}
        </span>
      ))}
    </>
  );
}

const VisaOptions = () => {
  const { language } = useLanguage();
  const t = getUaeTranslation(language).options;

  return (
    <section
      dir={getDirection(language)}
      className="relative py-20 px-6 bg-[#eaf4fb] text-center overflow-hidden"
    >
      {/* BACKGROUND IMAGE OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
        style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">

        {/* HEADING SECTION */}
        <div className="text-center w-full max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {t.headingText}{" "}
            <span className="text-[#0F91D5]">{t.headingHighlight}</span>
          </h2>

          <p className="text-gray-700 text-sm md:text-base mt-4 max-w-4xl mx-auto leading-relaxed font-normal">
            {t.description}
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full items-stretch max-w-7xl mx-auto px-4 md:px-0">
          {t.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-[2.5rem] py-6 px-8 text-center flex flex-col items-center justify-start shadow-xl shadow-sky-100/40 border border-white/60 min-h-[280px] hover:shadow-2xl transition-all duration-300 min-w-0"
            >
              {/* CARD TITLE */}
              <h3 className="text-lg md:text-xl font-bold mb-4 leading-snug tracking-tight rtl:tracking-normal">
                <CardTitle parts={card.title} />
              </h3>

              {/* CARD DESCRIPTION */}
              <p className="text-gray-800 text-xs md:text-sm leading-relaxed font-normal max-w-md">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ACTION BUTTON */}
        <div className="mt-14 w-full">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0F91D5] hover:bg-[#0d7fbf] text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-sky-300/60 text-base transition-all duration-300 tracking-wide rtl:tracking-normal"
          >
            {t.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisaOptions;