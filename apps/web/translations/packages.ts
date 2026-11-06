// =======================================================
// PACKAGES PAGE TRANSLATIONS (UI text only)
// Used by:
//   app/packages/page.tsx
//   components/layout/packages/PopularTourPackages.tsx
//   components/layout/packages/PackagesBenefits.tsx
// Languages: en | nl | de | fr | it | es | ar | ur
//
// Package business data (titles, locations, durations, hotels,
// inclusions, experiences) intentionally stays in English inside
// PopularTourPackages.tsx. The WhatsApp message to the office stays English.
// =======================================================

import { createTranslator } from "@/lib/createTranslator";

const en = {
  header: {
    heading: "Book your package vacation with \nHassaan Travel",
    descLine1: "We provide exclusive trips with an unforgettable experience.",
    descLine2: "Don’t go simple, book with us!",
  },

  cta: {
    heading: "Can't Find What You're Looking For?",
    description:
      "Our travel experts are ready to create a personalized package just for you. Contact us today for a custom quote tailored to your preferences and budget.",
    button: "Speak with a Travel Expert",
  },

  popular: {
    titleHighlight: "Popular Tour Packages",
    titleRest: "From Netherlands",
    description:
      "Embark on unforgettable journeys to destinations like Tanzania, Malaysia, Japan and more.",

    // Price badge
    from: "From",
    perPerson: "per person",
    onRequest: "On Request",
    custom: "Custom",

    // Next departure
    nextDepartureLabel: "Next Departure:",
    departureOnRequest: "On request",
    departureAnyTime: "Any time",

    bookNow: "Book Now",

    // Image slider (accessibility)
    previousImage: "Previous image",
    nextImage: "Next image",
    /** Contains {title} and {number} placeholders */
    imageAlt: "{title} - view {number}",

    // Pagination
    previous: "Previous",
    next: "Next",
    /** Contains the {number} placeholder */
    pageLabel: "Page {number}",
    paginationLabel: "Packages pages",
  },

  benefits: {
    includes: "Package Includes:",
    showLess: "Show less",
    /** Contains the {count} placeholder */
    moreBenefits: "+{count} more benefits",
  },
} as const;

export const getPackagesTranslation = createTranslator(en, {
  // =====================================================
  // DUTCH
  // =====================================================
  nl: {
    header: {
      heading: "Boek uw pakketreis bij \nHassaan Travel",
      descLine1: "Wij bieden exclusieve reizen met een onvergetelijke ervaring.",
      descLine2: "Kies niet voor gewoon, boek bij ons!",
    },
    cta: {
      heading: "Niet gevonden wat u zoekt?",
      description:
        "Onze reisexperts stellen graag een persoonlijk pakket voor u samen. Neem vandaag nog contact op voor een offerte op maat, afgestemd op uw wensen en budget.",
      button: "Spreek met een reisexpert",
    },
    popular: {
      titleHighlight: "Populaire rondreizen",
      titleRest: "vanuit Nederland",
      description:
        "Begin aan onvergetelijke reizen naar bestemmingen zoals Tanzania, Maleisië, Japan en meer.",
      from: "Vanaf",
      perPerson: "per persoon",
      onRequest: "Op aanvraag",
      custom: "Op maat",
      nextDepartureLabel: "Volgend vertrek:",
      departureOnRequest: "Op aanvraag",
      departureAnyTime: "Altijd mogelijk",
      bookNow: "Boek nu",
      previousImage: "Vorige afbeelding",
      nextImage: "Volgende afbeelding",
      imageAlt: "{title} - afbeelding {number}",
      previous: "Vorige",
      next: "Volgende",
      pageLabel: "Pagina {number}",
      paginationLabel: "Pakketpagina's",
    },
    benefits: {
      includes: "Inbegrepen in het pakket:",
      showLess: "Minder tonen",
      moreBenefits: "+{count} extra voordelen",
    },
  },

  // =====================================================
  // GERMAN
  // =====================================================
  de: {
    header: {
      heading: "Buchen Sie Ihre Pauschalreise mit \nHassaan Travel",
      descLine1: "Wir bieten exklusive Reisen mit unvergesslichen Erlebnissen.",
      descLine2: "Nicht einfach irgendwie – buchen Sie bei uns!",
    },
    cta: {
      heading: "Nicht das Richtige gefunden?",
      description:
        "Unsere Reiseexperten stellen gerne ein persönliches Paket nur für Sie zusammen. Kontaktieren Sie uns noch heute für ein individuelles Angebot nach Ihren Wünschen und Ihrem Budget.",
      button: "Mit einem Reiseexperten sprechen",
    },
    popular: {
      titleHighlight: "Beliebte Rundreisen",
      titleRest: "ab den Niederlanden",
      description:
        "Erleben Sie unvergessliche Reisen zu Zielen wie Tansania, Malaysia, Japan und vielen mehr.",
      from: "Ab",
      perPerson: "pro Person",
      onRequest: "Auf Anfrage",
      custom: "Individuell",
      nextDepartureLabel: "Nächste Abreise:",
      departureOnRequest: "Auf Anfrage",
      departureAnyTime: "Jederzeit",
      bookNow: "Jetzt buchen",
      previousImage: "Vorheriges Bild",
      nextImage: "Nächstes Bild",
      imageAlt: "{title} – Bild {number}",
      previous: "Zurück",
      next: "Weiter",
      pageLabel: "Seite {number}",
      paginationLabel: "Paketseiten",
    },
    benefits: {
      includes: "Im Paket enthalten:",
      showLess: "Weniger anzeigen",
      moreBenefits: "+{count} weitere Leistungen",
    },
  },

  // =====================================================
  // FRENCH
  // =====================================================
  fr: {
    header: {
      heading: "Réservez vos vacances en forfait avec \nHassaan Travel",
      descLine1:
        "Nous proposons des voyages exclusifs pour une expérience inoubliable.",
      descLine2: "Ne vous contentez pas de l'ordinaire, réservez avec nous !",
    },
    cta: {
      heading: "Vous ne trouvez pas ce que vous cherchez ?",
      description:
        "Nos experts en voyage sont prêts à créer un forfait personnalisé rien que pour vous. Contactez-nous dès aujourd'hui pour un devis sur mesure, adapté à vos préférences et à votre budget.",
      button: "Parler à un expert voyage",
    },
    popular: {
      titleHighlight: "Circuits populaires",
      titleRest: "au départ des Pays-Bas",
      description:
        "Partez pour des voyages inoubliables vers des destinations comme la Tanzanie, la Malaisie, le Japon et bien d'autres.",
      from: "À partir de",
      perPerson: "par personne",
      onRequest: "Sur demande",
      custom: "Sur mesure",
      nextDepartureLabel: "Prochain départ :",
      departureOnRequest: "Sur demande",
      departureAnyTime: "À tout moment",
      bookNow: "Réserver",
      previousImage: "Image précédente",
      nextImage: "Image suivante",
      imageAlt: "{title} – image {number}",
      previous: "Précédent",
      next: "Suivant",
      pageLabel: "Page {number}",
      paginationLabel: "Pages des forfaits",
    },
    benefits: {
      includes: "Le forfait comprend :",
      showLess: "Afficher moins",
      moreBenefits: "+{count} avantages supplémentaires",
    },
  },

  // =====================================================
  // ITALIAN
  // =====================================================
  it: {
    header: {
      heading: "Prenota la tua vacanza a pacchetto con \nHassaan Travel",
      descLine1: "Offriamo viaggi esclusivi per un'esperienza indimenticabile.",
      descLine2: "Non accontentarti, prenota con noi!",
    },
    cta: {
      heading: "Non trovi quello che cerchi?",
      description:
        "I nostri esperti di viaggio sono pronti a creare un pacchetto personalizzato solo per te. Contattaci oggi per un preventivo su misura in base alle tue preferenze e al tuo budget.",
      button: "Parla con un esperto di viaggi",
    },
    popular: {
      titleHighlight: "Tour popolari",
      titleRest: "dai Paesi Bassi",
      description:
        "Parti per viaggi indimenticabili verso destinazioni come Tanzania, Malesia, Giappone e molte altre.",
      from: "Da",
      perPerson: "a persona",
      onRequest: "Su richiesta",
      custom: "Su misura",
      nextDepartureLabel: "Prossima partenza:",
      departureOnRequest: "Su richiesta",
      departureAnyTime: "In qualsiasi momento",
      bookNow: "Prenota ora",
      previousImage: "Immagine precedente",
      nextImage: "Immagine successiva",
      imageAlt: "{title} – immagine {number}",
      previous: "Precedente",
      next: "Successiva",
      pageLabel: "Pagina {number}",
      paginationLabel: "Pagine dei pacchetti",
    },
    benefits: {
      includes: "Il pacchetto include:",
      showLess: "Mostra meno",
      moreBenefits: "+{count} altri vantaggi",
    },
  },

  // =====================================================
  // SPANISH
  // =====================================================
  es: {
    header: {
      heading: "Reserva tus vacaciones con paquete con \nHassaan Travel",
      descLine1: "Ofrecemos viajes exclusivos con una experiencia inolvidable.",
      descLine2: "No te conformes con lo simple, ¡reserva con nosotros!",
    },
    cta: {
      heading: "¿No encuentras lo que buscas?",
      description:
        "Nuestros expertos en viajes están listos para crear un paquete personalizado solo para ti. Contáctanos hoy para recibir una oferta a medida adaptada a tus preferencias y a tu presupuesto.",
      button: "Habla con un experto en viajes",
    },
    popular: {
      titleHighlight: "Circuitos populares",
      titleRest: "desde los Países Bajos",
      description:
        "Emprende viajes inolvidables a destinos como Tanzania, Malasia, Japón y muchos más.",
      from: "Desde",
      perPerson: "por persona",
      onRequest: "Bajo petición",
      custom: "Personalizado",
      nextDepartureLabel: "Próxima salida:",
      departureOnRequest: "Bajo petición",
      departureAnyTime: "En cualquier momento",
      bookNow: "Reservar ahora",
      previousImage: "Imagen anterior",
      nextImage: "Imagen siguiente",
      imageAlt: "{title} – imagen {number}",
      previous: "Anterior",
      next: "Siguiente",
      pageLabel: "Página {number}",
      paginationLabel: "Páginas de paquetes",
    },
    benefits: {
      includes: "El paquete incluye:",
      showLess: "Mostrar menos",
      moreBenefits: "+{count} ventajas más",
    },
  },

  // =====================================================
  // ARABIC
  // =====================================================
  ar: {
    header: {
      heading: "احجز عطلتك الشاملة مع \nHassaan Travel",
      descLine1: "نقدم رحلات حصرية بتجربة لا تُنسى.",
      descLine2: "لا تكتفِ بالعادي، احجز معنا!",
    },
    cta: {
      heading: "لم تجد ما تبحث عنه؟",
      description:
        "خبراؤنا في السفر مستعدون لتصميم باقة مخصصة لك. تواصل معنا اليوم للحصول على عرض سعر يناسب تفضيلاتك وميزانيتك.",
      button: "تحدث مع خبير سفر",
    },
    popular: {
      titleHighlight: "الجولات السياحية الأكثر طلبًا",
      titleRest: "من هولندا",
      description:
        "انطلق في رحلات لا تُنسى إلى وجهات مثل تنزانيا وماليزيا واليابان وغيرها.",
      from: "ابتداءً من",
      perPerson: "للشخص الواحد",
      onRequest: "عند الطلب",
      custom: "حسب الطلب",
      nextDepartureLabel: "المغادرة القادمة:",
      departureOnRequest: "عند الطلب",
      departureAnyTime: "في أي وقت",
      bookNow: "احجز الآن",
      previousImage: "الصورة السابقة",
      nextImage: "الصورة التالية",
      imageAlt: "{title} – الصورة {number}",
      previous: "السابق",
      next: "التالي",
      pageLabel: "الصفحة {number}",
      paginationLabel: "صفحات الباقات",
    },
    benefits: {
      includes: "تشمل الباقة:",
      showLess: "عرض أقل",
      moreBenefits: "+{count} مزايا أخرى",
    },
  },

  // =====================================================
  // URDU
  // =====================================================
  ur: {
    header: {
      heading: "Hassaan Travel کے ساتھ \nاپنی پیکیج چھٹیاں بک کریں",
      descLine1: "ہم ناقابلِ فراموش تجربے کے ساتھ خصوصی سفر پیش کرتے ہیں۔",
      descLine2: "عام سفر پر اکتفا نہ کریں، ہمارے ساتھ بک کریں!",
    },
    cta: {
      heading: "جو ڈھونڈ رہے ہیں وہ نہیں ملا؟",
      description:
        "ہمارے سفری ماہرین آپ کے لیے خصوصی پیکیج تیار کرنے کو تیار ہیں۔ اپنی پسند اور بجٹ کے مطابق کوٹیشن کے لیے آج ہی رابطہ کریں۔",
      button: "سفری ماہر سے بات کریں",
    },
    popular: {
      titleHighlight: "مقبول ٹور پیکیجز",
      titleRest: "نیدرلینڈز سے",
      description:
        "تنزانیہ، ملائیشیا، جاپان اور دیگر منازل کے ناقابلِ فراموش سفر پر روانہ ہوں۔",
      from: "شروع قیمت",
      perPerson: "فی کس",
      onRequest: "درخواست پر",
      custom: "حسبِ ضرورت",
      nextDepartureLabel: "اگلی روانگی:",
      departureOnRequest: "درخواست پر",
      departureAnyTime: "کسی بھی وقت",
      bookNow: "ابھی بک کریں",
      previousImage: "پچھلی تصویر",
      nextImage: "اگلی تصویر",
      imageAlt: "{title} – تصویر {number}",
      previous: "پچھلا",
      next: "اگلا",
      pageLabel: "صفحہ {number}",
      paginationLabel: "پیکیجز کے صفحات",
    },
    benefits: {
      includes: "پیکیج میں شامل:",
      showLess: "کم دکھائیں",
      moreBenefits: "+{count} مزید سہولیات",
    },
  },
});

export type PackagesTranslation = ReturnType<typeof getPackagesTranslation>;