"use client";

import { useState } from "react";
import { FaPhoneAlt, FaCalendarAlt, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import BookingModal from "@/components/ui/BookingModal";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { aboutUsTranslations } from "@/translations/aboutUs";

const PHONE_HREF = "tel:+31104857673";
const PHONE_DISPLAY = "+31 (0) 10 485 7673";
const CONTACT_EMAIL = "info@hassaantravel.nl";

type AboutUsLocale = keyof typeof aboutUsTranslations;

/**
 * Single source of truth: translations/aboutUs.ts (iataRecognized).
 * "nl-NL" / "NL" -> "nl"; unsupported -> English.
 */
function getAboutUsTranslation(language: string) {
  const base = language.trim().toLowerCase().split(/[-_]/)[0] ?? "";
  return Object.prototype.hasOwnProperty.call(aboutUsTranslations, base)
    ? aboutUsTranslations[base as AboutUsLocale]
    : aboutUsTranslations.en;
}

const IataRecognized = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();

  const data = getAboutUsTranslation(language).iataRecognized;

  return (
    <section
      className="py-20 px-6 bg-[#1e88c8] text-center text-white relative"
      dir={getDirection(language)}
    >
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs px-4 py-1.5 rounded-full">
          <FaStar aria-hidden="true" className="text-yellow-300" />
          {data.badge}
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        {data.title}{" "}
        <span className="text-[#d4e157]">{data.titleHighlight}</span>
        <br />
        <span className="text-[#d4e157]">{data.titleHighlight2}</span>
      </h2>

      <p className="text-white/90 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
        {data.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <a
          href={PHONE_HREF}
          className="bg-[#d4e157] text-black px-6 py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition flex items-center gap-2 justify-center"
        >
          <FaPhoneAlt size={14} aria-hidden="true" />
          {data.callNow}
        </a>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-[#1e88c8] px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition flex items-center gap-2 justify-center cursor-pointer"
        >
          <FaCalendarAlt size={14} aria-hidden="true" />
          {data.bookNow}
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-white/90 text-xs">
        <a
          href={PHONE_HREF}
          className="flex items-center gap-2 hover:underline"
          dir="ltr"
        >
          <FaPhoneAlt aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex items-center gap-2 hover:underline"
          dir="ltr"
        >
          <MdEmail aria-hidden="true" />
          {CONTACT_EMAIL}
        </a>

        <div className="flex items-center gap-2">
          <BsClockFill aria-hidden="true" />
          {data.hours}
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[9999]">
        <div className="pointer-events-auto">
          <BookingModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default IataRecognized;