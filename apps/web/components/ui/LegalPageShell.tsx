"use client";

import type { ReactNode } from "react";
import CommonHeader from "@/components/ui/CommonHeader";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { createTranslator, resolveLocale } from "@/lib/createTranslator";

/**
 * Shared wrapper for legal pages (owner decision: option a).
 * - Translates only the page heading and an "available only in …" notice.
 * - The legal text itself stays in its original language and always
 *   renders left-to-right, even on Arabic/Urdu pages.
 */

export type LegalPageKey = "privacy" | "terms" | "disclaimer" | "generalTerms";
type ContentLanguage = "en" | "nl";

const getLegalTranslation = createTranslator(
  {
    headings: {
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      disclaimer: "Disclaimer",
      generalTerms: "General Terms",
    },
    notice: {
      // Shown when the visitor's language differs from the document language.
      onlyEnglish: "This document is available in English only.",
      onlyDutch: "This document is available in Dutch only.",
    },
  } as const,
  {
    nl: {
      headings: {
        privacy: "Privacybeleid",
        terms: "Algemene voorwaarden",
        disclaimer: "Disclaimer",
        generalTerms: "Algemene voorwaarden",
      },
      notice: {
        onlyEnglish: "Dit document is alleen beschikbaar in het Engels.",
        onlyDutch: "Dit document is alleen beschikbaar in het Nederlands.",
      },
    },
    de: {
      headings: {
        privacy: "Datenschutzerklärung",
        terms: "Allgemeine Geschäftsbedingungen",
        disclaimer: "Haftungsausschluss",
        generalTerms: "Allgemeine Bedingungen",
      },
      notice: {
        onlyEnglish: "Dieses Dokument ist nur auf Englisch verfügbar.",
        onlyDutch: "Dieses Dokument ist nur auf Niederländisch verfügbar.",
      },
    },
    fr: {
      headings: {
        privacy: "Politique de confidentialité",
        terms: "Conditions générales",
        disclaimer: "Avertissement",
        generalTerms: "Conditions générales",
      },
      notice: {
        onlyEnglish: "Ce document est uniquement disponible en anglais.",
        onlyDutch: "Ce document est uniquement disponible en néerlandais.",
      },
    },
    it: {
      headings: {
        privacy: "Informativa sulla privacy",
        terms: "Termini e condizioni",
        disclaimer: "Esclusione di responsabilità",
        generalTerms: "Condizioni generali",
      },
      notice: {
        onlyEnglish: "Questo documento è disponibile solo in inglese.",
        onlyDutch: "Questo documento è disponibile solo in olandese.",
      },
    },
    es: {
      headings: {
        privacy: "Política de privacidad",
        terms: "Términos y condiciones",
        disclaimer: "Aviso legal",
        generalTerms: "Condiciones generales",
      },
      notice: {
        onlyEnglish: "Este documento solo está disponible en inglés.",
        onlyDutch: "Este documento solo está disponible en neerlandés.",
      },
    },
    ar: {
      headings: {
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام",
        disclaimer: "إخلاء المسؤولية",
        generalTerms: "الشروط العامة",
      },
      notice: {
        onlyEnglish: "هذه الوثيقة متاحة باللغة الإنجليزية فقط.",
        onlyDutch: "هذه الوثيقة متاحة باللغة الهولندية فقط.",
      },
    },
    ur: {
      headings: {
        privacy: "پرائیویسی پالیسی",
        terms: "شرائط و ضوابط",
        disclaimer: "دستبرداری",
        generalTerms: "عمومی شرائط",
      },
      notice: {
        onlyEnglish: "یہ دستاویز صرف انگریزی میں دستیاب ہے۔",
        onlyDutch: "یہ دستاویز صرف ڈچ زبان میں دستیاب ہے۔",
      },
    },
  }
);

export default function LegalPageShell({
  page,
  contentLang,
  showHeader = true,
  children,
}: {
  page: LegalPageKey;
  /** Language the legal text is written in. */
  contentLang: ContentLanguage;
  /** Algemene Voorwaarden has no hero header in the original page. */
  showHeader?: boolean;
  children: ReactNode;
}) {
  const { language } = useLanguage();
  const t = getLegalTranslation(language);
  const visitorLocale = resolveLocale(language);

  const showNotice = visitorLocale !== contentLang;
  const notice =
    contentLang === "en" ? t.notice.onlyEnglish : t.notice.onlyDutch;

  return (
    <main dir={getDirection(language)} className="w-full text-gray-800">
      {showHeader && <CommonHeader heading={t.headings[page]} />}

      {showNotice && (
        <div className="max-w-6xl mx-auto px-6 pt-6">
          <p
            role="note"
            className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-[#0F91D5] text-start"
          >
            {notice}
          </p>
        </div>
      )}

      {/* Legal text: original language, always left-to-right */}
      <div lang={contentLang} dir="ltr">
        {children}
      </div>
    </main>
  );
}