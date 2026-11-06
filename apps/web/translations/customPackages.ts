// =======================================================
// CUSTOM TRAVEL PACKAGE FORM TRANSLATIONS
// Used by components/ui/CustomTravelPackages.tsx
// (Umrah page: mode="umrah", Packages page: mode="packages")
// Languages: en | nl | de | fr | it | es | ar | ur
//
// Display text only. The office email keeps receiving the
// original English values (country, time span, travel type,
// duration), so these keys must stay stable.
// =======================================================

import { createTranslator } from "@/lib/createTranslator";

export type TravelTypeKey = "family" | "couple" | "solo" | "friends";
export type DurationKey = "3-5" | "7" | "10" | "14" | "custom";
export type PreferenceKey = "hotel" | "airport" | "guide" | "meals";
export type TimeSpanKey = "Day" | "Night";

const en = {
  heading: {
    umrah: { start: "Make Your ", highlight: "Umrah", end: " Package" },
    packages: { start: "Make Your ", highlight: "Custom", end: " Travel Package" },
  },
  description: {
    umrah:
      "Build your perfect Umrah journey tailored to your preferences. Choose your destination, travel style, and let us create an unforgettable spiritual experience.",
    packages:
      "Build your perfect journey tailored to your preferences. Choose your destination, travel style, and let us create an unforgettable experience.",
  },
  contact: {
    label: "Contact Details",
    fullName: "Full Name",
    email: "Email Address *",
    phone: "Phone Number *",
  },
  errors: {
    emailRequired: "Email is required",
    emailInvalid: "Enter a valid email address",
    phoneRequired: "Phone number is required",
    phoneInvalid: "Enter a valid phone number",
  },
  destination: {
    label: "Destination Country",
    umrahOnly: "* Only Saudi Arabia for Umrah services",
  },
  airport: {
    label: "Airport",
    placeholder: "Select Airport",
  },
  timeSpan: {
    label: "Preferred Time Span",
    placeholder: "Day/Night",
    options: { Day: "Day", Night: "Night" },
  },
  travelType: {
    label: "Travel Type",
    options: {
      family: "Family",
      couple: "Couple",
      solo: "Solo",
      friends: "Friends",
    },
  },
  duration: {
    label: "Duration",
    customPlaceholder: "Enter number of days",
    options: {
      "3-5": "3–5 Days",
      "7": "7 Days",
      "10": "10 Days",
      "14": "14 Days",
      custom: "Custom",
    },
  },
  travelers: {
    label: "Number of Travelers",
    adults: "Adults (12+)",
    children: "Children (2-11)",
    infants: "Infants (0-1)",
    /** Contains the {label} placeholder */
    decrease: "Decrease {label}",
    /** Contains the {label} placeholder */
    increase: "Increase {label}",
  },
  preferences: {
    label: "Additional Preferences",
    options: {
      hotel: "Hotel Accommodation",
      airport: "Airport Pick & Drop",
      guide: "Tour Guide",
      meals: "Meals Included",
    },
  },
  specialRequests: {
    label: "Special Requests",
    placeholder: "Any special requirements or requests...",
  },
  submit: {
    idle: "Get Your Custom Quote →",
    loading: "Sending...",
    success: "✓ Quote Request Sent!",
    error: "❌ Failed — Try Again",
  },
} as const;

export const getCustomPackagesTranslation = createTranslator(en, {
  // =====================================================
  // DUTCH
  // =====================================================
  nl: {
    heading: {
      umrah: { start: "Stel uw ", highlight: "Umrah", end: "-pakket samen" },
      packages: { start: "Stel uw ", highlight: "eigen", end: " reispakket samen" },
    },
    description: {
      umrah:
        "Stel uw perfecte Umrah-reis samen, helemaal afgestemd op uw wensen. Kies uw bestemming en reisstijl, en wij zorgen voor een onvergetelijke spirituele ervaring.",
      packages:
        "Stel uw perfecte reis samen, helemaal afgestemd op uw wensen. Kies uw bestemming en reisstijl, en wij zorgen voor een onvergetelijke ervaring.",
    },
    contact: {
      label: "Contactgegevens",
      fullName: "Volledige naam",
      email: "E-mailadres *",
      phone: "Telefoonnummer *",
    },
    errors: {
      emailRequired: "E-mailadres is verplicht",
      emailInvalid: "Vul een geldig e-mailadres in",
      phoneRequired: "Telefoonnummer is verplicht",
      phoneInvalid: "Vul een geldig telefoonnummer in",
    },
    destination: {
      label: "Bestemmingsland",
      umrahOnly: "* Voor Umrah-diensten alleen Saoedi-Arabië",
    },
    airport: { label: "Luchthaven", placeholder: "Selecteer luchthaven" },
    timeSpan: {
      label: "Voorkeursmoment",
      placeholder: "Dag/Nacht",
      options: { Day: "Dag", Night: "Nacht" },
    },
    travelType: {
      label: "Type reis",
      options: { family: "Gezin", couple: "Stel", solo: "Solo", friends: "Vrienden" },
    },
    duration: {
      label: "Reisduur",
      customPlaceholder: "Aantal dagen invullen",
      options: {
        "3-5": "3–5 dagen",
        "7": "7 dagen",
        "10": "10 dagen",
        "14": "14 dagen",
        custom: "Op maat",
      },
    },
    travelers: {
      label: "Aantal reizigers",
      adults: "Volwassenen (12+)",
      children: "Kinderen (2-11)",
      infants: "Baby's (0-1)",
      decrease: "{label} verminderen",
      increase: "{label} verhogen",
    },
    preferences: {
      label: "Extra wensen",
      options: {
        hotel: "Hotelverblijf",
        airport: "Luchthavenvervoer (halen & brengen)",
        guide: "Reisgids",
        meals: "Maaltijden inbegrepen",
      },
    },
    specialRequests: {
      label: "Speciale wensen",
      placeholder: "Eventuele speciale wensen of verzoeken...",
    },
    submit: {
      idle: "Vraag uw offerte op maat aan →",
      loading: "Verzenden...",
      success: "✓ Offerteaanvraag verzonden!",
      error: "❌ Mislukt — probeer opnieuw",
    },
  },

  // =====================================================
  // GERMAN
  // =====================================================
  de: {
    heading: {
      umrah: { start: "Stellen Sie Ihr ", highlight: "Umrah", end: "-Paket zusammen" },
      packages: { start: "Stellen Sie Ihr ", highlight: "individuelles", end: " Reisepaket zusammen" },
    },
    description: {
      umrah:
        "Gestalten Sie Ihre perfekte Umrah-Reise ganz nach Ihren Wünschen. Wählen Sie Ihr Reiseziel und Ihren Reisestil – wir schaffen für Sie ein unvergessliches spirituelles Erlebnis.",
      packages:
        "Gestalten Sie Ihre perfekte Reise ganz nach Ihren Wünschen. Wählen Sie Ihr Reiseziel und Ihren Reisestil – wir schaffen für Sie ein unvergessliches Erlebnis.",
    },
    contact: {
      label: "Kontaktdaten",
      fullName: "Vollständiger Name",
      email: "E-Mail-Adresse *",
      phone: "Telefonnummer *",
    },
    errors: {
      emailRequired: "E-Mail-Adresse ist erforderlich",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
      phoneRequired: "Telefonnummer ist erforderlich",
      phoneInvalid: "Bitte geben Sie eine gültige Telefonnummer ein",
    },
    destination: {
      label: "Zielland",
      umrahOnly: "* Für Umrah-Leistungen nur Saudi-Arabien",
    },
    airport: { label: "Flughafen", placeholder: "Flughafen auswählen" },
    timeSpan: {
      label: "Bevorzugte Reisezeit",
      placeholder: "Tag/Nacht",
      options: { Day: "Tag", Night: "Nacht" },
    },
    travelType: {
      label: "Reiseart",
      options: { family: "Familie", couple: "Paar", solo: "Allein", friends: "Freunde" },
    },
    duration: {
      label: "Reisedauer",
      customPlaceholder: "Anzahl der Tage eingeben",
      options: {
        "3-5": "3–5 Tage",
        "7": "7 Tage",
        "10": "10 Tage",
        "14": "14 Tage",
        custom: "Individuell",
      },
    },
    travelers: {
      label: "Anzahl der Reisenden",
      adults: "Erwachsene (12+)",
      children: "Kinder (2-11)",
      infants: "Kleinkinder (0-1)",
      decrease: "{label} verringern",
      increase: "{label} erhöhen",
    },
    preferences: {
      label: "Zusätzliche Wünsche",
      options: {
        hotel: "Hotelunterkunft",
        airport: "Flughafentransfer (Abholung & Rückfahrt)",
        guide: "Reiseleiter",
        meals: "Mahlzeiten inklusive",
      },
    },
    specialRequests: {
      label: "Besondere Wünsche",
      placeholder: "Besondere Anforderungen oder Wünsche...",
    },
    submit: {
      idle: "Individuelles Angebot anfordern →",
      loading: "Wird gesendet...",
      success: "✓ Angebotsanfrage gesendet!",
      error: "❌ Fehlgeschlagen – erneut versuchen",
    },
  },

  // =====================================================
  // FRENCH
  // =====================================================
  fr: {
    heading: {
      umrah: { start: "Composez votre forfait ", highlight: "Omra", end: "" },
      packages: { start: "Composez votre forfait de voyage ", highlight: "sur mesure", end: "" },
    },
    description: {
      umrah:
        "Créez votre voyage Omra idéal, adapté à vos préférences. Choisissez votre destination et votre style de voyage, et laissez-nous vous offrir une expérience spirituelle inoubliable.",
      packages:
        "Créez votre voyage idéal, adapté à vos préférences. Choisissez votre destination et votre style de voyage, et laissez-nous vous offrir une expérience inoubliable.",
    },
    contact: {
      label: "Coordonnées",
      fullName: "Nom complet",
      email: "Adresse e-mail *",
      phone: "Numéro de téléphone *",
    },
    errors: {
      emailRequired: "L'adresse e-mail est obligatoire",
      emailInvalid: "Saisissez une adresse e-mail valide",
      phoneRequired: "Le numéro de téléphone est obligatoire",
      phoneInvalid: "Saisissez un numéro de téléphone valide",
    },
    destination: {
      label: "Pays de destination",
      umrahOnly: "* Uniquement l'Arabie saoudite pour les services Omra",
    },
    airport: { label: "Aéroport", placeholder: "Choisir un aéroport" },
    timeSpan: {
      label: "Moment préféré",
      placeholder: "Jour/Nuit",
      options: { Day: "Jour", Night: "Nuit" },
    },
    travelType: {
      label: "Type de voyage",
      options: { family: "Famille", couple: "Couple", solo: "Solo", friends: "Amis" },
    },
    duration: {
      label: "Durée",
      customPlaceholder: "Saisissez le nombre de jours",
      options: {
        "3-5": "3 à 5 jours",
        "7": "7 jours",
        "10": "10 jours",
        "14": "14 jours",
        custom: "Sur mesure",
      },
    },
    travelers: {
      label: "Nombre de voyageurs",
      adults: "Adultes (12 ans et +)",
      children: "Enfants (2-11 ans)",
      infants: "Bébés (0-1 an)",
      decrease: "Diminuer : {label}",
      increase: "Augmenter : {label}",
    },
    preferences: {
      label: "Préférences supplémentaires",
      options: {
        hotel: "Hébergement à l'hôtel",
        airport: "Transferts aéroport (aller-retour)",
        guide: "Guide touristique",
        meals: "Repas inclus",
      },
    },
    specialRequests: {
      label: "Demandes particulières",
      placeholder: "Exigences ou demandes particulières...",
    },
    submit: {
      idle: "Obtenez votre devis personnalisé →",
      loading: "Envoi en cours...",
      success: "✓ Demande de devis envoyée !",
      error: "❌ Échec — réessayer",
    },
  },

  // =====================================================
  // ITALIAN
  // =====================================================
  it: {
    heading: {
      umrah: { start: "Crea il tuo pacchetto ", highlight: "Umrah", end: "" },
      packages: { start: "Crea il tuo pacchetto di viaggio ", highlight: "su misura", end: "" },
    },
    description: {
      umrah:
        "Crea il tuo viaggio Umrah ideale, su misura per te. Scegli la destinazione e lo stile di viaggio: penseremo noi a offrirti un'esperienza spirituale indimenticabile.",
      packages:
        "Crea il tuo viaggio ideale, su misura per te. Scegli la destinazione e lo stile di viaggio: penseremo noi a offrirti un'esperienza indimenticabile.",
    },
    contact: {
      label: "Dati di contatto",
      fullName: "Nome e cognome",
      email: "Indirizzo e-mail *",
      phone: "Numero di telefono *",
    },
    errors: {
      emailRequired: "L'indirizzo e-mail è obbligatorio",
      emailInvalid: "Inserisci un indirizzo e-mail valido",
      phoneRequired: "Il numero di telefono è obbligatorio",
      phoneInvalid: "Inserisci un numero di telefono valido",
    },
    destination: {
      label: "Paese di destinazione",
      umrahOnly: "* Solo Arabia Saudita per i servizi Umrah",
    },
    airport: { label: "Aeroporto", placeholder: "Seleziona l'aeroporto" },
    timeSpan: {
      label: "Fascia oraria preferita",
      placeholder: "Giorno/Notte",
      options: { Day: "Giorno", Night: "Notte" },
    },
    travelType: {
      label: "Tipo di viaggio",
      options: { family: "Famiglia", couple: "Coppia", solo: "Da solo", friends: "Amici" },
    },
    duration: {
      label: "Durata",
      customPlaceholder: "Inserisci il numero di giorni",
      options: {
        "3-5": "3–5 giorni",
        "7": "7 giorni",
        "10": "10 giorni",
        "14": "14 giorni",
        custom: "Su misura",
      },
    },
    travelers: {
      label: "Numero di viaggiatori",
      adults: "Adulti (12+)",
      children: "Bambini (2-11)",
      infants: "Neonati (0-1)",
      decrease: "Diminuisci {label}",
      increase: "Aumenta {label}",
    },
    preferences: {
      label: "Preferenze aggiuntive",
      options: {
        hotel: "Sistemazione in hotel",
        airport: "Transfer aeroportuale (andata e ritorno)",
        guide: "Guida turistica",
        meals: "Pasti inclusi",
      },
    },
    specialRequests: {
      label: "Richieste speciali",
      placeholder: "Eventuali esigenze o richieste particolari...",
    },
    submit: {
      idle: "Richiedi il tuo preventivo su misura →",
      loading: "Invio in corso...",
      success: "✓ Richiesta di preventivo inviata!",
      error: "❌ Invio non riuscito — riprova",
    },
  },

  // =====================================================
  // SPANISH
  // =====================================================
  es: {
    heading: {
      umrah: { start: "Crea tu paquete de ", highlight: "Umrah", end: "" },
      packages: { start: "Crea tu paquete de viaje ", highlight: "personalizado", end: "" },
    },
    description: {
      umrah:
        "Crea tu viaje de Umrah perfecto, adaptado a tus preferencias. Elige tu destino y tu estilo de viaje, y deja que creemos para ti una experiencia espiritual inolvidable.",
      packages:
        "Crea tu viaje perfecto, adaptado a tus preferencias. Elige tu destino y tu estilo de viaje, y deja que creemos para ti una experiencia inolvidable.",
    },
    contact: {
      label: "Datos de contacto",
      fullName: "Nombre completo",
      email: "Correo electrónico *",
      phone: "Número de teléfono *",
    },
    errors: {
      emailRequired: "El correo electrónico es obligatorio",
      emailInvalid: "Introduce un correo electrónico válido",
      phoneRequired: "El número de teléfono es obligatorio",
      phoneInvalid: "Introduce un número de teléfono válido",
    },
    destination: {
      label: "País de destino",
      umrahOnly: "* Solo Arabia Saudí para los servicios de Umrah",
    },
    airport: { label: "Aeropuerto", placeholder: "Selecciona un aeropuerto" },
    timeSpan: {
      label: "Horario preferido",
      placeholder: "Día/Noche",
      options: { Day: "Día", Night: "Noche" },
    },
    travelType: {
      label: "Tipo de viaje",
      options: { family: "Familia", couple: "Pareja", solo: "Solo", friends: "Amigos" },
    },
    duration: {
      label: "Duración",
      customPlaceholder: "Introduce el número de días",
      options: {
        "3-5": "3–5 días",
        "7": "7 días",
        "10": "10 días",
        "14": "14 días",
        custom: "Personalizada",
      },
    },
    travelers: {
      label: "Número de viajeros",
      adults: "Adultos (12+)",
      children: "Niños (2-11)",
      infants: "Bebés (0-1)",
      decrease: "Reducir {label}",
      increase: "Aumentar {label}",
    },
    preferences: {
      label: "Preferencias adicionales",
      options: {
        hotel: "Alojamiento en hotel",
        airport: "Traslado al aeropuerto (ida y vuelta)",
        guide: "Guía turístico",
        meals: "Comidas incluidas",
      },
    },
    specialRequests: {
      label: "Peticiones especiales",
      placeholder: "Cualquier requisito o petición especial...",
    },
    submit: {
      idle: "Solicita tu presupuesto personalizado →",
      loading: "Enviando...",
      success: "✓ ¡Solicitud de presupuesto enviada!",
      error: "❌ Error: inténtalo de nuevo",
    },
  },

  // =====================================================
  // ARABIC
  // =====================================================
  ar: {
    heading: {
      umrah: { start: "صمّم باقة ", highlight: "العمرة", end: " الخاصة بك" },
      packages: { start: "صمّم باقة سفرك ", highlight: "حسب رغبتك", end: "" },
    },
    description: {
      umrah:
        "صمّم رحلة العمرة المثالية وفق تفضيلاتك. اختر وجهتك وأسلوب سفرك، ودعنا نصنع لك تجربة روحانية لا تُنسى.",
      packages:
        "صمّم رحلتك المثالية وفق تفضيلاتك. اختر وجهتك وأسلوب سفرك، ودعنا نصنع لك تجربة لا تُنسى.",
    },
    contact: {
      label: "بيانات التواصل",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني *",
      phone: "رقم الهاتف *",
    },
    errors: {
      emailRequired: "البريد الإلكتروني مطلوب",
      emailInvalid: "يرجى إدخال بريد إلكتروني صحيح",
      phoneRequired: "رقم الهاتف مطلوب",
      phoneInvalid: "يرجى إدخال رقم هاتف صحيح",
    },
    destination: {
      label: "بلد الوجهة",
      umrahOnly: "* المملكة العربية السعودية فقط لخدمات العمرة",
    },
    airport: { label: "المطار", placeholder: "اختر المطار" },
    timeSpan: {
      label: "الوقت المفضل",
      placeholder: "نهار/ليل",
      options: { Day: "نهار", Night: "ليل" },
    },
    travelType: {
      label: "نوع الرحلة",
      options: { family: "عائلة", couple: "زوجان", solo: "فردي", friends: "أصدقاء" },
    },
    duration: {
      label: "المدة",
      customPlaceholder: "أدخل عدد الأيام",
      options: {
        "3-5": "3–5 أيام",
        "7": "7 أيام",
        "10": "10 أيام",
        "14": "14 يومًا",
        custom: "مدة مخصصة",
      },
    },
    travelers: {
      label: "عدد المسافرين",
      adults: "البالغون (12+)",
      children: "الأطفال (2-11)",
      infants: "الرضّع (0-1)",
      decrease: "إنقاص {label}",
      increase: "زيادة {label}",
    },
    preferences: {
      label: "تفضيلات إضافية",
      options: {
        hotel: "الإقامة في فندق",
        airport: "الاستقبال والتوصيل من المطار",
        guide: "مرشد سياحي",
        meals: "الوجبات مشمولة",
      },
    },
    specialRequests: {
      label: "طلبات خاصة",
      placeholder: "أي متطلبات أو طلبات خاصة...",
    },
    submit: {
      idle: "احصل على عرض سعر مخصص ←",
      loading: "جارٍ الإرسال...",
      success: "✓ تم إرسال طلب عرض السعر!",
      error: "❌ فشل الإرسال — حاول مرة أخرى",
    },
  },

  // =====================================================
  // URDU
  // =====================================================
  ur: {
    heading: {
      umrah: { start: "اپنا ", highlight: "عمرہ", end: " پیکیج بنائیں" },
      packages: { start: "اپنا ", highlight: "حسبِ ضرورت", end: " سفری پیکیج بنائیں" },
    },
    description: {
      umrah:
        "اپنی پسند کے مطابق بہترین عمرہ سفر ترتیب دیں۔ اپنی منزل اور سفر کا انداز منتخب کریں، اور ہم آپ کے لیے ایک ناقابلِ فراموش روحانی تجربہ تیار کریں گے۔",
      packages:
        "اپنی پسند کے مطابق بہترین سفر ترتیب دیں۔ اپنی منزل اور سفر کا انداز منتخب کریں، اور ہم آپ کے لیے ایک ناقابلِ فراموش تجربہ تیار کریں گے۔",
    },
    contact: {
      label: "رابطے کی تفصیلات",
      fullName: "پورا نام",
      email: "ای میل ایڈریس *",
      phone: "فون نمبر *",
    },
    errors: {
      emailRequired: "ای میل درکار ہے",
      emailInvalid: "درست ای میل ایڈریس درج کریں",
      phoneRequired: "فون نمبر درکار ہے",
      phoneInvalid: "درست فون نمبر درج کریں",
    },
    destination: {
      label: "منزل کا ملک",
      umrahOnly: "* عمرہ سروسز کے لیے صرف سعودی عرب",
    },
    airport: { label: "ایئرپورٹ", placeholder: "ایئرپورٹ منتخب کریں" },
    timeSpan: {
      label: "ترجیحی وقت",
      placeholder: "دن/رات",
      options: { Day: "دن", Night: "رات" },
    },
    travelType: {
      label: "سفر کی قسم",
      options: { family: "فیملی", couple: "جوڑا", solo: "اکیلے", friends: "دوست" },
    },
    duration: {
      label: "دورانیہ",
      customPlaceholder: "دنوں کی تعداد درج کریں",
      options: {
        "3-5": "3–5 دن",
        "7": "7 دن",
        "10": "10 دن",
        "14": "14 دن",
        custom: "حسبِ ضرورت",
      },
    },
    travelers: {
      label: "مسافروں کی تعداد",
      adults: "بالغ (12+)",
      children: "بچے (2-11)",
      infants: "شیرخوار (0-1)",
      decrease: "{label} کم کریں",
      increase: "{label} بڑھائیں",
    },
    preferences: {
      label: "اضافی ترجیحات",
      options: {
        hotel: "ہوٹل میں رہائش",
        airport: "ایئرپورٹ پک اینڈ ڈراپ",
        guide: "ٹور گائیڈ",
        meals: "کھانا شامل",
      },
    },
    specialRequests: {
      label: "خصوصی درخواستیں",
      placeholder: "کوئی خاص ضرورت یا درخواست...",
    },
    submit: {
      idle: "اپنا حسبِ ضرورت کوٹیشن حاصل کریں ←",
      loading: "بھیجا جا رہا ہے...",
      success: "✓ کوٹیشن کی درخواست بھیج دی گئی!",
      error: "❌ ناکام — دوبارہ کوشش کریں",
    },
  },
});

export type CustomPackagesTranslation = ReturnType<
  typeof getCustomPackagesTranslation
>;