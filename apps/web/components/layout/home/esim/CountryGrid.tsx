"use client";

import { CountryGridProps } from "./types";
import CountryCard from "./CountryCard";

export default function CountryGrid({
  countries,
  onSelect,
}: CountryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {countries.map((country) => (
        <CountryCard
          key={country.id}
          country={country}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}