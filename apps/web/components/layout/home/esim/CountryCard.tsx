"use client";

import Image from "next/image";
import type { CountryCardProps } from "./types";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";

const translations = {
  "en": {
    "instant": "Instant Delivery",
    "packages": "Packages",
    "network": "Network",
    "startingFrom": "Starting From",
    "viewPackages": "View Packages"
  },
  "nl": {
    "instant": "Directe levering",
    "packages": "Pakketten",
    "network": "Netwerk",
    "startingFrom": "Vanaf",
    "viewPackages": "Pakketten bekijken"
  },
  "de": {
    "instant": "Sofortige Lieferung",
    "packages": "Pakete",
    "network": "Netzwerk",
    "startingFrom": "Ab",
    "viewPackages": "Pakete ansehen"
  },
  "fr": {
    "instant": "Livraison instantanée",
    "packages": "Forfaits",
    "network": "Réseau",
    "startingFrom": "À partir de",
    "viewPackages": "Voir les forfaits"
  },
  "it": {
    "instant": "Consegna immediata",
    "packages": "Pacchetti",
    "network": "Rete",
    "startingFrom": "A partire da",
    "viewPackages": "Visualizza pacchetti"
  },
  "es": {
    "instant": "Entrega instantánea",
    "packages": "Paquetes",
    "network": "Red",
    "startingFrom": "Desde",
    "viewPackages": "Ver paquetes"
  },
  "ar": {
    "instant": "تسليم فوري",
    "packages": "الباقات",
    "network": "الشبكة",
    "startingFrom": "ابتداءً من",
    "viewPackages": "عرض الباقات"
  },
  "ur": {
    "instant": "فوری فراہمی",
    "packages": "پیکیجز",
    "network": "نیٹ ورک",
    "startingFrom": "ابتدائی قیمت",
    "viewPackages": "پیکیجز دیکھیں"
  }
} as const;

function getCountryName(code: string, fallback: string, language: string): string {
  const region = code.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(region) || region === "ZZ") return fallback;
  try {
    return new Intl.DisplayNames([language], {
      type: "region",
      fallback: "none",
    }).of(region) || fallback;
  } catch {
    return fallback;
  }
}

export default function CountryCard({ country, onSelect }: CountryCardProps) {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.en;
  const countryName = getCountryName(country.code, country.country, language);
  const price = new Intl.NumberFormat(language, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(country.startingPrice);
  return (
    <article dir={getDirection(language)} className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer">
      {/* Country Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={country.image}
          alt={countryName}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Flag */}
        <div className="absolute top-4 start-4 bg-white rounded-full px-3 py-1 shadow-lg text-lg">
          {country.flag}
        </div>

        {/* Instant Badge */}
        <div className="absolute top-4 end-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {t.instant}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{countryName}</h3>

        <div className="mt-5 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-500">{t.packages}</span>

            <span className="font-semibold">{country.packageCount.toLocaleString(language)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">{t.network}</span>

            <span className="font-semibold text-green-600"><bdi dir="ltr">4G / 5G</bdi></span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">{t.startingFrom}</span>

            <span className="font-bold text-[#0F91D5] text-lg">
              <bdi>{price}</bdi>
            </span>
          </div>
        </div>

        <button
          type="button"
          aria-label={`${t.viewPackages}: ${countryName}`}
          onClick={() => onSelect(country)}
          className="mt-6 w-full bg-[#0F91D5] hover:bg-[#0d80bd] text-white font-semibold rounded-xl py-3 transition"
        >
          {t.viewPackages}
        </button>
      </div>
    </article>
  );
}
