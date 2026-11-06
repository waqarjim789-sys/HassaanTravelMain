/* eslint-disable @next/next/no-img-element */
"use client";

import CustomTravelPackages from "@/components/ui/CustomTravelPackages";
import PopularTourPackages from "@/components/layout/packages/PopularTourPackages";
import BlueBgHeadAndDesc from "@/components/ui/BlueBgHeadAndDesc";
import CommonHeader from "@/components/ui/CommonHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { getPackagesTranslation } from "@/translations/packages";

export default function PackagesPage() {
  const { language } = useLanguage();
  const t = getPackagesTranslation(language);

  return (
    <main dir={getDirection(language)}>
      {/* HERO SECTION */}
      <CommonHeader
        heading={t.header.heading}
        desc={
          <>
            {t.header.descLine1}
            <br />
            <strong>{t.header.descLine2}</strong>
          </>
        }
      />

      {/* POPULAR TOUR PACKAGES */}
      <PopularTourPackages />

      {/* CUSTOM PACKAGE FORM (packages mode) */}
      <CustomTravelPackages mode="packages" />

      <section className="relative w-full py-12 px-5 overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="/assets/home/h1.webp"
          loading="lazy"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* LIGHT GRADIENT */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-[rgba(207,234,246,0.15)] to-[rgba(85,178,218,0.25)]"
        />

        {/* LIGHT OVERLAY */}
        <div aria-hidden="true" className="absolute inset-0 bg-white/35" />

        {/* CONTENT */}
        <div className="relative z-10 container mx-auto">
          <BlueBgHeadAndDesc
            head={t.cta.heading}
            desc={t.cta.description}
            btnTxt={t.cta.button}
          />
        </div>
      </section>
    </main>
  );
}