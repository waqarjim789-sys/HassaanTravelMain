"use client";

import React, { useState } from "react";
import { FaPhoneAlt, FaCalendarAlt, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import BookingModal from "@/components/ui/BookingModal";
import { useLanguage } from "@/components/LanguageProvider";
import { aboutUsTranslations } from "@/translations/aboutUs";

const IataRecognized = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();

  const t =
    aboutUsTranslations[language as keyof typeof aboutUsTranslations] ||
    aboutUsTranslations.en;

  const iataTranslations = {
    en: {
      badge: "IATA Accredited",
      title: "Travel with",
      titleHighlight: "Confidence",
      titleHighlight2: "Worldwide",
      description:
        "As an IATA-accredited travel agency, we provide reliable travel solutions, expert guidance and professional support for your journey.",
      callNow: "Call Now",
      bookNow: "Book Now",
      hours: "Mon-Sat: 09:00 - 18:00",
    },

    nl: {
      badge: "IATA Geaccrediteerd",
      title: "Reis met",
      titleHighlight: "Vertrouwen",
      titleHighlight2: "Wereldwijd",
      description:
        "Als IATA-geaccrediteerd reisbureau bieden wij betrouwbare reisoplossingen, deskundige begeleiding en professionele ondersteuning voor uw reis.",
      callNow: "Bel nu",
      bookNow: "Boek nu",
      hours: "Ma-Za: 09:00 - 18:00",
    },

    de: {
      badge: "IATA Akkreditiert",
      title: "Reisen Sie mit",
      titleHighlight: "Vertrauen",
      titleHighlight2: "Weltweit",
      description:
        "Als IATA-akkreditiertes Reisebüro bieten wir zuverlässige Reiselösungen, fachkundige Beratung und professionelle Unterstützung für Ihre Reise.",
      callNow: "Jetzt anrufen",
      bookNow: "Jetzt buchen",
      hours: "Mo-Sa: 09:00 - 18:00 Uhr",
    },

    fr: {
      badge: "Accrédité IATA",
      title: "Voyagez en toute",
      titleHighlight: "Confiance",
      titleHighlight2: "Partout dans le monde",
      description:
        "En tant qu'agence de voyage accréditée IATA, nous proposons des solutions de voyage fiables, des conseils d'experts et une assistance professionnelle pour votre voyage.",
      callNow: "Appelez maintenant",
      bookNow: "Réserver maintenant",
      hours: "Lun-Sam : 09h00 - 18h00",
    },

    it: {
      badge: "Accreditato IATA",
      title: "Viaggia con",
      titleHighlight: "Fiducia",
      titleHighlight2: "In tutto il mondo",
      description:
        "In qualità di agenzia di viaggi accreditata IATA, offriamo soluzioni di viaggio affidabili, consulenza esperta e assistenza professionale per il vostro viaggio.",
      callNow: "Chiama ora",
      bookNow: "Prenota ora",
      hours: "Lun-Sab: 09:00 - 18:00",
    },

    es: {
      badge: "Acreditado por IATA",
      title: "Viaja con",
      titleHighlight: "Confianza",
      titleHighlight2: "En todo el mundo",
      description:
        "Como agencia de viajes acreditada por IATA, ofrecemos soluciones de viaje fiables, asesoramiento experto y asistencia profesional para su viaje.",
      callNow: "Llamar ahora",
      bookNow: "Reservar ahora",
      hours: "Lun-Sáb: 09:00 - 18:00",
    },

    ar: {
      badge: "معتمد من IATA",
      title: "سافر بكل",
      titleHighlight: "ثقة",
      titleHighlight2: "حول العالم",
      description:
        "بصفتنا وكالة سفر معتمدة من IATA، نقدم حلول سفر موثوقة وإرشادات متخصصة ودعمًا احترافيًا لرحلتكم.",
      callNow: "اتصل الآن",
      bookNow: "احجز الآن",
      hours: "الإثنين-السبت: 9:00 صباحًا - 6:00 مساءً",
    },

    ur: {
      badge: "IATA سے منظور شدہ",
      title: "اعتماد کے ساتھ",
      titleHighlight: "سفر کریں",
      titleHighlight2: "دنیا بھر میں",
      description:
        "IATA سے منظور شدہ ٹریول ایجنسی کی حیثیت سے ہم آپ کے سفر کے لیے قابلِ اعتماد سفری سہولیات، ماہر رہنمائی اور پیشہ ورانہ معاونت فراہم کرتے ہیں۔",
      callNow: "ابھی کال کریں",
      bookNow: "ابھی بک کریں",
      hours: "پیر-ہفتہ: صبح 9:00 - شام 6:00",
    },
  };

  const data =
    iataTranslations[language as keyof typeof iataTranslations] ||
    iataTranslations.en;

  return (
    <section
      className="py-20 px-6 bg-[#1e88c8] text-center text-white relative"
      dir={language === "ar" || language === "ur" ? "rtl" : "ltr"}
    >
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs px-4 py-1.5 rounded-full">
          <FaStar className="text-yellow-300" />
          {data.badge}
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        {data.title}{" "}
        <span className="text-[#d4e157]">{data.titleHighlight}</span>
        <br />
        <span className="text-[#d4e157]">{data.titleHighlight2}</span>
      </h2>

      <p className="text-white/90 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
        {data.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <a
          href="tel:+31104857673"
          className="bg-[#d4e157] text-black px-6 py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition flex items-center gap-2 justify-center"
        >
          <FaPhoneAlt size={14} />
          {data.callNow}
        </a>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-[#1e88c8] px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition flex items-center gap-2 justify-center cursor-pointer"
        >
          <FaCalendarAlt size={14} />
          {data.bookNow}
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-white/90 text-xs">
        <a
          href="tel:+31104857673"
          className="flex items-center gap-2 hover:underline"
          dir="ltr"
        >
          <FaPhoneAlt />
          +31 (0) 104857673
        </a>

        <a
          href="mailto:info@hassaantravel.nl"
          className="flex items-center gap-2 hover:underline"
          dir="ltr"
        >
          <MdEmail />
          info@hassaantravel.nl
        </a>

        <div className="flex items-center gap-2">
          <BsClockFill />
          {data.hours}
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[9999]">
        <div className="pointer-events-auto">
          <BookingModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default IataRecognized;