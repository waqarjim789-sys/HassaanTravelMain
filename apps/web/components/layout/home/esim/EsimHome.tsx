"use client";

import { useState } from "react";

import { countries } from "./data";

import CountryGrid from "./CountryGrid";

import PackageModal from "./PackageModal";

import { Country } from "./types";

export default function EsimHome() {
  const [selectedCountry, setSelectedCountry] =
    useState<Country | null>(null);

  return (
    <>
      <section className="py-10">

        {/* Header */}

        <div className="mb-10">

          <h2 className="text-3xl lg:text-4xl font-bold">

            <span className="text-[#0F91D5]">
              HT Connect
            </span>{" "}

            Global eSIM

          </h2>

          <p className="mt-4 text-gray-600 max-w-4xl leading-7">

            Stay connected anywhere in the world with instant eSIM
            activation.

            Browse country packages, purchase securely using
            ING Checkout or Mollie, and receive your QR Code
            instantly after payment.

          </p>

        </div>

        {/* Country Grid */}

        <CountryGrid
          countries={countries}
          onSelect={setSelectedCountry}
        />

      </section>

      {/* Package Modal */}

      <PackageModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />

    </>
  );
}