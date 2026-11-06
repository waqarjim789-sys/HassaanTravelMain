"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { createTranslator } from "@/lib/createTranslator";

// The office always receives this message in English.
const WHATSAPP_MESSAGE =
  "Hello! I would like to book a flight or get more details about flights.";

// Encoding is required so spaces and special characters work in the URL.
const WHATSAPP_URL = `https://wa.me/31104857673?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const getWhatsAppTranslation = createTranslator(
  { label: "Chat with us on WhatsApp" } as const,
  {
    nl: { label: "Chat met ons via WhatsApp" },
    de: { label: "Chatten Sie mit uns auf WhatsApp" },
    fr: { label: "Discutez avec nous sur WhatsApp" },
    it: { label: "Chatta con noi su WhatsApp" },
    es: { label: "Chatea con nosotros por WhatsApp" },
    ar: { label: "تحدث معنا عبر واتساب" },
    ur: { label: "واٹس ایپ پر ہم سے بات کریں" },
  }
);

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const { label } = getWhatsAppTranslation(language);

  const grow = (element: HTMLElement) => {
    element.style.transform = "scale(1.1)";
  };

  const shrink = (element: HTMLElement) => {
    element.style.transform = "scale(1)";
  };

  return (
    <div
      dir={getDirection(language)}
      style={{
        position: "fixed",
        bottom: "24px",
        // End side: right in LTR, left in RTL.
        insetInlineEnd: "24px",
        zIndex: 9999,
      }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "transparent",
          boxShadow: "none",
          transition: "all 0.3s ease",
          textDecoration: "none",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => grow(e.currentTarget)}
        onMouseLeave={(e) => shrink(e.currentTarget)}
        onFocus={(e) => grow(e.currentTarget)}
        onBlur={(e) => shrink(e.currentTarget)}
      >
        <img
          src="/assets/wa.webp"
          alt=""
          aria-hidden="true"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </a>
    </div>
  );
}