import React from "react";
import Image from "next/image";

type HeadDesImgProps = {
  /** Already translated by the parent page. */
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  /** Pass a translated description; empty means decorative. */
  imageAlt?: string;
};

/**
 * Text + image card.
 * No language hook here: direction is inherited from the parent's `dir`,
 * so this component keeps working on both server and client pages.
 */
const HeadDesImg: React.FC<HeadDesImgProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "",
}) => {
  return (
    <div className="container mx-auto bg-[#e3e8ed]/50 backdrop-blur-md border border-white/40 rounded-[2.2rem] shadow-[0_15px_45px_rgba(0,0,0,0.04)] p-8 md:p-11 flex flex-col md:flex-row items-center gap-9">

      {/* Text content (start side: left in LTR, right in RTL) */}
      <div className="flex-[1.15] min-w-0 text-start">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight rtl:tracking-normal mb-4">
          {title}
        </h2>

        <p className="text-gray-800 text-[14px] font-normal tracking-wide rtl:tracking-normal whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Image (end side) */}
      <div className="flex-1 w-full relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Wrapper height preserves the layout */}
        <div className="relative w-full h-52.5 md:h-63.5" />
      </div>
    </div>
  );
};

export default HeadDesImg;