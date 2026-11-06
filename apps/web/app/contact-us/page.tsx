"use client";

import Faqs from "@/components/ui/Faqs";
import Testimonials from "@/components/ui/Testimonials";
import CommonHeader from "@/components/ui/CommonHeader";
import Map from "@/components/ui/Map";
import { useLanguage } from "@/components/LanguageProvider";
import { resolveLocale } from "@/lib/createTranslator";

const imageLinks = [
  "/assets/contact-us/1.webp",
  "/assets/contact-us/2.webp",
  "/assets/contact-us/3.webp",
];

const headerTranslations = {
  en: {
    heading: "Get in touch with us",
    desc: "Our travel experts are ready to help you every step of the way",
  },
  nl: {
    heading: "Neem contact met ons op",
    desc: "Onze reisexperts staan klaar om u bij elke stap te helpen",
  },
  de: {
    heading: "Kontaktieren Sie uns",
    desc: "Unsere Reiseexperten helfen Ihnen bei jedem Schritt gerne weiter",
  },
  fr: {
    heading: "Contactez-nous",
    desc: "Nos experts en voyages sont prêts à vous accompagner à chaque étape",
  },
  it: {
    heading: "Contattaci",
    desc: "I nostri esperti di viaggio sono pronti ad aiutarti in ogni fase",
  },
  es: {
    heading: "Ponte en contacto con nosotros",
    desc: "Nuestros expertos en viajes están listos para ayudarte en cada paso",
  },
  ar: {
    heading: "تواصل معنا",
    desc: "خبراؤنا في السفر مستعدون لمساعدتك في كل خطوة",
  },
  ur: {
    heading: "ہم سے رابطہ کریں",
    desc: "ہمارے سفری ماہرین ہر قدم پر آپ کی مدد کے لیے تیار ہیں",
  },
} as const;

export default function ContactPage() {
  const { language } = useLanguage();

  // Safe normalization: "nl-NL" -> "nl", unsupported -> "en".
  const lang = resolveLocale(language);

  const t = headerTranslations[lang] ?? headerTranslations.en;

  return (
    <>
      <CommonHeader heading={t.heading} desc={t.desc} />

      <Map />

      <Faqs imagesLinks={imageLinks} />

      <Testimonials bgImage="/assets/about-us/3.webp" />
    </>
  );
}