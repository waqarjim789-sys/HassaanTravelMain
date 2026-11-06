"use client";

import React from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { resolveLocale } from "@/lib/createTranslator";
import { aboutUsTranslations } from "@/translations/aboutUs";

const RATING = 4.9;

const OurCommitment = () => {
  const { language } = useLanguage();
  const locale = resolveLocale(language);
  const t = aboutUsTranslations[locale] ?? aboutUsTranslations.en;

  // "4.9" or "4,9" depending on the language; Arabic keeps Latin digits
  // to match the rest of the site.
  const rating = new Intl.NumberFormat(
    locale === "ar" ? "ar-u-nu-latn" : locale,
    { minimumFractionDigits: 1, maximumFractionDigits: 1 }
  ).format(RATING);

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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center z-20">

        {/* IMAGE SIDE (start side: left in LTR, right in RTL) */}
        <div className="relative">
          <img
            src="/assets/about-us/customer.webp"
            alt=""
            loading="lazy"
            className="rounded-2xl shadow-lg w-full h-95 object-cover"
          />

          {/* RATING CARD – near the image's top end corner */}
          <div className="absolute top-6 end-0 -translate-x-1/2 rtl:translate-x-1/2 bg-white rounded-xl shadow px-4 py-2 flex gap-2">
            <span aria-hidden="true" className="text-blue-500 text-lg">
              <Star className="fill-blue-500" />
            </span>

            <div className="text-start">
              <p className="text-[#0F91D5] font-bold text-sm">{rating}</p>

              <p className="text-gray-500 text-[11px]">{t.commitment.rating}</p>
            </div>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="min-w-0 text-start">

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
            {t.commitment.title}
            <br />
            <span className="text-[#b6d84f]">{t.commitment.titleHighlight}</span>
          </h2>

          {/* TEXT */}
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            {t.commitment.paragraph1}
          </p>

          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            {t.commitment.paragraph2}
          </p>

          {/* LIST */}
          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            {t.commitment.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="w-4 h-4 mt-1 rounded-full bg-[#b6d84f] flex items-center justify-center text-white text-[10px] shrink-0"
                >
                  ✓
                </span>

                <span className="min-w-0">{benefit}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default OurCommitment;