"use client";

import { useEffect, useState } from "react";
import type { PackageModalProps, EsimPackage } from "./types";
import PaymentDialog from "./PaymentDialog";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";

const translations = {
  "en": {
    "choose": "Choose your eSIM package",
    "close": "Close",
    "data": "Data",
    "validity": "Validity",
    "coverage": "Coverage",
    "network": "Network",
    "operator": "Operator",
    "activation": "Activation",
    "buyNow": "Buy Now",
    "notSpecified": "Not specified",
    "instant": "Instant",
    "international": "International",
    "packageTitle": "eSIM Package",
    "noPackages": "No packages are available for this country."
  },
  "nl": {
    "choose": "Kies uw eSIM-pakket",
    "close": "Sluiten",
    "data": "Data",
    "validity": "Geldigheid",
    "coverage": "Dekking",
    "network": "Netwerk",
    "operator": "Provider",
    "activation": "Activering",
    "buyNow": "Nu kopen",
    "notSpecified": "Niet opgegeven",
    "instant": "Direct",
    "international": "Internationaal",
    "packageTitle": "eSIM-pakket",
    "noPackages": "Er zijn geen pakketten beschikbaar voor dit land."
  },
  "de": {
    "choose": "Wählen Sie Ihr eSIM-Paket",
    "close": "Schließen",
    "data": "Datenvolumen",
    "validity": "Gültigkeit",
    "coverage": "Abdeckung",
    "network": "Netzwerk",
    "operator": "Anbieter",
    "activation": "Aktivierung",
    "buyNow": "Jetzt kaufen",
    "notSpecified": "Nicht angegeben",
    "instant": "Sofort",
    "international": "International",
    "packageTitle": "eSIM-Paket",
    "noPackages": "Für dieses Land sind keine Pakete verfügbar."
  },
  "fr": {
    "choose": "Choisissez votre forfait eSIM",
    "close": "Fermer",
    "data": "Données",
    "validity": "Validité",
    "coverage": "Couverture",
    "network": "Réseau",
    "operator": "Opérateur",
    "activation": "Activation",
    "buyNow": "Acheter maintenant",
    "notSpecified": "Non précisé",
    "instant": "Instantanée",
    "international": "Internationale",
    "packageTitle": "Forfait eSIM",
    "noPackages": "Aucun forfait n’est disponible pour ce pays."
  },
  "it": {
    "choose": "Scegli il tuo pacchetto eSIM",
    "close": "Chiudi",
    "data": "Dati",
    "validity": "Validità",
    "coverage": "Copertura",
    "network": "Rete",
    "operator": "Operatore",
    "activation": "Attivazione",
    "buyNow": "Acquista ora",
    "notSpecified": "Non specificato",
    "instant": "Immediata",
    "international": "Internazionale",
    "packageTitle": "Pacchetto eSIM",
    "noPackages": "Non sono disponibili pacchetti per questo paese."
  },
  "es": {
    "choose": "Elija su paquete eSIM",
    "close": "Cerrar",
    "data": "Datos",
    "validity": "Validez",
    "coverage": "Cobertura",
    "network": "Red",
    "operator": "Operador",
    "activation": "Activación",
    "buyNow": "Comprar ahora",
    "notSpecified": "No especificado",
    "instant": "Instantánea",
    "international": "Internacional",
    "packageTitle": "Paquete eSIM",
    "noPackages": "No hay paquetes disponibles para este país."
  },
  "ar": {
    "choose": "اختر باقة eSIM الخاصة بك",
    "close": "إغلاق",
    "data": "البيانات",
    "validity": "الصلاحية",
    "coverage": "التغطية",
    "network": "الشبكة",
    "operator": "المشغّل",
    "activation": "التفعيل",
    "buyNow": "اشترِ الآن",
    "notSpecified": "غير محدد",
    "instant": "فوري",
    "international": "دولية",
    "packageTitle": "باقة eSIM",
    "noPackages": "لا توجد باقات متاحة لهذا البلد."
  },
  "ur": {
    "choose": "اپنا eSIM پیکیج منتخب کریں",
    "close": "بند کریں",
    "data": "ڈیٹا",
    "validity": "مدت",
    "coverage": "کوریج",
    "network": "نیٹ ورک",
    "operator": "آپریٹر",
    "activation": "ایکٹیویشن",
    "buyNow": "ابھی خریدیں",
    "notSpecified": "درج نہیں",
    "instant": "فوری",
    "international": "بین الاقوامی",
    "packageTitle": "eSIM پیکیج",
    "noPackages": "اس ملک کے لیے کوئی پیکیج دستیاب نہیں ہے۔"
  }
} as const;

function localizeCountry(code: string, fallback: string, language: string): string {
  const region = code.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(region) || region === "ZZ") return fallback;
  try {
    return new Intl.DisplayNames([language], { type: "region", fallback: "none" }).of(region) || fallback;
  } catch {
    return fallback;
  }
}

export default function PackageModal({ country, onClose }: PackageModalProps) {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.en;
  const formatPrice = (price: number) => new Intl.NumberFormat(language, {
    style: "currency", currency: "EUR",
  }).format(price);
  const formatDays = (days: number) => new Intl.NumberFormat(language, {
    style: "unit", unit: "day", unitDisplay: "long",
  }).format(days);
  const displayValue = (value: string | null | undefined) => {
    if (!value?.trim()) return t.notSpecified;
    if (value === "Instant") return t.instant;
    if (value === "International") return t.international;
    if (value === "Data") return t.data;
    return value;
  };
  const [selectedPackage, setSelectedPackage] = useState<EsimPackage | null>(
    null,
  );

  useEffect(() => {
    setSelectedPackage(null);
  }, [country?.id]);

  const closePackages = () => {
    setSelectedPackage(null);
    onClose();
  };

  if (!country) return null;
  const countryName = localizeCountry(country.code, country.country, language);

  return (
    <>
      <div
        dir={getDirection(language)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={closePackages}
      >
        <div
          className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold">
                  {country.flag} {countryName}
                </h2>

                <p className="text-gray-500 mt-2">{t.choose}</p>
              </div>

              <button
                type="button"
                aria-label={t.close}
                onClick={closePackages}
                className="text-3xl text-gray-500 hover:text-black"
              >
                ×
              </button>
            </div>
          </div>

          {/* Packages */}

          <div className="p-6 space-y-5">
            {country.packages.length === 0 && <p role="status" className="text-gray-500">{t.noPackages}</p>}
            {country.packages.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-2xl border border-gray-200 p-6 hover:border-[#0F91D5] hover:shadow-lg transition"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
                  <div>
                    <h3 className="text-xl font-bold">{pkg.title === "eSIM Package" ? t.packageTitle : pkg.title}</h3>

                    <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600">
                      <div>
                        <strong>{t.data}:</strong> {displayValue(pkg.data)}
                      </div>

                      <div>
                        <strong>{t.validity}:</strong> {formatDays(pkg.days)}
                      </div>

                      <div>
                        <strong>{t.coverage}:</strong> {localizeCountry(pkg.coverage || "", displayValue(pkg.coverage), language)}
                      </div>

                      <div>
                        <strong>{t.network}:</strong> {displayValue(pkg.network)}
                      </div>

                      <div>
                        <strong>{t.operator}:</strong> {displayValue(pkg.operator)}
                      </div>

                      <div>
                        <strong>{t.activation}:</strong> {displayValue(pkg.activation)}
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#0F91D5]">
                      <bdi>{formatPrice(pkg.price)}</bdi>
                    </p>

                    <button
                      type="button"
                      onClick={() => setSelectedPackage(pkg)}
                      className="mt-4 w-full lg:w-auto bg-[#0F91D5] hover:bg-[#0d80bd] text-white px-8 py-3 rounded-xl font-semibold transition"
                    >
                      {t.buyNow}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PaymentDialog
        open={selectedPackage !== null}
        packageItem={selectedPackage}
        country={country}
        onClose={() => setSelectedPackage(null)}
      />
    </>
  );
}
