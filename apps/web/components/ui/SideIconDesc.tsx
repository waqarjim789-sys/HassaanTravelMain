"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import {
  homepageTranslations,
  type LanguageCode,
} from "@/translations/homepage";

interface Props {
  icon: React.ReactNode;

  /**
   * Preferred: key into homepageTranslations[lang].sideIcons
   * The card then follows the selected language automatically.
   */
  itemKey?: string;

  /**
   * Legacy plain text. Still fully supported: if the English wording matches an
   * entry in homepageTranslations.en.sideIcons the card is translated anyway,
   * so the parent does not have to be touched.
   */
  title?: string;
  desc?: string;
}

interface SideIconDescProps {
  data: {
    /**
     * Preferred: key into homepageTranslations[lang].sideSections
     * Supplies both the heading and the intro line.
     */
    sectionKey?: string;

    /** Legacy plain text — matched against the English copy, same as above. */
    head?: string | React.ReactNode;
    details?: string;

    data: Props[];
  };
}

// Languages that read right to left
const RTL_LANGUAGES = ["ar", "ur"];

/** "  Expert   Visa Solutions " -> "expert visa solutions" */
const normalize = (value: string) =>
  value.trim().toLowerCase().replace(/\s+/g, " ");

/**
 * Reverse index: English heading / card title -> translation key.
 * Lets a parent that still passes plain English strings render translated,
 * without changing that parent.
 */
const buildEnglishIndex = () => {
  const en = homepageTranslations.en;

  const sections: Record<string, string> = {};
  Object.entries(en.sideSections).forEach(([key, value]) => {
    sections[normalize(value.head)] = key;
  });

  const icons: Record<string, string> = {};
  Object.entries(en.sideIcons).forEach(([key, value]) => {
    icons[normalize(value.title)] = key;
  });

  return { sections, icons };
};

const ENGLISH_INDEX = buildEnglishIndex();

const SideIconDesc = ({ data }: SideIconDescProps) => {
  const { language } = useLanguage();

  const t =
    homepageTranslations[language as LanguageCode] || homepageTranslations.en;

  const en = homepageTranslations.en;

  const isRtl = RTL_LANGUAGES.includes(
    String(language).toLowerCase().split(/[-_]/)[0]
  );

  // Heading: explicit key -> English wording match -> whatever the parent passed
  const sectionKey =
    data.sectionKey ??
    (typeof data.head === "string"
      ? ENGLISH_INDEX.sections[normalize(data.head)]
      : undefined);

  const section = sectionKey
    ? t.sideSections[sectionKey] || en.sideSections[sectionKey]
    : undefined;

  const head = section?.head ?? data.head;
  const details = section?.details ?? data.details;

  const getCard = (item: Props) => {
    const itemKey =
      item.itemKey ??
      (item.title ? ENGLISH_INDEX.icons[normalize(item.title)] : undefined);

    const translated = itemKey
      ? t.sideIcons[itemKey] || en.sideIcons[itemKey]
      : undefined;

    return {
      title: translated?.title ?? item.title ?? "",
      desc: translated?.desc ?? item.desc ?? "",
    };
  };

  return (
    // Background image aur style tag hata diya hai, ab yeh clean background hai
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="py-12 sm:py-20 px-4 sm:px-8 md:px-16 relative container mx-auto"
    >
      <div className="text-center">
        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold">{head}</h2>

        <p className="text-gray-600 mt-2 mb-12 px-2">{details}</p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-stretch gap-6 sm:gap-8 px-0 sm:px-4 md:px-8">
        {data.data.map((item, ind) => {
          const card = getCard(item);

          return (
            <div
              key={ind}
              // Cards ka background transparent se badal kar solid white (bg-white) ya shadow smooth kar diya hai
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition flex-1 "
            >
              {/* ICON */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 flex items-center justify-center rounded-xl bg-[#0F91D5] text-white text-lg sm:text-xl shadow">
                {item.icon}
              </div>

              <h3 className="font-semibold text-base sm:text-lg text-black">
                {card.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* PARTNERS */}
    </section>
  );
};

export default SideIconDesc;
