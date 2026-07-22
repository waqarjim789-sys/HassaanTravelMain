import React from "react";
import Image from "next/image";

const DisclaimerData = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden min-h-[500px] flex items-center justify-center w-full">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none z-0"
        style={{ backgroundImage: "url('/assets/about-us/3.webp')" }}
      />

      {/* CLEAN CARD */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl px-10 py-12 shadow-lg border border-white/40">
        
        {/* TITLE */}
        <h2 className="text-2xl sm:text-4xl font-bold mb-12">
          Disclaimer{" "}
          <span className="text-[#0F91D5]">Hassaan Travel</span>
        </h2>

        {/* TOP TEXT */}
        <p className="mb-6 text-sm leading-relaxed mt-6">
          The content displayed on the Hassaan Travel (HT) website is compiled
          with great care. However, some information may become outdated or
          inaccurate over time. HT cannot be held liable for any inaccuracies
          or outdated information. Furthermore, HT is not responsible for any
          damages resulting from the use of the information provided on this website.
        </p>

        {/* FLOAT IMAGE (SAME POSITION) */}
        <Image
          src="/assets/dis.webp"
          alt="Disclaimer"
          width={320}
          height={320}
          className="float-right ml-10 mb-6 mt-2 object-contain"
        />

        {/* TEXT CONTENT */}
        <div className="text-sm leading-relaxed">
          
          <p className="mb-4">
            HT is also not responsible for the content of third-party websites
            that may be displayed or linked on this platform.
          </p>

          <p className="mb-4">
            While HT provides advice to its customers, it cannot be held
            responsible for decisions made based on that advice.
          </p>

          <p className="mb-4">
            The prices shown on the HT website are estimates based on
            availability. Prices and availability are determined by third
            parties such as airlines and hotels. Errors may occur during
            data updates as this process is fully automated and constantly
            changing. HT strives to keep this information as accurate and
            up to date as possible. All offers shown are subject to the
            terms and conditions of the respective third parties.
          </p>

          <p>
            Due to the complexity of technical systems, uninterrupted access
            to the website cannot be guaranteed. HT cannot be held liable for
            any direct or indirect damages resulting from technical errors or
            interruptions on the website.
          </p>

        </div>

        <div className="clear-both" />
      </div>
    </section>
  );
};

export default DisclaimerData;