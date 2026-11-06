// =======================================================
// VISA COUNTRY PAGES TRANSLATIONS
// Used by app/pakistan/page.tsx and app/saudi-arabia/page.tsx
// (shared block can later be reused by netherland / uae pages)
// Languages: en | nl | de | fr | it | es | ar | ur
//
// "\n" in headings is kept on purpose: CommonHeader uses whitespace-pre-line.
// An explicit "" means "this part is not needed in this language".
//
// CONTENT CHECK markers: existing English content that looks copied from
// another page. Translated as-is on the owner's request; review later.
// =======================================================

import { createTranslator } from "@/lib/createTranslator";

export type PakistanVisaTypeKey = "tourist" | "business" | "familyVisit" | "student";
export type SaudiVisaTypeKey = "touristUmrah" | "umrah";

const en = {
  shared: {
    headerDescription: "Expert Visa Services for Pakistani and UAE Travelers.",
    visaTypesHeading: "Which Visa Do You Need?",
    // CONTENT CHECK: refund/fee note looks like UAE visa information (250 AED).
    refundNote: {
      line1:
        "If your visa application is canceled, the visa costs and service costs are not returned",
      line2:
        "For short-term tourist single-entry visa, it is valid for 30 days and with no extension. The visa processing fee will be 250 AED.",
    },
  },

  pakistan: {
    header: {
      heading:
        "Pakistani Family & Tourist Visa Services \n Hassaan Travel - Simple & Fast Processing",
    },
    intro: {
      titleStart: "What is a ",
      titleHighlight: "Pakistani Family",
      titleLine2: "Visa?",
      paragraphs: [
        "A Pakistani Family Visa allows foreign nationals to visit or stay in Pakistan and return with their family members who are living in Pakistan.",
        "A Pakistani Family Visa is usually granted to a spouse, children, parents, etc.",
        "We offer you different types of Pakistani Family Visas and our expert services to help you through the visa application process.",
      ],
      imageAlt: "Family traveling",
    },
    documents: {
      titleStart: "The ",
      titleHighlight: "Required Documents",
      titleEnd: " for",
      titleLine2: "Pakistan Family Visa:",
      passport: "Passport (Valid for at least 6 months)",
      photo:
        "Recent passport photo (passport photo must not be older than 6 months)",
      originIntro:
        "If you are of Pakistani origin or married to a Pakistani origin, one of the following combinations:",
      originOptions: [
        "A Pakistani ID card (NIC)",
        "An old/expired Pakistani passport",
        "Birth certificate",
        "Children under the age of 17 must provide valid passports from both parents, at least one Pakistani ID of the father or mother)",
        "Marriage certificate, Marriage book, Nikkahnama or BRP extract with mention of your partner in combination with your partner's Pakistani ID (NIC, MNIC, NICOP, or POC) or your Pakistani passport.",
      ],
      consent:
        "For children under the age of 17, a “Parents Consent Form” is required and it must be completed and signed by both parents.",
      imageAlt: "Required documents",
    },
    visaTypes: {
      // CONTENT CHECK: tourist and familyVisit mention the Netherlands.
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
  },

  saudi: {
    header: {
      heading: "Saudi Arabia Visa Services for Pakistani & UAE \n Citizens",
    },
    intro: {
      titleStart: "Simplifying Your ",
      titleHighlight: "Saudi Arabia",
      titleLine2: "Visa Process",
      // CONTENT CHECK: "90 days within 180 days" wording should be verified.
      description:
        "Citizens of the UAE can travel to Saudi Arabia without a visa for short stays, typically up to 90 days within a 180-day period, for tourism or business purposes.",
      imageAlt: "Saudi Arabia visa",
    },
    visaTypes: {
      touristUmrah: {
        title: "Tourist Visa | Umrah Visa",
        desc: "Ideal for leisure travel and exploring Saudi Arabia.",
      },
      umrah: {
        title: "Umrah Visa",
        desc: "Your gateway to a blessed Umrah experience in the holy cities of Makkah and Madinah.",
      },
    },
  },
} as const;

export const getVisaCountriesTranslation = createTranslator(en, {
  // =====================================================
  // DUTCH
  // =====================================================
  nl: {
    shared: {
      headerDescription: "Deskundige visumdiensten voor reizigers uit Pakistan en de VAE.",
      visaTypesHeading: "Welk visum heeft u nodig?",
      refundNote: {
        line1:
          "Als uw visumaanvraag wordt geannuleerd, worden de visumkosten en servicekosten niet terugbetaald",
        line2:
          "Een kortlopend toeristenvisum voor eenmalige inreis is 30 dagen geldig en kan niet worden verlengd. De verwerkingskosten voor het visum bedragen 250 AED.",
      },
    },
    pakistan: {
      header: {
        heading:
          "Pakistaanse familie- en toeristenvisa \n Hassaan Travel - eenvoudig en snel geregeld",
      },
      intro: {
        titleStart: "Wat is een ",
        titleHighlight: "Pakistaans",
        titleLine2: "familievisum?",
        paragraphs: [
          "Met een Pakistaans familievisum kunnen buitenlandse staatsburgers Pakistan bezoeken of er verblijven en samen terugreizen met hun familieleden die in Pakistan wonen.",
          "Een Pakistaans familievisum wordt meestal verleend aan een echtgenoot of echtgenote, kinderen, ouders, enzovoort.",
          "Wij bieden verschillende soorten Pakistaanse familievisa aan en begeleiden u deskundig bij het hele aanvraagproces.",
        ],
        imageAlt: "Reizend gezin",
      },
      documents: {
        titleStart: "De ",
        titleHighlight: "benodigde documenten",
        titleEnd: " voor",
        titleLine2: "het Pakistaanse familievisum:",
        passport: "Paspoort (minimaal 6 maanden geldig)",
        photo: "Recente pasfoto (niet ouder dan 6 maanden)",
        originIntro:
          "Als u van Pakistaanse afkomst bent of getrouwd bent met iemand van Pakistaanse afkomst, een van de volgende combinaties:",
        originOptions: [
          "Een Pakistaanse identiteitskaart (NIC)",
          "Een oud/verlopen Pakistaans paspoort",
          "Geboorteakte",
          "Kinderen jonger dan 17 jaar moeten geldige paspoorten van beide ouders overleggen, en ten minste één Pakistaanse ID van de vader of moeder",
          "Huwelijksakte, trouwboekje, Nikkahnama of BRP-uittreksel met vermelding van uw partner, in combinatie met de Pakistaanse ID van uw partner (NIC, MNIC, NICOP of POC) of uw Pakistaanse paspoort.",
        ],
        consent:
          "Voor kinderen jonger dan 17 jaar is een “Parents Consent Form” (toestemmingsformulier) verplicht, dat door beide ouders moet worden ingevuld en ondertekend.",
        imageAlt: "Benodigde documenten",
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
    saudi: {
      header: {
        heading: "Visumdiensten voor Saoedi-Arabië \n voor burgers uit Pakistan en de VAE",
      },
      intro: {
        titleStart: "Uw ",
        titleHighlight: "Saoedi-Arabië",
        titleLine2: "visumproces vereenvoudigd",
        description:
          "Burgers van de VAE kunnen zonder visum naar Saoedi-Arabië reizen voor een kort verblijf, doorgaans tot 90 dagen binnen een periode van 180 dagen, voor toerisme of zaken.",
        imageAlt: "Visum voor Saoedi-Arabië",
      },
      visaTypes: {
        touristUmrah: {
          title: "Toeristenvisum | Umrah-visum",
          desc: "Ideaal voor vrije tijd en om Saoedi-Arabië te ontdekken.",
        },
        umrah: {
          title: "Umrah-visum",
          desc: "Uw toegang tot een gezegende Umrah-ervaring in de heilige steden Mekka en Medina.",
        },
      },
    },
  },

  // =====================================================
  // GERMAN
  // =====================================================
  de: {
    shared: {
      headerDescription: "Professionelle Visa-Services für Reisende aus Pakistan und den VAE.",
      visaTypesHeading: "Welches Visum benötigen Sie?",
      refundNote: {
        line1:
          "Wird Ihr Visumantrag storniert, werden die Visumkosten und Servicegebühren nicht erstattet",
        line2:
          "Ein kurzfristiges Touristenvisum für die einmalige Einreise ist 30 Tage gültig und kann nicht verlängert werden. Die Bearbeitungsgebühr für das Visum beträgt 250 AED.",
      },
    },
    pakistan: {
      header: {
        heading:
          "Pakistanische Familien- und Touristenvisa \n Hassaan Travel – einfach und schnell bearbeitet",
      },
      intro: {
        titleStart: "Was ist ein ",
        titleHighlight: "pakistanisches",
        titleLine2: "Familienvisum?",
        paragraphs: [
          "Ein pakistanisches Familienvisum ermöglicht ausländischen Staatsangehörigen, Pakistan zu besuchen oder sich dort aufzuhalten und mit ihren in Pakistan lebenden Familienangehörigen zurückzukehren.",
          "Ein pakistanisches Familienvisum wird in der Regel Ehepartnern, Kindern, Eltern usw. erteilt.",
          "Wir bieten verschiedene Arten von pakistanischen Familienvisa an und unterstützen Sie fachkundig während des gesamten Antragsverfahrens.",
        ],
        imageAlt: "Reisende Familie",
      },
      documents: {
        titleStart: "Die ",
        titleHighlight: "erforderlichen Unterlagen",
        titleEnd: " für das",
        titleLine2: "pakistanische Familienvisum:",
        passport: "Reisepass (mindestens 6 Monate gültig)",
        photo: "Aktuelles Passfoto (nicht älter als 6 Monate)",
        originIntro:
          "Wenn Sie pakistanischer Herkunft sind oder mit einer Person pakistanischer Herkunft verheiratet sind, eine der folgenden Kombinationen:",
        originOptions: [
          "Ein pakistanischer Personalausweis (NIC)",
          "Ein alter/abgelaufener pakistanischer Reisepass",
          "Geburtsurkunde",
          "Kinder unter 17 Jahren müssen gültige Reisepässe beider Eltern sowie mindestens einen pakistanischen Ausweis des Vaters oder der Mutter vorlegen",
          "Heiratsurkunde, Familienstammbuch, Nikkahnama oder BRP-Auszug mit Angabe Ihres Partners, zusammen mit dem pakistanischen Ausweis Ihres Partners (NIC, MNIC, NICOP oder POC) oder Ihrem pakistanischen Reisepass.",
        ],
        consent:
          "Für Kinder unter 17 Jahren ist ein „Parents Consent Form“ (Einverständniserklärung der Eltern) erforderlich, das von beiden Eltern ausgefüllt und unterschrieben werden muss.",
        imageAlt: "Erforderliche Unterlagen",
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
    saudi: {
      header: {
        heading:
          "Visa-Services für Saudi-Arabien \n für Staatsangehörige aus Pakistan und den VAE",
      },
      intro: {
        titleStart: "Wir vereinfachen Ihr ",
        titleHighlight: "Saudi-Arabien",
        titleLine2: "Visumverfahren",
        description:
          "Staatsangehörige der VAE können für Kurzaufenthalte ohne Visum nach Saudi-Arabien reisen, in der Regel bis zu 90 Tage innerhalb von 180 Tagen, für touristische oder geschäftliche Zwecke.",
        imageAlt: "Visum für Saudi-Arabien",
      },
      visaTypes: {
        touristUmrah: {
          title: "Touristenvisum | Umrah-Visum",
          desc: "Ideal für Urlaubsreisen und um Saudi-Arabien zu entdecken.",
        },
        umrah: {
          title: "Umrah-Visum",
          desc: "Ihr Weg zu einer gesegneten Umrah in den heiligen Städten Mekka und Medina.",
        },
      },
    },
  },

  // =====================================================
  // FRENCH
  // =====================================================
  fr: {
    shared: {
      headerDescription:
        "Des services de visa experts pour les voyageurs pakistanais et émiriens.",
      visaTypesHeading: "De quel visa avez-vous besoin ?",
      refundNote: {
        line1:
          "En cas d'annulation de votre demande de visa, les frais de visa et de service ne sont pas remboursés",
        line2:
          "Le visa touristique de courte durée à entrée unique est valable 30 jours, sans prolongation possible. Les frais de traitement du visa s'élèvent à 250 AED.",
      },
    },
    pakistan: {
      header: {
        heading:
          "Services de visa familial et touristique pour le Pakistan \n Hassaan Travel – un traitement simple et rapide",
      },
      intro: {
        titleStart: "Qu'est-ce qu'un ",
        titleHighlight: "visa familial",
        titleLine2: "pakistanais ?",
        paragraphs: [
          "Le visa familial pakistanais permet aux ressortissants étrangers de visiter le Pakistan ou d'y séjourner, et de rentrer avec les membres de leur famille qui vivent au Pakistan.",
          "Le visa familial pakistanais est généralement accordé au conjoint, aux enfants, aux parents, etc.",
          "Nous proposons différents types de visas familiaux pakistanais et vous accompagnons avec expertise tout au long de la procédure de demande.",
        ],
        imageAlt: "Famille en voyage",
      },
      documents: {
        titleStart: "Les ",
        titleHighlight: "documents requis",
        titleEnd: " pour le",
        titleLine2: "visa familial pakistanais :",
        passport: "Passeport (valable au moins 6 mois)",
        photo: "Photo d'identité récente (datant de moins de 6 mois)",
        originIntro:
          "Si vous êtes d'origine pakistanaise ou marié(e) à une personne d'origine pakistanaise, l'une des combinaisons suivantes :",
        originOptions: [
          "Une carte d'identité pakistanaise (NIC)",
          "Un ancien passeport pakistanais ou un passeport expiré",
          "Acte de naissance",
          "Les enfants de moins de 17 ans doivent fournir les passeports valides des deux parents et au moins une pièce d'identité pakistanaise du père ou de la mère",
          "Acte de mariage, livret de famille, Nikkahnama ou extrait BRP mentionnant votre partenaire, accompagné de la pièce d'identité pakistanaise de votre partenaire (NIC, MNIC, NICOP ou POC) ou de votre passeport pakistanais.",
        ],
        consent:
          "Pour les enfants de moins de 17 ans, un « Parents Consent Form » (autorisation parentale) est requis ; il doit être rempli et signé par les deux parents.",
        imageAlt: "Documents requis",
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
    saudi: {
      header: {
        heading:
          "Services de visa pour l'Arabie saoudite \n pour les citoyens pakistanais et émiriens",
      },
      intro: {
        titleStart: "Simplifiez vos démarches de ",
        titleHighlight: "visa",
        titleLine2: "pour l'Arabie saoudite",
        description:
          "Les citoyens des Émirats arabes unis peuvent se rendre en Arabie saoudite sans visa pour de courts séjours, généralement jusqu'à 90 jours sur une période de 180 jours, à des fins touristiques ou professionnelles.",
        imageAlt: "Visa pour l'Arabie saoudite",
      },
      visaTypes: {
        touristUmrah: {
          title: "Visa touristique | Visa Omra",
          desc: "Idéal pour les voyages d'agrément et pour découvrir l'Arabie saoudite.",
        },
        umrah: {
          title: "Visa Omra",
          desc: "Votre porte d'entrée vers une Omra bénie dans les villes saintes de La Mecque et de Médine.",
        },
      },
    },
  },

  // =====================================================
  // ITALIAN
  // =====================================================
  it: {
    shared: {
      headerDescription:
        "Servizi visti professionali per viaggiatori dal Pakistan e dagli Emirati.",
      visaTypesHeading: "Di quale visto hai bisogno?",
      refundNote: {
        line1:
          "Se la tua domanda di visto viene annullata, i costi del visto e del servizio non vengono rimborsati",
        line2:
          "Il visto turistico di breve durata a ingresso singolo è valido 30 giorni e non può essere prorogato. La tariffa di elaborazione del visto è di 250 AED.",
      },
    },
    pakistan: {
      header: {
        heading:
          "Servizi visti familiari e turistici per il Pakistan \n Hassaan Travel – procedura semplice e veloce",
      },
      intro: {
        titleStart: "Che cos'è il ",
        titleHighlight: "visto familiare",
        titleLine2: "pakistano?",
        paragraphs: [
          "Il visto familiare pakistano consente ai cittadini stranieri di visitare o soggiornare in Pakistan e di rientrare con i familiari che vivono in Pakistan.",
          "Il visto familiare pakistano viene solitamente concesso a coniugi, figli, genitori, ecc.",
          "Offriamo diversi tipi di visti familiari pakistani e la nostra assistenza esperta durante tutta la procedura di richiesta.",
        ],
        imageAlt: "Famiglia in viaggio",
      },
      documents: {
        titleStart: "I ",
        titleHighlight: "documenti richiesti",
        titleEnd: " per il",
        titleLine2: "visto familiare pakistano:",
        passport: "Passaporto (valido almeno 6 mesi)",
        photo: "Fototessera recente (non più vecchia di 6 mesi)",
        originIntro:
          "Se sei di origine pakistana o sposato/a con una persona di origine pakistana, una delle seguenti combinazioni:",
        originOptions: [
          "Una carta d'identità pakistana (NIC)",
          "Un vecchio passaporto pakistano o scaduto",
          "Certificato di nascita",
          "I minori di 17 anni devono presentare i passaporti validi di entrambi i genitori e almeno un documento d'identità pakistano del padre o della madre",
          "Certificato di matrimonio, libretto di famiglia, Nikkahnama o estratto BRP con l'indicazione del partner, insieme al documento d'identità pakistano del partner (NIC, MNIC, NICOP o POC) o al tuo passaporto pakistano.",
        ],
        consent:
          "Per i minori di 17 anni è richiesto un “Parents Consent Form” (consenso dei genitori), che deve essere compilato e firmato da entrambi i genitori.",
        imageAlt: "Documenti richiesti",
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
    saudi: {
      header: {
        heading:
          "Servizi visti per l'Arabia Saudita \n per cittadini pakistani ed emiratini",
      },
      intro: {
        titleStart: "Semplifichiamo la procedura del ",
        titleHighlight: "visto",
        titleLine2: "per l'Arabia Saudita",
        description:
          "I cittadini degli Emirati Arabi Uniti possono recarsi in Arabia Saudita senza visto per brevi soggiorni, in genere fino a 90 giorni in un periodo di 180 giorni, per turismo o affari.",
        imageAlt: "Visto per l'Arabia Saudita",
      },
      visaTypes: {
        touristUmrah: {
          title: "Visto turistico | Visto Umrah",
          desc: "Ideale per viaggi di piacere e per scoprire l'Arabia Saudita.",
        },
        umrah: {
          title: "Visto Umrah",
          desc: "La tua porta d'accesso a un'Umrah benedetta nelle città sante della Mecca e di Medina.",
        },
      },
    },
  },

  // =====================================================
  // SPANISH
  // =====================================================
  es: {
    shared: {
      headerDescription: "Servicios de visado expertos para viajeros de Pakistán y los EAU.",
      visaTypesHeading: "¿Qué visado necesitas?",
      refundNote: {
        line1:
          "Si tu solicitud de visado se cancela, los gastos de visado y de servicio no se reembolsan",
        line2:
          "El visado de turista de corta duración y entrada única es válido durante 30 días y no se puede prorrogar. La tasa de tramitación del visado es de 250 AED.",
      },
    },
    pakistan: {
      header: {
        heading:
          "Servicios de visado familiar y de turista para Pakistán \n Hassaan Travel: tramitación sencilla y rápida",
      },
      intro: {
        titleStart: "¿Qué es el ",
        titleHighlight: "visado familiar",
        titleLine2: "pakistaní?",
        paragraphs: [
          "El visado familiar pakistaní permite a los ciudadanos extranjeros visitar Pakistán o residir allí y regresar con sus familiares que viven en Pakistán.",
          "El visado familiar pakistaní suele concederse a cónyuges, hijos, padres, etc.",
          "Ofrecemos distintos tipos de visados familiares pakistaníes y nuestro asesoramiento experto durante todo el proceso de solicitud.",
        ],
        imageAlt: "Familia de viaje",
      },
      documents: {
        titleStart: "Los ",
        titleHighlight: "documentos necesarios",
        titleEnd: " para el",
        titleLine2: "visado familiar pakistaní:",
        passport: "Pasaporte (con una validez mínima de 6 meses)",
        photo: "Fotografía de pasaporte reciente (con una antigüedad máxima de 6 meses)",
        originIntro:
          "Si eres de origen pakistaní o estás casado/a con una persona de origen pakistaní, una de las siguientes combinaciones:",
        originOptions: [
          "Un documento de identidad pakistaní (NIC)",
          "Un pasaporte pakistaní antiguo o caducado",
          "Partida de nacimiento",
          "Los menores de 17 años deben presentar los pasaportes válidos de ambos padres y al menos un documento de identidad pakistaní del padre o de la madre",
          "Certificado de matrimonio, libro de familia, Nikkahnama o extracto del BRP en el que conste tu pareja, junto con el documento de identidad pakistaní de tu pareja (NIC, MNIC, NICOP o POC) o tu pasaporte pakistaní.",
        ],
        consent:
          "Para los menores de 17 años se requiere un “Parents Consent Form” (consentimiento de los padres), que deben completar y firmar ambos padres.",
        imageAlt: "Documentos necesarios",
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
    saudi: {
      header: {
        heading: "Servicios de visado para Arabia Saudí \n para ciudadanos de Pakistán y los EAU",
      },
      intro: {
        titleStart: "Simplificamos el trámite de tu ",
        titleHighlight: "visado",
        titleLine2: "para Arabia Saudí",
        description:
          "Los ciudadanos de los EAU pueden viajar a Arabia Saudí sin visado para estancias cortas, normalmente de hasta 90 días dentro de un periodo de 180 días, por turismo o negocios.",
        imageAlt: "Visado para Arabia Saudí",
      },
      visaTypes: {
        touristUmrah: {
          title: "Visado de turista | Visado de Umrah",
          desc: "Ideal para viajes de ocio y para descubrir Arabia Saudí.",
        },
        umrah: {
          title: "Visado de Umrah",
          desc: "Tu puerta de acceso a una Umrah bendecida en las ciudades santas de La Meca y Medina.",
        },
      },
    },
  },

  // =====================================================
  // ARABIC
  // =====================================================
  ar: {
    shared: {
      headerDescription: "خدمات تأشيرات احترافية للمسافرين من باكستان والإمارات.",
      visaTypesHeading: "ما التأشيرة التي تحتاجها؟",
      refundNote: {
        line1: "في حال إلغاء طلب التأشيرة، لا تُسترد رسوم التأشيرة ورسوم الخدمة",
        line2:
          "التأشيرة السياحية قصيرة المدة لدخول واحد صالحة لمدة 30 يومًا وغير قابلة للتمديد. رسوم معالجة التأشيرة 250 درهمًا إماراتيًا.",
      },
    },
    pakistan: {
      header: {
        heading:
          "خدمات التأشيرة العائلية والسياحية لباكستان \n Hassaan Travel – إجراءات سهلة وسريعة",
      },
      intro: {
        titleStart: "ما هي ",
        titleHighlight: "التأشيرة العائلية",
        titleLine2: "الباكستانية؟",
        paragraphs: [
          "تتيح التأشيرة العائلية الباكستانية للمواطنين الأجانب زيارة باكستان أو الإقامة فيها والعودة مع أفراد عائلاتهم المقيمين في باكستان.",
          "تُمنح التأشيرة العائلية الباكستانية عادةً للزوج أو الزوجة والأبناء والوالدين وغيرهم.",
          "نقدم لك أنواعًا مختلفة من التأشيرات العائلية الباكستانية وخدماتنا المتخصصة لمساعدتك طوال إجراءات تقديم الطلب.",
        ],
        imageAlt: "عائلة مسافرة",
      },
      documents: {
        titleStart: "",
        titleHighlight: "المستندات المطلوبة",
        titleEnd: "",
        titleLine2: "للتأشيرة العائلية الباكستانية:",
        passport: "جواز سفر (صالح لمدة 6 أشهر على الأقل)",
        photo: "صورة شخصية حديثة بحجم جواز السفر (لا يزيد عمرها عن 6 أشهر)",
        originIntro:
          "إذا كنت من أصل باكستاني أو متزوجًا من شخص من أصل باكستاني، فيلزم تقديم أحد الخيارات التالية:",
        originOptions: [
          "بطاقة هوية باكستانية (NIC)",
          "جواز سفر باكستاني قديم أو منتهي الصلاحية",
          "شهادة الميلاد",
          "يجب على الأطفال دون سن 17 عامًا تقديم جوازات سفر سارية لكلا الوالدين، وهوية باكستانية واحدة على الأقل للأب أو الأم",
          "عقد الزواج أو دفتر الزواج أو النكاح نامه أو مستخرج BRP يُذكر فيه شريكك، مع الهوية الباكستانية لشريكك (NIC أو MNIC أو NICOP أو POC) أو جواز سفرك الباكستاني.",
        ],
        consent:
          "للأطفال دون سن 17 عامًا، يلزم تقديم «نموذج موافقة الوالدين» (Parents Consent Form)، ويجب أن يملأه ويوقّعه كلا الوالدين.",
        imageAlt: "المستندات المطلوبة",
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
    saudi: {
      header: {
        heading:
          "خدمات تأشيرة المملكة العربية السعودية \n للمواطنين الباكستانيين والإماراتيين",
      },
      intro: {
        titleStart: "نسهّل عليك إجراءات ",
        titleHighlight: "تأشيرة السعودية",
        titleLine2: "",
        description:
          "يمكن لمواطني الإمارات السفر إلى المملكة العربية السعودية دون تأشيرة للإقامات القصيرة، عادةً لمدة تصل إلى 90 يومًا خلال فترة 180 يومًا، لأغراض السياحة أو الأعمال.",
        imageAlt: "تأشيرة المملكة العربية السعودية",
      },
      visaTypes: {
        touristUmrah: {
          title: "التأشيرة السياحية | تأشيرة العمرة",
          desc: "مثالية للسفر الترفيهي واستكشاف المملكة العربية السعودية.",
        },
        umrah: {
          title: "تأشيرة العمرة",
          desc: "بوابتك إلى عمرة مباركة في مكة المكرمة والمدينة المنورة.",
        },
      },
    },
  },

  // =====================================================
  // URDU
  // =====================================================
  ur: {
    shared: {
      headerDescription: "پاکستانی اور متحدہ عرب امارات کے مسافروں کے لیے ماہرانہ ویزا سروسز۔",
      visaTypesHeading: "آپ کو کون سا ویزا چاہیے؟",
      refundNote: {
        line1:
          "اگر آپ کی ویزا درخواست منسوخ ہو جائے تو ویزا اور سروس کے اخراجات واپس نہیں کیے جاتے",
        line2:
          "قلیل مدتی سنگل انٹری ٹورسٹ ویزا 30 دن کے لیے کارآمد ہوتا ہے اور اس میں توسیع نہیں ہوتی۔ ویزا پروسیسنگ فیس 250 درہم ہوگی۔",
      },
    },
    pakistan: {
      header: {
        heading:
          "پاکستانی فیملی اور ٹورسٹ ویزا سروسز \n Hassaan Travel - آسان اور تیز پروسیسنگ",
      },
      intro: {
        titleStart: "",
        titleHighlight: "پاکستانی فیملی",
        titleLine2: "ویزا کیا ہے؟",
        paragraphs: [
          "پاکستانی فیملی ویزا غیر ملکی شہریوں کو پاکستان آنے یا وہاں قیام کرنے اور پاکستان میں مقیم اپنے اہلِ خانہ کے ساتھ واپس جانے کی اجازت دیتا ہے۔",
          "پاکستانی فیملی ویزا عموماً شریکِ حیات، بچوں، والدین وغیرہ کو دیا جاتا ہے۔",
          "ہم آپ کو مختلف اقسام کے پاکستانی فیملی ویزے اور درخواست کے پورے عمل میں ماہرانہ معاونت فراہم کرتے ہیں۔",
        ],
        imageAlt: "سفر کرتا ہوا خاندان",
      },
      documents: {
        titleStart: "پاکستان فیملی ویزا کے لیے ",
        titleHighlight: "مطلوبہ دستاویزات",
        titleEnd: ":",
        titleLine2: "",
        passport: "پاسپورٹ (کم از کم 6 ماہ کی میعاد)",
        photo: "حالیہ پاسپورٹ سائز تصویر (6 ماہ سے پرانی نہ ہو)",
        originIntro:
          "اگر آپ پاکستانی نژاد ہیں یا کسی پاکستانی نژاد سے شادی شدہ ہیں تو درج ذیل میں سے کوئی ایک:",
        originOptions: [
          "پاکستانی شناختی کارڈ (NIC)",
          "پرانا/میعاد ختم شدہ پاکستانی پاسپورٹ",
          "پیدائش کا سرٹیفکیٹ",
          "17 سال سے کم عمر بچوں کو والدین دونوں کے کارآمد پاسپورٹ اور والد یا والدہ میں سے کم از کم ایک کا پاکستانی شناختی کارڈ فراہم کرنا ہوگا",
          "نکاح نامہ، میرج سرٹیفکیٹ، میرج بک یا BRP ایکسٹریکٹ جس میں آپ کے شریکِ حیات کا ذکر ہو، ساتھ میں شریکِ حیات کا پاکستانی شناختی کارڈ (NIC، MNIC، NICOP یا POC) یا آپ کا پاکستانی پاسپورٹ۔",
        ],
        consent:
          "17 سال سے کم عمر بچوں کے لیے “Parents Consent Form” (والدین کی رضامندی کا فارم) لازمی ہے، جسے والدین دونوں نے پُر کر کے دستخط کرنا ہوں گے۔",
        imageAlt: "مطلوبہ دستاویزات",
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
    saudi: {
      header: {
        heading:
          "پاکستانی اور متحدہ عرب امارات کے شہریوں کے لیے \n سعودی عرب ویزا سروسز",
      },
      intro: {
        titleStart: "",
        titleHighlight: "سعودی عرب",
        titleLine2: "ویزا کا عمل اب آسان",
        description:
          "متحدہ عرب امارات کے شہری سیاحت یا کاروبار کے لیے مختصر قیام کی خاطر بغیر ویزا سعودی عرب جا سکتے ہیں، عام طور پر 180 دن کی مدت میں 90 دن تک۔",
        imageAlt: "سعودی عرب ویزا",
      },
      visaTypes: {
        touristUmrah: {
          title: "ٹورسٹ ویزا | عمرہ ویزا",
          desc: "سیر و تفریح اور سعودی عرب کی سیاحت کے لیے بہترین۔",
        },
        umrah: {
          title: "عمرہ ویزا",
          desc: "مکہ مکرمہ اور مدینہ منورہ کے مقدس شہروں میں بابرکت عمرہ کا ذریعہ۔",
        },
      },
    },
  },
});

export type VisaCountriesTranslation = ReturnType<
  typeof getVisaCountriesTranslation
>;