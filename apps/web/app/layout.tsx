import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { LanguageProvider } from "../components/LanguageProvider";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import CookieBanner from "../components/CookieBanner";
import PromoPopup from "../components/promotions/PromoPopup";


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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="nl"
      dir="ltr"
      suppressHydrationWarning
    >

      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >

        <LanguageProvider>

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