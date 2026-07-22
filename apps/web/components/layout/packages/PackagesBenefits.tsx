"use client";

import React, { useMemo, useState } from "react";
import { Hotel, Star, ChevronDown, ChevronUp } from "lucide-react"; // Added icons
import { FaToggleOff } from "react-icons/fa";

// ... (keep your packages array exactly as it is)

export const PackagesBenefits = ({ benefits }: { benefits: string[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only first 4 benefits if not expanded
  const displayedBenefits = isExpanded ? benefits : benefits.slice(0, 4);
  const remainingCount = benefits.length - 4;

  return (
    <div className="text-xs text-gray-600 space-y-1 mb-3">
      <p className="font-semibold text-black flex items-center mb-2">
        <FaToggleOff className="size-5 mr-2" />
        Package Includes:
      </p>

      {displayedBenefits.map((pkg, ind) => (
        <p key={ind} className="flex items-start">
          <span className="text-[#0F91D5] mr-2 font-bold text-lg leading-none">
            .
          </span>
          {pkg}
        </p>
      ))}

      {benefits.length > 4 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#0F91D5] font-semibold mt-2 flex items-center hover:underline transition-all"
        >
          {isExpanded ? (
            <>
              Show less <ChevronUp className="ml-1 size-3" />
            </>
          ) : (
            <>+{remainingCount} more benefits</>
          )}
        </button>
      )}
    </div>
  );
};
