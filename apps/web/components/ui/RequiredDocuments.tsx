import React from "react";
import Image from "next/image";

interface RequiredDocumentsProps {
  documents?: string[];
  title: string;
  rightImage?: string;
}

const RequiredDocuments: React.FC<RequiredDocumentsProps> = ({
  documents,
  title,
  rightImage = "/assets/uae/doc.webp",
}) => {
  return (
    // 🌟 COLLISION FIX: Added mb-16 md:mb-24 to push the next section down and prevent image overlaps
    <div className="w-full max-w-7xl mx-auto mt-6 mb-16 md:mb-24 px-4 md:px-0 z-10 relative">
      {/* CONTAINER */}
      <div className="bg-slate-200/80 backdrop-blur-md rounded-[2.5rem] border border-white/40 shadow-xl shadow-slate-300/30 py-6 px-8 md:p-10 flex flex-col md:flex-row-reverse items-center gap-10">
        
        {/* ================= RIGHT SIDE: IMAGE CONTAINER ================= */}
        <div className="w-full md:w-[42%] relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden">
          <Image
            src={rightImage}
            alt={`${title} Visa Application Documents`}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        {/* ================= LEFT SIDE: TEXT DETAILS ================= */}
        <div className="w-full md:w-[58%] text-left flex flex-col justify-center">
          {/* 🌟 LINE BREAK ADDED: "an {title} visa are" will now explicitly wrap to the next line */}

<h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-5 tracking-tight">
  The <span className="text-[#0F91D5]">Required Documents</span> for a visa for {title} are
</h2>

          {/* BULLET POINTS */}
          <ul className="text-gray-800 text-xs md:text-sm space-y-3 list-disc pl-5 font-normal leading-relaxed">
            {documents &&
              documents.map((item, index) => (
                <li key={index} className="tracking-tight">
                  {item}
                </li>
              ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default RequiredDocuments;