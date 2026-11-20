"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { createTranslator } from "@/lib/createTranslator";

const getStepsTranslation = createTranslator(
  {
    headingLine1: "How to Apply for Your Umrah Visa",
    headingLine2: "Online",
    step1: "Determine the Appropriate Visa",
    step2: "Gather Required Documents",
    step3: "Complete the Visa Application Form",
  } as const,
  {
    nl: {
      headingLine1: "Zo vraagt u uw Umrah-visum",
      headingLine2: "online aan",
      step1: "Bepaal het juiste visum",
      step2: "Verzamel de benodigde documenten",
      step3: "Vul het visumaanvraagformulier in",
    },
    de: {
      headingLine1: "So beantragen Sie Ihr Umrah-Visum",
      headingLine2: "online",
      step1: "Das passende Visum bestimmen",
      step2: "Erforderliche Unterlagen zusammenstellen",
      step3: "Visumantrag ausfüllen",
    },
    fr: {
      headingLine1: "Comment demander votre visa Omra",
      headingLine2: "en ligne",
      step1: "Déterminer le visa adapté",
      step2: "Rassembler les documents requis",
      step3: "Remplir le formulaire de demande de visa",
    },
    it: {
      headingLine1: "Come richiedere il visto Umrah",
      headingLine2: "online",
      step1: "Scegli il visto adatto",
      step2: "Raccogli i documenti necessari",
      step3: "Compila il modulo di richiesta del visto",
    },
    es: {
      headingLine1: "Cómo solicitar su visado de Umrah",
      headingLine2: "en línea",
      step1: "Determine el visado adecuado",
      step2: "Reúna los documentos necesarios",
      step3: "Complete el formulario de solicitud de visado",
    },
    ar: {
      headingLine1: "كيفية التقديم على تأشيرة العمرة",
      headingLine2: "عبر الإنترنت",
      step1: "حدّد التأشيرة المناسبة",
      step2: "اجمع المستندات المطلوبة",
      step3: "املأ نموذج طلب التأشيرة",
    },
    ur: {
      headingLine1: "اپنے عمرہ ویزا کے لیے",
      headingLine2: "آن لائن درخواست کیسے دیں",
      step1: "مناسب ویزا کا انتخاب کریں",
      step2: "ضروری دستاویزات جمع کریں",
      step3: "ویزا درخواست فارم مکمل کریں",
    },
  }
);

// Images stay in code; titles come from the translations above.
const steps = [
  { id: 1, key: "step1", image: "/assets/umrah/step-1.webp" },
  { id: 2, key: "step2", image: "/assets/umrah/step-2.webp" },
  { id: 3, key: "step3", image: "/assets/umrah/step-3.webp" },
] as const;

const StepsToApply = () => {
  const { language } = useLanguage();
  const t = getStepsTranslation(language);

  return (
    <div
      dir={getDirection(language)}
      className="relative mx-auto px-4 text-center py-10 bg-linear-to-br from-[#E0F4FF] to-[#D8F2FF]"
    >
      {/* Heading on two centered lines */}
      <h2 className="text-3xl font-bold text-black mb-14 text-center">
        <span className="block">{t.headingLine1}</span>
        <span className="block">{t.headingLine2}</span>
      </h2>

      {/* STEPS */}
      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center w-95 bg-white rounded-xl p-5"
          >
            {/* Decorative: the step title is written next to it */}
            <Image
              src={step.image}
              alt=""
              width={80}
              height={80}
              className="w-20 h-20 me-5 shrink-0"
            />

            <p className="text-base font-semibold text-[#2d2d2d] text-start min-w-0">
              {t[step.key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default StepsToApply;