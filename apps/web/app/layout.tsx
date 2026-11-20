import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { cookies, headers } from "next/headers";

import "./globals.css";

import { LanguageProvider } from "../components/LanguageProvider";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import CookieBanner from "../components/CookieBanner";
import PromoPopup from "../components/promotions/PromoPopup";

import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  getDirection,
  isSupportedLocale,
  type Locale,
} from "../i18n";


/**
 * Set by proxy.ts for this request (saved cookie, region or browser
 * language). Keep in sync with LOCALE_HEADER in proxy.ts.
 */
const LOCALE_HEADER = "x-ht-locale";

const SITE_URL = "https://www.hassaantravel.nl";
const BRAND = "Hassaan Travel";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});


const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});


/**
 * Site-wide default title + description per language.
 * Pages can later export their own title; the template adds the brand.
 * NOTE: one URL currently serves every language, so search engines index
 * only the language they receive. Per-language URLs (/nl, /en, …) with
 * hreflang are the planned fix (i18n Phase 1).
 */
const SITE_METADATA: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Hassaan Travel | Flights, Visas & Umrah – Rotterdam",
    description:
      "IATA-accredited travel agency in Rotterdam since 2009. Cheap flights, visa services, Umrah packages and holidays to Pakistan, India, Saudi Arabia and beyond.",
  },
  nl: {
    title: "Hassaan Travel | Vliegtickets, visa & Umrah – Rotterdam",
    description:
      "IATA-erkend reisbureau in Rotterdam sinds 2009. Goedkope vliegtickets, visumservice, Umrah-pakketten en reizen naar Pakistan, India, Saoedi-Arabië en meer.",
  },
  de: {
    title: "Hassaan Travel | Flüge, Visa & Umrah – Rotterdam",
    description:
      "IATA-akkreditiertes Reisebüro in Rotterdam seit 2009. Günstige Flüge, Visaservice, Umrah-Pakete und Reisen nach Pakistan, Indien, Saudi-Arabien und mehr.",
  },
  fr: {
    title: "Hassaan Travel | Vols, visas et Omra – Rotterdam",
    description:
      "Agence de voyage accréditée IATA à Rotterdam depuis 2009. Vols pas chers, services de visa, forfaits Omra et voyages vers le Pakistan, l'Inde, l'Arabie saoudite et plus encore.",
  },
  it: {
    title: "Hassaan Travel | Voli, visti e Umrah – Rotterdam",
    description:
      "Agenzia di viaggi accreditata IATA a Rotterdam dal 2009. Voli economici, servizi visti, pacchetti Umrah e viaggi in Pakistan, India, Arabia Saudita e oltre.",
  },
  es: {
    title: "Hassaan Travel | Vuelos, visados y Umrah – Róterdam",
    description:
      "Agencia de viajes acreditada por IATA en Róterdam desde 2009. Vuelos baratos, tramitación de visados, paquetes Umrah y viajes a Pakistán, India, Arabia Saudí y más.",
  },
  ar: {
    title: "Hassaan Travel | طيران وتأشيرات وعمرة – روتردام",
    description:
      "وكالة سفر معتمدة من IATA في روتردام منذ 2009. تذاكر طيران بأسعار مناسبة وخدمات تأشيرات وباقات عمرة ورحلات إلى باكستان والهند والسعودية وغيرها.",
  },
  ur: {
    title: "Hassaan Travel | فلائٹس، ویزا اور عمرہ – روٹرڈیم",
    description:
      "روٹرڈیم میں 2009 سے IATA منظور شدہ ٹریول ایجنسی۔ سستی فلائٹس، ویزا سروسز، عمرہ پیکیجز اور پاکستان، انڈیا، سعودی عرب سمیت دیگر ممالک کے سفر۔",
  },
};

/** OpenGraph expects language_TERRITORY codes. */
const OG_LOCALE: Record<Locale, string> = {
  en: "en_GB",
  nl: "nl_NL",
  de: "de_DE",
  fr: "fr_FR",
  it: "it_IT",
  es: "es_ES",
  ar: "ar_SA",
  ur: "ur_PK",
};


/** "nl-NL" / "NL" -> "nl"; unsupported or empty -> null. */
function toLocale(value: string | null | undefined): Locale | null {
  if (!value) return null;
  const base = value.trim().toLowerCase().split(/[-_]/)[0] ?? "";
  return isSupportedLocale(base) ? base : null;
}


/**
 * Language for the server render:
 * 1. Decision made by proxy.ts for this request
 * 2. Saved cookie (if the proxy did not run for this path)
 * 3. Site default (nl)
 */
async function getRequestLocale(): Promise<Locale> {
  const headerStore = await headers();
  const fromProxy = toLocale(headerStore.get(LOCALE_HEADER));
  if (fromProxy) return fromProxy;

  const cookieStore = await cookies();
  const fromCookie = toLocale(cookieStore.get(LOCALE_COOKIE)?.value);
  if (fromCookie) return fromCookie;

  return DEFAULT_LOCALE;
}


export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const site = SITE_METADATA[locale] ?? SITE_METADATA[DEFAULT_LOCALE];

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: BRAND,
    title: {
      default: site.title,
      template: `%s | ${BRAND}`,
    },
    description: site.description,
    openGraph: {
      type: "website",
      siteName: BRAND,
      title: site.title,
      description: site.description,
      locale: OG_LOCALE[locale],
    },
    twitter: {
      card: "summary",
      title: site.title,
      description: site.description,
    },
  };
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  const locale = await getRequestLocale();

  return (

    <html
      lang={locale}
      dir={getDirection(locale)}
      suppressHydrationWarning
    >

      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >

        <LanguageProvider initialLocale={locale}>

          <PromoPopup />

          <Navbar />

          {children}

          <FloatingWhatsApp />

          <CookieBanner />

          <Footer />

        </LanguageProvider>

      </body>

    </html>

  );
}