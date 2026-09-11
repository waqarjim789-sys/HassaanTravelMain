"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import {
  homepageTranslations,
  type LanguageCode,
  type TourCategoryKey,
  type TourItemKey,
} from "@/translations/homepage";

// Categories JSON — text lives in the translation file, only the key stays here
const categories: { id: number; key: TourCategoryKey }[] = [
  { id: 1, key: "popular" },
  { id: 2, key: "family" },
  { id: 3, key: "honeymoon" },
  { id: 4, key: "summer" },
  { id: 5, key: "cultural" },
];

// Tours JSON
const tours: { id: number; key: TourItemKey; category: TourCategoryKey }[] = [
  {
    id: 1,
    key: "dubaiAdventure",
    category: "popular",
  },
  {
    id: 2,
    key: "familyTurkey",
    category: "family",
  },
  {
    id: 3,
    key: "maldivesCouple",
    category: "honeymoon",
  },
  {
    id: 4,
    key: "northernAreas",
    category: "summer",
  },
  {
    id: 5,
    key: "lahoreHeritage",
    category: "cultural",
  },
];

export default function TourCategories() {
  const { language } = useLanguage();

  const t =
    homepageTranslations[language as LanguageCode] || homepageTranslations.en;

  const [selectedCategory, setSelectedCategory] =
    useState<TourCategoryKey>("popular");

  // Filter data according to selected category.
  // Each tour carries a `title` that already follows the selected language,
  // ready for the render block below.
  const filteredTours = tours
    .filter((tour) => tour.category === selectedCategory)
    .map((tour) => ({
      ...tour,
      title:
        t.tours.items[tour.key] || homepageTranslations.en.tours.items[tour.key],
    }));

  return (
    <div>
      {/* Categories */}
      <div
        className="flex flex-wrap gap-2 sm:gap-3 mb-10"
        aria-label={t.tours.categoriesAria}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.key)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition cursor-pointer
              
              ${
                selectedCategory === category.key
                  ? "bg-[#0F91D5] text-white"
                  : "bg-gray-200 text-black"
              }
            `}
          >
            {t.tours.categories[category.key] ||
              homepageTranslations.en.tours.categories[category.key]}
          </button>
        ))}
      </div>

      {/* Render Data */}
      
    </div>
  );
}
