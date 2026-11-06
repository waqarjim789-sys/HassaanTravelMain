"use client";

import { resolveLocale } from "@/lib/createTranslator";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillAirplaneFill } from "react-icons/bs";
import Testimonials from "@/components/ui/Testimonials";
import CommonHeader from "@/components/ui/CommonHeader";
import HeroSection from "@/components/layout/destination/HeroSection";
import TicketRequestForm from "@/components/layout/destination/TicketRequestForm";
import BlueBgHeadAndDesc from "@/components/ui/BlueBgHeadAndDesc";
import { useLanguage } from "@/components/LanguageProvider";

const translations = {
  en: {
    heading: "Your Journey Starts Here: Book Your Tickets Online with Ease",
    desc: "Fast, Secure, and Reliable Ticket Booking for Every Traveler",
    ctaHead: "Ready to Take Off?",
    ctaDesc:
      "Join thousands of satisfied travelers who trust Hassaan Travel for their flight bookings",
    ctaButton: "Start Booking Now →",
  },

  nl: {
    heading: "Uw reis begint hier: boek eenvoudig uw tickets online",
    desc: "Snel, veilig en betrouwbaar tickets boeken voor elke reiziger",
    ctaHead: "Klaar om te vertrekken?",
    ctaDesc:
      "Sluit u aan bij duizenden tevreden reizigers die Hassaan Travel vertrouwen voor hun vluchtboekingen",
    ctaButton: "Begin nu met boeken →",
  },

  de: {
    heading: "Ihre Reise beginnt hier: Buchen Sie Ihre Tickets ganz einfach online",
    desc: "Schnelle, sichere und zuverlässige Ticketbuchung für jeden Reisenden",
    ctaHead: "Bereit zum Abflug?",
    ctaDesc:
      "Schließen Sie sich Tausenden zufriedener Reisender an, die Hassaan Travel bei ihren Flugbuchungen vertrauen",
    ctaButton: "Jetzt buchen →",
  },

  fr: {
    heading: "Votre voyage commence ici : réservez vos billets en ligne en toute simplicité",
    desc: "Une réservation de billets rapide, sécurisée et fiable pour chaque voyageur",
    ctaHead: "Prêt à décoller ?",
    ctaDesc:
      "Rejoignez des milliers de voyageurs satisfaits qui font confiance à Hassaan Travel pour leurs réservations de vols",
    ctaButton: "Commencer la réservation →",
  },

  it: {
    heading: "Il tuo viaggio inizia qui: prenota i tuoi biglietti online con facilità",
    desc: "Prenotazione dei biglietti veloce, sicura e affidabile per ogni viaggiatore",
    ctaHead: "Pronto a partire?",
    ctaDesc:
      "Unisciti a migliaia di viaggiatori soddisfatti che si affidano a Hassaan Travel per le loro prenotazioni aeree",
    ctaButton: "Inizia a prenotare →",
  },

  es: {
    heading: "Tu viaje comienza aquí: reserva tus billetes online fácilmente",
    desc: "Reserva de billetes rápida, segura y fiable para cada viajero",
    ctaHead: "¿Listo para despegar?",
    ctaDesc:
      "Únete a miles de viajeros satisfechos que confían en Hassaan Travel para sus reservas de vuelos",
    ctaButton: "Comenzar a reservar →",
  },

  ar: {
    heading: "تبدأ رحلتك من هنا: احجز تذاكرك عبر الإنترنت بسهولة",
    desc: "حجز تذاكر سريع وآمن وموثوق لكل مسافر",
    ctaHead: "هل أنت مستعد للإقلاع؟",
    ctaDesc:
      "انضم إلى آلاف المسافرين الراضين الذين يثقون بـ Hassaan Travel لحجوزات رحلاتهم الجوية",
    ctaButton: "ابدأ الحجز الآن ←",
  },

  ur: {
    heading: "آپ کا سفر یہاں سے شروع ہوتا ہے: آسانی سے آن لائن ٹکٹ بک کریں",
    desc: "ہر مسافر کے لیے تیز، محفوظ اور قابلِ اعتماد ٹکٹ بکنگ",
    ctaHead: "کیا آپ روانگی کے لیے تیار ہیں؟",
    ctaDesc:
      "ان ہزاروں مطمئن مسافروں میں شامل ہوں جو اپنی فلائٹ بکنگ کے لیے Hassaan Travel پر اعتماد کرتے ہیں",
    ctaButton: "ابھی بکنگ شروع کریں ←",
  },
} as const;

export default function Destination() {
  const { language } = useLanguage();

  const lang = resolveLocale(language) as keyof typeof translations;

  const t = translations[lang] || translations.en;

  const isRTL = lang === "ar" || lang === "ur";

  return (
    <main
      className="w-full text-gray-800"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <CommonHeader
        heading={t.heading}
        desc={t.desc}
      />

      {/* DESTINATION SECTION */}
      <HeroSection />

      {/* FORM SECTION */}
      <TicketRequestForm />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA SECTION */}
      <BlueBgHeadAndDesc
        head={t.ctaHead}
        desc={t.ctaDesc}
        btnTxt={t.ctaButton}
      />
    </main>
  );
}