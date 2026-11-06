"use client";

import SideIconDesc from "@/components/ui/SideIconDesc";
import { Eye, Target } from "lucide-react";
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { aboutUsTranslations } from "@/translations/aboutUs";

const MIssionAndVision = () => {
  const { language } = useLanguage();

  const t =
    aboutUsTranslations[language as keyof typeof aboutUsTranslations] ||
    aboutUsTranslations.en;

  const data = {
    head: (
      <span className="text-black">
        {t.missionVision.heading}
      </span>
    ),

    details: t.missionVision.description,

    data: [
      {
        icon: <Target />,
        title: t.missionVision.missionTitle,
        desc: t.missionVision.missionDescription,
      },
      {
        icon: <Eye />,
        title: t.missionVision.visionTitle,
        desc: t.missionVision.visionDescription,
      },
    ],
  };

  return (
    <section className="relative w-full py-12 sm:py-20 overflow-hidden flex items-center justify-center bg-white">

      <img
        src="/assets/about-us/3.webp"
        loading="lazy"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.18] pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6">
        <SideIconDesc data={data} />
      </div>
    </section>
  );
};

export default MIssionAndVision;