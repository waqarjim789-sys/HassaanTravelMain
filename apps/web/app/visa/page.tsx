"use client";

import MutipleImageRightText from "@/components/ui/MutipleImageRightText";
import Services from "@/components/layout/visas/Services";
import CommonHeader from "@/components/ui/CommonHeader";
import Testimonials from "@/components/ui/Testimonials";
import Faqs from "@/components/ui/Faqs";
import Map from "@/components/ui/Map";
import BlueBgHeadAndDesc from "@/components/ui/BlueBgHeadAndDesc";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { getVisaTranslation } from "@/translations/visa";

const imageData = [
  "/assets/visa/why-1.webp",
  "/assets/visa/why-2.webp",
  "/assets/visa/why-3.webp",
  "/assets/visa/why-4.webp",
];

const faqImasgesLinks = [
  "/assets/visa/f1.webp",
  "/assets/visa/f2.webp",
  "/assets/visa/f3.webp",
  "/assets/visa/f4.webp",
];

export default function VisaPage() {
  const { language } = useLanguage();
  const t = getVisaTranslation(language);

  return (
    <main dir={getDirection(language)} className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <CommonHeader
        heading={t.header.heading}
        desc={t.header.description}
      />

      {/* OUR SERVICES SECTION */}
      <Services />

      <MutipleImageRightText imageData={imageData} />

      {/* FAQ SECTION */}
      <Faqs imagesLinks={faqImasgesLinks} />

      {/* CONTACT / MAP SECTION */}
      <Map />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* VISA CTA SECTION */}
      <BlueBgHeadAndDesc
        head={t.cta.heading}
        desc={t.cta.description}
        btnTxt={t.cta.callButton}
        btnTxt2={t.cta.bookButton}
        btnLink="tel:+31104857673"
        btnLink2="https://wa.me/31104857673?text=Hello%20Hassaan%20Travel,%20I%20want%20to%20book%20a%20visa"
      />
    </main>
  );
}