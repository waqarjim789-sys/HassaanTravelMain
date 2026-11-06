"use client";

import { useEffect, useState } from "react";

import { countries as initialCountries } from "./data";
import CountryGrid from "./CountryGrid";
import PackageModal from "./PackageModal";
import type { Country, EsimPackage } from "./types";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";

const translations = {
  "en": {
    "heading": "Global eSIM",
    "description": "Stay connected anywhere in the world with instant eSIM activation. Browse live country packages and compare data, validity, coverage, and network options.",
    "loading": "Loading live eSIM packages...",
    "error": "Unable to load live eSIM packages. Please try again later."
  },
  "nl": {
    "heading": "Wereldwijde eSIM",
    "description": "Blijf overal ter wereld verbonden met directe eSIM-activering. Bekijk actuele pakketten per land en vergelijk data, geldigheidsduur, dekking en netwerkopties.",
    "loading": "Actuele eSIM-pakketten laden...",
    "error": "De actuele eSIM-pakketten kunnen niet worden geladen. Probeer het later opnieuw."
  },
  "de": {
    "heading": "Weltweite eSIM",
    "description": "Bleiben Sie weltweit mit sofortiger eSIM-Aktivierung verbunden. Entdecken Sie aktuelle Länderpakete und vergleichen Sie Datenvolumen, Gültigkeit, Abdeckung und Netzoptionen.",
    "loading": "Aktuelle eSIM-Pakete werden geladen...",
    "error": "Aktuelle eSIM-Pakete konnten nicht geladen werden. Bitte versuchen Sie es später erneut."
  },
  "fr": {
    "heading": "eSIM mondiale",
    "description": "Restez connecté partout dans le monde grâce à l’activation instantanée de l’eSIM. Consultez les forfaits disponibles par pays et comparez les données, la durée de validité, la couverture et les réseaux.",
    "loading": "Chargement des forfaits eSIM disponibles...",
    "error": "Impossible de charger les forfaits eSIM disponibles. Veuillez réessayer plus tard."
  },
  "it": {
    "heading": "eSIM globale",
    "description": "Rimani connesso ovunque nel mondo con l’attivazione immediata dell’eSIM. Scopri i pacchetti disponibili per paese e confronta dati, validità, copertura e opzioni di rete.",
    "loading": "Caricamento dei pacchetti eSIM disponibili...",
    "error": "Impossibile caricare i pacchetti eSIM disponibili. Riprova più tardi."
  },
  "es": {
    "heading": "eSIM global",
    "description": "Manténgase conectado en cualquier lugar del mundo con la activación instantánea de la eSIM. Consulte los paquetes disponibles por país y compare datos, validez, cobertura y opciones de red.",
    "loading": "Cargando paquetes eSIM disponibles...",
    "error": "No se pueden cargar los paquetes eSIM disponibles. Inténtelo de nuevo más tarde."
  },
  "ar": {
    "heading": "eSIM عالمية",
    "description": "ابقَ متصلًا في أي مكان في العالم مع التفعيل الفوري لشريحة eSIM. تصفّح الباقات المتاحة حسب البلد وقارن البيانات ومدة الصلاحية والتغطية وخيارات الشبكة.",
    "loading": "جارٍ تحميل باقات eSIM المتاحة...",
    "error": "تعذّر تحميل باقات eSIM المتاحة. يرجى المحاولة مرة أخرى لاحقًا."
  },
  "ur": {
    "heading": "عالمی eSIM",
    "description": "eSIM کی فوری ایکٹیویشن کے ساتھ دنیا بھر میں جڑے رہیں۔ ملک کے لحاظ سے دستیاب پیکیجز دیکھیں اور ڈیٹا، مدت، کوریج اور نیٹ ورک کے اختیارات کا موازنہ کریں۔",
    "loading": "دستیاب eSIM پیکیجز لوڈ ہو رہے ہیں...",
    "error": "دستیاب eSIM پیکیجز لوڈ نہیں ہو سکے۔ براہ کرم کچھ دیر بعد دوبارہ کوشش کریں۔"
  }
} as const;



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
  const { language } = useLanguage();
  const t = translations[language] ?? translations.en;
  const [countries, setCountries] = useState<Country[]>(initialCountries);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPackages() {
      setLoading(true);
      setError(false);

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
        setError(true);
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
      <section dir={getDirection(language)} className="py-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold lg:text-4xl">
            <span dir="ltr" className="text-[#0F91D5]">HT Connect</span>{" "}{t.heading}
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-gray-600">
            {t.description}
          </p>
        </div>

        {loading && (
          <div role="status" className="py-12 text-center">
            <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#0F91D5]" />
            <p className="mt-4 text-gray-500">{t.loading}</p>
          </div>
        )}

        {error && !loading && (
          <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700">
            {t.error}
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
