import React from "react";
import Image from "next/image";

type HeadDesImgProps = {
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

const HeadDesImg: React.FC<HeadDesImgProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "image",
}) => {
  return (
    <div className="container mx-auto  bg-[#e3e8ed]/50 backdrop-blur-md border border-white/40 rounded-[2.2rem] shadow-[0_15px_45px_rgba(0,0,0,0.04)] p-8 md:p-11 flex flex-col md:flex-row items-center gap-9">
      
      {/* Left Side Content */}
      <div className="flex-[1.15] text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
          {title}
        </h2>

        <p className="text-gray-800 text-[14px] font-normal  tracking-wide whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 w-full relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* wrapper height to preserve layout */}
        <div className="relative w-full h-52.5 md:h-63.5" />
      </div>
    </div>
  );
};

export default HeadDesImg;