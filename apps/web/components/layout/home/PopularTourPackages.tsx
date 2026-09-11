"use client";

import Image from "next/image";
import { useState } from "react";
import EsimHome from "./esim/EsimHome"; // NEW IMPORT
import { useLanguage } from "@/components/LanguageProvider";
import {
  homepageTranslations,
  type CountryKey,
  type HomepageTranslation,
  type LanguageCode,
  type PackageKey,
} from "@/translations/homepage";

// =======================================================
// TYPES
// =======================================================

type PriceLabel = "from" | "exact" | "onRequest" | "custom" | "stayTuned";

type PackageType = {
  img: string;
  key: PackageKey;
  /** Raw currency value, e.g. "€ 685". Omitted for label-only prices. */
  price?: string;
  priceLabel: PriceLabel;
  countryKey?: CountryKey;
};

// =======================================================
// POPULAR PACKAGES
// =======================================================

const popularPackages: PackageType[] = [
  { img: "c7.webp", key: "pakistan", price: "€ 685", priceLabel: "from" },
  { img: "cp2.webp", key: "pakistanVisa", price: "€ 70", priceLabel: "from" },
  { img: "c3.webp", key: "saudiVisa", price: "€ 120", priceLabel: "from" },
  { img: "c4.webp", key: "umrahPackage", priceLabel: "onRequest" },
  { img: "c5.webp", key: "india", price: "€ 545", priceLabel: "from" },
  { img: "c6.webp", key: "esimCard", price: "€ 5", priceLabel: "from" },
];

// =======================================================
// DESTINATION PACKAGES
// =======================================================

const DestinationPackages: PackageType[] = [
  { img: "d1.webp", key: "destPakistan", price: "€ 750", priceLabel: "exact" },
  {
    img: "d2.webp",
    key: "destAfghanistan",
    price: "€ 950",
    priceLabel: "exact",
  },
  {
    img: "d3.webp",
    key: "destSaudiArabia",
    price: "€ 1,200",
    priceLabel: "exact",
  },
  { img: "d4.webp", key: "destIndia", price: "€ 890", priceLabel: "exact" },
  { img: "d5.webp", key: "destKurdistan", price: "€ 990", priceLabel: "exact" },
  { img: "d6.webp", key: "destTurkiye", price: "€ 1,150", priceLabel: "exact" },
];

// =======================================================
// UMRAH PACKAGES
// =======================================================

const UmrahPackages: PackageType[] = [
  { img: "u.webp", key: "umrahComingSoon", priceLabel: "stayTuned" },
];

// =======================================================
// VISA PACKAGES
// =======================================================

const VisaPackages: PackageType[] = [
  { img: "d1.webp", key: "visaPakFamily3m", price: "€ 70", priceLabel: "exact" },
  { img: "d1.webp", key: "visaPakTourist", price: "€ 80", priceLabel: "exact" },
  {
    img: "d3.webp",
    key: "visaSaudiTourist",
    price: "€ 120",
    priceLabel: "exact",
  },
  {
    img: "c7.webp",
    key: "visaPakFamily1y",
    price: "€ 100",
    priceLabel: "exact",
  },
  { img: "v6.webp", key: "visaKenya", price: "€ 60", priceLabel: "exact" },
  { img: "c5.webp", key: "visaOthers", priceLabel: "custom" },
];

// =======================================================
// TOUR PACKAGES
// =======================================================

const PackagesPackages: PackageType[] = [
  {
    img: "p1.webp",
    key: "pkgTanzania",
    countryKey: "japan",
    price: "€ 2,650",
    priceLabel: "exact",
  },
  {
    img: "p2.webp",
    key: "pkgOman",
    countryKey: "egypt",
    price: "€ 1,850",
    priceLabel: "exact",
  },
  {
    img: "p3.webp",
    key: "pkgMalaysia",
    countryKey: "austria",
    price: "€ 1,250",
    priceLabel: "exact",
  },
  {
    img: "p4.webp",
    key: "pkgIndonesia",
    countryKey: "czechRepublic",
    price: "€ 1,150",
    priceLabel: "exact",
  },
  {
    img: "p5.webp",
    key: "pkgThailand",
    countryKey: "india",
    price: "€ 1,750",
    priceLabel: "exact",
  },
  {
    img: "p6.webp",
    key: "pkgJapan",
    countryKey: "morocco",
    price: "€ 1,450",
    priceLabel: "exact",
  },
];

// =======================================================
// TRANSLATION HELPERS
// =======================================================

const getName = (dict: HomepageTranslation, item: PackageType) =>
  dict.packageItems[item.key]?.name ??
  homepageTranslations.en.packageItems[item.key].name;

const getDescription = (dict: HomepageTranslation, item: PackageType) =>
  dict.packageItems[item.key]?.description ??
  homepageTranslations.en.packageItems[item.key].description;

const getCountry = (dict: HomepageTranslation, item: PackageType) =>
  item.countryKey ? dict.countries[item.countryKey] : "";

const getPrice = (dict: HomepageTranslation, item: PackageType) => {
  if (item.price) {
    return item.priceLabel === "from"
      ? dict.fromPrice.replace("{price}", item.price)
      : item.price;
  }

  if (item.priceLabel === "onRequest") return dict.onRequest;
  if (item.priceLabel === "custom") return dict.custom;
  if (item.priceLabel === "stayTuned") return dict.stayTuned;

  return "";
};

// =======================================================
// COMPONENT
// =======================================================

const PopularTourPackages = () => {
  const { language } = useLanguage();

  const t =
    homepageTranslations[language as LanguageCode] || homepageTranslations.en;

  const [activeCategory, setActiveCategory] = useState<
    "popular" | "Destination" | "Umrah" | "Visa" | "Packages" | "Esim"
  >("popular");

  const [selectedPackage, setSelectedPackage] = useState<PackageType | null>(
    null
  );

  const getPackages = (): PackageType[] => {
    switch (activeCategory) {
      case "Destination":
        return DestinationPackages;

      case "Umrah":
        return UmrahPackages;

      case "Visa":
        return VisaPackages;

      case "Packages":
        return PackagesPackages;

      // eSIM has its own UI, so we don't return packages here.
      case "Esim":
        return [];

      default:
        return popularPackages;
    }
  };

  const currentPackages = getPackages();

  // Function to generate dynamic WhatsApp URL
  // (message stays in English so the office always receives a readable request)
  const getWhatsAppLink = (pkg: PackageType) => {
    const phoneNumber = "31104857673";

    const en = homepageTranslations.en;

    const baseMessage = `Hello Hassaan Travel, I would like to learn more about the "${getName(
      en,
      pkg
    )}" package`;

    const countryContext = pkg.countryKey
      ? ` for ${en.countries[pkg.countryKey]}`
      : "";

    const fullMessage = `${baseMessage}${countryContext} (Price: ${getPrice(
      en,
      pkg
    )}). Please provide more details.`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      fullMessage
    )}`;
  };

  return (
    <>
      <section className="relative pb-8 sm:pb-12 pt-11 sm:pt-17 px-4 sm:px-8 md:px-16 overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
          style={{ backgroundImage: "url('/assets/bgimage/h1.webp')" }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(207,234,246,0.3)] to-[rgba(85,178,218,0.4)] z-0" />

        <div className="relative z-10">

          <h2
            id="popular-tour-packages"
            className="text-2xl sm:text-3xl font-bold mb-3"
          >
            <span className="text-[#0F91D5]">{t.popularServicesTitle}</span>
          </h2>

          <p className="text-gray-500 mb-6 w-full max-w-none lg:max-w-7xl whitespace-normal text-sm sm:text-base">
            {t.popularServicesDescription}
          </p>

          {/* CATEGORY TABS */}

          <div className="flex flex-wrap gap-3 mb-8 border-b border-gray-200 pb-3">

            <button
              onClick={() => setActiveCategory("popular")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeCategory === "popular"
                  ? "bg-[#0F91D5] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t.popular}
            </button>

            <button
              onClick={() => setActiveCategory("Destination")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeCategory === "Destination"
                  ? "bg-[#0F91D5] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t.destination}
            </button>

            <button
              onClick={() => setActiveCategory("Umrah")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeCategory === "Umrah"
                  ? "bg-[#0F91D5] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t.umrah}
            </button>

            <button
              onClick={() => setActiveCategory("Visa")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeCategory === "Visa"
                  ? "bg-[#0F91D5] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t.visa}
            </button>

            <button
              onClick={() => setActiveCategory("Packages")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeCategory === "Packages"
                  ? "bg-[#0F91D5] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t.packages}
            </button>

            {/* NEW eSIM TAB */}

            <button
              onClick={() => setActiveCategory("Esim")}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                activeCategory === "Esim"
                  ? "bg-[#0F91D5] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t.esim}
            </button>

          </div>

          {/* CONTENT */}

          {activeCategory === "Esim" ? (

            <EsimHome />

          ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {currentPackages.map((item, i) => (

                <article
                  key={`${item.key}-${i}`}
                  onClick={() => setSelectedPackage(item)}
                  className="group flex bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer"
                >

                  <div className="w-1/2 h-42.5 overflow-hidden">

                    <Image
                      src={
                        item.img.startsWith("c")
                          ? `/assets/tour/${item.img}`
                          : `/assets/home/${item.img}`
                      }
                      alt={`${getName(t, item)} ${t.packageAlt}`}
                      width={400}
                      height={170}
                      priority={i < 2}
                      className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:-translate-x-10"
                    />

                  </div>

                  <div className="w-1/2 bg-white px-5 py-4 flex flex-col justify-center transition-all duration-500 ease-out group-hover:-translate-x-6">

                    <h3 className="text-lg font-semibold text-gray-900">
                      {getName(t, item)}
                    </h3>

                    <div className="mt-4">

                      <p className="text-sm text-gray-500">
                        {t.price}
                      </p>

                      <p className="text-[#0F91D5] text-xl font-bold">
                        {getPrice(t, item)}
                      </p>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>
      </section>

      {/* MODAL - opens when clicking on any card */}
      {selectedPackage && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-48 w-full">
              <Image
                src={
                  selectedPackage.img.startsWith("c")
                    ? `/assets/tour/${selectedPackage.img}`
                    : `/assets/home/${selectedPackage.img}`
                }
                alt={getName(t, selectedPackage)}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {getName(t, selectedPackage)}
                  </h3>
                  <p className="text-gray-500 mt-1">
                    {getCountry(t, selectedPackage)}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <div className="mt-4">
                <p className="text-gray-600 leading-relaxed">
                  {getDescription(t, selectedPackage)}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  {t.startingFrom}
                </p>
                <p className="text-[#0F91D5] text-2xl font-bold">
                  {getPrice(t, selectedPackage)}
                </p>
              </div>

              {/* NEW WHATSAPP LEARN MORE BUTTON */}
              <a
                href={getWhatsAppLink(selectedPackage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full bg-[#0F91D5] text-white py-3 rounded-xl font-semibold hover:bg-[#0d80bd] transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.452 5.352 0 9.709-4.357 9.712-9.711.002-2.595-1.005-5.034-2.837-6.867-1.833-1.833-4.274-2.842-6.872-2.843-5.358 0-9.713 4.358-9.716 9.713-.001 2.05.535 4.05 1.553 5.81l-1.018 3.719 3.818-1.001zM17.486 14.4c-.3-.149-1.774-.875-2.048-.974-.274-.1-.474-.149-.674.149-.2.3-.774.974-.949 1.174-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.487-.893-.797-1.496-1.78-1.671-2.08-.175-.3-.019-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.674-1.625-.924-2.225-.244-.588-.493-.508-.674-.517-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 1.375-.275 1.25.375 2.45.425 2.525.05.075 1.225 1.872 2.969 2.623.415.179.738.286.99.366.417.133.796.114 1.096.07.334-.051 1.774-.726 2.024-1.392.25-.666.25-1.238.175-1.358-.075-.12-.275-.195-.575-.346z" />
                </svg>

                {t.whatsapp}
              </a>
              <button
                onClick={() => setSelectedPackage(null)}
                className="mt-3 w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopularTourPackages;
