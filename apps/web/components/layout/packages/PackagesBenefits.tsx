"use client";

import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { FaToggleOff } from "react-icons/fa";
import { useLanguage } from "@/components/LanguageProvider";
import { interpolate } from "@/lib/createTranslator";
import { getPackagesTranslation } from "@/translations/packages";

const VISIBLE_COUNT = 4;

/**
 * Package inclusions list.
 * Labels are translated; the inclusion items themselves are package data
 * and stay as supplied (English), wrapped in <bdi> so they render cleanly
 * inside right-to-left pages.
 */
export const PackagesBenefits = ({ benefits }: { benefits: string[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();
  const t = getPackagesTranslation(language).benefits;

  // Show only the first items unless expanded
  const displayedBenefits = isExpanded ? benefits : benefits.slice(0, VISIBLE_COUNT);
  const remainingCount = benefits.length - VISIBLE_COUNT;

  return (
    <div className="text-xs text-gray-600 space-y-1 mb-3 text-start">
      <p className="font-semibold text-black flex items-center mb-2">
        <FaToggleOff aria-hidden="true" className="size-5 me-2 shrink-0" />
        {t.includes}
      </p>

      {displayedBenefits.map((pkg, ind) => (
        <p key={ind} className="flex items-start">
          <span
            aria-hidden="true"
            className="text-[#0F91D5] me-2 font-bold text-lg leading-none"
          >
            .
          </span>
          <bdi className="min-w-0">{pkg}</bdi>
        </p>
      ))}

      {benefits.length > VISIBLE_COUNT && (
        <button
          type="button"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((previous) => !previous)}
          className="text-[#0F91D5] font-semibold mt-2 flex items-center hover:underline transition-all"
        >
          {isExpanded ? (
            <>
              {t.showLess}
              <ChevronUp aria-hidden="true" className="ms-1 size-3" />
            </>
          ) : (
            interpolate(t.moreBenefits, { count: remainingCount })
          )}
        </button>
      )}
    </div>
  );
};