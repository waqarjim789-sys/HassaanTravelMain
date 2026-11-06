"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import {
  getHomepageTranslation,
  type TourCategoryKey,
  type TourItemKey,
} from "@/translations/homepage";

/*
 * NOTE: This component is currently not imported by any page.
 * Kept up to date so it works if it is used later.
 */

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
  { id: 1, key: "dubaiAdventure", category: "popular" },
  { id: 2, key: "familyTurkey", category: "family" },
  { id: 3, key: "maldivesCouple", category: "honeymoon" },
  { id: 4, key: "northernAreas", category: "summer" },
  { id: 5, key: "lahoreHeritage", category: "cultural" },
];

export default function TourCategories() {
  const { language } = useLanguage();

  // Shared helper: normalizes locale codes and fills missing keys from English.
  const t = getHomepageTranslation(language).tours;

  const [selectedCategory, setSelectedCategory] =
    useState<TourCategoryKey>("popular");

  // Tours in the selected category, with titles in the selected language.
  const filteredTours = tours
    .filter((tour) => tour.category === selectedCategory)
    .map((tour) => ({ ...tour, title: t.items[tour.key] }));

  return (
    <div dir={getDirection(language)} className="text-start">
      {/* Categories */}
      <div
        role="group"
        aria-label={t.categoriesAria}
        className="flex flex-wrap gap-2 sm:gap-3 mb-10"
      >
        {categories.map((category) => {
          const active = selectedCategory === category.key;

          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={active}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition cursor-pointer ${
                active ? "bg-[#0F91D5] text-white" : "bg-gray-200 text-black"
              }`}
            >
              {t.categories[category.key]}
            </button>
          );
        })}
      </div>

      {/* Tours in the selected category */}
      <ul className="flex flex-wrap gap-3">
        {filteredTours.map((tour) => (
          <li
            key={tour.id}
            className="bg-white rounded-xl shadow px-4 py-3 text-sm font-medium text-gray-800"
          >
            {tour.title}
          </li>
        ))}
      </ul>
    </div>
  );
}