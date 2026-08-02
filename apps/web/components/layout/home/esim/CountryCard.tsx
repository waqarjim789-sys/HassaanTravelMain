"use client";

import Image from "next/image";
import { CountryCardProps } from "./types";

export default function CountryCard({
  country,
  onSelect,
}: CountryCardProps) {
  return (
    <article
      className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      {/* Country Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={country.image}
          alt={country.country}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Flag */}
        <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 shadow-lg text-lg">
          {country.flag}
        </div>

        {/* Instant Badge */}
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          Instant Delivery
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-gray-900">
          {country.country}
        </h3>

        <div className="mt-5 space-y-3">

          <div className="flex justify-between">
            <span className="text-gray-500">
              Packages
            </span>

            <span className="font-semibold">
              {country.packageCount}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">
              Network
            </span>

            <span className="font-semibold text-green-600">
              4G / 5G
            </span>
          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">
              Starting From
            </span>

            <span className="font-bold text-[#0F91D5] text-lg">
              €{country.startingPrice.toFixed(2)}
            </span>

          </div>

        </div>

        <button
          onClick={() => onSelect(country)}
          className="mt-6 w-full bg-[#0F91D5] hover:bg-[#0d80bd] text-white font-semibold rounded-xl py-3 transition"
        >
          View Packages
        </button>

      </div>
    </article>
  );
}