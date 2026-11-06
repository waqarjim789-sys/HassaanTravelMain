"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { getVisaTranslation, type VisaServiceKey } from "@/translations/visa";

// Images and links stay in code; text comes from translations/visa.ts.
const servicesData: { key: VisaServiceKey; img: string; link: string }[] = [
  { key: "saudi", img: "/assets/visa/c1.webp", link: "/saudi-arabia" },
  { key: "pakistan", img: "/assets/visa/c2.webp", link: "/pakistan" },
  // Generic travel image; links to the general destinations page
  { key: "other", img: "/assets/visa/c3.webp", link: "/destinations" },
];

const Services = () => {
  const { language } = useLanguage();
  const t = getVisaTranslation(language).services;

  return (
    <section
      dir={getDirection(language)}
      className="relative pb-12 pt-16 px-4 sm:px-8 md:px-16 overflow-hidden"
    >
      {/* BACKGROUND IMAGE WITH LOW OPACITY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
        style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
      />

      {/* LINEAR GRADIENT OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-[rgba(207,234,246,0.3)] to-[rgba(85,178,218,0.4)] z-0"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          {t.heading}
        </h2>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {servicesData.map((service) => {
            const item = t.items[service.key];

            return (
              <div
                key={service.key}
                className="bg-white rounded-3xl p-6 shadow-md flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* IMAGE CONTAINER */}
                <div className="w-full h-[200px] relative rounded-2xl overflow-hidden mb-5">
                  <img
                    src={service.img}
                    alt={item.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT CONTAINER */}
                <div className="flex flex-col flex-grow justify-between text-start min-w-0">
                  <div>
                    <h3 className="font-bold text-gray-950 text-xl leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mt-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <div className="mt-6 w-full">
                    <Link
                      href={service.link}
                      className="block w-full text-center bg-[#0F91D5] hover:bg-[#0d80bd] text-white text-sm font-semibold py-3.5 rounded-xl transition duration-200 shadow-sm"
                    >
                      {item.button}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;