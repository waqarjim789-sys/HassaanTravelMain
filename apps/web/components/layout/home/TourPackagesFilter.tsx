"use client";

import { useState } from "react";

// Categories JSON
const categories = [
  { id: 1, name: "Popular" },
  { id: 2, name: "Family" },
  { id: 3, name: "Honeymoon" },
  { id: 4, name: "Summer" },
  { id: 5, name: "Cultural" },
];

// Tours JSON
const tours = [
  {
    id: 1,
    title: "Dubai Adventure",
    category: "Popular",
  },
  {
    id: 2,
    title: "Family Turkey Trip",
    category: "Family",
  },
  {
    id: 3,
    title: "Maldives Couple Tour",
    category: "Honeymoon",
  },
  {
    id: 4,
    title: "Northern Areas",
    category: "Summer",
  },
  {
    id: 5,
    title: "Lahore Heritage Tour",
    category: "Cultural",
  },
];

export default function TourCategories() {
  const [selectedCategory, setSelectedCategory] = useState("Popular");

  // Filter data according to selected category
  const filteredTours = tours.filter(
    (tour) => tour.category === selectedCategory
  );

  return (
    <div>
      {/* Categories */}
      <div
        className="flex flex-wrap gap-2 sm:gap-3 mb-10"
        aria-label="Tour Categories"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.name)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition cursor-pointer
              
              ${
                selectedCategory === category.name
                  ? "bg-[#0F91D5] text-white"
                  : "bg-gray-200 text-black"
              }
            `}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Render Data */}
      
    </div>
  );
}