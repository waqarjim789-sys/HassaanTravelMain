"use client";

import React from "react";
import { FaGlobe, FaPlane, FaLock, FaHeart } from "react-icons/fa";
import HeadingAndDesc from "@/components/ui/HeadingAndDesc";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { resolveLocale } from "@/lib/createTranslator";
import { aboutUsTranslations } from "@/translations/aboutUs";

const FOUNDED_YEAR = "2009";

// Urdu puts the postposition after the year ("2009 سے").
const YEAR_FIRST_LOCALES = new Set(["ur"]);

const OurStory = () => {
  const { language } = useLanguage();
  const locale = resolveLocale(language);
  const t = aboutUsTranslations[locale] ?? aboutUsTranslations.en;
  const yearFirst = YEAR_FIRST_LOCALES.has(locale);

  const features = [
    { icon: <FaGlobe className="text-[#3b82f6] text-[15px]" />, label: t.story.iataCertified },
    { icon: <FaPlane className="text-[#3b82f6] text-[15px]" />, label: t.story.destinations },
    { icon: <FaHeart className="text-[#3b82f6] text-[15px]" />, label: t.story.customers },
    { icon: <FaLock className="text-[#3b82f6] text-[15px]" />, label: t.story.secureBookings },
  ];

  return (
    <section
      dir={getDirection(language)}
      className="relative w-full py-12 sm:py-20 overflow-hidden flex items-center justify-center"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/assets/bgimage/h2.webp"
        loading="lazy"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
      />

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT SIDE (start side: left in LTR, right in RTL) */}
        <div className="min-w-0 text-start">
          <span className="inline-block bg-blue-100 text-[#0F91D5] text-xs px-3 py-1 rounded-full mb-4">
            {t.story.badge}
          </span>

          <div>
            <HeadingAndDesc
              head={
                <>
                  {t.story.title}{" "}
                  <span className="text-[#0F91D5]">{t.story.titleHighlight}</span>
                </>
              }
              desc={
                <p className="text-gray-600">
                  {t.story.description}
                  <br />
                  <br />
                  {t.story.establishment}
                  <br />
                  <br />
                  {t.story.services}
                </p>
              }
            />
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#f1f5f9] border border-gray-200 rounded-xl px-4 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.04)] min-w-0"
              >
                <div
                  aria-hidden="true"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-50 shrink-0"
                >
                  {feature.icon}
                </div>

                <span className="text-[14px] font-medium text-gray-700 min-w-0">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative">
          <img
            src="/assets/about-us/4.webp"
            alt=""
            loading="lazy"
            className="rounded-2xl shadow-lg w-full h-125 object-cover"
          />

          {/* "Since 2009" card, overlapping the image's bottom start corner */}
          <div className="absolute -bottom-4 -start-4 bg-white border-2 border-blue-200 rounded-xl p-5 shadow-lg w-55 text-start">
            <h3 className="text-[#0F91D5] text-2xl font-bold">
              {yearFirst ? (
                <>
                  {FOUNDED_YEAR}
                  <br />
                  {t.story.since}
                </>
              ) : (
                <>
                  {t.story.since}
                  <br />
                  {FOUNDED_YEAR}
                </>
              )}
            </h3>

            <p className="text-gray-500 text-xs mt-2">{t.story.serving}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;