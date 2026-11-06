"use client";

import React from "react";
import Testimonials from "@/components/ui/Testimonials";
import Faqs from "@/components/ui/Faqs";
import CommonHeader from "@/components/ui/CommonHeader";
import SideIconDesc from "@/components/ui/SideIconDesc";
import { ImCreditCard } from "react-icons/im";
import { LuHeadset } from "react-icons/lu";
import { FaPassport } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { FaClock } from "react-icons/fa";
import StepsToApply from "@/components/layout/umrah/StepsToApply";
import CustomTravelPackages from "@/components/ui/CustomTravelPackages";
import MutipleImageRightText from "@/components/ui/MutipleImageRightText";
import RequiredDocuments from "@/components/ui/RequiredDocuments";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import {
  getUmrahTranslation,
  type UmrahServiceKey,
} from "@/translations/umrah";

// Icons stay in code; their text comes from translations/umrah.ts.
const serviceIcons: { key: UmrahServiceKey; icon: React.ReactNode }[] = [
  { key: "eVisa", icon: <ImCreditCard /> },
  { key: "hotelBooking", icon: <LuHeadset /> },
  { key: "transportation", icon: <FaPassport /> },
  { key: "tickets", icon: <GiLaptop /> },
];

const imageData = [
  "/assets/umrah/1.webp",
  "/assets/umrah/2.webp",
  "/assets/umrah/3.webp",
  "/assets/umrah/4.webp",
];

// Preserved from the original file; currently not passed to <Faqs />.
const faqImasgesLinks = [
  "/assets/umrah/faq1.webp",
  "/assets/umrah/faq2.webp",
  "/assets/umrah/faq3.webp",
  "/assets/umrah/faq4.webp",
];

const UmrahPage: React.FC = () => {
  const { language } = useLanguage();
  const t = getUmrahTranslation(language);
  const direction = getDirection(language);

  const visaServices = {
    head: (
      <div className="text-center text-black">
        <div>{t.services.headingLine1}</div>
        <div>{t.services.headingLine2}</div>
      </div>
    ),

    data: serviceIcons.map(({ key, icon }) => ({
      title: t.services.items[key].title,
      desc: t.services.items[key].desc,
      icon,
    })),
  };

  return (
    <div dir={direction} className="bg-white">
      {/* BACKGROUND SECTION: Yeh sirf h1.webp ko dikhayega */}
      <div className="relative w-full">
        {/* ONLY ONE BACKGROUND LAYER */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
          style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
        />

        {/* CONTENT LAYER */}
        <div className="relative z-10">
          <CommonHeader
            heading={t.header.heading}
            desc={t.header.description}
          />

          <SideIconDesc data={visaServices} />

          <RequiredDocuments
            documents={t.documents.items}
            title={t.documents.title}
            rightImage="/assets/umrah/kaba.webp"
          />

          {/* COMING SOON SECTION */}
          <section className="relative pt-2 pb-12 overflow-hidden">
            <div className="container relative z-10 max-w-7xl mx-auto px-4">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F91D5]">
                  {t.packages.titleHighlight}{" "}
                  <span className="text-black">{t.packages.titleRest}</span>
                </h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
                  {t.packages.description}
                </p>
              </div>

              <div className="flex justify-center items-center py-6 w-full">
                {/* Square shape with custom border and white background */}
                <div
                  className="bg-white max-w-md w-full rounded-2xl shadow-lg p-8 text-center hover:scale-[1.02] transition-transform duration-300 flex flex-col items-center"
                  style={{ border: "2px solid #d4e157" }}
                >
                  <FaClock
                    size={40}
                    aria-hidden="true"
                    className="text-[#d4e157] mb-4 animate-pulse"
                  />

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t.packages.comingSoonTitle}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {t.packages.comingSoonText}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* OUTSIDE BACKGROUND SECTION */}
      <StepsToApply />

      {/* Pass mode="umrah" to CustomTravelPackages */}
      <CustomTravelPackages mode="umrah" />

      <MutipleImageRightText imageData={imageData} />

      <Faqs imagesLinks={imageData} />

      <Testimonials />
    </div>
  );
};

export default UmrahPage;