// =======================================================
// UMRAH PAGE TRANSLATIONS
// Languages: en | nl | de | fr | it | es | ar | ur
// Uses the shared factory from lib/createTranslator.ts:
// missing or blank values fall back to English per key.
// =======================================================

import { createTranslator } from "@/lib/createTranslator";

export type UmrahServiceKey =
  | "eVisa"
  | "hotelBooking"
  | "transportation"
  | "tickets";

export type UmrahStepKey =
  | "determineVisa"
  | "gatherDocuments"
  | "completeForm";

// English is the complete base dictionary.
const en = {
  header: {
    heading: "Book your Umrah easily Online with Hassaan Travel",
    description:
      "Fast, Easy and Reliable Umrah Services for Performers from The Netherlands and neighboring countries.",
  },

  services: {
    headingLine1: "Complete Umrah Package Services",
    headingLine2: "for Performers",
    items: {
      eVisa: {
        title: "E-Visa Services",
        desc: "Fast and easy processing of your visa for Umrah.",
      },
      hotelBooking: {
        title: "Hotel booking",
        desc: "Choose your stay from our many offered hotels.",
      },
      transportation: {
        title: "Transportation",
        desc: "Get the best and trustworthy transportation service and focus on your pilgrimage.",
      },
      tickets: {
        title: "Tickets",
        desc: "Best route and cheapest available flights according to your wishes.",
      },
    },
  },

  documents: {
    /** Passed to <RequiredDocuments title={...} /> */
    title: "Umrah",
    items: [
      "Valid Passport (Minimum 06 Month on return)",
      "Passport-size photograph",
      "Residential Address",
      "Accommodation address",
      "Marital Status",
      "Occupation",
    ],
  },

  packages: {
    titleHighlight: "Popular Umrah Packages",
    titleRest: "From Netherlands",
    description:
      "Embark on a spiritual journey to Makkah and Madinah with our customized services.",
    comingSoonTitle: "Coming Soon",
    comingSoonText:
      "We are curating the best Umrah packages for you. Stay tuned for exciting new spiritual travel deals!",
  },

  steps: {
    headingLine1: "How to Apply for Your Umrah Visa",
    headingLine2: "Online",
    /** Contains the {number} placeholder */
    imageAlt: "Step {number}",
    items: {
      determineVisa: "Determine the Appropriate Visa",
      gatherDocuments: "Gather Required Documents",
      completeForm: "Complete the Visa Application Form",
    },
  },
} as const;

export const getUmrahTranslation = createTranslator(en, {
  // =====================================================
  // DUTCH
  // =====================================================
  nl: {
    header: {
      heading: "Boek uw Umrah eenvoudig online bij Hassaan Travel",
      description:
        "Snelle, eenvoudige en betrouwbare Umrah-diensten voor pelgrims uit Nederland en de omliggende landen.",
    },
    services: {
      headingLine1: "Complete Umrah-pakketdiensten",
      headingLine2: "voor pelgrims",
      items: {
        eVisa: {
          title: "E-visumservice",
          desc: "Snelle en eenvoudige verwerking van uw Umrah-visum.",
        },
        hotelBooking: {
          title: "Hotelboeking",
          desc: "Kies uw verblijf uit ons ruime aanbod aan hotels.",
        },
        transportation: {
          title: "Vervoer",
          desc: "Maak gebruik van de beste en meest betrouwbare vervoersservice en richt u volledig op uw pelgrimstocht.",
        },
        tickets: {
          title: "Vliegtickets",
          desc: "De beste route en de voordeligste beschikbare vluchten, afgestemd op uw wensen.",
        },
      },
    },
    documents: {
      title: "Umrah",
      items: [
        "Geldig paspoort (minimaal 6 maanden geldig bij terugkeer)",
        "Pasfoto",
        "Woonadres",
        "Verblijfsadres",
        "Burgerlijke staat",
        "Beroep",
      ],
    },
    packages: {
      titleHighlight: "Populaire Umrah-pakketten",
      titleRest: "vanuit Nederland",
      description:
        "Begin aan een spirituele reis naar Mekka en Medina met onze diensten op maat.",
      comingSoonTitle: "Binnenkort beschikbaar",
      comingSoonText:
        "Wij stellen de beste Umrah-pakketten voor u samen. Houd ons in de gaten voor nieuwe spirituele reisaanbiedingen!",
    },
    steps: {
      headingLine1: "Zo vraagt u uw Umrah-visum",
      headingLine2: "online aan",
      imageAlt: "Stap {number}",
      items: {
        determineVisa: "Bepaal het juiste visum",
        gatherDocuments: "Verzamel de benodigde documenten",
        completeForm: "Vul het visumaanvraagformulier in",
      },
    },
  },

  // =====================================================
  // GERMAN
  // =====================================================
  de: {
    header: {
      heading: "Buchen Sie Ihre Umrah ganz einfach online bei Hassaan Travel",
      description:
        "Schnelle, einfache und zuverlässige Umrah-Services für Pilger aus den Niederlanden und den Nachbarländern.",
    },
    services: {
      headingLine1: "Komplette Umrah-Paketleistungen",
      headingLine2: "für Pilger",
      items: {
        eVisa: {
          title: "E-Visum-Service",
          desc: "Schnelle und einfache Bearbeitung Ihres Umrah-Visums.",
        },
        hotelBooking: {
          title: "Hotelbuchung",
          desc: "Wählen Sie Ihre Unterkunft aus unserem großen Hotelangebot.",
        },
        transportation: {
          title: "Transport",
          desc: "Nutzen Sie den besten und zuverlässigsten Transportservice und konzentrieren Sie sich auf Ihre Pilgerreise.",
        },
        tickets: {
          title: "Flugtickets",
          desc: "Die beste Route und die günstigsten verfügbaren Flüge nach Ihren Wünschen.",
        },
      },
    },
    documents: {
      title: "Umrah",
      items: [
        "Gültiger Reisepass (bei Rückkehr mindestens 6 Monate gültig)",
        "Passfoto",
        "Wohnadresse",
        "Unterkunftsadresse",
        "Familienstand",
        "Beruf",
      ],
    },
    packages: {
      titleHighlight: "Beliebte Umrah-Pakete",
      titleRest: "aus den Niederlanden",
      description:
        "Begeben Sie sich mit unseren individuellen Leistungen auf eine spirituelle Reise nach Mekka und Medina.",
      comingSoonTitle: "Demnächst verfügbar",
      comingSoonText:
        "Wir stellen die besten Umrah-Pakete für Sie zusammen. Bleiben Sie dran für neue spirituelle Reiseangebote!",
    },
    steps: {
      headingLine1: "So beantragen Sie Ihr Umrah-Visum",
      headingLine2: "online",
      imageAlt: "Schritt {number}",
      items: {
        determineVisa: "Das passende Visum bestimmen",
        gatherDocuments: "Erforderliche Unterlagen zusammenstellen",
        completeForm: "Visumantrag ausfüllen",
      },
    },
  },

  // =====================================================
  // FRENCH
  // =====================================================
  fr: {
    header: {
      heading: "Réservez facilement votre Omra en ligne avec Hassaan Travel",
      description:
        "Des services Omra rapides, simples et fiables pour les pèlerins des Pays-Bas et des pays voisins.",
    },
    services: {
      headingLine1: "Services complets de forfaits Omra",
      headingLine2: "pour les pèlerins",
      items: {
        eVisa: {
          title: "Services d'e-visa",
          desc: "Traitement rapide et simple de votre visa pour l'Omra.",
        },
        hotelBooking: {
          title: "Réservation d'hôtel",
          desc: "Choisissez votre séjour parmi nos nombreux hôtels.",
        },
        transportation: {
          title: "Transport",
          desc: "Profitez d'un service de transport fiable et de qualité, et concentrez-vous sur votre pèlerinage.",
        },
        tickets: {
          title: "Billets d'avion",
          desc: "Le meilleur itinéraire et les vols disponibles les moins chers, selon vos souhaits.",
        },
      },
    },
    documents: {
      title: "Omra",
      items: [
        "Passeport valide (au moins 6 mois de validité au retour)",
        "Photo d'identité",
        "Adresse de résidence",
        "Adresse d'hébergement",
        "Situation familiale",
        "Profession",
      ],
    },
    packages: {
      titleHighlight: "Forfaits Omra populaires",
      titleRest: "au départ des Pays-Bas",
      description:
        "Partez pour un voyage spirituel vers La Mecque et Médine grâce à nos services personnalisés.",
      comingSoonTitle: "Bientôt disponible",
      comingSoonText:
        "Nous sélectionnons pour vous les meilleurs forfaits Omra. Restez à l'écoute pour de nouvelles offres de voyages spirituels !",
    },
    steps: {
      headingLine1: "Comment demander votre visa Omra",
      headingLine2: "en ligne",
      imageAlt: "Étape {number}",
      items: {
        determineVisa: "Déterminer le visa approprié",
        gatherDocuments: "Rassembler les documents requis",
        completeForm: "Remplir le formulaire de demande de visa",
      },
    },
  },

  // =====================================================
  // ITALIAN
  // =====================================================
  it: {
    header: {
      heading: "Prenota facilmente la tua Umrah online con Hassaan Travel",
      description:
        "Servizi Umrah rapidi, semplici e affidabili per i pellegrini dai Paesi Bassi e dai paesi limitrofi.",
    },
    services: {
      headingLine1: "Servizi completi per pacchetti Umrah",
      headingLine2: "per i pellegrini",
      items: {
        eVisa: {
          title: "Servizi e-Visa",
          desc: "Gestione rapida e semplice del tuo visto per l'Umrah.",
        },
        hotelBooking: {
          title: "Prenotazione hotel",
          desc: "Scegli il tuo soggiorno tra i numerosi hotel che offriamo.",
        },
        transportation: {
          title: "Trasporti",
          desc: "Affidati al miglior servizio di trasporto, sicuro e affidabile, e concentrati sul tuo pellegrinaggio.",
        },
        tickets: {
          title: "Biglietti aerei",
          desc: "Il percorso migliore e i voli disponibili più convenienti, secondo le tue esigenze.",
        },
      },
    },
    documents: {
      title: "Umrah",
      items: [
        "Passaporto valido (almeno 6 mesi di validità al rientro)",
        "Fototessera",
        "Indirizzo di residenza",
        "Indirizzo dell'alloggio",
        "Stato civile",
        "Professione",
      ],
    },
    packages: {
      titleHighlight: "Pacchetti Umrah popolari",
      titleRest: "dai Paesi Bassi",
      description:
        "Intraprendi un viaggio spirituale verso La Mecca e Medina con i nostri servizi personalizzati.",
      comingSoonTitle: "Prossimamente",
      comingSoonText:
        "Stiamo selezionando i migliori pacchetti Umrah per te. Resta aggiornato sulle nuove offerte di viaggi spirituali!",
    },
    steps: {
      headingLine1: "Come richiedere il visto per l'Umrah",
      headingLine2: "online",
      imageAlt: "Passo {number}",
      items: {
        determineVisa: "Individua il visto adatto",
        gatherDocuments: "Raccogli i documenti richiesti",
        completeForm: "Compila il modulo di richiesta del visto",
      },
    },
  },

  // =====================================================
  // SPANISH
  // =====================================================
  es: {
    header: {
      heading: "Reserva tu Umrah fácilmente en línea con Hassaan Travel",
      description:
        "Servicios de Umrah rápidos, sencillos y fiables para peregrinos de los Países Bajos y países vecinos.",
    },
    services: {
      headingLine1: "Servicios completos de paquetes Umrah",
      headingLine2: "para peregrinos",
      items: {
        eVisa: {
          title: "Servicios de visado electrónico",
          desc: "Tramitación rápida y sencilla de tu visado para la Umrah.",
        },
        hotelBooking: {
          title: "Reserva de hotel",
          desc: "Elige tu alojamiento entre nuestra amplia oferta de hoteles.",
        },
        transportation: {
          title: "Transporte",
          desc: "Disfruta del mejor y más fiable servicio de transporte y concéntrate en tu peregrinación.",
        },
        tickets: {
          title: "Billetes de avión",
          desc: "La mejor ruta y los vuelos disponibles más económicos, según tus preferencias.",
        },
      },
    },
    documents: {
      title: "Umrah",
      items: [
        "Pasaporte válido (mínimo 6 meses de validez al regreso)",
        "Fotografía tamaño pasaporte",
        "Dirección de residencia",
        "Dirección del alojamiento",
        "Estado civil",
        "Profesión",
      ],
    },
    packages: {
      titleHighlight: "Paquetes de Umrah populares",
      titleRest: "desde los Países Bajos",
      description:
        "Emprende un viaje espiritual a La Meca y Medina con nuestros servicios personalizados.",
      comingSoonTitle: "Muy pronto",
      comingSoonText:
        "Estamos preparando los mejores paquetes de Umrah para ti. ¡Mantente atento a nuevas ofertas de viajes espirituales!",
    },
    steps: {
      headingLine1: "Cómo solicitar tu visado de Umrah",
      headingLine2: "en línea",
      imageAlt: "Paso {number}",
      items: {
        determineVisa: "Determina el visado adecuado",
        gatherDocuments: "Reúne los documentos necesarios",
        completeForm: "Completa el formulario de solicitud de visado",
      },
    },
  },

  // =====================================================
  // ARABIC
  // =====================================================
  ar: {
    header: {
      heading: "احجز عمرتك بسهولة عبر الإنترنت مع Hassaan Travel",
      description:
        "خدمات عمرة سريعة وسهلة وموثوقة للمعتمرين من هولندا والدول المجاورة.",
    },
    services: {
      headingLine1: "خدمات باقات العمرة المتكاملة",
      headingLine2: "للمعتمرين",
      items: {
        eVisa: {
          title: "خدمات التأشيرة الإلكترونية",
          desc: "إجراءات سريعة وسهلة لاستخراج تأشيرة العمرة.",
        },
        hotelBooking: {
          title: "حجز الفنادق",
          desc: "اختر إقامتك من بين العديد من الفنادق التي نقدمها.",
        },
        transportation: {
          title: "المواصلات",
          desc: "احصل على أفضل خدمة نقل موثوقة وتفرّغ لأداء مناسكك.",
        },
        tickets: {
          title: "تذاكر الطيران",
          desc: "أفضل المسارات وأرخص الرحلات المتاحة وفق رغباتك.",
        },
      },
    },
    documents: {
      title: "العمرة",
      items: [
        "جواز سفر ساري المفعول (لا تقل صلاحيته عن 6 أشهر عند العودة)",
        "صورة شخصية بحجم جواز السفر",
        "عنوان السكن",
        "عنوان الإقامة أثناء الرحلة",
        "الحالة الاجتماعية",
        "المهنة",
      ],
    },
    packages: {
      titleHighlight: "باقات العمرة الأكثر طلبًا",
      titleRest: "من هولندا",
      description:
        "انطلق في رحلة روحانية إلى مكة المكرمة والمدينة المنورة مع خدماتنا المصممة خصيصًا لك.",
      comingSoonTitle: "قريبًا",
      comingSoonText:
        "نعمل على إعداد أفضل باقات العمرة لك. ترقّب عروض السفر الروحانية الجديدة!",
    },
    steps: {
      headingLine1: "كيفية التقديم على تأشيرة العمرة",
      headingLine2: "عبر الإنترنت",
      imageAlt: "الخطوة {number}",
      items: {
        determineVisa: "حدّد نوع التأشيرة المناسب",
        gatherDocuments: "اجمع المستندات المطلوبة",
        completeForm: "املأ نموذج طلب التأشيرة",
      },
    },
  },

  // =====================================================
  // URDU
  // =====================================================
  ur: {
    header: {
      heading: "Hassaan Travel کے ساتھ آن لائن آسانی سے اپنا عمرہ بک کریں",
      description:
        "نیدرلینڈز اور ہمسایہ ممالک سے عمرہ ادا کرنے والوں کے لیے تیز، آسان اور قابلِ اعتماد عمرہ سروسز۔",
    },
    services: {
      headingLine1: "عمرہ زائرین کے لیے",
      headingLine2: "مکمل عمرہ پیکیج سروسز",
      items: {
        eVisa: {
          title: "ای ویزا سروسز",
          desc: "آپ کے عمرہ ویزا کی تیز اور آسان پروسیسنگ۔",
        },
        hotelBooking: {
          title: "ہوٹل بکنگ",
          desc: "ہمارے پیش کردہ متعدد ہوٹلوں میں سے اپنی رہائش منتخب کریں۔",
        },
        transportation: {
          title: "ٹرانسپورٹ",
          desc: "بہترین اور قابلِ اعتماد ٹرانسپورٹ سروس حاصل کریں اور اپنی عبادت پر توجہ دیں۔",
        },
        tickets: {
          title: "ٹکٹس",
          desc: "آپ کی خواہش کے مطابق بہترین روٹ اور سب سے سستی دستیاب پروازیں۔",
        },
      },
    },
    documents: {
      title: "عمرہ",
      items: [
        "کارآمد پاسپورٹ (واپسی پر کم از کم 6 ماہ کی میعاد)",
        "پاسپورٹ سائز تصویر",
        "رہائشی پتہ",
        "قیام کی جگہ کا پتہ",
        "ازدواجی حیثیت",
        "پیشہ",
      ],
    },
    packages: {
      titleHighlight: "مقبول عمرہ پیکیجز",
      titleRest: "نیدرلینڈز سے",
      description:
        "ہماری حسبِ ضرورت سروسز کے ساتھ مکہ مکرمہ اور مدینہ منورہ کے روحانی سفر پر روانہ ہوں۔",
      comingSoonTitle: "جلد آ رہا ہے",
      comingSoonText:
        "ہم آپ کے لیے بہترین عمرہ پیکیجز تیار کر رہے ہیں۔ نئی روحانی سفری پیشکشوں کے لیے ہمارے ساتھ رہیں!",
    },
    steps: {
      headingLine1: "اپنے عمرہ ویزا کے لیے",
      headingLine2: "آن لائن درخواست کیسے دیں",
      imageAlt: "مرحلہ {number}",
      items: {
        determineVisa: "مناسب ویزا کا تعین کریں",
        gatherDocuments: "مطلوبہ دستاویزات جمع کریں",
        completeForm: "ویزا درخواست فارم مکمل کریں",
      },
    },
  },
});

export type UmrahTranslation = ReturnType<typeof getUmrahTranslation>;