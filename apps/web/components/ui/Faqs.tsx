"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Do you apply for an Umrah visa or a tourist visa?",
    answer:
      "We apply for a tourist visa. It offers the same benefits and more. A tourist visa is valid for one year and is usually cheaper, easier, and faster to obtain."
  },
  {
    question: "Can we book only flights, hotels, or visa services?",
    answer:
      "- Yes, you can. We also offer these services separately, but we recommend booking everything together with us for the full experience and to ensure everything is well organized.",
  },
  {
    question: "– Can you assist with visa rejections or issues?",
    answer:
      "Unfortunately, we are not the final decision-making authority and only handle the visa application process. If your visa is rejected or placed under review, we can only advise you to contact the embassy for further assistance.",
  },
  {
    question: "How long does it take to get a KSA (Kingdom of Saudi Arabia) visa?",
    answer:
      "We require 3 working days to process the visa application, and approval usually takes 1 additional day.",
  },
];

export default function Faqs(imagesLinks: { imagesLinks: string[]  }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f4f4f4] py-20 px-6  mx-auto">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start px-4 sm:px-8 md:px-16">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between h-auto md:h-130">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative h-55 md:h-95 w-full rounded-2xl shadow-lg overflow-hidden">
              <Image
                src={imagesLinks.imagesLinks[0] || ""}
                alt="frequently asked question"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="relative h-55 md:h-37.5 w-full rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src={imagesLinks.imagesLinks[1] || ""}
                  alt="frequently asked question"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div className="relative h-55 md:h-80 w-full rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src={imagesLinks.imagesLinks[2] || ""}
                  alt="frequently asked question"
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
                  src={"/assets/Frame 1000009700.webp"}
                  alt="icon"
                  fill
                  loading="lazy"
                  className="object-contain"
                />
              </div>

              <span className="text-gray-700 text-sm font-medium">
                Lets Explore!
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FAQ */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 cursor-pointer transition"
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-[#0F91D5] font-semibold text-sm md:text-base">
                    {faq.question}
                  </h4>
                  <span className="text-[#0F91D5] text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {activeIndex === index && (
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    {faq.answer}
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