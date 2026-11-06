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


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});


const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});


export const metadata: Metadata = {
  title: "Hassaan Travel",
  description:
    "Flights, Visas, Umrah and Holiday Packages with Hassaan Travel.",
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