import React from "react";
import Image from "next/image";

const CommonHeader = ({
  heading,
  desc,
}: {
  heading: string;
  // Yahan React.ReactNode add karne se hum isme custom tags ya string dono bhej sakte hain
  desc?: string | React.ReactNode; 
}) => {
  return (
    <section className="relative w-full min-h-87.25 py-20 md:py-24 px-4 overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <Image
          src="/assets/bgimage/bg.webp"
          alt="Header Background"
          fill
          priority
          className="object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
        {/* HEADING */}
        <h1 className="mt-10 text-4xl md:text-4xl font-bold leading-tight text-black whitespace-pre-line">
          {heading}
        </h1>

        {/* DESCRIPTION */}
        {desc && (
          <div className="mt-5 text-gray-700 text-sm md:text-lg max-w-3xl mx-auto">
            {desc}
          </div>
        )}
      </div>
    </section>
  );
};

export default CommonHeader;