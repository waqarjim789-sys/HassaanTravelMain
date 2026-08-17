"use client";

import { useEffect, useState } from "react";

import { countries as initialCountries } from "./data";
import CountryGrid from "./CountryGrid";
import PackageModal from "./PackageModal";
import { Country, EsimPackage } from "./types";
import { calculateCustomerPrice } from "@/lib/esim/pricing";

type ApiPackage = {
  packageCode?: string;
  slug?: string;
  name?: string;
  price?: number;
  currencyCode?: string;
  volume?: number;
  duration?: number;
  durationUnit?: string;
  speed?: string;
  location?: string;
  locationCode?: string;
  locationNetworkList?: Array<{
    locationName?: string;
    locationCode?: string;
    operatorList?: Array<{
      operatorName?: string;
      networkType?: string;
    }>;
  }>;
};

type ApiResponse = {
  success?: boolean;
  errorCode?: string | null;
  errorMsg?: string | null;
  obj?: {
    packageList?: ApiPackage[];
  };
};

function formatData(volume?: number, name?: string): string {
  if (volume) {
    const gb = volume / 1024 / 1024 / 1024;

    if (gb >= 1) {
      return `${Number(gb.toFixed(2))}GB`;
    }

    const mb = volume / 1024 / 1024;
    return `${Math.round(mb)}MB`;
  }

  const match = name?.match(/(\d+(?:\.\d+)?)\s*(GB|MB)/i);

  return match ? `${match[1]}${match[2].toUpperCase()}` : "Data";
}

function getOperator(packageItem: ApiPackage): string | undefined {
  const operators =
    packageItem.locationNetworkList?.flatMap(
      (location) =>
        location.operatorList?.map(
          (operator) => operator.operatorName
        ) ?? []
    ) ?? [];

  const uniqueOperators = [...new Set(operators.filter(Boolean))];

  return uniqueOperators.length
    ? uniqueOperators.join(", ")
    : undefined;
}

function mapPackage(
  packageItem: ApiPackage,
  index: number
): EsimPackage | null {
  if (
    typeof packageItem.price !== "number" ||
    packageItem.price <= 0
  ) {
    return null;
  }

  /*
   * eSIMAccess price is supplied in the smallest currency unit.
   *
   * Example:
   * 7800 = $7.80
   */
  const supplierUsd = packageItem.price / 100;

  const customerPriceEUR =
    calculateCustomerPrice(supplierUsd);

  const networkTypes =
    packageItem.locationNetworkList?.flatMap(
      (location) =>
        location.operatorList?.map(
          (operator) => operator.networkType
        ) ?? []
    ) ?? [];

  const uniqueNetworks = [
    ...new Set(networkTypes.filter(Boolean)),
  ];

  return {
    id: index + 1,

    packageCode: packageItem.packageCode,

    title:
      packageItem.name ||
      packageItem.description ||
      "eSIM Package",

    price: customerPriceEUR,

    supplierPriceUSD: supplierUsd,

    days: packageItem.duration ?? 0,

    data: formatData(
      packageItem.volume,
      packageItem.name
    ),

    network:
      uniqueNetworks.length > 0
        ? uniqueNetworks.join(" / ")
        : packageItem.speed || "4G / 5G",

    coverage:
      packageItem.location ||
      packageItem.locationCode ||
      "International",

    speed: packageItem.speed,

    operator: getOperator(packageItem),

    activation: "Instant",

    locationCode: packageItem.locationCode,

    slug: packageItem.slug,
  };
}

export default function EsimHome() {
  const [countries, setCountries] =
    useState<Country[]>(initialCountries);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [selectedCountry, setSelectedCountry] =
    useState<Country | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPackages() {
      try {
        setLoading(true);
        setError(null);

        const loadedCountries =
          await Promise.all(
            initialCountries.map(async (country) => {
              try {
                const response = await fetch(
                  "/api/esim/packages",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type":
                        "application/json",
                    },
                    body: JSON.stringify({
                      locationCode:
                        country.code,
                    }),
                    cache: "no-store",
                  }
                );

                if (!response.ok) {
                  throw new Error(
                    `API request failed: ${response.status}`
                  );
                }

                const result: ApiResponse =
                  await response.json();

                if (!result.success) {
                  throw new Error(
                    result.errorMsg ||
                      "Unable to load eSIM packages."
                  );
                }

                const packageList =
                  result.obj?.packageList ?? [];

                const mappedPackages =
                  packageList
                    .map(mapPackage)
                    .filter(
                      (
                        item
                      ): item is EsimPackage =>
                        item !== null
                    );

                const sortedPackages =
                  mappedPackages.sort(
                    (a, b) =>
                      a.price - b.price
                  );

                return {
                  ...country,

                  packages:
                    sortedPackages,

                  packageCount:
                    sortedPackages.length,

                  startingPrice:
                    sortedPackages.length
                      ? sortedPackages[0].price
                      : 0,
                };
              } catch (countryError) {
                console.error(
                  `Failed loading ${country.code}:`,
                  countryError
                );

                return country;
              }
            })
          );

        if (!cancelled) {
          setCountries(loadedCountries);
        }
      } catch (loadError) {
        console.error(
          "eSIM package loading error:",
          loadError
        );

        if (!cancelled) {
          setError(
            "Unable to load live eSIM packages."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadPackages();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <section className="py-10">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold">
            <span className="text-[#0F91D5]">
              HT Connect
            </span>{" "}
            Global eSIM
          </h2>

          <p className="mt-4 text-gray-600 max-w-4xl leading-7">
            Stay connected anywhere in the world
            with instant eSIM activation.
            Browse country packages, purchase
            securely using ING Checkout or Mollie,
            and receive your QR Code instantly
            after payment.
          </p>
        </div>

        {loading && (
          <div className="py-12 text-center">
            <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#0F91D5]" />

            <p className="mt-4 text-gray-500">
              Loading live eSIM packages...
            </p>
          </div>
        )}

        {error && !loading && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && (
          <CountryGrid
            countries={countries}
            onSelect={setSelectedCountry}
          />
        )}
      </section>

      <PackageModal
        country={selectedCountry}
        onClose={() =>
          setSelectedCountry(null)
        }
      />
    </>
  );
}