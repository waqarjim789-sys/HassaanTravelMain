"use client";

import Image from "next/image";
import { useState } from "react";
import EsimHome from "./esim/EsimHome"; // NEW IMPORT

// =======================================================
// POPULAR PACKAGES
// =======================================================

const popularPackages = [
  {
    img: "c7.webp",
    name: "Pakistan",
    country: "",
    price: "From € 685",
    description:
      "Discover Pakistan's breathtaking landscapes, rich cultural heritage, vibrant cities, and unforgettable travel experiences.",
  },
  {
    img: "cp2.webp",
    name: "Pakistan Visa",
    country: "",
    price: "From € 70",
    description:
      "Fast and reliable Pakistan visa processing services with expert guidance and hassle-free documentation support.",
  },
  {
    img: "c3.webp",
    name: "Saudi Visa",
    country: "",
    price: "From € 120",
    description:
      "Get your Saudi visa with a smooth application process, professional assistance, and timely approvals.",
  },
  {
    img: "c4.webp",
    name: "Umrah Package",
    country: "",
    price: "On Request",
    description:
      "Complete Umrah packages including visa, accommodation, transportation, and dedicated support throughout your journey.",
  },
  {
    img: "c5.webp",
    name: "India",
    country: "",
    price: "From € 545",
    description:
      "Explore India's diverse culture, historic landmarks, spiritual destinations, and world-famous attractions.",
  },
  {
    img: "c6.webp",
    name: "E-Sim",
    country: "",
    price: "From € 5",
    description:
      "Stay connected worldwide with affordable eSIM plans offering instant activation and seamless mobile data.",
  },
];

// =======================================================
// DESTINATION PACKAGES
// =======================================================

const DestinationPackages = [
  {
    img: "d1.webp",
    name: "Pakistan",
    price: "€ 750",
    description:
      "Explore the breathtaking beauty of Hunza Valley, Skardu, and the majestic peaks of the Karakoram range.",
  },
  {
    img: "d2.webp",
    name: "Afghanistan",
    price: "€ 950",
    description:
      "Discover the historical richness of the Bamiyan Valley and the vibrant culture of Kabul.",
  },
  {
    img: "d3.webp",
    name: "Saudi Arabia",
    price: "€ 1,200",
    description:
      "Experience a spiritual journey with guided tours to the holy cities and historical landmarks.",
  },
  {
    img: "d4.webp",
    name: "India",
    price: "€ 890",
    description:
      "Visit the iconic Taj Mahal and explore the majestic palaces and forts of the Pink City.",
  },
  {
    img: "d5.webp",
    name: "Kurdistan",
    price: "€ 990",
    description:
      "Discover ancient citadels, beautiful mountain landscapes, and the warm hospitality of the Kurdish region.",
  },
  {
    img: "d6.webp",
    name: "Turkiye",
    price: "€ 1,150",
    description:
      "A perfect blend of history, culture, and unique landscapes. Hot air balloons and stunning architecture await.",
  },
];

// =======================================================
// UMRAH PACKAGES
// =======================================================

const UmrahPackages = [
  {
    img: "u.webp",
    name: "Coming Soon",
    price: "Stay Tuned",
    description:
      "We are working on exciting new Umrah packages. Stay tuned for updates!",
  },
];

// =======================================================
// VISA PACKAGES
// =======================================================

const VisaPackages = [
  {
    img: "d1.webp",
    name: "Pakistan Family Visa (3 months)",
    price: "€ 70",
    description:
      "Family visa service for a 3-month stay. Quick and reliable processing.",
  },
  {
    img: "d1.webp",
    name: "Pakistan Tourist Visa",
    price: "€ 80",
    description:
      "Tourist visa for Pakistan. Avail our special limited-time discount.",
  },
  {
    img: "d3.webp",
    name: "Saudi-Arabia Tourist Visa",
    price: "€ 120",
    description:
      "Hassle-free tourist visa processing for your trip to Saudi Arabia.",
  },
  {
    img: "c7.webp",
    name: "Pakistan Family Visa (1 year)",
    price: "€ 100",
    description:
      "Long-term family visa for a 1-year duration. Efficient service provided.",
  },
  {
    img: "v6.webp",
    name: "Kenia Visa",
    price: "€ 60",
    description:
      "Streamlined visa application process for travel to Kenya.",
  },
  {
    img: "c5.webp",
    name: "Others On request",
    price: "Custom",
    description:
      "Need a visa for another destination? Contact us for a personalized quote.",
  },
];

// =======================================================
// TOUR PACKAGES
// =======================================================

const PackagesPackages = [
  {
    img: "p1.webp",
    name: "Tanzania",
    country: "Japan",
    price: "€ 2,650",
    description:
      "Ancient temples, traditional tea ceremonies, and beautiful geisha districts.",
  },
  {
    img: "p2.webp",
    name: "Oman",
    country: "Egypt",
    price: "€ 1,850",
    description:
      "Pyramids of Giza, Egyptian Museum, and rich pharaonic history.",
  },
  {
    img: "p3.webp",
    name: "Malaysia",
    country: "Austria",
    price: "€ 1,250",
    description:
      "Imperial palaces, classical music, and world-class museums.",
  },
  {
    img: "p4.webp",
    name: "Indonesia",
    country: "Czech Republic",
    price: "€ 1,150",
    description:
      "Fairytale architecture, medieval charm, and rich Bohemian culture.",
  },
  {
    img: "p5.webp",
    name: "Thailand",
    country: "India",
    price: "€ 1,750",
    description:
      "Historic monuments, bustling bazaars, and diverse spiritual heritage.",
  },
  {
    img: "p6.webp",
    name: "Japan",
    country: "Morocco",
    price: "€ 1,450",
    description:
      "Vibrant souks, stunning palaces, and authentic Moroccan traditions.",
  },
];

type PackageType = {
  img: string;
  name: string;
  price: string;
  description: string;
  country?: string;
};

const PopularTourPackages = () => {
  const [activeCategory, setActiveCategory] = useState<
    "popular" | "Destination" | "Umrah" | "Visa" | "Packages" | "Esim"
  >("popular");

  const [selectedPackage, setSelectedPackage] =
    useState<PackageType | null>(null);

  const getPackages = () => {
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
  const getWhatsAppLink = (pkg: PackageType) => {
    const phoneNumber = "31104857673";

    const baseMessage = `Hello Hassaan Travel, I would like to learn more about the "${pkg.name}" package`;

    const countryContext = pkg.country
      ? ` for ${pkg.country}`
      : "";

    const fullMessage = `${baseMessage}${countryContext} (Price: ${pkg.price}). Please provide more details.`;

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
          <span className="text-[#0F91D5]">Our Most</span>{" "}
          <span className="text-black">Popular Services</span>
        </h2>

        <p className="text-gray-500 mb-6 w-full max-w-none lg:max-w-7xl whitespace-normal text-sm sm:text-base">
          Everything you need for your next trip in one place from flights and visas to travel packages, tours, and eSIMs. Discover our most popular services today.
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
            Popular
          </button>

          <button
            onClick={() => setActiveCategory("Destination")}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
              activeCategory === "Destination"
                ? "bg-[#0F91D5] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Destination
          </button>

          <button
            onClick={() => setActiveCategory("Umrah")}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
              activeCategory === "Umrah"
                ? "bg-[#0F91D5] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Umrah
          </button>

          <button
            onClick={() => setActiveCategory("Visa")}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
              activeCategory === "Visa"
                ? "bg-[#0F91D5] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Visa
          </button>

          <button
            onClick={() => setActiveCategory("Packages")}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
              activeCategory === "Packages"
                ? "bg-[#0F91D5] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Packages
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
            HT Connect – Global eSIM
          </button>

        </div>

        {/* CONTENT */}

        {activeCategory === "Esim" ? (

          <EsimHome />

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {currentPackages.map((item, i) => (

              <article
                key={i}
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
                    alt={`${item.name} package`}
                    width={400}
                    height={170}
                    priority={i < 2}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:-translate-x-10"
                  />

                </div>

                <div className="w-1/2 bg-white px-5 py-4 flex flex-col justify-center transition-all duration-500 ease-out group-hover:-translate-x-6">

                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <div className="mt-4">

                    <p className="text-sm text-gray-500">
                      Price
                    </p>

                    <p className="text-[#0F91D5] text-xl font-bold">
                      {item.price}
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
                src={selectedPackage.img.startsWith("c") ? `/assets/tour/${selectedPackage.img}` : `/assets/home/${selectedPackage.img}`}
                alt={selectedPackage.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedPackage.name}
                  </h3>
                  <p className="text-gray-500 mt-1">{selectedPackage.country}</p>
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
                  {selectedPackage.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Starting From
            </p>
                <p className="text-[#0F91D5] text-2xl font-bold">
                  {selectedPackage.price}
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

  Contact on WhatsApp
</a>
              <button
                onClick={() => setSelectedPackage(null)}
                className="mt-3 w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopularTourPackages;   