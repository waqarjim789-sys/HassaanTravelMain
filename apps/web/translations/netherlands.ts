// =======================================================
// NETHERLANDS VISA PAGE TRANSLATIONS
// Used by app/netherland/page.tsx
// Shared texts (header description, "Which Visa Do You Need?",
// refund note) come from translations/visaCountries.ts → shared.
// Languages: en | nl | de | fr | it | es | ar | ur
// Content translated as-is on the owner's request.
// =======================================================

import { createTranslator } from "@/lib/createTranslator";

export type NetherlandsVisaTypeKey = "tourist" | "business" | "familyVisit" | "student";

const en = {
  header: {
    heading: "Netherlands Visa Services for Pakistani & UAE \n Citizens",
  },
  intro: {
    titleStart: "Simplifying Your ",
    titleHighlight: "Netherlands",
    titleLine2: "Visa Process",
    description:
      "Citizens of the UAE can travel to the Netherlands without a visa for short stays, typically up to 90 days within a 180-day period, for tourism or business purposes.",
    imageAlt: "Netherlands visa",
  },
  uae: {
    titleStart: "Visa-Free Travel for ",
    titleHighlight: "UAE",
    titleLine2: "Citizens",
    description:
      "UAE citizens can travel to the Netherlands for tourism and business purposes without having a visa if they have an Emirati passport. The Netherlands allows them to stay for a short period of time, for up to 90 days",
    imageAlt: "Visa-free travel to the Netherlands",
  },
  visaTypes: {
    tourist: {
      title: "Tourist Visa",
      desc: "Ideal for leisure travel and exploring the Netherlands.",
    },
    business: {
      title: "Business Visa",
      desc: "For meetings, events, and professional engagements.",
    },
    familyVisit: {
      title: "Family Visit Visa",
      desc: "Reunite with loved ones living in the Netherlands.",
    },
    student: {
      title: "Student Visa",
      desc: "For academic or training opportunities (if applicable).",
    },
  },
} as const;

export const getNetherlandsTranslation = createTranslator(en, {
  // =====================================================
  // DUTCH
  // =====================================================
  nl: {
    header: {
      heading: "Visumdiensten voor Nederland \n voor burgers uit Pakistan en de VAE",
    },
    intro: {
      titleStart: "Uw ",
      titleHighlight: "Nederland",
      titleLine2: "visumproces vereenvoudigd",
      description:
        "Burgers van de VAE kunnen zonder visum naar Nederland reizen voor een kort verblijf, doorgaans tot 90 dagen binnen een periode van 180 dagen, voor toerisme of zaken.",
      imageAlt: "Visum voor Nederland",
    },
    uae: {
      titleStart: "Visumvrij reizen voor burgers ",
      titleHighlight: "uit de VAE",
      titleLine2: "",
      description:
        "Burgers van de VAE kunnen met een Emiraats paspoort zonder visum naar Nederland reizen voor toerisme en zaken. Nederland staat hun een kort verblijf toe van maximaal 90 dagen.",
      imageAlt: "Visumvrij reizen naar Nederland",
    },
    visaTypes: {
      tourist: {
        title: "Toeristenvisum",
        desc: "Ideaal voor vrije tijd en om Nederland te ontdekken.",
      },
      business: {
        title: "Zakenvisum",
        desc: "Voor vergaderingen, evenementen en zakelijke afspraken.",
      },
      familyVisit: {
        title: "Familiebezoekvisum",
        desc: "Herenig u met dierbaren die in Nederland wonen.",
      },
      student: {
        title: "Studentenvisum",
        desc: "Voor studie- of opleidingsmogelijkheden (indien van toepassing).",
      },
    },
  },

  // =====================================================
  // GERMAN
  // =====================================================
  de: {
    header: {
      heading:
        "Visa-Services für die Niederlande \n für Staatsangehörige aus Pakistan und den VAE",
    },
    intro: {
      titleStart: "Wir vereinfachen Ihr ",
      titleHighlight: "Niederlande",
      titleLine2: "Visumverfahren",
      description:
        "Staatsangehörige der VAE können für Kurzaufenthalte ohne Visum in die Niederlande reisen, in der Regel bis zu 90 Tage innerhalb von 180 Tagen, für touristische oder geschäftliche Zwecke.",
      imageAlt: "Visum für die Niederlande",
    },
    uae: {
      titleStart: "Visumfreies Reisen für ",
      titleHighlight: "Staatsangehörige der VAE",
      titleLine2: "",
      description:
        "Staatsangehörige der VAE können mit einem emiratischen Reisepass ohne Visum für touristische und geschäftliche Zwecke in die Niederlande reisen. Die Niederlande gestatten ihnen einen Kurzaufenthalt von bis zu 90 Tagen.",
      imageAlt: "Visumfreies Reisen in die Niederlande",
    },
    visaTypes: {
      tourist: {
        title: "Touristenvisum",
        desc: "Ideal für Urlaubsreisen und um die Niederlande zu entdecken.",
      },
      business: {
        title: "Geschäftsvisum",
        desc: "Für Meetings, Veranstaltungen und berufliche Termine.",
      },
      familyVisit: {
        title: "Familienbesuchsvisum",
        desc: "Treffen Sie Ihre Liebsten, die in den Niederlanden leben.",
      },
      student: {
        title: "Studentenvisum",
        desc: "Für Studien- oder Ausbildungsmöglichkeiten (falls zutreffend).",
      },
    },
  },

  // =====================================================
  // FRENCH
  // =====================================================
  fr: {
    header: {
      heading:
        "Services de visa pour les Pays-Bas \n pour les citoyens pakistanais et émiriens",
    },
    intro: {
      titleStart: "Simplifiez vos démarches de ",
      titleHighlight: "visa",
      titleLine2: "pour les Pays-Bas",
      description:
        "Les citoyens des Émirats arabes unis peuvent se rendre aux Pays-Bas sans visa pour de courts séjours, généralement jusqu'à 90 jours sur une période de 180 jours, à des fins touristiques ou professionnelles.",
      imageAlt: "Visa pour les Pays-Bas",
    },
    uae: {
      titleStart: "Voyager sans visa pour les ",
      titleHighlight: "citoyens des Émirats",
      titleLine2: "",
      description:
        "Les citoyens des Émirats arabes unis titulaires d'un passeport émirien peuvent se rendre aux Pays-Bas sans visa pour le tourisme et les affaires. Les Pays-Bas les autorisent à séjourner pour une courte durée, jusqu'à 90 jours.",
      imageAlt: "Voyager sans visa aux Pays-Bas",
    },
    visaTypes: {
      tourist: {
        title: "Visa touristique",
        desc: "Idéal pour les voyages d'agrément et pour découvrir les Pays-Bas.",
      },
      business: {
        title: "Visa d'affaires",
        desc: "Pour les réunions, événements et engagements professionnels.",
      },
      familyVisit: {
        title: "Visa de visite familiale",
        desc: "Retrouvez vos proches qui vivent aux Pays-Bas.",
      },
      student: {
        title: "Visa étudiant",
        desc: "Pour des opportunités d'études ou de formation (le cas échéant).",
      },
    },
  },

  // =====================================================
  // ITALIAN
  // =====================================================
  it: {
    header: {
      heading:
        "Servizi visti per i Paesi Bassi \n per cittadini pakistani ed emiratini",
    },
    intro: {
      titleStart: "Semplifichiamo la procedura del ",
      titleHighlight: "visto",
      titleLine2: "per i Paesi Bassi",
      description:
        "I cittadini degli Emirati Arabi Uniti possono recarsi nei Paesi Bassi senza visto per brevi soggiorni, in genere fino a 90 giorni in un periodo di 180 giorni, per turismo o affari.",
      imageAlt: "Visto per i Paesi Bassi",
    },
    uae: {
      titleStart: "Viaggi senza visto per i ",
      titleHighlight: "cittadini degli Emirati",
      titleLine2: "",
      description:
        "I cittadini degli Emirati Arabi Uniti con passaporto emiratino possono recarsi nei Paesi Bassi per turismo e affari senza visto. I Paesi Bassi consentono loro un breve soggiorno fino a 90 giorni.",
      imageAlt: "Viaggi senza visto nei Paesi Bassi",
    },
    visaTypes: {
      tourist: {
        title: "Visto turistico",
        desc: "Ideale per viaggi di piacere e per scoprire i Paesi Bassi.",
      },
      business: {
        title: "Visto d'affari",
        desc: "Per riunioni, eventi e impegni professionali.",
      },
      familyVisit: {
        title: "Visto per visita familiare",
        desc: "Ritrova i tuoi cari che vivono nei Paesi Bassi.",
      },
      student: {
        title: "Visto per studenti",
        desc: "Per opportunità di studio o formazione (se applicabile).",
      },
    },
  },

  // =====================================================
  // SPANISH
  // =====================================================
  es: {
    header: {
      heading:
        "Servicios de visado para los Países Bajos \n para ciudadanos de Pakistán y los EAU",
    },
    intro: {
      titleStart: "Simplificamos el trámite de tu ",
      titleHighlight: "visado",
      titleLine2: "para los Países Bajos",
      description:
        "Los ciudadanos de los EAU pueden viajar a los Países Bajos sin visado para estancias cortas, normalmente de hasta 90 días dentro de un periodo de 180 días, por turismo o negocios.",
      imageAlt: "Visado para los Países Bajos",
    },
    uae: {
      titleStart: "Viajar sin visado para ",
      titleHighlight: "ciudadanos de los EAU",
      titleLine2: "",
      description:
        "Los ciudadanos de los EAU con pasaporte emiratí pueden viajar a los Países Bajos por turismo y negocios sin visado. Los Países Bajos les permiten una estancia corta de hasta 90 días.",
      imageAlt: "Viajar sin visado a los Países Bajos",
    },
    visaTypes: {
      tourist: {
        title: "Visado de turista",
        desc: "Ideal para viajes de ocio y para descubrir los Países Bajos.",
      },
      business: {
        title: "Visado de negocios",
        desc: "Para reuniones, eventos y compromisos profesionales.",
      },
      familyVisit: {
        title: "Visado de visita familiar",
        desc: "Reencuéntrate con tus seres queridos que viven en los Países Bajos.",
      },
      student: {
        title: "Visado de estudiante",
        desc: "Para oportunidades de estudio o formación (si procede).",
      },
    },
  },

  // =====================================================
  // ARABIC
  // =====================================================
  ar: {
    header: {
      heading: "خدمات تأشيرة هولندا \n للمواطنين الباكستانيين والإماراتيين",
    },
    intro: {
      titleStart: "نسهّل عليك إجراءات ",
      titleHighlight: "تأشيرة هولندا",
      titleLine2: "",
      description:
        "يمكن لمواطني الإمارات السفر إلى هولندا دون تأشيرة للإقامات القصيرة، عادةً لمدة تصل إلى 90 يومًا خلال فترة 180 يومًا، لأغراض السياحة أو الأعمال.",
      imageAlt: "تأشيرة هولندا",
    },
    uae: {
      titleStart: "السفر دون تأشيرة ",
      titleHighlight: "لمواطني الإمارات",
      titleLine2: "",
      description:
        "يمكن لمواطني الإمارات الحاملين لجواز سفر إماراتي السفر إلى هولندا لأغراض السياحة والأعمال دون تأشيرة. وتسمح لهم هولندا بالإقامة لفترة قصيرة تصل إلى 90 يومًا.",
      imageAlt: "السفر إلى هولندا دون تأشيرة",
    },
    visaTypes: {
      tourist: {
        title: "التأشيرة السياحية",
        desc: "مثالية للسفر الترفيهي واستكشاف هولندا.",
      },
      business: {
        title: "تأشيرة الأعمال",
        desc: "للاجتماعات والفعاليات والارتباطات المهنية.",
      },
      familyVisit: {
        title: "تأشيرة الزيارة العائلية",
        desc: "اجتمع مع أحبائك المقيمين في هولندا.",
      },
      student: {
        title: "تأشيرة الطالب",
        desc: "لفرص الدراسة أو التدريب (إن وجدت).",
      },
    },
  },

  // =====================================================
  // URDU
  // =====================================================
  ur: {
    header: {
      heading:
        "پاکستانی اور متحدہ عرب امارات کے شہریوں کے لیے \n نیدرلینڈز ویزا سروسز",
    },
    intro: {
      titleStart: "",
      titleHighlight: "نیدرلینڈز",
      titleLine2: "ویزا کا عمل اب آسان",
      description:
        "متحدہ عرب امارات کے شہری سیاحت یا کاروبار کے لیے مختصر قیام کی خاطر بغیر ویزا نیدرلینڈز جا سکتے ہیں، عام طور پر 180 دن کی مدت میں 90 دن تک۔",
      imageAlt: "نیدرلینڈز ویزا",
    },
    uae: {
      titleStart: "",
      titleHighlight: "متحدہ عرب امارات",
      titleLine2: "کے شہریوں کے لیے بغیر ویزا سفر",
      description:
        "اماراتی پاسپورٹ رکھنے والے متحدہ عرب امارات کے شہری سیاحت اور کاروبار کے لیے بغیر ویزا نیدرلینڈز جا سکتے ہیں۔ نیدرلینڈز انہیں 90 دن تک مختصر قیام کی اجازت دیتا ہے۔",
      imageAlt: "نیدرلینڈز کا بغیر ویزا سفر",
    },
    visaTypes: {
      tourist: {
        title: "ٹورسٹ ویزا",
        desc: "سیر و تفریح اور نیدرلینڈز کی سیاحت کے لیے بہترین۔",
      },
      business: {
        title: "بزنس ویزا",
        desc: "میٹنگز، تقریبات اور پیشہ ورانہ مصروفیات کے لیے۔",
      },
      familyVisit: {
        title: "فیملی وزٹ ویزا",
        desc: "نیدرلینڈز میں مقیم اپنے پیاروں سے ملیں۔",
      },
      student: {
        title: "اسٹوڈنٹ ویزا",
        desc: "تعلیمی یا تربیتی مواقع کے لیے (اگر قابلِ اطلاق ہو)۔",
      },
    },
  },
});

export type NetherlandsTranslation = ReturnType<typeof getNetherlandsTranslation>;