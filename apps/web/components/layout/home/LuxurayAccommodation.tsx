"use client";

import React from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import {
  homepageTranslations,
  type LanguageCode,
  type LuxuryStayKey,
} from "@/translations/homepage";

const hotelQualities: LuxuryStayKey[] = [
  "premiumHotels",
  "luxurySuites",
  "exclusiveDeals",
];

const LuxurayAccommodation = () => {
  const { language } = useLanguage();

  const t =
    homepageTranslations[language as LanguageCode] || homepageTranslations.en;

  const ls = t.luxuryStay;

  return (
    <section className="relative w-full py-12 sm:py-20 overflow-hidden bg-white">
      {/* BACKGROUND WITH LOW OPACITY */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
        style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
      />

      {/* VERY SOFT GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(207,234,246,0.15)] to-[rgba(85,178,218,0.25)] z-0"></div>

      {/* LIGHT WASH */}
      <div className="absolute inset-0 bg-white/35 z-0"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 leading-snug">
              {ls.titleLine1} <br /> {ls.titleLine2}
            </h2>

            <div className="space-y-4 sm:space-y-5">
              {hotelQualities.map((itemKey, i) => {
                const item =
                  ls.items[itemKey] ||
                  homepageTranslations.en.luxuryStay.items[itemKey];

                return (
                  <article
                    key={i}
                    className="flex items-start gap-4 bg-white p-4 sm:p-5 rounded-xl shadow-md"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#0F91D5] text-white rounded-lg shrink-0">
                      <CircleCheck />
                    </div>

                    <div>
                      <h3 className="font-semibold sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-first lg:order-last flex justify-end items-center">
            <Image
              src="/assets/home/2.webp"
              alt={ls.imageAlt}
              width={500}
              height={700}
              priority
              className="rounded-2xl shadow-lg w-full max-w-md h-[520px] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxurayAccommodation;
