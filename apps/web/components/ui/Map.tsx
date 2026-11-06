"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import MapForm from "../layout/home/MapForm";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { createTranslator } from "@/lib/createTranslator";

// Map section labels. Kept here because homepage.ts has no `map` block.
const getMapTranslation = createTranslator(
  {
    mapTitle: "Hassaan Travel location on Google Maps",
    availability: "We are available:",
    hoursWeekdays: "Monday – Saturday",
    hoursSunday: "Sunday: Closed",
    phone: "Phone",
    email: "Email",
  } as const,
  {
    nl: {
      mapTitle: "Locatie van Hassaan Travel op Google Maps",
      availability: "Wij zijn bereikbaar:",
      hoursWeekdays: "Maandag – zaterdag",
      hoursSunday: "Zondag: gesloten",
      phone: "Telefoon",
      email: "E-mail",
    },
    de: {
      mapTitle: "Standort von Hassaan Travel auf Google Maps",
      availability: "Wir sind erreichbar:",
      hoursWeekdays: "Montag – Samstag",
      hoursSunday: "Sonntag: geschlossen",
      phone: "Telefon",
      email: "E-Mail",
    },
    fr: {
      mapTitle: "Emplacement de Hassaan Travel sur Google Maps",
      availability: "Nous sommes disponibles :",
      hoursWeekdays: "Du lundi au samedi",
      hoursSunday: "Dimanche : fermé",
      phone: "Téléphone",
      email: "E-mail",
    },
    it: {
      mapTitle: "Posizione di Hassaan Travel su Google Maps",
      availability: "Siamo disponibili:",
      hoursWeekdays: "Lunedì – sabato",
      hoursSunday: "Domenica: chiuso",
      phone: "Telefono",
      email: "E-mail",
    },
    es: {
      mapTitle: "Ubicación de Hassaan Travel en Google Maps",
      availability: "Estamos disponibles:",
      hoursWeekdays: "De lunes a sábado",
      hoursSunday: "Domingo: cerrado",
      phone: "Teléfono",
      email: "Correo electrónico",
    },
    ar: {
      mapTitle: "موقع Hassaan Travel على خرائط Google",
      availability: "نحن متاحون:",
      hoursWeekdays: "من الإثنين إلى السبت",
      hoursSunday: "الأحد: مغلق",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
    },
    ur: {
      mapTitle: "گوگل میپس پر Hassaan Travel کا مقام",
      availability: "ہم دستیاب ہیں:",
      hoursWeekdays: "پیر تا ہفتہ",
      hoursSunday: "اتوار: بند",
      phone: "فون",
      email: "ای میل",
    },
  }
);

const Map = () => {
  const { language } = useLanguage();
  const map = getMapTranslation(language);

  return (
    <section
      className="relative w-full py-12 sm:py-20 overflow-hidden"
      aria-labelledby="contact-section"
      dir={getDirection(language)}
    >
      {/* Decorative background image */}
      <img
        src="/assets/bgimage/h2.webp"
        loading="lazy"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.21] z-0"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* MAP SECTION */}
          <div className="order-last lg:order-first h-full">
            <iframe
              title={map.mapTitle}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.2117306042633!2d4.490947776494405!3d51.893600071903734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43375f7feb767%3A0xf6bc60deb9b9bbe4!2sHassaan%20Travel!5e0!3m2!1sen!2s!4v1781779994623!5m2!1sen!2s"
              className="rounded-xl shadow-lg w-full h-full min-h-[350px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* DETAILS */}
          <div className="space-y-4 sm:space-y-6 h-full flex flex-col justify-between min-w-0">

            {/* LOCATION CARD */}
            <article className="bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow flex gap-4 items-start text-start">
              <MapPin aria-hidden="true" className="text-green-500 shrink-0" />

              <div className="min-w-0">
                <h2 id="contact-section" className="font-semibold text-lg">
                  Hassaan Travel
                </h2>

                <address className="text-sm text-gray-500 not-italic">
                  <a
                    href="https://www.google.com/maps/place/Hassaan+Travel/@51.893538,4.4934402,21z/data=!4m6!3m5!1s0x47c43375f7feb767:0xf6bc60deb9b9bbe4!8m2!3d51.8936001!4d4.4935227!16s%2Fg%2F11cks0qrvy?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <strong>Hassaan Travel</strong>
                    <br />
                    <bdi dir="ltr">Dordtselaan 67D, 3081 BG Rotterdam, Netherlands</bdi>
                  </a>
                </address>

                <p className="text-sm text-gray-500 mt-1">{map.availability}</p>

                <p className="mt-1 font-bold text-sm sm:text-base">
                  {map.hoursWeekdays}
                  <br />
                  {map.hoursSunday}
                </p>
              </div>
            </article>

            {/* FORM */}
            <MapForm />

            {/* PHONE */}
            <article className="bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow flex items-center gap-4 text-start">
              <div aria-hidden="true" className="w-10 h-10 flex items-center justify-center bg-[#0F91D5] text-white rounded-lg shrink-0">
                <Phone />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-400">{map.phone}</p>
                <a href="tel:+31104857673" dir="ltr" className="text-sm font-medium">
                  +31 10 485 7673
                </a>
              </div>
            </article>

            {/* EMAIL */}
            <article className="bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow flex items-center gap-4 text-start">
              <div aria-hidden="true" className="w-10 h-10 flex items-center justify-center bg-[#0F91D5] text-white rounded-lg shrink-0">
                <Mail />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-400">{map.email}</p>
                <a href="mailto:info@hassaantravel.nl" dir="ltr" className="text-sm font-medium break-all">
                  info@hassaantravel.nl
                </a>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;