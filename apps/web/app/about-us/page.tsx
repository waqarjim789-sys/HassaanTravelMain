"use client";

import CommonHeader from "@/components/ui/CommonHeader";
import OurStory from "@/components/layout/about-us/OurStory";
import OurCommitment from "@/components/layout/about-us/OurCommitment";
import MIssionAndVision from "@/components/layout/about-us/MIssionAndVision";
import IataRecognized from "@/components/layout/about-us/IataRecognized";
import Testimonials from "@/components/ui/Testimonials";
import { useLanguage } from "@/components/LanguageProvider";
import { aboutUsTranslations } from "@/translations/aboutUs";

export default function AboutPage() {
  const { language } = useLanguage();

  const currentLanguage =
    language in aboutUsTranslations ? language : "en";

  const t =
    aboutUsTranslations[
      currentLanguage as keyof typeof aboutUsTranslations
    ];

  return (
    <div>
      <CommonHeader
        heading={t.header.title}
        desc={t.header.description}
      />

      <OurStory />
      <OurCommitment />
      <MIssionAndVision />
      <IataRecognized />
      <Testimonials />
    </div>
  );
}