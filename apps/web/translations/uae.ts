// =======================================================
// UAE VISA PAGE TRANSLATIONS
// Used by app/uae/page.tsx and components/layout/uae/VisaOptions.tsx
// Refund note comes from translations/visaCountries.ts → shared.
// Languages: en | nl | de | fr | it | es | ar | ur
// Content translated as-is on the owner's request.
//
// Card titles are arrays of parts so each language can choose which
// words are highlighted (blue) and in what order.
// =======================================================

import { createTranslator } from "@/lib/createTranslator";

export type TitlePart = { text: string; highlight: boolean };

const en = {
  header: {
    heading: "UAE Visa Services for Pakistani & Dutch Citizens",
    description:
      "Fast, reliable, and personalized support for your UAE visa application.",
  },

  explore: {
    titleHighlight: "Explore the UAE",
    titleRest: " with Hassaan Travel",
    description:
      "Explore the vibrant land of UAE with Hassaan Travels, a hub for multinational businesses, a premium luxurious experience, and an attraction for families. Whether you have to attend business conferences, or visit world-class shopping malls and tourist attractions, Hassaan Travels is here to accommodate you through the journey fully.",
    imageAlt: "Explore the UAE",
  },

  dutch: {
    titleStart: "UAE Visa Services ",
    titleHighlight: "for Dutch Citizens:",
    description:
      "The Dutch citizens avail the benefit of no-visa travel status. When they enter the UAE, their passport is just stamped with a visit visa once they enter the UAE, which will be valid for a maximum time of 90 days.",
    imageAlt: "UAE visa for Dutch citizens",
  },

  documents: {
    /** Passed to <RequiredDocuments title={...} /> */
    title: "UAE",
    items: [
      "Valid passport with at least 6 months validity.",
      "Passport-size photos meeting UAE visa specifications.",
      "Flight details and proof of travel itinerary.",
      "Proof of accommodation or hotel booking in the UAE.",
      "Additional documents for business or family visas (if applicable).",
    ],
  },

  options: {
    headingText: "UAE Visa Options",
    headingHighlight: "Tailored to Your Needs",
    description:
      "For short-term tourist single-entry visa, it is valid for 30 days and with no extension. The visa processing fee will be 250 AED.",
    cards: [
      {
        title: [
          { text: "Long-term visas", highlight: true },
          { text: " for business or family stays.", highlight: false },
        ],
        description:
          "The UAE’s Golden Visa is a long-term residence visa which offers the foreigners to live, work or study in the UAE. It offers exclusive benefits such as an entry visa for 6 months with multiple entries, and a renewable visa valid for 5 or 10 years.",
      },
      {
        title: [
          { text: "Transit visas", highlight: true },
          { text: " for travelers", highlight: false },
          { text: " passing through the UAE", highlight: true },
        ],
        description:
          "The UAE Government offers a transit visa to those transiting through UAE’s airports. A transit visa is valid only for 48 or 96 hours. It is issued free of cost to the passengers and cannot be extended.",
      },
      {
        title: [
          { text: "Visit", highlight: false },
          { text: " visas", highlight: true },
          { text: " for", highlight: false },
          { text: " family reunions or business meetings", highlight: true },
        ],
        description:
          "The applicant wishing to visit the UAE for either a family reunion or business meeting is granted a single-entry visa without a sponsor in the UAE. The visa validity may vary from 30 to 60 to 90 days.",
      },
    ],
    button: "Find the Right UAE Visa for You",
  },
} as const;

export const getUaeTranslation = createTranslator(en, {
  // =====================================================
  // DUTCH
  // =====================================================
  nl: {
    header: {
      heading: "VAE-visumdiensten voor Pakistaanse en Nederlandse burgers",
      description:
        "Snelle, betrouwbare en persoonlijke ondersteuning bij uw VAE-visumaanvraag.",
    },
    explore: {
      titleHighlight: "Ontdek de VAE",
      titleRest: " met Hassaan Travel",
      description:
        "Ontdek het bruisende land van de VAE met Hassaan Travels: een centrum voor multinationale bedrijven, een premium luxe ervaring en een trekpleister voor gezinnen. Of u nu zakelijke congressen bijwoont of winkelcentra en toeristische attracties van wereldklasse bezoekt, Hassaan Travels begeleidt u volledig tijdens uw reis.",
      imageAlt: "Ontdek de VAE",
    },
    dutch: {
      titleStart: "VAE-visumdiensten ",
      titleHighlight: "voor Nederlandse burgers:",
      description:
        "Nederlandse burgers profiteren van visumvrij reizen. Bij aankomst in de VAE krijgt hun paspoort simpelweg een stempel met een bezoekersvisum, dat maximaal 90 dagen geldig is.",
      imageAlt: "VAE-visum voor Nederlandse burgers",
    },
    documents: {
      title: "VAE",
      items: [
        "Geldig paspoort met een geldigheid van minimaal 6 maanden.",
        "Pasfoto's die voldoen aan de visumeisen van de VAE.",
        "Vluchtgegevens en bewijs van uw reisschema.",
        "Bewijs van accommodatie of hotelboeking in de VAE.",
        "Aanvullende documenten voor zakelijke of familievisa (indien van toepassing).",
      ],
    },
    options: {
      headingText: "VAE-visumopties",
      headingHighlight: "afgestemd op uw behoeften",
      description:
        "Een kortlopend toeristenvisum voor eenmalige inreis is 30 dagen geldig en kan niet worden verlengd. De verwerkingskosten voor het visum bedragen 250 AED.",
      cards: [
        {
          title: [
            { text: "Langlopende visa", highlight: true },
            { text: " voor zakelijk of familieverblijf.", highlight: false },
          ],
          description:
            "Het Golden Visa van de VAE is een langlopende verblijfsvergunning waarmee buitenlanders in de VAE kunnen wonen, werken of studeren. Het biedt exclusieve voordelen, zoals een inreisvisum van 6 maanden met meervoudige inreis en een verlengbaar visum dat 5 of 10 jaar geldig is.",
        },
        {
          title: [
            { text: "Transitvisa", highlight: true },
            { text: " voor reizigers", highlight: false },
            { text: " die via de VAE reizen", highlight: true },
          ],
          description:
            "De overheid van de VAE biedt een transitvisum aan reizigers die via de luchthavens van de VAE reizen. Een transitvisum is slechts 48 of 96 uur geldig, wordt gratis verstrekt en kan niet worden verlengd.",
        },
        {
          title: [
            { text: "Bezoek", highlight: false },
            { text: "visa", highlight: true },
            { text: " voor ", highlight: false },
            { text: "familiebezoek of zakelijke afspraken", highlight: true },
          ],
          description:
            "Wie de VAE wil bezoeken voor een familiebezoek of zakelijke afspraak, krijgt een visum voor eenmalige inreis zonder sponsor in de VAE. De geldigheid van het visum kan variëren van 30 tot 60 tot 90 dagen.",
        },
      ],
      button: "Vind het juiste VAE-visum voor u",
    },
  },

  // =====================================================
  // GERMAN
  // =====================================================
  de: {
    header: {
      heading:
        "VAE-Visa-Services für pakistanische und niederländische Staatsangehörige",
      description:
        "Schnelle, zuverlässige und persönliche Unterstützung für Ihren VAE-Visumantrag.",
    },
    explore: {
      titleHighlight: "Entdecken Sie die VAE",
      titleRest: " mit Hassaan Travel",
      description:
        "Entdecken Sie mit Hassaan Travels das lebendige Land der VAE – ein Zentrum für multinationale Unternehmen, ein erstklassiges Luxuserlebnis und ein Anziehungspunkt für Familien. Ob Geschäftskonferenzen oder weltbekannte Einkaufszentren und Sehenswürdigkeiten – Hassaan Travels begleitet Sie während der gesamten Reise.",
      imageAlt: "Die VAE entdecken",
    },
    dutch: {
      titleStart: "VAE-Visa-Services ",
      titleHighlight: "für niederländische Staatsangehörige:",
      description:
        "Niederländische Staatsangehörige genießen visumfreies Reisen. Bei der Einreise in die VAE erhalten sie lediglich einen Besuchervisum-Stempel in ihren Reisepass, der maximal 90 Tage gültig ist.",
      imageAlt: "VAE-Visum für niederländische Staatsangehörige",
    },
    documents: {
      title: "VAE",
      items: [
        "Gültiger Reisepass mit mindestens 6 Monaten Gültigkeit.",
        "Passfotos gemäß den Visavorgaben der VAE.",
        "Flugdaten und Nachweis des Reiseplans.",
        "Nachweis der Unterkunft oder Hotelbuchung in den VAE.",
        "Zusätzliche Unterlagen für Geschäfts- oder Familienvisa (falls zutreffend).",
      ],
    },
    options: {
      headingText: "VAE-Visaoptionen",
      headingHighlight: "ganz nach Ihren Bedürfnissen",
      description:
        "Ein kurzfristiges Touristenvisum für die einmalige Einreise ist 30 Tage gültig und kann nicht verlängert werden. Die Bearbeitungsgebühr für das Visum beträgt 250 AED.",
      cards: [
        {
          title: [
            { text: "Langzeitvisa", highlight: true },
            { text: " für geschäftliche oder familiäre Aufenthalte.", highlight: false },
          ],
          description:
            "Das Golden Visa der VAE ist ein langfristiges Aufenthaltsvisum, mit dem Ausländer in den VAE leben, arbeiten oder studieren können. Es bietet exklusive Vorteile wie ein Einreisevisum für 6 Monate mit mehrfacher Einreise und ein verlängerbares Visum mit einer Gültigkeit von 5 oder 10 Jahren.",
        },
        {
          title: [
            { text: "Transitvisa", highlight: true },
            { text: " für Reisende,", highlight: false },
            { text: " die über die VAE reisen", highlight: true },
          ],
          description:
            "Die Regierung der VAE bietet Reisenden, die über Flughäfen der VAE reisen, ein Transitvisum an. Es ist nur 48 oder 96 Stunden gültig, wird kostenlos ausgestellt und kann nicht verlängert werden.",
        },
        {
          title: [
            { text: "Besuchs", highlight: false },
            { text: "visa", highlight: true },
            { text: " für ", highlight: false },
            { text: "Familienbesuche oder Geschäftstreffen", highlight: true },
          ],
          description:
            "Wer die VAE für einen Familienbesuch oder ein Geschäftstreffen besuchen möchte, erhält ein Visum für die einmalige Einreise ohne Sponsor in den VAE. Die Gültigkeit kann 30, 60 oder 90 Tage betragen.",
        },
      ],
      button: "Das passende VAE-Visum finden",
    },
  },

  // =====================================================
  // FRENCH
  // =====================================================
  fr: {
    header: {
      heading:
        "Services de visa pour les Émirats arabes unis pour les citoyens pakistanais et néerlandais",
      description:
        "Une assistance rapide, fiable et personnalisée pour votre demande de visa pour les Émirats.",
    },
    explore: {
      titleHighlight: "Découvrez les Émirats",
      titleRest: " avec Hassaan Travel",
      description:
        "Découvrez avec Hassaan Travels le pays dynamique des Émirats arabes unis : un pôle pour les entreprises multinationales, une expérience de luxe haut de gamme et une destination prisée des familles. Que vous assistiez à des conférences professionnelles ou visitiez des centres commerciaux et attractions touristiques de renommée mondiale, Hassaan Travels vous accompagne tout au long de votre voyage.",
      imageAlt: "Découvrir les Émirats",
    },
    dutch: {
      titleStart: "Services de visa pour les Émirats ",
      titleHighlight: "destinés aux citoyens néerlandais :",
      description:
        "Les citoyens néerlandais bénéficient d'une exemption de visa. À leur arrivée aux Émirats, leur passeport reçoit simplement un tampon de visa de visite, valable au maximum 90 jours.",
      imageAlt: "Visa pour les Émirats pour les citoyens néerlandais",
    },
    documents: {
      title: "des Émirats arabes unis",
      items: [
        "Passeport valide au moins 6 mois.",
        "Photos d'identité conformes aux exigences de visa des Émirats.",
        "Détails du vol et justificatif d'itinéraire.",
        "Justificatif d'hébergement ou de réservation d'hôtel aux Émirats.",
        "Documents supplémentaires pour les visas d'affaires ou familiaux (le cas échéant).",
      ],
    },
    options: {
      headingText: "Options de visa pour les Émirats",
      headingHighlight: "adaptées à vos besoins",
      description:
        "Le visa touristique de courte durée à entrée unique est valable 30 jours, sans prolongation possible. Les frais de traitement du visa s'élèvent à 250 AED.",
      cards: [
        {
          title: [
            { text: "Visas de longue durée", highlight: true },
            { text: " pour les séjours professionnels ou familiaux.", highlight: false },
          ],
          description:
            "Le Golden Visa des Émirats est un visa de résidence de longue durée qui permet aux étrangers de vivre, travailler ou étudier aux Émirats. Il offre des avantages exclusifs, comme un visa d'entrée de 6 mois à entrées multiples et un visa renouvelable valable 5 ou 10 ans.",
        },
        {
          title: [
            { text: "Visas de transit", highlight: true },
            { text: " pour les voyageurs", highlight: false },
            { text: " en transit aux Émirats", highlight: true },
          ],
          description:
            "Le gouvernement des Émirats délivre un visa de transit aux passagers en transit dans les aéroports du pays. Ce visa n'est valable que 48 ou 96 heures, est délivré gratuitement et ne peut pas être prolongé.",
        },
        {
          title: [
            { text: "Visas de ", highlight: false },
            { text: "visite", highlight: true },
            { text: " pour ", highlight: false },
            { text: "réunions familiales ou rendez-vous d'affaires", highlight: true },
          ],
          description:
            "Le demandeur souhaitant se rendre aux Émirats pour retrouver sa famille ou pour un rendez-vous d'affaires obtient un visa à entrée unique sans parrain aux Émirats. La validité du visa peut être de 30, 60 ou 90 jours.",
        },
      ],
      button: "Trouvez le visa adapté pour les Émirats",
    },
  },

  // =====================================================
  // ITALIAN
  // =====================================================
  it: {
    header: {
      heading:
        "Servizi visti per gli Emirati Arabi Uniti per cittadini pakistani e olandesi",
      description:
        "Assistenza rapida, affidabile e personalizzata per la tua richiesta di visto per gli Emirati.",
    },
    explore: {
      titleHighlight: "Scopri gli Emirati",
      titleRest: " con Hassaan Travel",
      description:
        "Scopri con Hassaan Travels la vivace terra degli Emirati Arabi Uniti: un polo per le aziende multinazionali, un'esperienza di lusso esclusiva e un'attrazione per le famiglie. Che tu debba partecipare a conferenze di lavoro o visitare centri commerciali e attrazioni turistiche di livello mondiale, Hassaan Travels ti accompagna per tutto il viaggio.",
      imageAlt: "Scopri gli Emirati",
    },
    dutch: {
      titleStart: "Servizi visti per gli Emirati ",
      titleHighlight: "per cittadini olandesi:",
      description:
        "I cittadini olandesi possono viaggiare senza visto. All'ingresso negli Emirati, il loro passaporto riceve semplicemente un timbro con un visto di visita, valido per un massimo di 90 giorni.",
      imageAlt: "Visto per gli Emirati per cittadini olandesi",
    },
    documents: {
      title: "degli Emirati Arabi Uniti",
      items: [
        "Passaporto valido con almeno 6 mesi di validità.",
        "Fototessere conformi ai requisiti del visto per gli Emirati.",
        "Dettagli del volo e prova dell'itinerario di viaggio.",
        "Prova dell'alloggio o della prenotazione alberghiera negli Emirati.",
        "Documenti aggiuntivi per visti d'affari o familiari (se applicabile).",
      ],
    },
    options: {
      headingText: "Opzioni di visto per gli Emirati",
      headingHighlight: "su misura per te",
      description:
        "Il visto turistico di breve durata a ingresso singolo è valido 30 giorni e non può essere prorogato. La tariffa di elaborazione del visto è di 250 AED.",
      cards: [
        {
          title: [
            { text: "Visti di lunga durata", highlight: true },
            { text: " per soggiorni di lavoro o familiari.", highlight: false },
          ],
          description:
            "Il Golden Visa degli Emirati è un visto di residenza di lunga durata che consente agli stranieri di vivere, lavorare o studiare negli Emirati. Offre vantaggi esclusivi come un visto d'ingresso di 6 mesi con ingressi multipli e un visto rinnovabile valido 5 o 10 anni.",
        },
        {
          title: [
            { text: "Visti di transito", highlight: true },
            { text: " per i viaggiatori", highlight: false },
            { text: " in transito negli Emirati", highlight: true },
          ],
          description:
            "Il governo degli Emirati offre un visto di transito a chi transita negli aeroporti del Paese. Il visto di transito è valido solo 48 o 96 ore, viene rilasciato gratuitamente e non può essere prorogato.",
        },
        {
          title: [
            { text: "Visti di ", highlight: false },
            { text: "visita", highlight: true },
            { text: " per ", highlight: false },
            { text: "riunioni familiari o incontri d'affari", highlight: true },
          ],
          description:
            "Chi desidera visitare gli Emirati per un ricongiungimento familiare o un incontro d'affari riceve un visto a ingresso singolo senza sponsor negli Emirati. La validità del visto può essere di 30, 60 o 90 giorni.",
        },
      ],
      button: "Trova il visto giusto per gli Emirati",
    },
  },

  // =====================================================
  // SPANISH
  // =====================================================
  es: {
    header: {
      heading:
        "Servicios de visado para los EAU para ciudadanos pakistaníes y neerlandeses",
      description:
        "Asistencia rápida, fiable y personalizada para tu solicitud de visado para los EAU.",
    },
    explore: {
      titleHighlight: "Descubre los EAU",
      titleRest: " con Hassaan Travel",
      description:
        "Descubre con Hassaan Travels la vibrante tierra de los EAU: un centro para empresas multinacionales, una experiencia de lujo premium y un atractivo para las familias. Tanto si asistes a conferencias de negocios como si visitas centros comerciales y atracciones turísticas de primer nivel, Hassaan Travels te acompaña durante todo el viaje.",
      imageAlt: "Descubre los EAU",
    },
    dutch: {
      titleStart: "Servicios de visado para los EAU ",
      titleHighlight: "para ciudadanos neerlandeses:",
      description:
        "Los ciudadanos neerlandeses disfrutan de la exención de visado. Al entrar en los EAU, su pasaporte simplemente se sella con un visado de visita, válido durante un máximo de 90 días.",
      imageAlt: "Visado de los EAU para ciudadanos neerlandeses",
    },
    documents: {
      title: "los EAU",
      items: [
        "Pasaporte válido con al menos 6 meses de validez.",
        "Fotografías tamaño pasaporte que cumplan los requisitos de visado de los EAU.",
        "Datos del vuelo y justificante del itinerario.",
        "Justificante de alojamiento o reserva de hotel en los EAU.",
        "Documentos adicionales para visados de negocios o familiares (si procede).",
      ],
    },
    options: {
      headingText: "Opciones de visado para los EAU",
      headingHighlight: "adaptadas a tus necesidades",
      description:
        "El visado de turista de corta duración y entrada única es válido durante 30 días y no se puede prorrogar. La tasa de tramitación del visado es de 250 AED.",
      cards: [
        {
          title: [
            { text: "Visados de larga duración", highlight: true },
            { text: " para estancias de negocios o familiares.", highlight: false },
          ],
          description:
            "La Golden Visa de los EAU es un visado de residencia de larga duración que permite a los extranjeros vivir, trabajar o estudiar en los EAU. Ofrece ventajas exclusivas, como un visado de entrada de 6 meses con entradas múltiples y un visado renovable válido por 5 o 10 años.",
        },
        {
          title: [
            { text: "Visados de tránsito", highlight: true },
            { text: " para viajeros", highlight: false },
            { text: " que pasan por los EAU", highlight: true },
          ],
          description:
            "El Gobierno de los EAU ofrece un visado de tránsito a quienes transitan por sus aeropuertos. El visado de tránsito solo es válido durante 48 o 96 horas, se expide gratuitamente y no se puede prorrogar.",
        },
        {
          title: [
            { text: "Visados de ", highlight: false },
            { text: "visita", highlight: true },
            { text: " para ", highlight: false },
            { text: "reuniones familiares o de negocios", highlight: true },
          ],
          description:
            "El solicitante que desee visitar los EAU para una reunión familiar o de negocios obtiene un visado de entrada única sin patrocinador en los EAU. La validez del visado puede ser de 30, 60 o 90 días.",
        },
      ],
      button: "Encuentra el visado adecuado para los EAU",
    },
  },

  // =====================================================
  // ARABIC
  // =====================================================
  ar: {
    header: {
      heading: "خدمات تأشيرة الإمارات للمواطنين الباكستانيين والهولنديين",
      description: "دعم سريع وموثوق ومخصص لطلب تأشيرة الإمارات الخاص بك.",
    },
    explore: {
      titleHighlight: "استكشف الإمارات",
      titleRest: " مع Hassaan Travel",
      description:
        "استكشف أرض الإمارات النابضة بالحياة مع Hassaan Travels، فهي مركز للشركات متعددة الجنسيات وتجربة فاخرة مميزة ووجهة جذابة للعائلات. سواء كنت ستحضر مؤتمرات أعمال أو تزور مراكز تسوق ومعالم سياحية عالمية، فإن Hassaan Travels هنا لمرافقتك طوال رحلتك.",
      imageAlt: "استكشف الإمارات",
    },
    dutch: {
      titleStart: "خدمات تأشيرة الإمارات ",
      titleHighlight: "للمواطنين الهولنديين:",
      description:
        "يتمتع المواطنون الهولنديون بميزة السفر دون تأشيرة. فعند دخولهم الإمارات، يُختم جواز سفرهم بتأشيرة زيارة صالحة لمدة أقصاها 90 يومًا.",
      imageAlt: "تأشيرة الإمارات للمواطنين الهولنديين",
    },
    documents: {
      title: "الإمارات",
      items: [
        "جواز سفر ساري المفعول لمدة 6 أشهر على الأقل.",
        "صور بحجم جواز السفر مطابقة لمواصفات تأشيرة الإمارات.",
        "تفاصيل الرحلة وما يثبت خط سير السفر.",
        "ما يثبت الإقامة أو حجز الفندق في الإمارات.",
        "مستندات إضافية لتأشيرات الأعمال أو التأشيرات العائلية (إن وجدت).",
      ],
    },
    options: {
      headingText: "خيارات تأشيرة الإمارات",
      headingHighlight: "المصممة وفق احتياجاتك",
      description:
        "التأشيرة السياحية قصيرة المدة لدخول واحد صالحة لمدة 30 يومًا وغير قابلة للتمديد. رسوم معالجة التأشيرة 250 درهمًا إماراتيًا.",
      cards: [
        {
          title: [
            { text: "التأشيرات طويلة الأمد", highlight: true },
            { text: " للإقامات العائلية أو للأعمال.", highlight: false },
          ],
          description:
            "التأشيرة الذهبية الإماراتية هي تأشيرة إقامة طويلة الأمد تتيح للأجانب العيش أو العمل أو الدراسة في الإمارات. وتوفر مزايا حصرية مثل تأشيرة دخول لمدة 6 أشهر متعددة السفرات، وتأشيرة قابلة للتجديد صالحة لمدة 5 أو 10 سنوات.",
        },
        {
          title: [
            { text: "تأشيرات العبور", highlight: true },
            { text: " للمسافرين", highlight: false },
            { text: " المارين عبر الإمارات", highlight: true },
          ],
          description:
            "تقدم حكومة الإمارات تأشيرة عبور للمسافرين العابرين من خلال مطاراتها. وتكون تأشيرة العبور صالحة لمدة 48 أو 96 ساعة فقط، وتُصدر مجانًا ولا يمكن تمديدها.",
        },
        {
          title: [
            { text: "تأشيرات ", highlight: false },
            { text: "الزيارة", highlight: true },
            { text: " بغرض ", highlight: false },
            { text: "لمّ شمل العائلة أو اجتماعات العمل", highlight: true },
          ],
          description:
            "يُمنح مقدم الطلب الراغب في زيارة الإمارات للمّ شمل العائلة أو لحضور اجتماع عمل تأشيرة دخول لمرة واحدة دون كفيل في الإمارات. وقد تتراوح صلاحية التأشيرة بين 30 و60 و90 يومًا.",
        },
      ],
      button: "اعثر على تأشيرة الإمارات المناسبة لك",
    },
  },

  // =====================================================
  // URDU
  // =====================================================
  ur: {
    header: {
      heading: "پاکستانی اور ڈچ شہریوں کے لیے متحدہ عرب امارات ویزا سروسز",
      description:
        "آپ کی متحدہ عرب امارات ویزا درخواست کے لیے تیز، قابلِ اعتماد اور ذاتی معاونت۔",
    },
    explore: {
      titleHighlight: "متحدہ عرب امارات دریافت کریں",
      titleRest: " Hassaan Travel کے ساتھ",
      description:
        "Hassaan Travels کے ساتھ متحدہ عرب امارات کی پُررونق سرزمین دریافت کریں، جو ملٹی نیشنل کاروبار کا مرکز، پریمیم پُرتعیش تجربہ اور خاندانوں کے لیے پرکشش منزل ہے۔ چاہے آپ کو بزنس کانفرنسز میں شرکت کرنی ہو یا عالمی معیار کے شاپنگ مالز اور سیاحتی مقامات دیکھنے ہوں، Hassaan Travels پورے سفر میں آپ کی مکمل معاونت کے لیے موجود ہے۔",
      imageAlt: "متحدہ عرب امارات دریافت کریں",
    },
    dutch: {
      titleStart: "ڈچ شہریوں کے لیے ",
      titleHighlight: "متحدہ عرب امارات ویزا سروسز:",
      description:
        "ڈچ شہریوں کو بغیر ویزا سفر کی سہولت حاصل ہے۔ متحدہ عرب امارات میں داخلے پر ان کے پاسپورٹ پر صرف وزٹ ویزا کی مہر لگائی جاتی ہے، جو زیادہ سے زیادہ 90 دن کے لیے کارآمد ہوتا ہے۔",
      imageAlt: "ڈچ شہریوں کے لیے متحدہ عرب امارات ویزا",
    },
    documents: {
      title: "متحدہ عرب امارات",
      items: [
        "کم از کم 6 ماہ کی میعاد والا کارآمد پاسپورٹ۔",
        "متحدہ عرب امارات ویزا کے معیار کے مطابق پاسپورٹ سائز تصاویر۔",
        "فلائٹ کی تفصیلات اور سفری پروگرام کا ثبوت۔",
        "متحدہ عرب امارات میں رہائش یا ہوٹل بکنگ کا ثبوت۔",
        "بزنس یا فیملی ویزا کے لیے اضافی دستاویزات (اگر قابلِ اطلاق ہوں)۔",
      ],
    },
    options: {
      headingText: "متحدہ عرب امارات ویزا کے اختیارات",
      headingHighlight: "آپ کی ضرورت کے مطابق",
      description:
        "قلیل مدتی سنگل انٹری ٹورسٹ ویزا 30 دن کے لیے کارآمد ہوتا ہے اور اس میں توسیع نہیں ہوتی۔ ویزا پروسیسنگ فیس 250 درہم ہوگی۔",
      cards: [
        {
          title: [
            { text: "کاروباری یا فیملی قیام کے لیے ", highlight: false },
            { text: "طویل مدتی ویزے", highlight: true },
          ],
          description:
            "متحدہ عرب امارات کا گولڈن ویزا ایک طویل مدتی رہائشی ویزا ہے جو غیر ملکیوں کو متحدہ عرب امارات میں رہنے، کام کرنے یا تعلیم حاصل کرنے کی اجازت دیتا ہے۔ اس میں خصوصی فوائد شامل ہیں، جیسے 6 ماہ کا ملٹی پل انٹری ویزا اور 5 یا 10 سال کے لیے قابلِ تجدید ویزا۔",
        },
        {
          title: [
            { text: "متحدہ عرب امارات سے گزرنے والے", highlight: true },
            { text: " مسافروں کے لیے ", highlight: false },
            { text: "ٹرانزٹ ویزے", highlight: true },
          ],
          description:
            "متحدہ عرب امارات کی حکومت اپنے ایئرپورٹس سے ٹرانزٹ کرنے والے مسافروں کو ٹرانزٹ ویزا فراہم کرتی ہے۔ یہ ویزا صرف 48 یا 96 گھنٹے کے لیے کارآمد ہوتا ہے، مفت جاری کیا جاتا ہے اور اس میں توسیع نہیں ہو سکتی۔",
        },
        {
          title: [
            { text: "فیملی سے ملاقات یا بزنس میٹنگز", highlight: true },
            { text: " کے لیے ", highlight: false },
            { text: "وزٹ ویزے", highlight: true },
          ],
          description:
            "جو درخواست گزار فیملی سے ملاقات یا بزنس میٹنگ کے لیے متحدہ عرب امارات جانا چاہتا ہے، اسے متحدہ عرب امارات میں کسی اسپانسر کے بغیر سنگل انٹری ویزا دیا جاتا ہے۔ ویزا کی مدت 30، 60 یا 90 دن ہو سکتی ہے۔",
        },
      ],
      button: "اپنے لیے صحیح متحدہ عرب امارات ویزا تلاش کریں",
    },
  },
});

export type UaeTranslation = ReturnType<typeof getUaeTranslation>;