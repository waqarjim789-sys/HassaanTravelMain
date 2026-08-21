"use client";

import { useEffect, useState } from "react";

import { countries as initialCountries } from "./data";
import CountryGrid from "./CountryGrid";
import PackageModal from "./PackageModal";
import type { Country, EsimPackage } from "./types";

type ApiPackage = {
  packageCode?: string;
  slug?: string | null;
  name?: string;
  data?: string | null;
  volume?: number | null;
  duration?: number | null;
  durationUnit?: string;
  validity?: string | null;
  network?: string;
  coverage?: string;
  countryCode?: string;
  price?: number;
  displayPrice?: string;
  currency?: "EUR" | string;
  instantDelivery?: boolean;
};

type ApiResponse = {
  success?: boolean;
  errorCode?: string | null;
  errorMsg?: string | null;
  countryCode?: string;
  packageCount?: number;
  packages?: ApiPackage[];
};

function formatData(volume?: number | null, name?: string): string {
  if (typeof volume === "number" && volume > 0) {
    const gb = volume / 1024 / 1024 / 1024;

    if (gb >= 1) {
      return `${Number(gb.toFixed(2))}GB`;
    }

    return `${Math.round(volume / 1024 / 1024)}MB`;
  }

  const match = name?.match(/(\d+(?:\.\d+)?)\s*(GB|MB)/i);
  const amount = match?.[1];
  const unit = match?.[2];

  return amount && unit ? `${amount}${unit.toUpperCase()}` : "Data";
}

function mapPackage(
  packageItem: ApiPackage,
  index: number,
): EsimPackage | null {
  if (
    !packageItem.packageCode ||
    typeof packageItem.price !== "number" ||
    packageItem.price <= 0 ||
    packageItem.currency !== "EUR"
  ) {
    return null;
  }

  return {
    id: index + 1,
    packageCode: packageItem.packageCode,
    title: packageItem.name || "eSIM Package",
    price: packageItem.price,
    days: packageItem.duration ?? 0,
    data: formatData(packageItem.volume, packageItem.name),
    network: packageItem.network || "4G / 5G",
    coverage:
      packageItem.coverage || packageItem.countryCode || "International",
    activation: packageItem.instantDelivery === false ? undefined : "Instant",
    locationCode: packageItem.countryCode,
    slug: packageItem.slug ?? undefined,
  };
}

export default function EsimHome() {
  const [countries, setCountries] = useState<Country[]>(initialCountries);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPackages() {
      setLoading(true);
      setError(null);

      let successfulRequests = 0;

      const loadedCountries = await Promise.all(
        initialCountries.map(async (country) => {
          try {
            const response = await fetch("/api/esim/packages", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ locationCode: country.code }),
              cache: "no-store",
            });

            const result = (await response.json()) as ApiResponse;

            if (!response.ok || !result.success) {
              throw new Error(
                result.errorMsg || `API request failed: ${response.status}`,
              );
            }

            successfulRequests += 1;

            const packages = (result.packages ?? [])
              .map(mapPackage)
              .filter((item): item is EsimPackage => item !== null)
              .sort((a, b) => a.price - b.price);

            return {
              ...country,
              packages,
              packageCount: packages.length,
              startingPrice: packages[0]?.price ?? 0,
            };
          } catch (countryError) {
            console.error(`Failed loading ${country.code}:`, countryError);
            return country;
          }
        }),
      );

      if (cancelled) return;

      setCountries(loadedCountries);

      if (successfulRequests === 0) {
        setError("Unable to load live eSIM packages. Please try again later.");
      }

      setLoading(false);
    }

    void loadPackages();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <section className="py-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold lg:text-4xl">
            <span className="text-[#0F91D5]">HT Connect</span> Global eSIM
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-600">
            Stay connected anywhere in the world with instant eSIM activation.
            Browse live country packages and compare data, validity, coverage,
            and network options.
          </p>
        </div>

        {loading && (
          <div className="py-12 text-center">
            <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#0F91D5]" />
            <p className="mt-4 text-gray-500">Loading live eSIM packages...</p>
          </div>
        )}

        {error && !loading && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && (
          <CountryGrid countries={countries} onSelect={setSelectedCountry} />
        )}
      </section>

      <PackageModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />
    </>
  );
}
