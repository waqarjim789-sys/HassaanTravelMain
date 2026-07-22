/* eslint-disable @next/next/no-img-element */
"use client";

import CustomTravelPackages from "@/components/ui/CustomTravelPackages";
import PopularTourPackages from "@/components/layout/packages/PopularTourPackages";
import BlueBgHeadAndDesc from "@/components/ui/BlueBgHeadAndDesc";
import CommonHeader from "@/components/ui/CommonHeader";

export default function packages() {
  return (
    <>
     {/* HERO SECTION */}
<CommonHeader
  heading={"Book your package vacation with \nHassaan Travel "}
  desc={<>We provide exclusive trips with an unforgettable experience.<br /><strong>Don’t go simple, book with us!</strong></>}
/>

      {/* ====== SECTION WRAPPER WITH BG ====== */}
      <PopularTourPackages />

      {/* Pass mode="packages" (default) to CustomTravelPackages */}
      <CustomTravelPackages mode="packages" />

      <section className="relative w-full py-12 px-5 overflow-hidden">
        {/* 🔥 BACKGROUND IMAGE */}
        <img
          src="/assets/home/h1.webp"
          loading="lazy"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 🔥 LIGHT GRADIENT */}
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(207,234,246,0.15)] to-[rgba(85,178,218,0.25)]"></div>

        {/* 🔥 LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-white/35"></div>

        {/* 🔥 CONTENT */}
        <div className="relative z-10 container mx-auto">
          {/* 🔥 SLIGHT SPACING (CONTROL HEIGHT) */}
          <BlueBgHeadAndDesc
            head="Can't Find What You're Looking For?"
            desc="Our travel experts are ready to create a personalized package just for you. Contact us today for a custom quote tailored to your preferences and budget."
            btnTxt="Speak with a Travel Expert"
          />
        </div>
      </section>
    </>
  );
}