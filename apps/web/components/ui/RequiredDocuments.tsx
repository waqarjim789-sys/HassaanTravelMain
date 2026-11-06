"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { createTranslator, interpolate } from "@/lib/createTranslator";

interface RequiredDocumentsProps {
  documents?: string[];
  /** Already translated by the parent page, e.g. "Umrah" / "عمرہ" / "UAE". */
  title: string;
  rightImage?: string;
}

// Heading is split in three parts so each language can place {title}
// and the highlighted words in its own natural order.
const getRequiredDocumentsTranslation = createTranslator(
  {
    headingStart: "The ",
    headingHighlight: "Required Documents",
    headingEnd: " for a visa for {title} are",
    imageAlt: "{title} Visa Application Documents",
  } as const,
  {
    nl: {
      headingStart: "De ",
      headingHighlight: "benodigde documenten",
      headingEnd: " voor een {title}-visum",
      imageAlt: "Documenten voor de {title}-visumaanvraag",
    },
    de: {
      headingStart: "Die ",
      headingHighlight: "erforderlichen Unterlagen",
      headingEnd: " für ein {title}-Visum",
      imageAlt: "Unterlagen für den {title}-Visumantrag",
    },
    fr: {
      headingStart: "Les ",
      headingHighlight: "documents requis",
      headingEnd: " pour le visa {title}",
      imageAlt: "Documents pour la demande de visa {title}",
    },
    it: {
      headingStart: "I ",
      headingHighlight: "documenti richiesti",
      headingEnd: " per il visto {title}",
      imageAlt: "Documenti per la richiesta del visto {title}",
    },
    es: {
      headingStart: "Los ",
      headingHighlight: "documentos necesarios",
      headingEnd: " para el visado de {title}",
      imageAlt: "Documentos para la solicitud del visado de {title}",
    },
    ar: {
      headingStart: "",
      headingHighlight: "المستندات المطلوبة",
      headingEnd: " للحصول على تأشيرة {title}",
      imageAlt: "مستندات طلب تأشيرة {title}",
    },
    ur: {
      headingStart: "{title} ویزا کے لیے ",
      headingHighlight: "مطلوبہ دستاویزات",
      headingEnd: "",
      imageAlt: "{title} ویزا درخواست کی دستاویزات",
    },
  }
);

const RequiredDocuments: React.FC<RequiredDocumentsProps> = ({
  documents,
  title,
  rightImage = "/assets/uae/doc.webp",
}) => {
  const { language } = useLanguage();
  const t = getRequiredDocumentsTranslation(language);
  const values = { title };

  return (
    // Bottom margin keeps the next section from overlapping the image.
    <div
      dir={getDirection(language)}
      className="w-full max-w-7xl mx-auto mt-6 mb-16 md:mb-24 px-4 md:px-0 z-10 relative"
    >
      {/* CONTAINER */}
      <div className="bg-slate-200/80 backdrop-blur-md rounded-[2.5rem] border border-white/40 shadow-xl shadow-slate-300/30 py-6 px-8 md:p-10 flex flex-col md:flex-row-reverse items-center gap-10">

        {/* ================= IMAGE ================= */}
        <div className="w-full md:w-[42%] relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden">
          <Image
            src={rightImage}
            alt={interpolate(t.imageAlt, values)}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        {/* ================= TEXT DETAILS ================= */}
        <div className="w-full md:w-[58%] min-w-0 text-start flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-5 tracking-tight">
            {interpolate(t.headingStart, values)}
            <span className="text-[#0F91D5]">
              {interpolate(t.headingHighlight, values)}
            </span>
            {interpolate(t.headingEnd, values)}
          </h2>

          {/* BULLET POINTS */}
          <ul className="text-gray-800 text-xs md:text-sm space-y-3 list-disc ps-5 font-normal leading-relaxed">
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