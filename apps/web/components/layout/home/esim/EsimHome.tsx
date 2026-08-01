"use client";

import { useState } from "react";

type Country = {
  id: number;
  name: string;
  flag: string;
  image: string;
  packages: number;
  price: string;
};

const countries: Country[] = [
  {
    id: 1,
    name: "Netherlands",
    flag: "🇳🇱",
    image: "/assets/home/d1.webp",
    packages: 18,
    price: "From €4.99",
  },
  {
    id: 2,
    name: "Pakistan",
    flag: "🇵🇰",
    image: "/assets/home/d77.webp",
    packages: 24,
    price: "From €3.99",
  },
  {
    id: 3,
    name: "United Arab Emirates",
    flag: "🇦🇪",
    image: "/assets/home/uae.webp",
    packages: 21,
    price: "From €5.49",
  },
  {
    id: 4,
    name: "Saudi Arabia",
    flag: "🇸🇦",
    image: "/assets/home/d3.webp",
    packages: 19,
    price: "From €6.99",
  },
  {
    id: 5,
    name: "Turkey",
    flag: "🇹🇷",
    image: "/assets/home/d6.webp",
    packages: 15,
    price: "From €4.49",
  },
  {
    id: 6,
    name: "India",
    flag: "🇮🇳",
    image: "/assets/tour/c5.webp",
    packages: 20,
    price: "From €3.49",
  },
];

export default function EsimHome() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <>
      <section className="py-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8">

          <div>
            <h2 className="text-3xl font-bold text-black">
              <span className="text-[#0F91D5]">eSIM</span> Instant Service
            </h2>

            <p className="text-gray-500 mt-3 max-w-3xl">
              Purchase travel eSIMs instantly for your destination.
              Stay connected worldwide with affordable data plans,
              instant activation, secure payments and QR Code delivery.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {countries.map((country) => (

            <div
              key={country.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300"
            >

              <img
                src={country.image}
                className="w-full h-52 object-cover"
                alt={country.name}
              />

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-bold text-gray-900">
                    {country.flag} {country.name}
                  </h3>

                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                    Instant
                  </span>

                </div>

                <div className="mt-5 space-y-2 text-sm text-gray-600">

                  <div className="flex justify-between">

                    <span>Packages</span>

                    <span className="font-semibold">
                      {country.packages}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span>Network</span>

                    <span className="font-semibold">
                      4G / 5G
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span>Starting Price</span>

                    <span className="font-bold text-[#0F91D5]">
                      {country.price}
                    </span>

                  </div>

                </div>

                <button
                  onClick={() => setSelectedCountry(country)}
                  className="mt-6 w-full rounded-xl bg-[#0F91D5] py-3 font-semibold text-white hover:bg-[#0b7cbc] transition"
                >
                  View Packages
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {selectedCountry && (

        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCountry(null)}
        >

          <div
            className="bg-white rounded-3xl max-w-lg w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >

            <h2 className="text-2xl font-bold">

              {selectedCountry.flag} {selectedCountry.name}

            </h2>

            <p className="text-gray-500 mt-2">

              Sample Packages

            </p>

            <div className="mt-6 space-y-4">

              {[
                {
                  data: "5 GB",
                  days: "7 Days",
                  price: "€4.99",
                },
                {
                  data: "10 GB",
                  days: "15 Days",
                  price: "€8.99",
                },
                {
                  data: "20 GB",
                  days: "30 Days",
                  price: "€14.99",
                },
              ].map((pkg, i) => (

                <div
                  key={i}
                  className="rounded-xl border p-4 hover:border-[#0F91D5]"
                >

                  <div className="flex justify-between">

                    <div>

                      <h4 className="font-bold">

                        {pkg.data}

                      </h4>

                      <p className="text-gray-500">

                        {pkg.days}

                      </p>

                    </div>

                    <div className="text-right">

                      <p className="text-xl font-bold text-[#0F91D5]">

                        {pkg.price}

                      </p>

                    </div>

                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-5">

                    <button
                      className="rounded-xl bg-[#0F91D5] py-3 text-white font-semibold hover:bg-[#0b7cbc]"
                    >
                      ING Checkout
                    </button>

                    <button
                      className="rounded-xl border border-[#0F91D5] text-[#0F91D5] py-3 font-semibold hover:bg-blue-50"
                    >
                      Mollie
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <button
              onClick={() => setSelectedCountry(null)}
              className="mt-8 w-full rounded-xl bg-gray-200 py-3 font-semibold hover:bg-gray-300"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </>
  );
}