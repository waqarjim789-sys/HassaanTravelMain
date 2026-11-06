"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { getHomepageTranslation } from "@/translations/homepage";

export default function Faqs({
  imagesLinks,
}: {
  imagesLinks: string[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const { language } = useLanguage();
  const t = getHomepageTranslation(language);
  const faq = t.faq;

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isRTL = language === "ar" || language === "ur";

  return (
    <section
      className="bg-[#f4f4f4] py-20 px-6 mx-auto"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start px-4 sm:px-8 md:px-16">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between h-auto md:h-130">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative h-55 md:h-95 w-full rounded-2xl shadow-lg overflow-hidden">
              <Image
                src={imagesLinks[0] || ""}
                alt={faq.imageAlt}
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="relative h-55 md:h-37.5 w-full rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src={imagesLinks[1] || ""}
                  alt={faq.imageAlt}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div className="relative h-55 md:h-80 w-full rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src={imagesLinks[2] || ""}
                alt={faq.imageAlt}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div
            className="
              h-25 w-full md:w-67.5
              border border-blue-400 rounded-lg
              px-6 md:px-10 py-6
              flex items-start justify-center
              bg-white shadow-sm
              mx-auto md:mx-0
              mt-6 md:mt-0
              md:relative
              md:-top-16
              lg:-top-20
              xl:-top-22.5
            "
          >
            <div className="flex items-center gap-3 mt-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/assets/Frame 1000009700.webp"
                  alt=""
                  fill
                  loading="lazy"
                  className="object-contain"
                />
              </div>

              <span className="text-gray-700 text-sm font-medium">
                {faq.explore}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FAQ */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            {faq.heading}
          </h2>

          <div className="space-y-4">
            {faq.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 cursor-pointer transition"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h4 className="text-[#0F91D5] font-semibold text-sm md:text-base">
                    {item.question}
                  </h4>

                  <span className="text-[#0F91D5] text-xl flex-shrink-0">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {activeIndex === index && (
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}