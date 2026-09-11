"use client";

import Link from "next/link";
import Image from "next/image";
import { Plane, Binoculars, Phone } from "lucide-react";
import { FaStackExchange } from "react-icons/fa";
import { useLanguage } from "@/components/LanguageProvider";
import {
  homepageTranslations,
  type LanguageCode,
} from "@/translations/homepage";

export default function MutipleImageRightText({
  imageData,
}: {
  imageData: string[];
}) {
  const { language } = useLanguage();

  const t =
    homepageTranslations[language as LanguageCode] || homepageTranslations.en;

  const wt = t.whyTrusted;

  const features = [
    { icon: <Plane size={16} />, text: wt.featureFlights },
    { icon: <FaStackExchange size={16} />, text: wt.featureVisa },
    { icon: <Binoculars size={16} />, text: wt.featureLanguages },
    { icon: <Phone size={16} />, text: wt.featureContact },
  ];

  return (
    <section className="relative w-full py-12 sm:py-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/bgimage/h2.webp"
        loading="lazy"
        alt=""
        fill
        className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
        {/* LEFT IMAGES CONTAINER */}
        {/* Note: Added a minimum height so absolute positioned images don't collapse the layout */}
        <div className="relative w-full min-h-[450px]">
          <Image
            src={imageData[0] || ""}
            alt={wt.imageAlt}
            loading="lazy"
            width={220}
            height={250}
            className="absolute top-0 left-0 w-[220px] h-[250px] object-cover border-[5px] border-white shadow-md z-30"
          />

          <Image
            src={imageData[1] || ""}
            alt={wt.imageAlt}
            loading="lazy"
            width={200}
            height={200}
            className="absolute top-5 left-[200px] w-[200px] h-[200px] object-cover border-[5px] border-white shadow-md z-20"
          />

          <Image
            src={imageData[2] || ""}
            alt={wt.imageAlt}
            loading="lazy"
            width={200}
            height={220}
            className="absolute top-[150px] left-[170px] w-[200px] h-[220px] object-cover border-[5px] border-white shadow-md z-40"
          />

          {/* KAABA */}
          <div className="absolute top-[170px] left-[30px] w-[250px] h-[230px] border-[5px] border-white shadow-md z-10 overflow-hidden">
            <Image
              src={imageData[3] || ""}
              alt={wt.imageAlt}
              loading="lazy"
              width={250}
              height={230}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center bottom" }}
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-3xl font-extrabold leading-tight text-black">
            {wt.title}
          </h2>

          <p className="mt-5 text-gray-600 text-base leading-relaxed">
            {wt.intro}
          </p>

          <div className="mt-8 space-y-4">
            {features.map((feature, i) => (
              <Feature key={i} icon={feature.icon} text={feature.text} />
            ))}
          </div>

          {/* FIXED LINK: Styled the Link directly instead of nesting a button */}
          <div className="mt-10">
            <Link
              href="/contact-us"
              className="inline-block bg-[#0F91D5] hover:bg-blue-600 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg text-center"
            >
              {wt.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 🔥 Small reusable sub-component */
function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-4">
      {/* flex-shrink-0 prevents the icon container from squeezing on smaller screens */}
      <div className="w-8 h-8 rounded-lg bg-[#0F91D5] flex items-center justify-center text-white flex-shrink-0">
        {icon}
      </div>
      <p className="text-gray-700 leading-relaxed pt-0.5">{text}</p>
    </div>
  );
}
