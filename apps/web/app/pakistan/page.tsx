/* eslint-disable @next/next/no-img-element */
"use client";

import Testimonials from "@/components/ui/Testimonials";
import Faqs from "@/components/ui/Faqs";
import CommonHeader from "@/components/ui/CommonHeader";
import { ImCreditCard } from "react-icons/im";
import { LuHeadset } from "react-icons/lu";
import { FaPassport } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import SideIconDesc from "@/components/ui/SideIconDesc";
import Image from "next/image";
import type { ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import {
  getVisaCountriesTranslation,
  type PakistanVisaTypeKey,
} from "@/translations/visaCountries";

// Icons stay in code; text comes from translations/visaCountries.ts.
const visaTypeIcons: { key: PakistanVisaTypeKey; icon: ReactNode }[] = [
  { key: "tourist", icon: <ImCreditCard /> },
  { key: "business", icon: <LuHeadset /> },
  { key: "familyVisit", icon: <FaPassport /> },
  { key: "student", icon: <GiLaptop /> },
];

const faqImages = [
  "/assets/pakistan/p1.webp",
  "/assets/pakistan/p2.webp",
  "/assets/pakistan/p2.webp",
];

/** Numbered row used in the required-documents list. */
function NumberedItem({ number, children }: { number: number; children: ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <span className="font-bold text-slate-800 min-w-4.5 shrink-0">{number}.</span>
      <span className="min-w-0">{children}</span>
    </div>
  );
}

export default function Pakistan() {
  const { language } = useLanguage();
  const all = getVisaCountriesTranslation(language);
  const t = all.pakistan;
  const shared = all.shared;
  const docs = t.documents;

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

      {/* ================= CARD 1 SECTION WITH FULL BG OVERLAY ================= */}
      <section className="relative py-16 px-6 overflow-hidden min-h-125 flex items-center justify-center w-full">
        {/* BACKGROUND IMAGE OVERLAY */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
        />

        {/* CONTENT CONTAINER */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4">
          {/* ===== TOP CARD ===== */}
          <div className="w-full bg-gray-100/40 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-sm border border-white/40 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-[62%] min-w-0 flex flex-col justify-center text-start">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                {t.intro.titleStart}
                <span className="text-[#0F91D5]">{t.intro.titleHighlight}</span>
                {t.intro.titleLine2 && (
                  <span className="text-[#0F91D5] block mt-1">{t.intro.titleLine2}</span>
                )}
              </h2>
              <div className="space-y-3 text-slate-600 text-[15px] leading-relaxed">
                {t.intro.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="w-full md:w-[38%] aspect-[1.4/1] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100">
              <img
                src="/assets/pakistan/p1.webp"
                alt={t.intro.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CARD 2 SECTION WITH FULL NEXT.JS IMAGE BG ================= */}
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
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4">
          {/* ===== REQUIRED DOCUMENTS CARD ===== */}
          <div className="w-full bg-gray-100/40 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-sm border border-white/40 flex flex-col-reverse md:flex-row items-stretch justify-between gap-10">
            <div className="w-full md:w-[62%] min-w-0 flex flex-col justify-center text-start">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-5">
                {docs.titleStart}
                <span className="text-[#0F91D5]">{docs.titleHighlight}</span>
                {docs.titleEnd}
                {docs.titleLine2 && (
                  <span className="block mt-1">{docs.titleLine2}</span>
                )}
              </h2>

              <ol className="space-y-3 text-slate-600 text-[14.5px] leading-relaxed list-none ps-0">
                <li>
                  <NumberedItem number={1}>{docs.passport}</NumberedItem>
                </li>
                <li>
                  <NumberedItem number={2}>{docs.photo}</NumberedItem>
                </li>
                <li className="flex flex-col items-start gap-2">
                  <NumberedItem number={3}>{docs.originIntro}</NumberedItem>
                  <ul className="w-full ps-6 mt-1.5 space-y-1.5 list-disc marker:text-slate-400">
                    {docs.originOptions.map((option, index) => (
                      <li key={index} className="ps-1">
                        {option}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <NumberedItem number={4}>{docs.consent}</NumberedItem>
                </li>
              </ol>
            </div>

            <div className="w-full md:w-[38%] aspect-[1/1.15] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 self-center">
              <img
                src="/assets/pakistan/p2.webp"
                alt={docs.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISA TYPE CARDS ===== */}
      <SideIconDesc data={visaType} />

      <Faqs imagesLinks={faqImages} />

      <Testimonials />
    </main>
  );
}