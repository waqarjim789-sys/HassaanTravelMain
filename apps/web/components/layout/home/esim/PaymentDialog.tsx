"use client";

import type { PaymentDialogProps } from "./types";
import { useEffect, useId, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";

const translations = {
  "en": {
    "title": "Secure Checkout",
    "subtitle": "HT Connect Global eSIM",
    "country": "Country",
    "package": "Package",
    "data": "Data",
    "validity": "Validity",
    "total": "Total",
    "payING": "Pay with ING Checkout",
    "payMollie": "Pay with Mollie",
    "cancel": "Cancel",
    "ingNotice": "ING Checkout integration will be connected in the next phase.",
    "mollieNotice": "Mollie integration will be connected in the next phase.",
    "packageTitle": "eSIM Package"
  },
  "nl": {
    "title": "Veilig afrekenen",
    "subtitle": "HT Connect Wereldwijde eSIM",
    "country": "Land",
    "package": "Pakket",
    "data": "Data",
    "validity": "Geldigheid",
    "total": "Totaal",
    "payING": "Betalen met ING Checkout",
    "payMollie": "Betalen met Mollie",
    "cancel": "Annuleren",
    "ingNotice": "De ING Checkout-integratie wordt in de volgende fase aangesloten.",
    "mollieNotice": "De Mollie-integratie wordt in de volgende fase aangesloten.",
    "packageTitle": "eSIM-pakket"
  },
  "de": {
    "title": "Sicher bezahlen",
    "subtitle": "HT Connect Weltweite eSIM",
    "country": "Land",
    "package": "Paket",
    "data": "Datenvolumen",
    "validity": "Gültigkeit",
    "total": "Gesamt",
    "payING": "Mit ING Checkout bezahlen",
    "payMollie": "Mit Mollie bezahlen",
    "cancel": "Abbrechen",
    "ingNotice": "Die ING Checkout-Integration wird in der nächsten Phase eingerichtet.",
    "mollieNotice": "Die Mollie-Integration wird in der nächsten Phase eingerichtet.",
    "packageTitle": "eSIM-Paket"
  },
  "fr": {
    "title": "Paiement sécurisé",
    "subtitle": "HT Connect eSIM mondiale",
    "country": "Pays",
    "package": "Forfait",
    "data": "Données",
    "validity": "Validité",
    "total": "Total",
    "payING": "Payer avec ING Checkout",
    "payMollie": "Payer avec Mollie",
    "cancel": "Annuler",
    "ingNotice": "L’intégration d’ING Checkout sera mise en place lors de la prochaine phase.",
    "mollieNotice": "L’intégration de Mollie sera mise en place lors de la prochaine phase.",
    "packageTitle": "Forfait eSIM"
  },
  "it": {
    "title": "Pagamento sicuro",
    "subtitle": "HT Connect eSIM globale",
    "country": "Paese",
    "package": "Pacchetto",
    "data": "Dati",
    "validity": "Validità",
    "total": "Totale",
    "payING": "Paga con ING Checkout",
    "payMollie": "Paga con Mollie",
    "cancel": "Annulla",
    "ingNotice": "L’integrazione di ING Checkout verrà attivata nella prossima fase.",
    "mollieNotice": "L’integrazione di Mollie verrà attivata nella prossima fase.",
    "packageTitle": "Pacchetto eSIM"
  },
  "es": {
    "title": "Pago seguro",
    "subtitle": "HT Connect eSIM global",
    "country": "País",
    "package": "Paquete",
    "data": "Datos",
    "validity": "Validez",
    "total": "Total",
    "payING": "Pagar con ING Checkout",
    "payMollie": "Pagar con Mollie",
    "cancel": "Cancelar",
    "ingNotice": "La integración de ING Checkout se conectará en la próxima fase.",
    "mollieNotice": "La integración de Mollie se conectará en la próxima fase.",
    "packageTitle": "Paquete eSIM"
  },
  "ar": {
    "title": "الدفع الآمن",
    "subtitle": "HT Connect eSIM عالمية",
    "country": "البلد",
    "package": "الباقة",
    "data": "البيانات",
    "validity": "الصلاحية",
    "total": "الإجمالي",
    "payING": "الدفع عبر ING Checkout",
    "payMollie": "الدفع عبر Mollie",
    "cancel": "إلغاء",
    "ingNotice": "سيتم ربط خدمة ING Checkout في المرحلة القادمة.",
    "mollieNotice": "سيتم ربط خدمة Mollie في المرحلة القادمة.",
    "packageTitle": "باقة eSIM"
  },
  "ur": {
    "title": "محفوظ ادائیگی",
    "subtitle": "HT Connect عالمی eSIM",
    "country": "ملک",
    "package": "پیکیج",
    "data": "ڈیٹا",
    "validity": "مدت",
    "total": "کل رقم",
    "payING": "ING Checkout سے ادائیگی کریں",
    "payMollie": "Mollie سے ادائیگی کریں",
    "cancel": "منسوخ کریں",
    "ingNotice": "ING Checkout کی سہولت اگلے مرحلے میں منسلک کی جائے گی۔",
    "mollieNotice": "Mollie کی سہولت اگلے مرحلے میں منسلک کی جائے گی۔",
    "packageTitle": "eSIM پیکیج"
  }
} as const;

function getCountryName(code: string, fallback: string, language: string): string {
  const region = code.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(region) || region === "ZZ") return fallback;
  try {
    return new Intl.DisplayNames([language], { type: "region", fallback: "none" }).of(region) || fallback;
  } catch {
    return fallback;
  }
}

export default function PaymentDialog({
  open,
  packageItem,
  country,
  onClose,
}: PaymentDialogProps) {
  const { language } = useLanguage();
  const t = translations[language] ?? translations.en;
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const active = open && !!packageItem && !!country;

  useEffect(() => {
    if (!active) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") { event.preventDefault(); onClose(); }
      if (event.key === "Tab") {
        const buttons = Array.from(dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])') ?? []);
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (!first || !last) { event.preventDefault(); return; }
        if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialogRef.current)) {
          event.preventDefault(); first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [active, onClose]);

  if (!open || !packageItem || !country) return null;

  const countryName = getCountryName(country.code, country.country, language);
  const price = new Intl.NumberFormat(language, { style: "currency", currency: "EUR" }).format(packageItem.price);
  const validity = new Intl.NumberFormat(language, { style: "unit", unit: "day", unitDisplay: "long" }).format(packageItem.days);

  const handleING = () => {
    alert(t.ingNotice);
  };

  const handleMollie = () => {
    alert(t.mollieNotice);
  };

  return (
    <div
      dir={getDirection(language)}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F91D5] text-white p-6">
          <h2 id={titleId} className="text-2xl font-bold">{t.title}</h2>

          <p className="text-blue-100 mt-2">{t.subtitle}</p>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">{t.country}</span>

              <span className="font-semibold">
                {country.flag} {countryName}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">{t.package}</span>

              <span className="font-semibold">{packageItem.title === "eSIM Package" ? t.packageTitle : packageItem.title}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">{t.data}</span>

              <span className="font-semibold">{packageItem.data === "Data" ? t.data : packageItem.data}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">{t.validity}</span>

              <span className="font-semibold">{validity}</span>
            </div>
          </div>

          <div className="border-t mt-6 pt-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">{t.total}</span>

              <span className="text-3xl font-bold text-[#0F91D5]">
                <bdi>{price}</bdi>
              </span>
            </div>
          </div>

          {/* Payment Buttons */}

          <div className="mt-8 space-y-4">
            <button
              type="button"
              onClick={handleING}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition"
            >
              {t.payING}
            </button>

            <button
              type="button"
              onClick={handleMollie}
              className="w-full bg-[#0F91D5] hover:bg-[#0b7cbc] text-white font-bold py-4 rounded-xl transition"
            >
              {t.payMollie}
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full bg-gray-100 hover:bg-gray-200 py-3 rounded-xl font-semibold"
          >
            {t.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}
