"use client";

import VisaOptions from "@/components/layout/uae/VisaOptions";
import CommonHeader from "@/components/ui/CommonHeader";
import Faqs from "@/components/ui/Faqs";
import HeadDesImg from "@/components/ui/HeadDesImg";
import RequiredDocuments from "@/components/ui/RequiredDocuments";
import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { getUaeTranslation } from "@/translations/uae";
import { getVisaCountriesTranslation } from "@/translations/visaCountries";

const imageLinks = [
  "/assets/uae/f1.webp",
  "/assets/uae/f2.webp",
  "/assets/uae/f3.webp",
];

export default function UAEPage() {
  const { language } = useLanguage();
  const t = getUaeTranslation(language);
  const refundNote = getVisaCountriesTranslation(language).shared.refundNote;

  return (
    <main dir={getDirection(language)} className="w-full text-gray-800">
      <CommonHeader
        heading={t.header.heading}
        desc={t.header.description}
      />

      {/* UAE VISA OPTIONS SECTION */}
      <VisaOptions />

      {/* ================= EXPLORE UAE SECTION ================= */}
      <section className="relative py-16 px-4 sm:px-8 md:px-16 bg-[#eaf4fb] text-center overflow-hidden">
        {/* BACKGROUND IMAGE: Standard Cloud Pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
        />

        {/* LIGHT OVERLAY */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] z-0"
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-full bg-transparent py-12 flex flex-col items-center gap-7">
            {/* MAIN HERO CONTAINER */}
            <HeadDesImg
              title={
                <>
                  <span className="text-[#0F91D5]">{t.explore.titleHighlight}</span>
                  {t.explore.titleRest}
                </>
              }
              description={t.explore.description}
              imageSrc="/assets/uae/1.webp"
              imageAlt={t.explore.imageAlt}
            />

            {/* BOTTOM NOTICE CONTAINER */}
            <div className="max-w-7xl w-full mt-5 bg-slate-200/80 backdrop-blur-md border border-white/40 rounded-[2.5rem] shadow-xl shadow-slate-300/30 py-6 px-8 text-center">
              {/* Line 1: Main Rule */}
              <p className="font-bold text-[#0F91D5] text-[11px] sm:text-xs tracking-tight rtl:tracking-normal text-balance">
                {refundNote.line1}
              </p>

              {/* Line 2: Details */}
              <p className="text-gray-800 text-[10px] sm:text-xs font-medium mt-1.5 text-balance">
                {refundNote.line2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DUTCH CITIZENS & DOCUMENTS SECTION ================= */}
      <section className="relative w-full py-20 px-6 sm:px-12 md:px-16 overflow-hidden bg-[#eaf4fb]">
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

        {/* SAME LIGHT OVERLAY FOR CONSISTENCY */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] z-0"
        />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-16">
          <div className="w-full bg-transparent py-6 flex flex-col items-center">
            {/* SECTION 1: UAE Visa Services for Dutch */}
            <HeadDesImg
              title={
                <>
                  {t.dutch.titleStart}
                  <span className="text-[#0F91D5]">{t.dutch.titleHighlight}</span>
                </>
              }
              description={t.dutch.description}
              imageSrc="/assets/uae/2.webp"
              imageAlt={t.dutch.imageAlt}
            />
          </div>

          {/* SECTION 2: Documents Required */}
          <div className="w-full">
            <RequiredDocuments
              documents={t.documents.items}
              rightImage="/assets/uae/doc.webp"
              title={t.documents.title}
            />
          </div>
        </div>
      </section>

      <Faqs imagesLinks={imageLinks} />

      <Testimonials />
    </main>
  );
}