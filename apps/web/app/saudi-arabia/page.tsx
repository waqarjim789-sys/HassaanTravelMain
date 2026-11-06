"use client";

import CommonHeader from "@/components/ui/CommonHeader";
import Faqs from "@/components/ui/Faqs";
import HeadDesImg from "@/components/ui/HeadDesImg";
import SideIconDesc from "@/components/ui/SideIconDesc";
import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import type { ReactNode } from "react";
import { FaPassport } from "react-icons/fa";
import { ImCreditCard } from "react-icons/im";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import {
  getVisaCountriesTranslation,
  type SaudiVisaTypeKey,
} from "@/translations/visaCountries";

// Icons stay in code; text comes from translations/visaCountries.ts.
const visaTypeIcons: { key: SaudiVisaTypeKey; icon: ReactNode }[] = [
  { key: "touristUmrah", icon: <ImCreditCard /> },
  { key: "umrah", icon: <FaPassport /> },
];

const imageLinks = [
  "/assets/netherland/net1.webp",
  "/assets/netherland/travel-3.webp",
  "/assets/netherland/travel-3.webp",
];

export default function SaudiArabiaPage() {
  const { language } = useLanguage();
  const all = getVisaCountriesTranslation(language);
  const t = all.saudi;
  const shared = all.shared;

  const visaType = {
    head: shared.visaTypesHeading,
    data: visaTypeIcons.map(({ key, icon }) => ({
      title: t.visaTypes[key].title,
      desc: t.visaTypes[key].desc,
      icon,
    })),
  };

  return (
    <main
      dir={getDirection(language)}
      className="w-full overflow-x-hidden bg-gray-50/30"
    >
      <CommonHeader
        heading={t.header.heading}
        desc={shared.headerDescription}
      />

      {/* ================= HERO SECTION WITH CUSTOM OVERLAY ================= */}
      <section className="relative py-16 px-6 overflow-hidden min-h-125 flex items-center justify-center w-full">
        {/* BACKGROUND IMAGE OVERLAY */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
        />

        {/* CONTENT CONTAINER */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 flex flex-col gap-14">

          {/* ================= SECTION 1 ================= */}
          <div className="w-full">
            <HeadDesImg
              title={
                <>
                  {t.intro.titleStart}
                  <span className="text-[#0F91D5]">{t.intro.titleHighlight}</span>
                  {t.intro.titleLine2 && (
                    <span className="text-[#0F91D5] block mt-1">
                      {t.intro.titleLine2}
                    </span>
                  )}
                </>
              }
              description={t.intro.description}
              imageSrc="/assets/umrah/kaba.webp"
              imageAlt={t.intro.imageAlt}
            />
          </div>

          {/* ================= NOTE ================= */}
          <div className="max-w-210 w-full bg-gray-200/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-sm py-3.5 px-6 text-center mt-4 mx-auto">
            {/* Line 1: Main Rule */}
            <p className="font-bold text-[#0F91D5] text-[10.5px] tracking-tight rtl:tracking-normal text-balance">
              {shared.refundNote.line1}
            </p>

            {/* Line 2: Details */}
            <p className="text-gray-800 text-[9.5px] font-medium mt-0.5 text-balance">
              {shared.refundNote.line2}
            </p>
          </div>
        </div>
      </section>

      {/* ================= MIDDLE SECTIONS CONTAINER (FULL WIDTH BG) ================= */}
      <section className="relative w-full py-16 px-6 overflow-hidden">

        {/* BACKGROUND IMAGE: H2 Custom Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 w-full h-full pointer-events-none"
        >
          <Image
            src="/assets/bgimage/h2.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-[0.18]"
          />
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-14 w-full">

          {/* ================= VISA TYPES ================= */}
          <div className="w-full -mx-4 md:-mx-6 px-4 md:px-6 lg:max-w-none lg:w-auto">
            <SideIconDesc data={visaType} />
          </div>
        </div>
      </section>

      {/* ================= FOOTER SECTIONS ================= */}
      <Faqs imagesLinks={imageLinks} />
      <Testimonials />
    </main>
  );
}