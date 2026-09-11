// =======================================================
// HOMEPAGE TRANSLATIONS
// Languages: en | nl | de | fr | it | es | ar | ur
// =======================================================

export type LanguageCode =
  | "en"
  | "nl"
  | "de"
  | "fr"
  | "it"
  | "es"
  | "ar"
  | "ur";

export type PackageKey =
  // POPULAR
  | "pakistan"
  | "pakistanVisa"
  | "saudiVisa"
  | "umrahPackage"
  | "india"
  | "esimCard"
  // DESTINATIONS
  | "destPakistan"
  | "destAfghanistan"
  | "destSaudiArabia"
  | "destIndia"
  | "destKurdistan"
  | "destTurkiye"
  // UMRAH
  | "umrahComingSoon"
  // VISA
  | "visaPakFamily3m"
  | "visaPakTourist"
  | "visaSaudiTourist"
  | "visaPakFamily1y"
  | "visaKenya"
  | "visaOthers"
  // TOUR PACKAGES
  | "pkgTanzania"
  | "pkgOman"
  | "pkgMalaysia"
  | "pkgIndonesia"
  | "pkgThailand"
  | "pkgJapan";

export type CountryKey =
  | "japan"
  | "egypt"
  | "austria"
  | "czechRepublic"
  | "india"
  | "morocco";

export type PackageContent = {
  name: string;
  description: string;
};

export type ReviewKey = "zafarBaig" | "maryamNawaz" | "armghanAli";

export type TestimonialsTranslation = {
  heading: string;
  /** Average score as text, so locales that use a comma can render "4,9" */
  ratingValue: string;
  /** Contains the {count} placeholder */
  reviewsCount: string;
  monthAgo: string;
  /** Contains the {count} placeholder */
  monthsAgo: string;
  cta: string;
  reviews: Record<ReviewKey, string>;
};

export type TripTypeTranslation = {
  returnLabel: string;
  oneWayLabel: string;
  toggleAria: string;
};

export type TourCategoryKey =
  | "popular"
  | "family"
  | "honeymoon"
  | "summer"
  | "cultural";

export type TourItemKey =
  | "dubaiAdventure"
  | "familyTurkey"
  | "maldivesCouple"
  | "northernAreas"
  | "lahoreHeritage";

export type ToursTranslation = {
  categoriesAria: string;
  categories: Record<TourCategoryKey, string>;
  items: Record<TourItemKey, string>;
};

export type LuxuryStayKey =
  | "premiumHotels"
  | "luxurySuites"
  | "exclusiveDeals";

export type LuxuryStayItem = {
  title: string;
  desc: string;
};

export type LuxuryStayTranslation = {
  /** The heading is rendered on two lines with a <br /> between them */
  titleLine1: string;
  titleLine2: string;
  imageAlt: string;
  items: Record<LuxuryStayKey, LuxuryStayItem>;
};

export type WhyTrustedTranslation = {
  title: string;
  intro: string;
  featureFlights: string;
  featureVisa: string;
  featureLanguages: string;
  featureContact: string;
  cta: string;
  imageAlt: string;
};

export type TrustBadgeKey = "iata" | "support" | "trusted" | "premium";

export type TrustBadgeContent = {
  title: string;
  desc: string;
};

/** Head + intro for a generic <SideIconDesc /> section, looked up by sectionKey */
export type SideSectionContent = {
  head: string;
  details: string;
};

/** A single card inside <SideIconDesc />, looked up by itemKey */
export type SideIconContent = {
  title: string;
  desc: string;
};

export type BookingFormTranslation = {
  labelFrom: string;
  labelTo: string;
  labelDepart: string;
  labelReturn: string;
  labelTravellers: string;
  labelContact: string;

  phLocation: string;
  phDate: string;
  phTravellers: string;
  phContact: string;

  errFrom: string;
  errTo: string;
  errTravellers: string;
  errContactRequired: string;
  errEmail: string;
  errPhone: string;

  submit: string;
  success: string;
  error: string;
  incomplete: string;

  notSpecified: string;
  swap: string;
  /** BCP-47 locale used to render month names in the date fields */
  dateLocale: string;
};

export type HomepageTranslation = {
  // HERO
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;

  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;

  // GENERIC
  bookNow: string;
  learnMore: string;

  // POPULAR TOUR PACKAGES SECTION
  popularServicesTitle: string;
  popularServicesDescription: string;

  // CATEGORY TABS
  popular: string;
  destination: string;
  umrah: string;
  visa: string;
  packages: string;
  esim: string;

  // PRICE + MODAL
  price: string;
  startingFrom: string;
  fromPrice: string; // must contain the {price} placeholder
  onRequest: string;
  custom: string;
  stayTuned: string;
  whatsapp: string;
  close: string;
  packageAlt: string;

  // BOOKING SEARCH FORM
  bookingForm: BookingFormTranslation;

  // "WHY HASSAAN TRAVEL" SECTION
  whyTrusted: WhyTrustedTranslation;

  // FIVE-STAR HOTEL EXPERIENCES SECTION
  luxuryStay: LuxuryStayTranslation;

  // CUSTOMER REVIEWS
  testimonials: TestimonialsTranslation;

  // TRIP TYPE DROPDOWN
  tripType: TripTypeTranslation;

  // TOUR CATEGORY FILTER
  tours: ToursTranslation;

  // TRUST BADGES STRIP
  trustBadges: Record<TrustBadgeKey, TrustBadgeContent>;

  // GENERIC <SideIconDesc /> CONTENT (add your own section keys here)
  sideSections: Record<string, SideSectionContent>;
  sideIcons: Record<string, SideIconContent>;

  // DATA
  countries: Record<CountryKey, string>;
  packageItems: Record<PackageKey, PackageContent>;
};

const baseHomepageTranslations: Record<LanguageCode, HomepageTranslation> = {
  // =====================================================
  // ENGLISH
  // =====================================================
  en: {
    heroTitle: "Cheap Tickets Smooth Journeys",
    heroHighlight: "From Booking to Boarding",
    heroSubtitle:
      "Experience seamless, luxury travel with expert visa processing, bespoke Umrah packages, and personalized guidance. Trusted by 10,000+ travelers.",

    ctaTitle: "Ready to Start Your Journey?",
    ctaDescription:
      "Contact us today for a free consultation and discover how we can make your travel dreams a reality.",
    ctaButton: "Request a Free Quote →",

    bookNow: "Book Now",
    learnMore: "Learn More",

    popularServicesTitle: "Our Most Popular Services",
    popularServicesDescription:
      "Everything you need for your next trip in one place from flights and visas to travel packages, tours, and eSIMs. Discover our most popular services today.",

    popular: "Popular",
    destination: "Destination",
    umrah: "Umrah",
    visa: "Visa",
    packages: "Packages",
    esim: "HT Connect – Global eSIM",

    price: "Price",
    startingFrom: "Starting From",
    fromPrice: "From {price}",
    onRequest: "On Request",
    custom: "Custom",
    stayTuned: "Stay Tuned",
    whatsapp: "Contact on WhatsApp",
    close: "Close",
    packageAlt: "package",

    // BOOKING SEARCH FORM
    bookingForm: {
      labelFrom: "From *",
      labelTo: "To *",
      labelDepart: "Depart",
      labelReturn: "Return",
      labelTravellers: "Travellers & Cabin *",
      labelContact: "Contact / Email *",

      phLocation: "Country, city or airport",
      phDate: "Add Date",
      phTravellers: "Passenger, Economy",
      phContact: "Phone or Email",

      errFrom: "From is required",
      errTo: "To is required",
      errTravellers: "Travellers info is required",
      errContactRequired: "Phone number or email is required",
      errEmail: "Enter a valid email address",
      errPhone: "Enter a valid phone number (at least 7 digits)",

      submit: "Submit",
      success:
        "Your Request has been sent successfully. For faster and direct prices, contact us right away via the WhatsApp Icon or call us on +31 (0) 10 485 7673.",
      error: "Something went wrong. Please try again.",
      incomplete:
        "Please fill in all required fields with a valid phone number or email so we can contact you.",

      notSpecified: "Not specified",
      swap: "Swap departure and destination",
      dateLocale: "en-GB",
    },

    // CUSTOMER REVIEWS
    testimonials: {
      heading: "What Our Customers Say",
      ratingValue: "4.9",
      reviewsCount: "({count} reviews)",
      monthAgo: "A month ago",
      monthsAgo: "{count} months ago",
      cta: "Review Us on Google",

      reviews: {
        zafarBaig:
          "Great experience with Hassaan Travel! The staff was friendly, professional, and made the whole booking process easy and stress-free. Everything was well organized, and they were always available to answer my questions. Highly recommend their services for a smooth and enjoyable travel experience!",
        maryamNawaz:
          "Very professional and efficient service. I just bought 5 flight tickets at a great price with 40kg baggage allowance. Their communication was quick and clear. Highly recommended!",
        armghanAli:
          "Had a wonderful experience with this travel agency Hassan Travel. Everything was well-organized and stress-free. The staff were friendly, helpful, and professional. Great communication and smooth arrangements throughout the process. Highly recommend their service!",
      },
    },

    // TRIP TYPE DROPDOWN
    tripType: {
      returnLabel: "Return",
      oneWayLabel: "One way booking",
      toggleAria: "Select trip type",
    },

    // TOUR CATEGORY FILTER
    tours: {
      categoriesAria: "Tour Categories",

      categories: {
        popular: "Popular",
        family: "Family",
        honeymoon: "Honeymoon",
        summer: "Summer",
        cultural: "Cultural",
      },

      items: {
        dubaiAdventure: "Dubai Adventure",
        familyTurkey: "Family Turkey Trip",
        maldivesCouple: "Maldives Couple Tour",
        northernAreas: "Northern Areas",
        lahoreHeritage: "Lahore Heritage Tour",
      },
    },

    // FIVE-STAR HOTEL EXPERIENCES SECTION
    luxuryStay: {
      titleLine1: "Five-Star Hotel",
      titleLine2: "Experiences",
      imageAlt: "Luxury five-star hotel experience",

      items: {
        premiumHotels: {
          title: "Premium Hotels Worldwide",
          desc:
            "Stay at handpicked 5-star hotels worldwide with prime locations and exceptional comfort.",
        },
        luxurySuites: {
          title: "Luxury Suites & Personalized Stays",
          desc:
            "Enjoy spacious suites with personalized services for a seamless stay.",
        },
        exclusiveDeals: {
          title: "Exclusive Deals & Priority Booking",
          desc:
            "Access exclusive rates, priority bookings, and premium amenities worldwide.",
        },
      },
    },

    // "WHY HASSAAN TRAVEL" SECTION
    whyTrusted: {
      title: "Why Hassaan Travel is Your Trusted Partner",
      intro:
        "We're more than just a travel agency; we're your passport to extraordinary experiences. Here's why you should choose us:",

      featureFlights:
        "Assistance in obtaining the best and cheapest flights to your destination. Quick, transparent service through WhatsApp chat.",
      featureVisa:
        "Expertise in handling visa applications for multiple countries.",
      featureLanguages: "Customer support in multiple languages.",
      featureContact: "Contact Us Today – See all of our services.",

      cta: "Contact Us Today",
      imageAlt: "Your Trusted Visa Partner",
    },

    // TRUST BADGES STRIP
    trustBadges: {
      iata: {
        title: "IATA Certified",
        desc: "Fully Authorized Agency",
      },
      support: {
        title: "Emergency Support",
        desc: "Available 24/7",
      },
      trusted: {
        title: "Trusted by Travelers",
        desc: "15+ Years Excellence",
      },
      premium: {
        title: "Premium Service",
        desc: "White-Glove Treatment",
      },
    },

    // Generic <SideIconDesc /> content.
    // Add a key here and pass it to the component as sectionKey / itemKey.
    sideSections: {
      visaSolutions: {
        head: "Expert Visa Solutions",
        details:
          "Streamlined processing with guaranteed approval for all destinations",
      },
      airlinePartners: {
        head: "Trusted Airline Partners",
        details:
          "We proudly work with leading international airlines to offer the best fares and seamless travel experiences.",
      },
    },

    sideIcons: {
      flightBooking: {
        title: "Flight Booking",
        desc:
          "Book affordable flights to every destination with flexible options for individuals and families.",
      },
      hotelReservations: {
        title: "Hotel Reservations",
        desc:
          "Book comfortable accommodation worldwide with ease and convenience.",
      },
      visaProcessing: {
        title: "Visa Processing",
        desc:
          "Fast and reliable visa services ensuring smooth approval for travelers.",
      },
      support247: {
        title: "24/7 Support",
        desc: "Round-the-clock customer support for all your travel needs.",
      },
    },

    countries: {
      japan: "Japan",
      egypt: "Egypt",
      austria: "Austria",
      czechRepublic: "Czech Republic",
      india: "India",
      morocco: "Morocco",
    },

    packageItems: {
      pakistan: {
        name: "Pakistan",
        description:
          "Discover Pakistan's breathtaking landscapes, rich cultural heritage, vibrant cities, and unforgettable travel experiences.",
      },
      pakistanVisa: {
        name: "Pakistan Visa",
        description:
          "Fast and reliable Pakistan visa processing services with expert guidance and hassle-free documentation support.",
      },
      saudiVisa: {
        name: "Saudi Visa",
        description:
          "Get your Saudi visa with a smooth application process, professional assistance, and timely approvals.",
      },
      umrahPackage: {
        name: "Umrah Package",
        description:
          "Complete Umrah packages including visa, accommodation, transportation, and dedicated support throughout your journey.",
      },
      india: {
        name: "India",
        description:
          "Explore India's diverse culture, historic landmarks, spiritual destinations, and world-famous attractions.",
      },
      esimCard: {
        name: "E-Sim",
        description:
          "Stay connected worldwide with affordable eSIM plans offering instant activation and seamless mobile data.",
      },

      destPakistan: {
        name: "Pakistan",
        description:
          "Explore the breathtaking beauty of Hunza Valley, Skardu, and the majestic peaks of the Karakoram range.",
      },
      destAfghanistan: {
        name: "Afghanistan",
        description:
          "Discover the historical richness of the Bamiyan Valley and the vibrant culture of Kabul.",
      },
      destSaudiArabia: {
        name: "Saudi Arabia",
        description:
          "Experience a spiritual journey with guided tours to the holy cities and historical landmarks.",
      },
      destIndia: {
        name: "India",
        description:
          "Visit the iconic Taj Mahal and explore the majestic palaces and forts of the Pink City.",
      },
      destKurdistan: {
        name: "Kurdistan",
        description:
          "Discover ancient citadels, beautiful mountain landscapes, and the warm hospitality of the Kurdish region.",
      },
      destTurkiye: {
        name: "Turkiye",
        description:
          "A perfect blend of history, culture, and unique landscapes. Hot air balloons and stunning architecture await.",
      },

      umrahComingSoon: {
        name: "Coming Soon",
        description:
          "We are working on exciting new Umrah packages. Stay tuned for updates!",
      },

      visaPakFamily3m: {
        name: "Pakistan Family Visa (3 months)",
        description:
          "Family visa service for a 3-month stay. Quick and reliable processing.",
      },
      visaPakTourist: {
        name: "Pakistan Tourist Visa",
        description:
          "Tourist visa for Pakistan. Avail our special limited-time discount.",
      },
      visaSaudiTourist: {
        name: "Saudi-Arabia Tourist Visa",
        description:
          "Hassle-free tourist visa processing for your trip to Saudi Arabia.",
      },
      visaPakFamily1y: {
        name: "Pakistan Family Visa (1 year)",
        description:
          "Long-term family visa for a 1-year duration. Efficient service provided.",
      },
      visaKenya: {
        name: "Kenia Visa",
        description:
          "Streamlined visa application process for travel to Kenya.",
      },
      visaOthers: {
        name: "Others On request",
        description:
          "Need a visa for another destination? Contact us for a personalized quote.",
      },

      pkgTanzania: {
        name: "Tanzania",
        description:
          "Ancient temples, traditional tea ceremonies, and beautiful geisha districts.",
      },
      pkgOman: {
        name: "Oman",
        description:
          "Pyramids of Giza, Egyptian Museum, and rich pharaonic history.",
      },
      pkgMalaysia: {
        name: "Malaysia",
        description:
          "Imperial palaces, classical music, and world-class museums.",
      },
      pkgIndonesia: {
        name: "Indonesia",
        description:
          "Fairytale architecture, medieval charm, and rich Bohemian culture.",
      },
      pkgThailand: {
        name: "Thailand",
        description:
          "Historic monuments, bustling bazaars, and diverse spiritual heritage.",
      },
      pkgJapan: {
        name: "Japan",
        description:
          "Vibrant souks, stunning palaces, and authentic Moroccan traditions.",
      },
    },
  },

  // =====================================================
  // DUTCH
  // =====================================================
  nl: {
    heroTitle: "Goedkope tickets, soepele reizen",
    heroHighlight: "Van boeking tot instappen",
    heroSubtitle:
      "Ervaar zorgeloos en luxe reizen met professionele visumverwerking, exclusieve Umrah-pakketten en persoonlijke begeleiding. Vertrouwd door meer dan 10.000 reizigers.",

    ctaTitle: "Klaar om uw reis te beginnen?",
    ctaDescription:
      "Neem vandaag contact met ons op voor een gratis adviesgesprek en ontdek hoe wij uw reisdromen werkelijkheid kunnen maken.",
    ctaButton: "Vraag een gratis offerte aan →",

    bookNow: "Boek Nu",
    learnMore: "Meer informatie",

    popularServicesTitle: "Onze populairste diensten",
    popularServicesDescription:
      "Alles wat u nodig heeft voor uw volgende reis op één plek: van vliegtickets en visa tot reispakketten, tours en eSIMs. Ontdek vandaag nog onze populairste diensten.",

    popular: "Populair",
    destination: "Bestemmingen",
    umrah: "Umrah",
    visa: "Visum",
    packages: "Pakketten",
    esim: "HT Connect – Wereldwijde eSIM",

    price: "Prijs",
    startingFrom: "Vanaf",
    fromPrice: "Vanaf {price}",
    onRequest: "Op aanvraag",
    custom: "Op maat",
    stayTuned: "Binnenkort",
    whatsapp: "Contact via WhatsApp",
    close: "Sluiten",
    packageAlt: "pakket",

    // BOOKING SEARCH FORM
    bookingForm: {
      labelFrom: "Van *",
      labelTo: "Naar *",
      labelDepart: "Vertrek",
      labelReturn: "Terugreis",
      labelTravellers: "Reizigers & klasse *",
      labelContact: "Telefoon / E-mail *",

      phLocation: "Land, stad of luchthaven",
      phDate: "Datum toevoegen",
      phTravellers: "Passagier, Economy",
      phContact: "Telefoon of e-mail",

      errFrom: "Van is verplicht",
      errTo: "Naar is verplicht",
      errTravellers: "Reizigersgegevens zijn verplicht",
      errContactRequired: "Telefoonnummer of e-mailadres is verplicht",
      errEmail: "Vul een geldig e-mailadres in",
      errPhone: "Vul een geldig telefoonnummer in (minimaal 7 cijfers)",

      submit: "Verstuur",
      success:
        "Uw aanvraag is verstuurd. Voor snellere en directe prijzen kunt u ons direct bereiken via het WhatsApp-icoon of bellen op +31 (0) 10 485 7673.",
      error: "Er is iets misgegaan. Probeer het opnieuw.",
      incomplete:
        "Vul aub alle verplichte velden in met een geldig telefoonnummer of e-mailadres zodat wij contact met u kunnen opnemen.",

      notSpecified: "Niet opgegeven",
      swap: "Vertrek en bestemming omwisselen",
      dateLocale: "nl-NL",
    },

    // CUSTOMER REVIEWS
    testimonials: {
      heading: "Wat onze klanten zeggen",
      ratingValue: "4,9",
      reviewsCount: "({count} beoordelingen)",
      monthAgo: "Een maand geleden",
      monthsAgo: "{count} maanden geleden",
      cta: "Beoordeel ons op Google",

      reviews: {
        zafarBaig:
          "Geweldige ervaring met Hassaan Travel! Het personeel was vriendelijk en professioneel en maakte het hele boekingsproces eenvoudig en zorgeloos. Alles was goed geregeld en ze waren altijd bereikbaar voor vragen. Een echte aanrader voor een soepele en prettige reiservaring!",
        maryamNawaz:
          "Zeer professionele en efficiënte service. Ik heb net 5 vliegtickets gekocht tegen een uitstekende prijs met 40 kg bagage. De communicatie was snel en duidelijk. Een echte aanrader!",
        armghanAli:
          "Ik heb een fantastische ervaring gehad met reisbureau Hassaan Travel. Alles was goed georganiseerd en zorgeloos. Het personeel was vriendelijk, behulpzaam en professioneel. Goede communicatie en een soepele afhandeling van begin tot eind. Absoluut een aanrader!",
      },
    },

    // TRIP TYPE DROPDOWN
    tripType: {
      returnLabel: "Retour",
      oneWayLabel: "Enkele reis",
      toggleAria: "Kies het type reis",
    },

    // TOUR CATEGORY FILTER
    tours: {
      categoriesAria: "Tourcategorieën",

      categories: {
        popular: "Populair",
        family: "Familie",
        honeymoon: "Huwelijksreis",
        summer: "Zomer",
        cultural: "Cultureel",
      },

      items: {
        dubaiAdventure: "Avontuur in Dubai",
        familyTurkey: "Gezinsreis Turkije",
        maldivesCouple: "Malediven koppelreis",
        northernAreas: "Noordelijke gebieden",
        lahoreHeritage: "Lahore cultuurtour",
      },
    },

    // FIVE-STAR HOTEL EXPERIENCES SECTION
    luxuryStay: {
      titleLine1: "Vijfsterren",
      titleLine2: "hotelervaringen",
      imageAlt: "Luxe vijfsterren hotelervaring",

      items: {
        premiumHotels: {
          title: "Premium hotels wereldwijd",
          desc:
            "Verblijf in zorgvuldig geselecteerde 5-sterrenhotels wereldwijd, op toplocaties en met uitzonderlijk comfort.",
        },
        luxurySuites: {
          title: "Luxe suites & persoonlijk verblijf",
          desc:
            "Geniet van ruime suites met persoonlijke service voor een zorgeloos verblijf.",
        },
        exclusiveDeals: {
          title: "Exclusieve deals & voorrang bij boeken",
          desc:
            "Profiteer wereldwijd van exclusieve tarieven, voorrang bij boekingen en premium voorzieningen.",
        },
      },
    },

    // "WHY HASSAAN TRAVEL" SECTION
    whyTrusted: {
      title: "Waarom Hassaan Travel uw vertrouwde partner is",
      intro:
        "Wij zijn meer dan een reisbureau; wij zijn uw toegang tot bijzondere reiservaringen. Daarom kiest u voor ons:",

      featureFlights:
        "Hulp bij het vinden van de beste en voordeligste vluchten naar uw bestemming. Snelle en transparante service via WhatsApp.",
      featureVisa: "Ervaring met visumaanvragen voor meerdere landen.",
      featureLanguages: "Klantenservice in meerdere talen.",
      featureContact: "Neem vandaag contact op – bekijk al onze diensten.",

      cta: "Neem vandaag contact op",
      imageAlt: "Uw vertrouwde visumpartner",
    },

    // TRUST BADGES STRIP
    trustBadges: {
      iata: {
        title: "IATA-gecertificeerd",
        desc: "Volledig erkend reisbureau",
      },
      support: {
        title: "Noodhulp",
        desc: "24/7 bereikbaar",
      },
      trusted: {
        title: "Vertrouwd door reizigers",
        desc: "15+ jaar ervaring",
      },
      premium: {
        title: "Premium service",
        desc: "Persoonlijke aandacht",
      },
    },

    // Generic <SideIconDesc /> content.
    // Add a key here and pass it to the component as sectionKey / itemKey.
    sideSections: {
      visaSolutions: {
        head: "Expert visumoplossingen",
        details:
          "Gestroomlijnde afhandeling met gegarandeerde goedkeuring voor alle bestemmingen",
      },
      airlinePartners: {
        head: "Vertrouwde luchtvaartpartners",
        details:
          "Wij werken met trots samen met toonaangevende internationale luchtvaartmaatschappijen om de beste tarieven en een zorgeloze reis te bieden.",
      },
    },

    sideIcons: {
      flightBooking: {
        title: "Vlucht boeken",
        desc:
          "Boek voordelige vluchten naar elke bestemming, met flexibele opties voor individuele reizigers en gezinnen.",
      },
      hotelReservations: {
        title: "Hotelreserveringen",
        desc:
          "Boek eenvoudig en snel comfortabele accommodaties over de hele wereld.",
      },
      visaProcessing: {
        title: "Visumaanvragen",
        desc: "Snelle en betrouwbare visumservice voor een vlotte goedkeuring.",
      },
      support247: {
        title: "24/7 ondersteuning",
        desc:
          "Klantenservice die dag en nacht klaarstaat voor al uw reisvragen.",
      },
    },

    countries: {
      japan: "Japan",
      egypt: "Egypte",
      austria: "Oostenrijk",
      czechRepublic: "Tsjechië",
      india: "India",
      morocco: "Marokko",
    },

    packageItems: {
      pakistan: {
        name: "Pakistan",
        description:
          "Ontdek de adembenemende landschappen, het rijke culturele erfgoed, de bruisende steden en onvergetelijke reiservaringen van Pakistan.",
      },
      pakistanVisa: {
        name: "Pakistan Visum",
        description:
          "Snelle en betrouwbare visumaanvraag voor Pakistan, met deskundige begeleiding en zorgeloze documentatie.",
      },
      saudiVisa: {
        name: "Saudi Visum",
        description:
          "Vraag uw Saoedische visum aan met een soepel aanvraagproces, professionele ondersteuning en tijdige goedkeuring.",
      },
      umrahPackage: {
        name: "Umrah Pakket",
        description:
          "Complete Umrah-pakketten inclusief visum, verblijf, vervoer en persoonlijke begeleiding tijdens uw hele reis.",
      },
      india: {
        name: "India",
        description:
          "Ontdek de diverse cultuur, historische monumenten, spirituele bestemmingen en wereldberoemde bezienswaardigheden van India.",
      },
      esimCard: {
        name: "E-Sim",
        description:
          "Blijf wereldwijd verbonden met voordelige eSIM-pakketten met directe activatie en soepele mobiele data.",
      },

      destPakistan: {
        name: "Pakistan",
        description:
          "Ontdek de adembenemende schoonheid van de Hunza-vallei, Skardu en de machtige toppen van het Karakoram-gebergte.",
      },
      destAfghanistan: {
        name: "Afghanistan",
        description:
          "Ontdek de historische rijkdom van de Bamiyan-vallei en de levendige cultuur van Kaboel.",
      },
      destSaudiArabia: {
        name: "Saoedi-Arabië",
        description:
          "Beleef een spirituele reis met begeleide tours langs de heilige steden en historische bezienswaardigheden.",
      },
      destIndia: {
        name: "India",
        description:
          "Bezoek de iconische Taj Mahal en ontdek de indrukwekkende paleizen en forten van de Pink City.",
      },
      destKurdistan: {
        name: "Koerdistan",
        description:
          "Ontdek eeuwenoude citadellen, prachtige berglandschappen en de warme gastvrijheid van de Koerdische regio.",
      },
      destTurkiye: {
        name: "Turkije",
        description:
          "Een perfecte mix van geschiedenis, cultuur en unieke landschappen. Luchtballonnen en verbluffende architectuur wachten op u.",
      },

      umrahComingSoon: {
        name: "Binnenkort beschikbaar",
        description:
          "Wij werken aan nieuwe Umrah-pakketten. Houd deze pagina in de gaten voor updates!",
      },

      visaPakFamily3m: {
        name: "Pakistan Familievisum (3 maanden)",
        description:
          "Familievisum voor een verblijf van 3 maanden. Snelle en betrouwbare afhandeling.",
      },
      visaPakTourist: {
        name: "Pakistan Toeristenvisum",
        description:
          "Toeristenvisum voor Pakistan. Profiteer van onze tijdelijke korting.",
      },
      visaSaudiTourist: {
        name: "Saoedi-Arabië Toeristenvisum",
        description:
          "Zorgeloze aanvraag van uw toeristenvisum voor uw reis naar Saoedi-Arabië.",
      },
      visaPakFamily1y: {
        name: "Pakistan Familievisum (1 jaar)",
        description:
          "Familievisum voor een langere duur van 1 jaar. Efficiënte service.",
      },
      visaKenya: {
        name: "Kenia Visum",
        description:
          "Eenvoudig aanvraagproces voor uw visum voor Kenia.",
      },
      visaOthers: {
        name: "Overige op aanvraag",
        description:
          "Visum nodig voor een andere bestemming? Neem contact op voor een persoonlijke offerte.",
      },

      pkgTanzania: {
        name: "Tanzania",
        description:
          "Oude tempels, traditionele theeceremonies en prachtige geishawijken.",
      },
      pkgOman: {
        name: "Oman",
        description:
          "De piramides van Gizeh, het Egyptisch Museum en een rijke faraonische geschiedenis.",
      },
      pkgMalaysia: {
        name: "Maleisië",
        description:
          "Keizerlijke paleizen, klassieke muziek en musea van wereldklasse.",
      },
      pkgIndonesia: {
        name: "Indonesië",
        description:
          "Sprookjesachtige architectuur, middeleeuwse charme en rijke Boheemse cultuur.",
      },
      pkgThailand: {
        name: "Thailand",
        description:
          "Historische monumenten, bruisende bazaars en divers spiritueel erfgoed.",
      },
      pkgJapan: {
        name: "Japan",
        description:
          "Levendige souks, prachtige paleizen en authentieke Marokkaanse tradities.",
      },
    },
  },

  // =====================================================
  // GERMAN
  // =====================================================
  de: {
    heroTitle: "Günstige Tickets, reibungslose Reisen",
    heroHighlight: "Von der Buchung bis zum Boarding",
    heroSubtitle:
      "Erleben Sie komfortables Luxusreisen mit professioneller Visabearbeitung, individuellen Umrah-Paketen und persönlicher Beratung. Über 10.000 Reisende vertrauen uns.",

    ctaTitle: "Bereit, Ihre Reise zu beginnen?",
    ctaDescription:
      "Kontaktieren Sie uns heute für eine kostenlose Beratung und entdecken Sie, wie wir Ihre Reiseträume verwirklichen können.",
    ctaButton: "Kostenloses Angebot anfordern →",

    bookNow: "Jetzt buchen",
    learnMore: "Mehr erfahren",

    popularServicesTitle: "Unsere beliebtesten Leistungen",
    popularServicesDescription:
      "Alles für Ihre nächste Reise an einem Ort – von Flügen und Visa bis hin zu Reisepaketen, Touren und eSIMs. Entdecken Sie noch heute unsere beliebtesten Leistungen.",

    popular: "Beliebt",
    destination: "Reiseziele",
    umrah: "Umrah",
    visa: "Visum",
    packages: "Pakete",
    esim: "HT Connect – Globale eSIM",

    price: "Preis",
    startingFrom: "Ab",
    fromPrice: "Ab {price}",
    onRequest: "Auf Anfrage",
    custom: "Individuell",
    stayTuned: "Demnächst",
    whatsapp: "Kontakt über WhatsApp",
    close: "Schließen",
    packageAlt: "Paket",

    // BOOKING SEARCH FORM
    bookingForm: {
      labelFrom: "Von *",
      labelTo: "Nach *",
      labelDepart: "Hinflug",
      labelReturn: "Rückflug",
      labelTravellers: "Reisende & Klasse *",
      labelContact: "Telefon / E-Mail *",

      phLocation: "Land, Stadt oder Flughafen",
      phDate: "Datum hinzufügen",
      phTravellers: "Passagier, Economy",
      phContact: "Telefon oder E-Mail",

      errFrom: "Abflugort ist erforderlich",
      errTo: "Reiseziel ist erforderlich",
      errTravellers: "Angaben zu den Reisenden sind erforderlich",
      errContactRequired: "Telefonnummer oder E-Mail-Adresse ist erforderlich",
      errEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
      errPhone:
        "Bitte geben Sie eine gültige Telefonnummer ein (mindestens 7 Ziffern)",

      submit: "Senden",
      success:
        "Ihre Anfrage wurde erfolgreich gesendet. Für schnellere und direkte Preise kontaktieren Sie uns über das WhatsApp-Symbol oder rufen Sie uns an unter +31 (0) 10 485 7673.",
      error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
      incomplete:
        "Bitte füllen Sie alle Pflichtfelder mit einer gültigen Telefonnummer oder E-Mail-Adresse aus, damit wir Sie kontaktieren können.",

      notSpecified: "Nicht angegeben",
      swap: "Abflugort und Reiseziel tauschen",
      dateLocale: "de-DE",
    },

    // CUSTOMER REVIEWS
    testimonials: {
      heading: "Was unsere Kunden sagen",
      ratingValue: "4,9",
      reviewsCount: "({count} Bewertungen)",
      monthAgo: "Vor einem Monat",
      monthsAgo: "Vor {count} Monaten",
      cta: "Bewerten Sie uns auf Google",

      reviews: {
        zafarBaig:
          "Großartige Erfahrung mit Hassaan Travel! Das Team war freundlich und professionell und hat den gesamten Buchungsprozess einfach und stressfrei gemacht. Alles war gut organisiert und man war jederzeit für Fragen erreichbar. Sehr zu empfehlen für eine reibungslose und angenehme Reise!",
        maryamNawaz:
          "Sehr professioneller und effizienter Service. Ich habe gerade 5 Flugtickets zu einem hervorragenden Preis mit 40 kg Freigepäck gekauft. Die Kommunikation war schnell und klar. Absolut empfehlenswert!",
        armghanAli:
          "Ich hatte eine wunderbare Erfahrung mit dem Reisebüro Hassaan Travel. Alles war gut organisiert und stressfrei. Die Mitarbeiter waren freundlich, hilfsbereit und professionell. Gute Kommunikation und ein reibungsloser Ablauf von Anfang bis Ende. Sehr empfehlenswert!",
      },
    },

    // TRIP TYPE DROPDOWN
    tripType: {
      returnLabel: "Hin- und Rückflug",
      oneWayLabel: "Nur Hinflug",
      toggleAria: "Reiseart auswählen",
    },

    // TOUR CATEGORY FILTER
    tours: {
      categoriesAria: "Tour-Kategorien",

      categories: {
        popular: "Beliebt",
        family: "Familie",
        honeymoon: "Flitterwochen",
        summer: "Sommer",
        cultural: "Kultur",
      },

      items: {
        dubaiAdventure: "Abenteuer Dubai",
        familyTurkey: "Familienreise Türkei",
        maldivesCouple: "Malediven für Paare",
        northernAreas: "Nordgebiete",
        lahoreHeritage: "Lahore Kulturtour",
      },
    },

    // FIVE-STAR HOTEL EXPERIENCES SECTION
    luxuryStay: {
      titleLine1: "Fünf-Sterne-Hotel",
      titleLine2: "Erlebnisse",
      imageAlt: "Luxuriöses Fünf-Sterne-Hotelerlebnis",

      items: {
        premiumHotels: {
          title: "Premium-Hotels weltweit",
          desc:
            "Übernachten Sie weltweit in handverlesenen 5-Sterne-Hotels in bester Lage und mit außergewöhnlichem Komfort.",
        },
        luxurySuites: {
          title: "Luxussuiten & persönlicher Service",
          desc:
            "Genießen Sie großzügige Suiten mit persönlichem Service für einen reibungslosen Aufenthalt.",
        },
        exclusiveDeals: {
          title: "Exklusive Angebote & bevorzugte Buchung",
          desc:
            "Profitieren Sie weltweit von exklusiven Raten, bevorzugten Buchungen und Premium-Ausstattung.",
        },
      },
    },

    // "WHY HASSAAN TRAVEL" SECTION
    whyTrusted: {
      title: "Warum Hassaan Travel Ihr vertrauensvoller Partner ist",
      intro:
        "Wir sind mehr als ein Reisebüro – wir sind Ihr Zugang zu außergewöhnlichen Reiseerlebnissen. Darum sollten Sie sich für uns entscheiden:",

      featureFlights:
        "Unterstützung bei der Suche nach den besten und günstigsten Flügen zu Ihrem Reiseziel. Schneller, transparenter Service per WhatsApp.",
      featureVisa:
        "Erfahrung bei der Bearbeitung von Visaanträgen für zahlreiche Länder.",
      featureLanguages: "Kundenservice in mehreren Sprachen.",
      featureContact:
        "Kontaktieren Sie uns noch heute – entdecken Sie alle unsere Leistungen.",

      cta: "Jetzt Kontakt aufnehmen",
      imageAlt: "Ihr vertrauensvoller Visum-Partner",
    },

    // TRUST BADGES STRIP
    trustBadges: {
      iata: {
        title: "IATA-zertifiziert",
        desc: "Voll akkreditiertes Reisebüro",
      },
      support: {
        title: "Notfall-Support",
        desc: "Rund um die Uhr erreichbar",
      },
      trusted: {
        title: "Von Reisenden empfohlen",
        desc: "Über 15 Jahre Erfahrung",
      },
      premium: {
        title: "Premium-Service",
        desc: "Persönliche Rundumbetreuung",
      },
    },

    // Generic <SideIconDesc /> content.
    // Add a key here and pass it to the component as sectionKey / itemKey.
    sideSections: {
      visaSolutions: {
        head: "Experten-Visa-Lösungen",
        details:
          "Optimierte Bearbeitung mit garantierter Genehmigung für alle Reiseziele",
      },
      airlinePartners: {
        head: "Vertrauenswürdige Airline-Partner",
        details:
          "Wir arbeiten mit führenden internationalen Fluggesellschaften zusammen, um beste Tarife und reibungslose Reisen zu bieten.",
      },
    },

    sideIcons: {
      flightBooking: {
        title: "Flugbuchung",
        desc:
          "Buchen Sie günstige Flüge zu jedem Reiseziel – mit flexiblen Optionen für Einzelreisende und Familien.",
      },
      hotelReservations: {
        title: "Hotelreservierungen",
        desc:
          "Buchen Sie weltweit komfortable Unterkünfte – einfach und bequem.",
      },
      visaProcessing: {
        title: "Visabearbeitung",
        desc:
          "Schneller und zuverlässiger Visaservice für eine reibungslose Genehmigung.",
      },
      support247: {
        title: "24/7 Support",
        desc: "Rund um die Uhr Kundenservice für alle Ihre Reisefragen.",
      },
    },

    countries: {
      japan: "Japan",
      egypt: "Ägypten",
      austria: "Österreich",
      czechRepublic: "Tschechien",
      india: "Indien",
      morocco: "Marokko",
    },

    packageItems: {
      pakistan: {
        name: "Pakistan",
        description:
          "Entdecken Sie Pakistans atemberaubende Landschaften, sein reiches Kulturerbe, lebendige Städte und unvergessliche Reiseerlebnisse.",
      },
      pakistanVisa: {
        name: "Pakistan Visum",
        description:
          "Schnelle und zuverlässige Visabearbeitung für Pakistan mit fachkundiger Beratung und unkomplizierter Dokumentation.",
      },
      saudiVisa: {
        name: "Saudi Visum",
        description:
          "Erhalten Sie Ihr Saudi-Visum mit einem reibungslosen Antragsverfahren, professioneller Unterstützung und pünktlicher Genehmigung.",
      },
      umrahPackage: {
        name: "Umrah Paket",
        description:
          "Komplette Umrah-Pakete inklusive Visum, Unterkunft, Transport und persönlicher Betreuung während Ihrer gesamten Reise.",
      },
      india: {
        name: "Indien",
        description:
          "Erkunden Sie Indiens vielfältige Kultur, historische Wahrzeichen, spirituelle Ziele und weltberühmte Sehenswürdigkeiten.",
      },
      esimCard: {
        name: "E-Sim",
        description:
          "Bleiben Sie weltweit verbunden mit günstigen eSIM-Tarifen, sofortiger Aktivierung und nahtlosem mobilem Internet.",
      },

      destPakistan: {
        name: "Pakistan",
        description:
          "Erleben Sie die atemberaubende Schönheit des Hunza-Tals, Skardus und der majestätischen Gipfel des Karakorum.",
      },
      destAfghanistan: {
        name: "Afghanistan",
        description:
          "Entdecken Sie den historischen Reichtum des Bamiyan-Tals und die lebendige Kultur Kabuls.",
      },
      destSaudiArabia: {
        name: "Saudi-Arabien",
        description:
          "Erleben Sie eine spirituelle Reise mit geführten Touren zu den heiligen Städten und historischen Stätten.",
      },
      destIndia: {
        name: "Indien",
        description:
          "Besuchen Sie das ikonische Taj Mahal und entdecken Sie die prächtigen Paläste und Festungen der Pink City.",
      },
      destKurdistan: {
        name: "Kurdistan",
        description:
          "Entdecken Sie antike Zitadellen, wunderschöne Berglandschaften und die herzliche Gastfreundschaft der kurdischen Region.",
      },
      destTurkiye: {
        name: "Türkei",
        description:
          "Eine perfekte Mischung aus Geschichte, Kultur und einzigartigen Landschaften. Heißluftballons und beeindruckende Architektur erwarten Sie.",
      },

      umrahComingSoon: {
        name: "Demnächst verfügbar",
        description:
          "Wir arbeiten an spannenden neuen Umrah-Paketen. Bleiben Sie gespannt auf Updates!",
      },

      visaPakFamily3m: {
        name: "Pakistan Familienvisum (3 Monate)",
        description:
          "Familienvisum für einen Aufenthalt von 3 Monaten. Schnelle und zuverlässige Bearbeitung.",
      },
      visaPakTourist: {
        name: "Pakistan Touristenvisum",
        description:
          "Touristenvisum für Pakistan. Nutzen Sie unseren zeitlich begrenzten Rabatt.",
      },
      visaSaudiTourist: {
        name: "Saudi-Arabien Touristenvisum",
        description:
          "Unkomplizierte Bearbeitung Ihres Touristenvisums für Ihre Reise nach Saudi-Arabien.",
      },
      visaPakFamily1y: {
        name: "Pakistan Familienvisum (1 Jahr)",
        description:
          "Langfristiges Familienvisum mit einer Gültigkeit von einem Jahr. Effizienter Service.",
      },
      visaKenya: {
        name: "Kenia Visum",
        description:
          "Unkompliziertes Antragsverfahren für Ihre Reise nach Kenia.",
      },
      visaOthers: {
        name: "Weitere auf Anfrage",
        description:
          "Benötigen Sie ein Visum für ein anderes Reiseziel? Kontaktieren Sie uns für ein individuelles Angebot.",
      },

      pkgTanzania: {
        name: "Tansania",
        description:
          "Alte Tempel, traditionelle Teezeremonien und schöne Geisha-Viertel.",
      },
      pkgOman: {
        name: "Oman",
        description:
          "Die Pyramiden von Gizeh, das Ägyptische Museum und eine reiche pharaonische Geschichte.",
      },
      pkgMalaysia: {
        name: "Malaysia",
        description:
          "Kaiserliche Paläste, klassische Musik und Museen von Weltrang.",
      },
      pkgIndonesia: {
        name: "Indonesien",
        description:
          "Märchenhafte Architektur, mittelalterlicher Charme und reiche böhmische Kultur.",
      },
      pkgThailand: {
        name: "Thailand",
        description:
          "Historische Monumente, lebhafte Basare und vielfältiges spirituelles Erbe.",
      },
      pkgJapan: {
        name: "Japan",
        description:
          "Lebendige Souks, beeindruckende Paläste und authentische marokkanische Traditionen.",
      },
    },
  },

  // =====================================================
  // FRENCH
  // =====================================================
  fr: {
    heroTitle: "Billets abordables, voyages sereins",
    heroHighlight: "De la réservation à l'embarquement",
    heroSubtitle:
      "Profitez d'un voyage luxueux et sans stress avec des services de visa experts, des forfaits Omra personnalisés et un accompagnement dédié. Plus de 10 000 voyageurs nous font confiance.",

    ctaTitle: "Prêt à commencer votre voyage ?",
    ctaDescription:
      "Contactez-nous aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons réaliser vos rêves de voyage.",
    ctaButton: "Demander un devis gratuit →",

    bookNow: "Réserver",
    learnMore: "En savoir plus",

    popularServicesTitle: "Nos services les plus populaires",
    popularServicesDescription:
      "Tout ce qu'il vous faut pour votre prochain voyage au même endroit : vols, visas, forfaits de voyage, circuits et eSIM. Découvrez dès aujourd'hui nos services les plus populaires.",

    popular: "Populaire",
    destination: "Destinations",
    umrah: "Omra",
    visa: "Visa",
    packages: "Forfaits",
    esim: "HT Connect – eSIM mondiale",

    price: "Prix",
    startingFrom: "À partir de",
    fromPrice: "À partir de {price}",
    onRequest: "Sur demande",
    custom: "Sur mesure",
    stayTuned: "Bientôt disponible",
    whatsapp: "Contact via WhatsApp",
    close: "Fermer",
    packageAlt: "forfait",

    // BOOKING SEARCH FORM
    bookingForm: {
      labelFrom: "De *",
      labelTo: "À *",
      labelDepart: "Aller",
      labelReturn: "Retour",
      labelTravellers: "Voyageurs et cabine *",
      labelContact: "Téléphone / E-mail *",

      phLocation: "Pays, ville ou aéroport",
      phDate: "Ajouter une date",
      phTravellers: "Passager, Économie",
      phContact: "Téléphone ou e-mail",

      errFrom: "Le lieu de départ est obligatoire",
      errTo: "La destination est obligatoire",
      errTravellers: "Les informations sur les voyageurs sont obligatoires",
      errContactRequired:
        "Un numéro de téléphone ou une adresse e-mail est obligatoire",
      errEmail: "Saisissez une adresse e-mail valide",
      errPhone: "Saisissez un numéro de téléphone valide (au moins 7 chiffres)",

      submit: "Envoyer",
      success:
        "Votre demande a bien été envoyée. Pour des tarifs plus rapides et directs, contactez-nous via l'icône WhatsApp ou appelez-nous au +31 (0) 10 485 7673.",
      error: "Une erreur s'est produite. Veuillez réessayer.",
      incomplete:
        "Veuillez remplir tous les champs obligatoires avec un numéro de téléphone ou une adresse e-mail valide afin que nous puissions vous contacter.",

      notSpecified: "Non précisé",
      swap: "Inverser le départ et la destination",
      dateLocale: "fr-FR",
    },

    // CUSTOMER REVIEWS
    testimonials: {
      heading: "Ce que disent nos clients",
      ratingValue: "4,9",
      reviewsCount: "({count} avis)",
      monthAgo: "Il y a un mois",
      monthsAgo: "Il y a {count} mois",
      cta: "Laissez-nous un avis sur Google",

      reviews: {
        zafarBaig:
          "Excellente expérience avec Hassaan Travel ! L'équipe était sympathique et professionnelle et a rendu toute la réservation simple et sans stress. Tout était bien organisé et ils étaient toujours disponibles pour répondre à mes questions. Je recommande vivement leurs services pour un voyage fluide et agréable !",
        maryamNawaz:
          "Service très professionnel et efficace. Je viens d'acheter 5 billets d'avion à un excellent prix avec 40 kg de bagages. La communication a été rapide et claire. Vivement recommandé !",
        armghanAli:
          "J'ai vécu une très belle expérience avec l'agence Hassaan Travel. Tout était bien organisé et sans stress. Le personnel était aimable, serviable et professionnel. Bonne communication et démarches fluides du début à la fin. Je recommande vivement !",
      },
    },

    // TRIP TYPE DROPDOWN
    tripType: {
      returnLabel: "Aller-retour",
      oneWayLabel: "Aller simple",
      toggleAria: "Choisir le type de voyage",
    },

    // TOUR CATEGORY FILTER
    tours: {
      categoriesAria: "Catégories de circuits",

      categories: {
        popular: "Populaire",
        family: "Famille",
        honeymoon: "Lune de miel",
        summer: "Été",
        cultural: "Culturel",
      },

      items: {
        dubaiAdventure: "Aventure à Dubaï",
        familyTurkey: "Voyage en famille en Turquie",
        maldivesCouple: "Maldives en amoureux",
        northernAreas: "Régions du Nord",
        lahoreHeritage: "Lahore, tour du patrimoine",
      },
    },

    // FIVE-STAR HOTEL EXPERIENCES SECTION
    luxuryStay: {
      titleLine1: "Expériences hôtelières",
      titleLine2: "cinq étoiles",
      imageAlt: "Expérience hôtelière de luxe cinq étoiles",

      items: {
        premiumHotels: {
          title: "Hôtels premium dans le monde entier",
          desc:
            "Séjournez dans des hôtels 5 étoiles sélectionnés avec soin, idéalement situés et d'un confort exceptionnel.",
        },
        luxurySuites: {
          title: "Suites de luxe et séjours personnalisés",
          desc:
            "Profitez de suites spacieuses et de services personnalisés pour un séjour sans souci.",
        },
        exclusiveDeals: {
          title: "Offres exclusives et réservation prioritaire",
          desc:
            "Accédez à des tarifs exclusifs, des réservations prioritaires et des prestations premium partout dans le monde.",
        },
      },
    },

    // "WHY HASSAAN TRAVEL" SECTION
    whyTrusted: {
      title: "Pourquoi Hassaan Travel est votre partenaire de confiance",
      intro:
        "Nous sommes bien plus qu'une agence de voyage : nous sommes votre passeport vers des expériences hors du commun. Voici pourquoi nous choisir :",

      featureFlights:
        "Assistance pour obtenir les vols les meilleurs et les moins chers vers votre destination. Un service rapide et transparent via WhatsApp.",
      featureVisa:
        "Expertise dans le traitement des demandes de visa pour de nombreux pays.",
      featureLanguages: "Service client en plusieurs langues.",
      featureContact:
        "Contactez-nous dès aujourd'hui – découvrez tous nos services.",

      cta: "Contactez-nous dès aujourd'hui",
      imageAlt: "Votre partenaire visa de confiance",
    },

    // TRUST BADGES STRIP
    trustBadges: {
      iata: {
        title: "Certifié IATA",
        desc: "Agence pleinement agréée",
      },
      support: {
        title: "Assistance d'urgence",
        desc: "Disponible 24h/24 et 7j/7",
      },
      trusted: {
        title: "La confiance des voyageurs",
        desc: "Plus de 15 ans d'expérience",
      },
      premium: {
        title: "Service premium",
        desc: "Un accompagnement sur mesure",
      },
    },

    // Generic <SideIconDesc /> content.
    // Add a key here and pass it to the component as sectionKey / itemKey.
    sideSections: {
      visaSolutions: {
        head: "Solutions visa expertes",
        details:
          "Un traitement simplifié avec approbation garantie pour toutes les destinations",
      },
      airlinePartners: {
        head: "Compagnies aériennes partenaires de confiance",
        details:
          "Nous travaillons avec les grandes compagnies internationales pour offrir les meilleurs tarifs et des voyages sans souci.",
      },
    },

    sideIcons: {
      flightBooking: {
        title: "Réservation de vols",
        desc:
          "Réservez des vols abordables vers toutes les destinations, avec des options flexibles pour les particuliers et les familles.",
      },
      hotelReservations: {
        title: "Réservations d'hôtels",
        desc:
          "Réservez facilement des hébergements confortables partout dans le monde.",
      },
      visaProcessing: {
        title: "Traitement des visas",
        desc:
          "Un service de visa rapide et fiable pour une approbation sans accroc.",
      },
      support247: {
        title: "Assistance 24h/24 et 7j/7",
        desc:
          "Un service client disponible jour et nuit pour tous vos besoins de voyage.",
      },
    },

    countries: {
      japan: "Japon",
      egypt: "Égypte",
      austria: "Autriche",
      czechRepublic: "République tchèque",
      india: "Inde",
      morocco: "Maroc",
    },

    packageItems: {
      pakistan: {
        name: "Pakistan",
        description:
          "Découvrez les paysages spectaculaires du Pakistan, son riche patrimoine culturel, ses villes animées et des expériences de voyage inoubliables.",
      },
      pakistanVisa: {
        name: "Visa Pakistan",
        description:
          "Traitement rapide et fiable de votre visa pour le Pakistan, avec un accompagnement expert et une gestion simplifiée des documents.",
      },
      saudiVisa: {
        name: "Visa Arabie Saoudite",
        description:
          "Obtenez votre visa saoudien grâce à une procédure fluide, une assistance professionnelle et des délais respectés.",
      },
      umrahPackage: {
        name: "Forfait Omra",
        description:
          "Forfaits Omra complets comprenant le visa, l'hébergement, le transport et un accompagnement dédié tout au long de votre voyage.",
      },
      india: {
        name: "Inde",
        description:
          "Explorez la culture diverse de l'Inde, ses monuments historiques, ses lieux spirituels et ses attractions mondialement connues.",
      },
      esimCard: {
        name: "E-Sim",
        description:
          "Restez connecté partout dans le monde avec des forfaits eSIM abordables, une activation instantanée et des données mobiles fluides.",
      },

      destPakistan: {
        name: "Pakistan",
        description:
          "Explorez la beauté saisissante de la vallée de Hunza, de Skardu et des sommets majestueux du Karakoram.",
      },
      destAfghanistan: {
        name: "Afghanistan",
        description:
          "Découvrez la richesse historique de la vallée de Bamiyan et la culture vivante de Kaboul.",
      },
      destSaudiArabia: {
        name: "Arabie Saoudite",
        description:
          "Vivez un voyage spirituel avec des visites guidées des villes saintes et des sites historiques.",
      },
      destIndia: {
        name: "Inde",
        description:
          "Visitez l'emblématique Taj Mahal et explorez les palais et forts majestueux de la Ville Rose.",
      },
      destKurdistan: {
        name: "Kurdistan",
        description:
          "Découvrez d'anciennes citadelles, de superbes paysages de montagne et l'hospitalité chaleureuse de la région kurde.",
      },
      destTurkiye: {
        name: "Turquie",
        description:
          "Un mélange parfait d'histoire, de culture et de paysages uniques. Montgolfières et architecture éblouissante vous attendent.",
      },

      umrahComingSoon: {
        name: "Bientôt disponible",
        description:
          "Nous préparons de nouveaux forfaits Omra. Restez à l'écoute pour les prochaines annonces !",
      },

      visaPakFamily3m: {
        name: "Visa famille Pakistan (3 mois)",
        description:
          "Visa famille pour un séjour de 3 mois. Traitement rapide et fiable.",
      },
      visaPakTourist: {
        name: "Visa touristique Pakistan",
        description:
          "Visa touristique pour le Pakistan. Profitez de notre remise à durée limitée.",
      },
      visaSaudiTourist: {
        name: "Visa touristique Arabie Saoudite",
        description:
          "Traitement sans souci de votre visa touristique pour l'Arabie Saoudite.",
      },
      visaPakFamily1y: {
        name: "Visa famille Pakistan (1 an)",
        description:
          "Visa famille de longue durée valable un an. Service efficace.",
      },
      visaKenya: {
        name: "Visa Kenya",
        description:
          "Procédure de demande simplifiée pour votre voyage au Kenya.",
      },
      visaOthers: {
        name: "Autres sur demande",
        description:
          "Besoin d'un visa pour une autre destination ? Contactez-nous pour un devis personnalisé.",
      },

      pkgTanzania: {
        name: "Tanzanie",
        description:
          "Temples anciens, cérémonies du thé traditionnelles et magnifiques quartiers de geishas.",
      },
      pkgOman: {
        name: "Oman",
        description:
          "Les pyramides de Gizeh, le Musée égyptien et une riche histoire pharaonique.",
      },
      pkgMalaysia: {
        name: "Malaisie",
        description:
          "Palais impériaux, musique classique et musées de renommée mondiale.",
      },
      pkgIndonesia: {
        name: "Indonésie",
        description:
          "Architecture de conte de fées, charme médiéval et riche culture bohémienne.",
      },
      pkgThailand: {
        name: "Thaïlande",
        description:
          "Monuments historiques, bazars animés et patrimoine spirituel varié.",
      },
      pkgJapan: {
        name: "Japon",
        description:
          "Souks animés, palais somptueux et traditions marocaines authentiques.",
      },
    },
  },

  // =====================================================
  // ITALIAN
  // =====================================================
  it: {
    heroTitle: "Biglietti convenienti, viaggi senza problemi",
    heroHighlight: "Dalla prenotazione all'imbarco",
    heroSubtitle:
      "Vivi un viaggio di lusso senza stress con servizi visti professionali, pacchetti Umrah personalizzati e assistenza dedicata. Oltre 10.000 viaggiatori si affidano a noi.",

    ctaTitle: "Pronto per iniziare il tuo viaggio?",
    ctaDescription:
      "Contattaci oggi per una consulenza gratuita e scopri come possiamo trasformare i tuoi sogni di viaggio in realtà.",
    ctaButton: "Richiedi un preventivo gratuito →",

    bookNow: "Prenota Ora",
    learnMore: "Scopri di più",

    popularServicesTitle: "I nostri servizi più popolari",
    popularServicesDescription:
      "Tutto ciò che serve per il tuo prossimo viaggio in un unico posto: voli, visti, pacchetti viaggio, tour ed eSIM. Scopri oggi i nostri servizi più richiesti.",

    popular: "Popolari",
    destination: "Destinazioni",
    umrah: "Umrah",
    visa: "Visti",
    packages: "Pacchetti",
    esim: "HT Connect – eSIM globale",

    price: "Prezzo",
    startingFrom: "A partire da",
    fromPrice: "Da {price}",
    onRequest: "Su richiesta",
    custom: "Su misura",
    stayTuned: "Prossimamente",
    whatsapp: "Contattaci su WhatsApp",
    close: "Chiudi",
    packageAlt: "pacchetto",

    // BOOKING SEARCH FORM
    bookingForm: {
      labelFrom: "Da *",
      labelTo: "A *",
      labelDepart: "Andata",
      labelReturn: "Ritorno",
      labelTravellers: "Viaggiatori e classe *",
      labelContact: "Telefono / E-mail *",

      phLocation: "Paese, città o aeroporto",
      phDate: "Aggiungi data",
      phTravellers: "Passeggero, Economy",
      phContact: "Telefono o e-mail",

      errFrom: "Il luogo di partenza è obbligatorio",
      errTo: "La destinazione è obbligatoria",
      errTravellers: "Le informazioni sui viaggiatori sono obbligatorie",
      errContactRequired:
        "È obbligatorio un numero di telefono o un indirizzo e-mail",
      errEmail: "Inserisci un indirizzo e-mail valido",
      errPhone: "Inserisci un numero di telefono valido (almeno 7 cifre)",

      submit: "Invia",
      success:
        "La tua richiesta è stata inviata correttamente. Per prezzi più rapidi e diretti, contattaci tramite l'icona WhatsApp o chiamaci al +31 (0) 10 485 7673.",
      error: "Qualcosa è andato storto. Riprova.",
      incomplete:
        "Compila tutti i campi obbligatori con un numero di telefono o un'e-mail validi per permetterci di contattarti.",

      notSpecified: "Non specificato",
      swap: "Inverti partenza e destinazione",
      dateLocale: "it-IT",
    },

    // CUSTOMER REVIEWS
    testimonials: {
      heading: "Cosa dicono i nostri clienti",
      ratingValue: "4,9",
      reviewsCount: "({count} recensioni)",
      monthAgo: "Un mese fa",
      monthsAgo: "{count} mesi fa",
      cta: "Recensiscici su Google",

      reviews: {
        zafarBaig:
          "Esperienza fantastica con Hassaan Travel! Il personale è stato cordiale e professionale e ha reso tutta la prenotazione semplice e senza stress. Tutto era ben organizzato ed erano sempre disponibili per rispondere alle mie domande. Consigliatissimi per un viaggio sereno e piacevole!",
        maryamNawaz:
          "Servizio molto professionale ed efficiente. Ho appena acquistato 5 biglietti aerei a un ottimo prezzo con 40 kg di bagaglio. La comunicazione è stata rapida e chiara. Altamente consigliato!",
        armghanAli:
          "Ho avuto un'esperienza eccellente con l'agenzia Hassaan Travel. Tutto è stato ben organizzato e senza stress. Il personale è stato gentile, disponibile e professionale. Ottima comunicazione e pratiche fluide dall'inizio alla fine. Li consiglio vivamente!",
      },
    },

    // TRIP TYPE DROPDOWN
    tripType: {
      returnLabel: "Andata e ritorno",
      oneWayLabel: "Solo andata",
      toggleAria: "Scegli il tipo di viaggio",
    },

    // TOUR CATEGORY FILTER
    tours: {
      categoriesAria: "Categorie di tour",

      categories: {
        popular: "Popolari",
        family: "Famiglia",
        honeymoon: "Luna di miele",
        summer: "Estate",
        cultural: "Culturale",
      },

      items: {
        dubaiAdventure: "Avventura a Dubai",
        familyTurkey: "Viaggio in Turchia per famiglie",
        maldivesCouple: "Maldive per coppie",
        northernAreas: "Regioni settentrionali",
        lahoreHeritage: "Lahore, tour del patrimonio",
      },
    },

    // FIVE-STAR HOTEL EXPERIENCES SECTION
    luxuryStay: {
      titleLine1: "Esperienze in hotel",
      titleLine2: "a cinque stelle",
      imageAlt: "Esperienza di lusso in hotel a cinque stelle",

      items: {
        premiumHotels: {
          title: "Hotel premium in tutto il mondo",
          desc:
            "Soggiorna in hotel 5 stelle selezionati in tutto il mondo, in posizioni privilegiate e con un comfort eccezionale.",
        },
        luxurySuites: {
          title: "Suite di lusso e soggiorni su misura",
          desc:
            "Goditi suite spaziose con servizi personalizzati per un soggiorno impeccabile.",
        },
        exclusiveDeals: {
          title: "Offerte esclusive e prenotazione prioritaria",
          desc:
            "Accedi a tariffe esclusive, prenotazioni prioritarie e servizi premium in tutto il mondo.",
        },
      },
    },

    // "WHY HASSAAN TRAVEL" SECTION
    whyTrusted: {
      title: "Perché Hassaan Travel è il tuo partner di fiducia",
      intro:
        "Siamo molto più di un'agenzia di viaggi: siamo il tuo passaporto per esperienze straordinarie. Ecco perché scegliere noi:",

      featureFlights:
        "Assistenza per trovare i voli migliori e più convenienti verso la tua destinazione. Servizio rapido e trasparente via WhatsApp.",
      featureVisa:
        "Esperienza nella gestione delle richieste di visto per numerosi Paesi.",
      featureLanguages: "Assistenza clienti in più lingue.",
      featureContact: "Contattaci oggi – scopri tutti i nostri servizi.",

      cta: "Contattaci oggi",
      imageAlt: "Il tuo partner di fiducia per i visti",
    },

    // TRUST BADGES STRIP
    trustBadges: {
      iata: {
        title: "Certificata IATA",
        desc: "Agenzia pienamente autorizzata",
      },
      support: {
        title: "Assistenza d'emergenza",
        desc: "Disponibile 24 ore su 24, 7 giorni su 7",
      },
      trusted: {
        title: "Scelta dai viaggiatori",
        desc: "Oltre 15 anni di esperienza",
      },
      premium: {
        title: "Servizio premium",
        desc: "Attenzione su misura",
      },
    },

    // Generic <SideIconDesc /> content.
    // Add a key here and pass it to the component as sectionKey / itemKey.
    sideSections: {
      visaSolutions: {
        head: "Soluzioni visti professionali",
        details:
          "Procedure semplificate con approvazione garantita per tutte le destinazioni",
      },
      airlinePartners: {
        head: "Compagnie aeree partner di fiducia",
        details:
          "Collaboriamo con le principali compagnie aeree internazionali per offrire le migliori tariffe e viaggi senza pensieri.",
      },
    },

    sideIcons: {
      flightBooking: {
        title: "Prenotazione voli",
        desc:
          "Prenota voli convenienti verso ogni destinazione, con opzioni flessibili per singoli e famiglie.",
      },
      hotelReservations: {
        title: "Prenotazioni alberghiere",
        desc:
          "Prenota sistemazioni confortevoli in tutto il mondo, in modo facile e veloce.",
      },
      visaProcessing: {
        title: "Gestione dei visti",
        desc:
          "Servizio visti rapido e affidabile per un'approvazione senza intoppi.",
      },
      support247: {
        title: "Assistenza 24 ore su 24",
        desc:
          "Supporto clienti sempre disponibile per ogni esigenza di viaggio.",
      },
    },

    countries: {
      japan: "Giappone",
      egypt: "Egitto",
      austria: "Austria",
      czechRepublic: "Repubblica Ceca",
      india: "India",
      morocco: "Marocco",
    },

    packageItems: {
      pakistan: {
        name: "Pakistan",
        description:
          "Scopri i paesaggi mozzafiato del Pakistan, il suo ricco patrimonio culturale, le città vivaci ed esperienze di viaggio indimenticabili.",
      },
      pakistanVisa: {
        name: "Visto Pakistan",
        description:
          "Servizio rapido e affidabile per il visto per il Pakistan, con assistenza esperta e documentazione senza pensieri.",
      },
      saudiVisa: {
        name: "Visto Arabia Saudita",
        description:
          "Ottieni il tuo visto saudita con una procedura semplice, assistenza professionale e approvazioni puntuali.",
      },
      umrahPackage: {
        name: "Pacchetto Umrah",
        description:
          "Pacchetti Umrah completi con visto, alloggio, trasporti e assistenza dedicata per tutta la durata del viaggio.",
      },
      india: {
        name: "India",
        description:
          "Esplora la cultura variegata dell'India, i monumenti storici, le mete spirituali e le attrazioni famose in tutto il mondo.",
      },
      esimCard: {
        name: "E-Sim",
        description:
          "Resta connesso in tutto il mondo con piani eSIM convenienti, attivazione immediata e dati mobili senza interruzioni.",
      },

      destPakistan: {
        name: "Pakistan",
        description:
          "Esplora la bellezza straordinaria della valle di Hunza, di Skardu e delle maestose vette del Karakorum.",
      },
      destAfghanistan: {
        name: "Afghanistan",
        description:
          "Scopri la ricchezza storica della valle di Bamiyan e la cultura vivace di Kabul.",
      },
      destSaudiArabia: {
        name: "Arabia Saudita",
        description:
          "Vivi un viaggio spirituale con visite guidate alle città sante e ai luoghi storici.",
      },
      destIndia: {
        name: "India",
        description:
          "Visita l'iconico Taj Mahal ed esplora i maestosi palazzi e forti della Città Rosa.",
      },
      destKurdistan: {
        name: "Kurdistan",
        description:
          "Scopri antiche cittadelle, splendidi paesaggi montani e la calorosa ospitalità della regione curda.",
      },
      destTurkiye: {
        name: "Turchia",
        description:
          "Un mix perfetto di storia, cultura e paesaggi unici. Ti aspettano mongolfiere e architetture straordinarie.",
      },

      umrahComingSoon: {
        name: "Prossimamente",
        description:
          "Stiamo preparando nuovi entusiasmanti pacchetti Umrah. Resta aggiornato!",
      },

      visaPakFamily3m: {
        name: "Visto famiglia Pakistan (3 mesi)",
        description:
          "Visto famiglia per un soggiorno di 3 mesi. Procedura rapida e affidabile.",
      },
      visaPakTourist: {
        name: "Visto turistico Pakistan",
        description:
          "Visto turistico per il Pakistan. Approfitta del nostro sconto a tempo limitato.",
      },
      visaSaudiTourist: {
        name: "Visto turistico Arabia Saudita",
        description:
          "Gestione senza pensieri del visto turistico per il tuo viaggio in Arabia Saudita.",
      },
      visaPakFamily1y: {
        name: "Visto famiglia Pakistan (1 anno)",
        description:
          "Visto famiglia di lunga durata valido un anno. Servizio efficiente.",
      },
      visaKenya: {
        name: "Visto Kenya",
        description:
          "Procedura semplificata per la richiesta del visto per il Kenya.",
      },
      visaOthers: {
        name: "Altri su richiesta",
        description:
          "Ti serve un visto per un'altra destinazione? Contattaci per un preventivo personalizzato.",
      },

      pkgTanzania: {
        name: "Tanzania",
        description:
          "Templi antichi, cerimonie del tè tradizionali e splendidi quartieri delle geishe.",
      },
      pkgOman: {
        name: "Oman",
        description:
          "Le piramidi di Giza, il Museo Egizio e una ricca storia faraonica.",
      },
      pkgMalaysia: {
        name: "Malesia",
        description:
          "Palazzi imperiali, musica classica e musei di livello mondiale.",
      },
      pkgIndonesia: {
        name: "Indonesia",
        description:
          "Architettura da fiaba, fascino medievale e ricca cultura boema.",
      },
      pkgThailand: {
        name: "Thailandia",
        description:
          "Monumenti storici, bazar vivaci e un patrimonio spirituale variegato.",
      },
      pkgJapan: {
        name: "Giappone",
        description:
          "Souk vivaci, palazzi splendidi e autentiche tradizioni marocchine.",
      },
    },
  },

  // =====================================================
  // SPANISH
  // =====================================================
  es: {
    heroTitle: "Billetes económicos, viajes tranquilos",
    heroHighlight: "Desde la reserva hasta el embarque",
    heroSubtitle:
      "Disfruta de viajes de lujo sin complicaciones con procesamiento experto de visas, paquetes Umrah personalizados y orientación profesional. Más de 10.000 viajeros confían en nosotros.",

    ctaTitle: "¿Listo para comenzar tu viaje?",
    ctaDescription:
      "Contáctanos hoy para una consulta gratuita y descubre cómo podemos hacer realidad tus sueños de viaje.",
    ctaButton: "Solicitar presupuesto gratuito →",

    bookNow: "Reservar",
    learnMore: "Más información",

    popularServicesTitle: "Nuestros servicios más populares",
    popularServicesDescription:
      "Todo lo que necesitas para tu próximo viaje en un solo lugar: vuelos, visados, paquetes de viaje, tours y eSIM. Descubre hoy nuestros servicios más populares.",

    popular: "Popular",
    destination: "Destinos",
    umrah: "Umrah",
    visa: "Visados",
    packages: "Paquetes",
    esim: "HT Connect – eSIM global",

    price: "Precio",
    startingFrom: "Desde",
    fromPrice: "Desde {price}",
    onRequest: "Bajo petición",
    custom: "Personalizado",
    stayTuned: "Muy pronto",
    whatsapp: "Contactar por WhatsApp",
    close: "Cerrar",
    packageAlt: "paquete",

    // BOOKING SEARCH FORM
    bookingForm: {
      labelFrom: "Desde *",
      labelTo: "Hasta *",
      labelDepart: "Ida",
      labelReturn: "Vuelta",
      labelTravellers: "Viajeros y clase *",
      labelContact: "Teléfono / Correo *",

      phLocation: "País, ciudad o aeropuerto",
      phDate: "Añadir fecha",
      phTravellers: "Pasajero, Turista",
      phContact: "Teléfono o correo",

      errFrom: "El origen es obligatorio",
      errTo: "El destino es obligatorio",
      errTravellers: "La información de los viajeros es obligatoria",
      errContactRequired:
        "Es obligatorio un número de teléfono o un correo electrónico",
      errEmail: "Introduce una dirección de correo válida",
      errPhone: "Introduce un número de teléfono válido (al menos 7 dígitos)",

      submit: "Enviar",
      success:
        "Tu solicitud se ha enviado correctamente. Para precios más rápidos y directos, contáctanos mediante el icono de WhatsApp o llámanos al +31 (0) 10 485 7673.",
      error: "Algo ha salido mal. Inténtalo de nuevo.",
      incomplete:
        "Rellena todos los campos obligatorios con un teléfono o correo electrónico válido para que podamos contactarte.",

      notSpecified: "No especificado",
      swap: "Intercambiar origen y destino",
      dateLocale: "es-ES",
    },

    // CUSTOMER REVIEWS
    testimonials: {
      heading: "Lo que dicen nuestros clientes",
      ratingValue: "4,9",
      reviewsCount: "({count} reseñas)",
      monthAgo: "Hace un mes",
      monthsAgo: "Hace {count} meses",
      cta: "Déjanos una reseña en Google",

      reviews: {
        zafarBaig:
          "¡Excelente experiencia con Hassaan Travel! El equipo fue amable y profesional e hizo que todo el proceso de reserva fuera sencillo y sin estrés. Todo estuvo bien organizado y siempre estuvieron disponibles para responder a mis preguntas. ¡Muy recomendables para un viaje cómodo y agradable!",
        maryamNawaz:
          "Servicio muy profesional y eficiente. Acabo de comprar 5 billetes de avión a un precio estupendo con 40 kg de equipaje. La comunicación fue rápida y clara. ¡Muy recomendable!",
        armghanAli:
          "Tuve una experiencia estupenda con la agencia Hassaan Travel. Todo estuvo bien organizado y sin estrés. El personal fue amable, servicial y profesional. Buena comunicación y gestiones fluidas de principio a fin. ¡Los recomiendo totalmente!",
      },
    },

    // TRIP TYPE DROPDOWN
    tripType: {
      returnLabel: "Ida y vuelta",
      oneWayLabel: "Solo ida",
      toggleAria: "Elige el tipo de viaje",
    },

    // TOUR CATEGORY FILTER
    tours: {
      categoriesAria: "Categorías de tours",

      categories: {
        popular: "Popular",
        family: "Familia",
        honeymoon: "Luna de miel",
        summer: "Verano",
        cultural: "Cultural",
      },

      items: {
        dubaiAdventure: "Aventura en Dubái",
        familyTurkey: "Viaje familiar a Turquía",
        maldivesCouple: "Maldivas en pareja",
        northernAreas: "Regiones del norte",
        lahoreHeritage: "Lahore, ruta del patrimonio",
      },
    },

    // FIVE-STAR HOTEL EXPERIENCES SECTION
    luxuryStay: {
      titleLine1: "Experiencias en hoteles",
      titleLine2: "de cinco estrellas",
      imageAlt: "Experiencia de lujo en hotel de cinco estrellas",

      items: {
        premiumHotels: {
          title: "Hoteles premium en todo el mundo",
          desc:
            "Alójate en hoteles de 5 estrellas seleccionados, en ubicaciones privilegiadas y con un confort excepcional.",
        },
        luxurySuites: {
          title: "Suites de lujo y estancias personalizadas",
          desc:
            "Disfruta de suites amplias con servicios personalizados para una estancia perfecta.",
        },
        exclusiveDeals: {
          title: "Ofertas exclusivas y reserva prioritaria",
          desc:
            "Accede a tarifas exclusivas, reservas prioritarias y servicios premium en todo el mundo.",
        },
      },
    },

    // "WHY HASSAAN TRAVEL" SECTION
    whyTrusted: {
      title: "Por qué Hassaan Travel es tu socio de confianza",
      intro:
        "Somos mucho más que una agencia de viajes: somos tu pasaporte a experiencias extraordinarias. Por eso deberías elegirnos:",

      featureFlights:
        "Ayuda para conseguir los vuelos mejores y más económicos a tu destino. Servicio rápido y transparente por WhatsApp.",
      featureVisa:
        "Experiencia en la tramitación de visados para múltiples países.",
      featureLanguages: "Atención al cliente en varios idiomas.",
      featureContact: "Contáctanos hoy: descubre todos nuestros servicios.",

      cta: "Contáctanos hoy",
      imageAlt: "Tu socio de confianza para visados",
    },

    // TRUST BADGES STRIP
    trustBadges: {
      iata: {
        title: "Certificada por IATA",
        desc: "Agencia totalmente autorizada",
      },
      support: {
        title: "Asistencia de emergencia",
        desc: "Disponible 24/7",
      },
      trusted: {
        title: "La confianza de los viajeros",
        desc: "Más de 15 años de experiencia",
      },
      premium: {
        title: "Servicio premium",
        desc: "Atención personalizada",
      },
    },

    // Generic <SideIconDesc /> content.
    // Add a key here and pass it to the component as sectionKey / itemKey.
    sideSections: {
      visaSolutions: {
        head: "Soluciones expertas de visado",
        details:
          "Tramitación ágil con aprobación garantizada para todos los destinos",
      },
      airlinePartners: {
        head: "Aerolíneas asociadas de confianza",
        details:
          "Trabajamos con las principales aerolíneas internacionales para ofrecer las mejores tarifas y viajes sin complicaciones.",
      },
    },

    sideIcons: {
      flightBooking: {
        title: "Reserva de vuelos",
        desc:
          "Reserva vuelos económicos a cualquier destino, con opciones flexibles para particulares y familias.",
      },
      hotelReservations: {
        title: "Reservas de hotel",
        desc:
          "Reserva alojamientos cómodos en todo el mundo de forma fácil y rápida.",
      },
      visaProcessing: {
        title: "Tramitación de visados",
        desc:
          "Servicio de visados rápido y fiable para una aprobación sin contratiempos.",
      },
      support247: {
        title: "Asistencia 24/7",
        desc:
          "Atención al cliente las 24 horas para todas tus necesidades de viaje.",
      },
    },

    countries: {
      japan: "Japón",
      egypt: "Egipto",
      austria: "Austria",
      czechRepublic: "República Checa",
      india: "India",
      morocco: "Marruecos",
    },

    packageItems: {
      pakistan: {
        name: "Pakistán",
        description:
          "Descubre los paisajes impresionantes de Pakistán, su rico patrimonio cultural, sus ciudades vibrantes y experiencias de viaje inolvidables.",
      },
      pakistanVisa: {
        name: "Visado Pakistán",
        description:
          "Tramitación rápida y fiable del visado para Pakistán, con asesoramiento experto y documentación sin complicaciones.",
      },
      saudiVisa: {
        name: "Visado Arabia Saudí",
        description:
          "Consigue tu visado saudí con un proceso de solicitud sencillo, asistencia profesional y aprobaciones puntuales.",
      },
      umrahPackage: {
        name: "Paquete Umrah",
        description:
          "Paquetes Umrah completos con visado, alojamiento, transporte y asistencia dedicada durante todo el viaje.",
      },
      india: {
        name: "India",
        description:
          "Explora la diversa cultura de la India, sus monumentos históricos, destinos espirituales y atracciones de fama mundial.",
      },
      esimCard: {
        name: "E-Sim",
        description:
          "Mantente conectado en todo el mundo con planes eSIM económicos, activación instantánea y datos móviles sin interrupciones.",
      },

      destPakistan: {
        name: "Pakistán",
        description:
          "Explora la impresionante belleza del valle de Hunza, Skardu y las majestuosas cumbres del Karakórum.",
      },
      destAfghanistan: {
        name: "Afganistán",
        description:
          "Descubre la riqueza histórica del valle de Bamiyán y la vibrante cultura de Kabul.",
      },
      destSaudiArabia: {
        name: "Arabia Saudí",
        description:
          "Vive un viaje espiritual con visitas guiadas a las ciudades santas y a los lugares históricos.",
      },
      destIndia: {
        name: "India",
        description:
          "Visita el icónico Taj Mahal y descubre los majestuosos palacios y fuertes de la Ciudad Rosa.",
      },
      destKurdistan: {
        name: "Kurdistán",
        description:
          "Descubre ciudadelas antiguas, hermosos paisajes de montaña y la cálida hospitalidad de la región kurda.",
      },
      destTurkiye: {
        name: "Turquía",
        description:
          "Una mezcla perfecta de historia, cultura y paisajes únicos. Te esperan globos aerostáticos y una arquitectura impresionante.",
      },

      umrahComingSoon: {
        name: "Muy pronto",
        description:
          "Estamos preparando nuevos paquetes Umrah. ¡Permanece atento a las novedades!",
      },

      visaPakFamily3m: {
        name: "Visado familiar Pakistán (3 meses)",
        description:
          "Visado familiar para una estancia de 3 meses. Tramitación rápida y fiable.",
      },
      visaPakTourist: {
        name: "Visado turístico Pakistán",
        description:
          "Visado turístico para Pakistán. Aprovecha nuestro descuento por tiempo limitado.",
      },
      visaSaudiTourist: {
        name: "Visado turístico Arabia Saudí",
        description:
          "Tramitación sin complicaciones de tu visado turístico para viajar a Arabia Saudí.",
      },
      visaPakFamily1y: {
        name: "Visado familiar Pakistán (1 año)",
        description:
          "Visado familiar de larga duración válido un año. Servicio eficiente.",
      },
      visaKenya: {
        name: "Visado Kenia",
        description:
          "Proceso de solicitud simplificado para viajar a Kenia.",
      },
      visaOthers: {
        name: "Otros bajo petición",
        description:
          "¿Necesitas un visado para otro destino? Contáctanos para un presupuesto personalizado.",
      },

      pkgTanzania: {
        name: "Tanzania",
        description:
          "Templos antiguos, ceremonias del té tradicionales y bellos barrios de geishas.",
      },
      pkgOman: {
        name: "Omán",
        description:
          "Las pirámides de Guiza, el Museo Egipcio y una rica historia faraónica.",
      },
      pkgMalaysia: {
        name: "Malasia",
        description:
          "Palacios imperiales, música clásica y museos de nivel mundial.",
      },
      pkgIndonesia: {
        name: "Indonesia",
        description:
          "Arquitectura de cuento, encanto medieval y una rica cultura bohemia.",
      },
      pkgThailand: {
        name: "Tailandia",
        description:
          "Monumentos históricos, bazares bulliciosos y un patrimonio espiritual diverso.",
      },
      pkgJapan: {
        name: "Japón",
        description:
          "Zocos vibrantes, palacios impresionantes y auténticas tradiciones marroquíes.",
      },
    },
  },

  // =====================================================
  // ARABIC
  // =====================================================
  ar: {
    heroTitle: "تذاكر بأسعار مناسبة ورحلات سلسة",
    heroHighlight: "من الحجز إلى الصعود للطائرة",
    heroSubtitle:
      "استمتع برحلات فاخرة وسلسة مع خدمات التأشيرات الاحترافية وباقات العمرة المميزة والإرشاد الشخصي. يثق بنا أكثر من 10,000 مسافر.",

    ctaTitle: "هل أنت مستعد لبدء رحلتك؟",
    ctaDescription:
      "تواصل معنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكننا تحقيق أحلام سفرك.",
    ctaButton: "اطلب عرض سعر مجاني →",

    bookNow: "احجز الآن",
    learnMore: "اعرف المزيد",

    popularServicesTitle: "أكثر خدماتنا شعبية",
    popularServicesDescription:
      "كل ما تحتاجه لرحلتك القادمة في مكان واحد، من تذاكر الطيران والتأشيرات إلى الباقات السياحية والجولات وشرائح eSIM. اكتشف أشهر خدماتنا اليوم.",

    popular: "الأكثر شعبية",
    destination: "الوجهات",
    umrah: "العمرة",
    visa: "التأشيرات",
    packages: "الباقات",
    esim: "HT Connect – شريحة eSIM عالمية",

    price: "السعر",
    startingFrom: "يبدأ من",
    fromPrice: "من {price}",
    onRequest: "عند الطلب",
    custom: "حسب الطلب",
    stayTuned: "قريباً",
    whatsapp: "تواصل عبر واتساب",
    close: "إغلاق",
    packageAlt: "باقة",

    // BOOKING SEARCH FORM
    bookingForm: {
      labelFrom: "من *",
      labelTo: "إلى *",
      labelDepart: "المغادرة",
      labelReturn: "العودة",
      labelTravellers: "المسافرون والدرجة *",
      labelContact: "الهاتف / البريد الإلكتروني *",

      phLocation: "الدولة أو المدينة أو المطار",
      phDate: "أضف التاريخ",
      phTravellers: "مسافر، الدرجة السياحية",
      phContact: "الهاتف أو البريد الإلكتروني",

      errFrom: "مكان المغادرة مطلوب",
      errTo: "الوجهة مطلوبة",
      errTravellers: "بيانات المسافرين مطلوبة",
      errContactRequired: "رقم الهاتف أو البريد الإلكتروني مطلوب",
      errEmail: "يرجى إدخال بريد إلكتروني صحيح",
      errPhone: "يرجى إدخال رقم هاتف صحيح (7 أرقام على الأقل)",

      submit: "إرسال",
      success:
        "تم إرسال طلبك بنجاح. للحصول على أسعار أسرع ومباشرة، تواصل معنا عبر أيقونة واتساب أو اتصل بنا على +31 (0) 10 485 7673.",
      error: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      incomplete:
        "يرجى تعبئة جميع الحقول المطلوبة برقم هاتف أو بريد إلكتروني صحيح حتى نتمكن من التواصل معك.",

      notSpecified: "غير محدد",
      swap: "تبديل مكان المغادرة والوجهة",
      dateLocale: "ar",
    },

    // CUSTOMER REVIEWS
    testimonials: {
      heading: "ماذا يقول عملاؤنا",
      ratingValue: "4.9",
      reviewsCount: "({count} تقييم)",
      monthAgo: "قبل شهر",
      monthsAgo: "قبل {count} أشهر",
      cta: "قيّمنا على جوجل",

      reviews: {
        zafarBaig:
          "تجربة رائعة مع Hassaan Travel! كان الفريق ودوداً ومحترفاً وجعل عملية الحجز بأكملها سهلة وخالية من التوتر. كان كل شيء منظماً جيداً وكانوا متاحين دائماً للإجابة على أسئلتي. أنصح بخدماتهم بشدة لتجربة سفر سلسة وممتعة!",
        maryamNawaz:
          "خدمة احترافية وسريعة جداً. اشتريت للتو 5 تذاكر طيران بسعر ممتاز مع وزن أمتعة 40 كجم. كان التواصل سريعاً وواضحاً. أنصح بهم بشدة!",
        armghanAli:
          "حظيت بتجربة رائعة مع وكالة Hassaan Travel. كان كل شيء منظماً وخالياً من المتاعب. كان الموظفون ودودين ومتعاونين ومحترفين. تواصل ممتاز وترتيبات سلسة طوال العملية. أنصح بخدمتهم بشدة!",
      },
    },

    // TRIP TYPE DROPDOWN
    tripType: {
      returnLabel: "ذهاب وعودة",
      oneWayLabel: "ذهاب فقط",
      toggleAria: "اختر نوع الرحلة",
    },

    // TOUR CATEGORY FILTER
    tours: {
      categoriesAria: "فئات الجولات",

      categories: {
        popular: "الأكثر شعبية",
        family: "العائلة",
        honeymoon: "شهر العسل",
        summer: "الصيف",
        cultural: "ثقافية",
      },

      items: {
        dubaiAdventure: "مغامرة دبي",
        familyTurkey: "رحلة عائلية إلى تركيا",
        maldivesCouple: "المالديف للأزواج",
        northernAreas: "المناطق الشمالية",
        lahoreHeritage: "جولة تراث لاهور",
      },
    },

    // FIVE-STAR HOTEL EXPERIENCES SECTION
    luxuryStay: {
      titleLine1: "تجارب فندقية",
      titleLine2: "بخمس نجوم",
      imageAlt: "تجربة إقامة فاخرة في فندق خمس نجوم",

      items: {
        premiumHotels: {
          title: "فنادق مميزة حول العالم",
          desc:
            "أقم في فنادق خمس نجوم مختارة بعناية حول العالم، بمواقع متميزة وراحة استثنائية.",
        },
        luxurySuites: {
          title: "أجنحة فاخرة وإقامة مخصصة",
          desc: "استمتع بأجنحة واسعة مع خدمات شخصية لإقامة سلسة.",
        },
        exclusiveDeals: {
          title: "عروض حصرية وأولوية في الحجز",
          desc:
            "احصل على أسعار حصرية وأولوية في الحجز ومرافق مميزة حول العالم.",
        },
      },
    },

    // "WHY HASSAAN TRAVEL" SECTION
    whyTrusted: {
      title: "لماذا تُعد Hassaan Travel شريكك الموثوق",
      intro:
        "نحن أكثر من مجرد وكالة سفر؛ نحن بوابتك إلى تجارب استثنائية. إليك أسباب اختيارنا:",

      featureFlights:
        "مساعدتك في الحصول على أفضل وأرخص الرحلات إلى وجهتك، بخدمة سريعة وشفافة عبر واتساب.",
      featureVisa: "خبرة واسعة في معالجة طلبات التأشيرات للعديد من الدول.",
      featureLanguages: "دعم العملاء بعدة لغات.",
      featureContact: "تواصل معنا اليوم – تعرّف على جميع خدماتنا.",

      cta: "تواصل معنا اليوم",
      imageAlt: "شريكك الموثوق في التأشيرات",
    },

    // TRUST BADGES STRIP
    trustBadges: {
      iata: {
        title: "معتمدون من IATA",
        desc: "وكالة مرخّصة بالكامل",
      },
      support: {
        title: "دعم الطوارئ",
        desc: "متاح على مدار الساعة",
      },
      trusted: {
        title: "ثقة المسافرين",
        desc: "أكثر من 15 عاماً من التميّز",
      },
      premium: {
        title: "خدمة مميزة",
        desc: "عناية شخصية فائقة",
      },
    },

    // Generic <SideIconDesc /> content.
    // Add a key here and pass it to the component as sectionKey / itemKey.
    sideSections: {
      visaSolutions: {
        head: "حلول تأشيرات احترافية",
        details: "إجراءات مبسّطة مع ضمان الموافقة لجميع الوجهات",
      },
      airlinePartners: {
        head: "شركات طيران شريكة موثوقة",
        details:
          "نفخر بالتعاون مع كبرى شركات الطيران العالمية لتقديم أفضل الأسعار وتجربة سفر سلسة.",
      },
    },

    sideIcons: {
      flightBooking: {
        title: "حجز الطيران",
        desc:
          "احجز رحلات بأسعار مناسبة إلى أي وجهة، مع خيارات مرنة للأفراد والعائلات.",
      },
      hotelReservations: {
        title: "حجوزات الفنادق",
        desc: "احجز إقامة مريحة في جميع أنحاء العالم بكل سهولة ويسر.",
      },
      visaProcessing: {
        title: "معالجة التأشيرات",
        desc: "خدمة تأشيرات سريعة وموثوقة تضمن موافقة سلسة للمسافرين.",
      },
      support247: {
        title: "دعم على مدار الساعة",
        desc: "دعم عملاء متواصل على مدار الساعة لتلبية جميع احتياجات سفرك.",
      },
    },

    countries: {
      japan: "اليابان",
      egypt: "مصر",
      austria: "النمسا",
      czechRepublic: "جمهورية التشيك",
      india: "الهند",
      morocco: "المغرب",
    },

    packageItems: {
      pakistan: {
        name: "باكستان",
        description:
          "اكتشف مناظر باكستان الخلابة وتراثها الثقافي الغني ومدنها النابضة بالحياة وتجارب سفر لا تُنسى.",
      },
      pakistanVisa: {
        name: "تأشيرة باكستان",
        description:
          "خدمة سريعة وموثوقة لاستخراج تأشيرة باكستان مع إرشاد متخصص ودعم كامل في تجهيز المستندات.",
      },
      saudiVisa: {
        name: "التأشيرة السعودية",
        description:
          "احصل على تأشيرتك السعودية بإجراءات سلسة ومساعدة احترافية وموافقات في الوقت المناسب.",
      },
      umrahPackage: {
        name: "باقة العمرة",
        description:
          "باقات عمرة متكاملة تشمل التأشيرة والإقامة والمواصلات ودعماً مخصصاً طوال رحلتك.",
      },
      india: {
        name: "الهند",
        description:
          "استكشف ثقافة الهند المتنوعة ومعالمها التاريخية ووجهاتها الروحية وأشهر معالمها السياحية.",
      },
      esimCard: {
        name: "شريحة eSIM",
        description:
          "ابقَ متصلاً في جميع أنحاء العالم مع باقات eSIM بأسعار مناسبة وتفعيل فوري وبيانات متنقلة سلسة.",
      },

      destPakistan: {
        name: "باكستان",
        description:
          "استكشف جمال وادي هونزا وسكاردو وقمم سلسلة جبال قراقرم المهيبة.",
      },
      destAfghanistan: {
        name: "أفغانستان",
        description:
          "اكتشف الثراء التاريخي لوادي باميان والثقافة النابضة بالحياة في كابول.",
      },
      destSaudiArabia: {
        name: "المملكة العربية السعودية",
        description:
          "عِش رحلة روحانية مع جولات مصحوبة بمرشدين إلى المدن المقدسة والمعالم التاريخية.",
      },
      destIndia: {
        name: "الهند",
        description:
          "زر تاج محل الشهير واستكشف القصور والقلاع المهيبة في المدينة الوردية.",
      },
      destKurdistan: {
        name: "كردستان",
        description:
          "اكتشف القلاع القديمة والمناظر الجبلية الخلابة وكرم الضيافة في إقليم كردستان.",
      },
      destTurkiye: {
        name: "تركيا",
        description:
          "مزيج مثالي من التاريخ والثقافة والطبيعة الفريدة. مناطيد الهواء الساخن والعمارة المذهلة في انتظارك.",
      },

      umrahComingSoon: {
        name: "قريباً",
        description:
          "نعمل حالياً على باقات عمرة جديدة ومميزة. ترقبوا التحديثات!",
      },

      visaPakFamily3m: {
        name: "تأشيرة عائلية لباكستان (3 أشهر)",
        description:
          "تأشيرة عائلية للإقامة لمدة 3 أشهر. إجراءات سريعة وموثوقة.",
      },
      visaPakTourist: {
        name: "تأشيرة سياحية لباكستان",
        description:
          "تأشيرة سياحية إلى باكستان. استفد من خصمنا لفترة محدودة.",
      },
      visaSaudiTourist: {
        name: "تأشيرة سياحية للسعودية",
        description:
          "إجراءات سهلة لاستخراج التأشيرة السياحية لرحلتك إلى المملكة العربية السعودية.",
      },
      visaPakFamily1y: {
        name: "تأشيرة عائلية لباكستان (سنة واحدة)",
        description:
          "تأشيرة عائلية طويلة الأمد لمدة سنة كاملة. خدمة سريعة وفعالة.",
      },
      visaKenya: {
        name: "تأشيرة كينيا",
        description:
          "إجراءات مبسطة لتقديم طلب التأشيرة للسفر إلى كينيا.",
      },
      visaOthers: {
        name: "وجهات أخرى عند الطلب",
        description:
          "هل تحتاج تأشيرة لوجهة أخرى؟ تواصل معنا للحصول على عرض سعر خاص.",
      },

      pkgTanzania: {
        name: "تنزانيا",
        description: "معابد قديمة ومراسم شاي تقليدية وأحياء غيشا رائعة.",
      },
      pkgOman: {
        name: "عُمان",
        description: "أهرامات الجيزة والمتحف المصري وتاريخ فرعوني عريق.",
      },
      pkgMalaysia: {
        name: "ماليزيا",
        description: "قصور إمبراطورية وموسيقى كلاسيكية ومتاحف عالمية المستوى.",
      },
      pkgIndonesia: {
        name: "إندونيسيا",
        description:
          "عمارة أشبه بالحكايات وسحر العصور الوسطى وثقافة بوهيمية غنية.",
      },
      pkgThailand: {
        name: "تايلاند",
        description: "معالم تاريخية وأسواق نابضة بالحياة وتراث روحي متنوع.",
      },
      pkgJapan: {
        name: "اليابان",
        description: "أسواق شعبية نابضة وقصور مذهلة وتقاليد مغربية أصيلة.",
      },
    },
  },

  // =====================================================
  // URDU
  // =====================================================
  ur: {
    heroTitle: "سستے ٹکٹس، آرام دہ سفر",
    heroHighlight: "بکنگ سے بورڈنگ تک",
    heroSubtitle:
      "ماہر ویزا سروسز، خصوصی عمرہ پیکیجز اور ذاتی رہنمائی کے ساتھ بہترین سفری تجربہ حاصل کریں۔ 10,000 سے زائد مسافر ہم پر اعتماد کرتے ہیں۔",

    ctaTitle: "اپنا سفر شروع کرنے کے لیے تیار ہیں؟",
    ctaDescription:
      "آج ہی ہم سے رابطہ کریں اور مفت مشاورت حاصل کریں تاکہ ہم آپ کے سفری خوابوں کو حقیقت بنا سکیں۔",
    ctaButton: "مفت کوٹیشن حاصل کریں →",

    bookNow: "ابھی بک کریں",
    learnMore: "مزید جانیں",

    popularServicesTitle: "ہماری سب سے مقبول سروسز",
    popularServicesDescription:
      "آپ کے اگلے سفر کے لیے درکار ہر چیز ایک ہی جگہ — فلائٹس اور ویزا سے لے کر ٹریول پیکجز، ٹورز اور eSIM تک۔ آج ہی ہماری مقبول ترین سروسز دریافت کریں۔",

    popular: "مقبول",
    destination: "منازل",
    umrah: "عمرہ",
    visa: "ویزا",
    packages: "پیکجز",
    esim: "HT Connect – گلوبل eSIM",

    price: "قیمت",
    startingFrom: "شروع قیمت",
    fromPrice: "{price} سے",
    onRequest: "درخواست پر",
    custom: "حسبِ ضرورت",
    stayTuned: "جلد آ رہا ہے",
    whatsapp: "واٹس ایپ پر رابطہ کریں",
    close: "بند کریں",
    packageAlt: "پیکج",

    // BOOKING SEARCH FORM
    bookingForm: {
      labelFrom: "کہاں سے *",
      labelTo: "کہاں تک *",
      labelDepart: "روانگی",
      labelReturn: "واپسی",
      labelTravellers: "مسافر اور کلاس *",
      labelContact: "فون / ای میل *",

      phLocation: "ملک، شہر یا ایئرپورٹ",
      phDate: "تاریخ شامل کریں",
      phTravellers: "مسافر، اکانومی",
      phContact: "فون یا ای میل",

      errFrom: "روانگی کی جگہ درکار ہے",
      errTo: "منزل درکار ہے",
      errTravellers: "مسافروں کی معلومات درکار ہیں",
      errContactRequired: "فون نمبر یا ای میل درکار ہے",
      errEmail: "درست ای میل ایڈریس درج کریں",
      errPhone: "درست فون نمبر درج کریں (کم از کم 7 ہندسے)",

      submit: "بھیجیں",
      success:
        "آپ کی درخواست کامیابی سے بھیج دی گئی ہے۔ فوری اور براہِ راست قیمتوں کے لیے واٹس ایپ آئیکن کے ذریعے رابطہ کریں یا ہمیں +31 (0) 10 485 7673 پر کال کریں۔",
      error: "کچھ غلط ہو گیا۔ براہ کرم دوبارہ کوشش کریں۔",
      incomplete:
        "براہ کرم تمام لازمی خانے درست فون نمبر یا ای میل کے ساتھ پُر کریں تاکہ ہم آپ سے رابطہ کر سکیں۔",

      notSpecified: "متعین نہیں",
      swap: "روانگی اور منزل تبدیل کریں",
      dateLocale: "ur-PK",
    },

    // CUSTOMER REVIEWS
    testimonials: {
      heading: "ہمارے گاہک کیا کہتے ہیں",
      ratingValue: "4.9",
      reviewsCount: "({count} ریویوز)",
      monthAgo: "ایک ماہ پہلے",
      monthsAgo: "{count} ماہ پہلے",
      cta: "گوگل پر ہمیں ریویو دیں",

      reviews: {
        zafarBaig:
          "Hassaan Travel کے ساتھ بہترین تجربہ رہا! عملہ خوش اخلاق اور پیشہ ور تھا اور پوری بکنگ کا عمل آسان اور بےفکر بنا دیا۔ سب کچھ بہترین انداز میں منظم تھا اور وہ ہر سوال کے جواب کے لیے ہمیشہ دستیاب رہے۔ پُرسکون اور خوشگوار سفر کے لیے ان کی خدمات کی بھرپور سفارش کرتا ہوں!",
        maryamNawaz:
          "بہت پیشہ ورانہ اور تیز سروس۔ میں نے ابھی 40 کلو سامان کی اجازت کے ساتھ 5 ٹکٹ نہایت مناسب قیمت پر خریدے۔ ان کی بات چیت تیز اور واضح تھی۔ بھرپور سفارش!",
        armghanAli:
          "Hassaan Travel کے ساتھ میرا تجربہ شاندار رہا۔ سب کچھ منظم اور بےفکر تھا۔ عملہ خوش اخلاق، مددگار اور پیشہ ور تھا۔ شروع سے آخر تک رابطہ بہترین اور انتظامات ہموار رہے۔ ان کی سروس کی بھرپور سفارش کرتا ہوں!",
      },
    },

    // TRIP TYPE DROPDOWN
    tripType: {
      returnLabel: "آمد و رفت",
      oneWayLabel: "یک طرفہ",
      toggleAria: "سفر کی قسم منتخب کریں",
    },

    // TOUR CATEGORY FILTER
    tours: {
      categoriesAria: "ٹور کیٹیگریز",

      categories: {
        popular: "مقبول",
        family: "فیملی",
        honeymoon: "ہنی مون",
        summer: "گرمیوں",
        cultural: "ثقافتی",
      },

      items: {
        dubaiAdventure: "دبئی ایڈونچر",
        familyTurkey: "ترکی فیملی ٹرپ",
        maldivesCouple: "مالدیپ کپل ٹور",
        northernAreas: "شمالی علاقہ جات",
        lahoreHeritage: "لاہور ہیریٹیج ٹور",
      },
    },

    // FIVE-STAR HOTEL EXPERIENCES SECTION
    luxuryStay: {
      titleLine1: "فائیو اسٹار ہوٹل",
      titleLine2: "کے تجربات",
      imageAlt: "فائیو اسٹار ہوٹل کا پُرتعیش تجربہ",

      items: {
        premiumHotels: {
          title: "دنیا بھر میں پریمیم ہوٹل",
          desc:
            "دنیا بھر میں منتخب 5 اسٹار ہوٹلوں میں قیام کریں، بہترین مقامات اور غیر معمولی آرام کے ساتھ۔",
        },
        luxurySuites: {
          title: "لگژری سوئٹس اور ذاتی نوعیت کا قیام",
          desc: "کشادہ سوئٹس اور ذاتی خدمات کے ساتھ بےفکر قیام سے لطف اٹھائیں۔",
        },
        exclusiveDeals: {
          title: "خصوصی آفرز اور بکنگ میں ترجیح",
          desc:
            "دنیا بھر میں خصوصی نرخ، بکنگ میں ترجیح اور پریمیم سہولیات حاصل کریں۔",
        },
      },
    },

    // "WHY HASSAAN TRAVEL" SECTION
    whyTrusted: {
      title: "Hassaan Travel آپ کا قابلِ اعتماد پارٹنر کیوں ہے",
      intro:
        "ہم صرف ایک ٹریول ایجنسی نہیں؛ ہم آپ کے غیر معمولی سفری تجربات کا ذریعہ ہیں۔ ہمیں منتخب کرنے کی وجوہات:",

      featureFlights:
        "آپ کی منزل کے لیے بہترین اور سستی پروازیں حاصل کرنے میں معاونت۔ واٹس ایپ پر تیز اور شفاف سروس۔",
      featureVisa: "متعدد ممالک کی ویزا درخواستیں سنبھالنے کا وسیع تجربہ۔",
      featureLanguages: "کئی زبانوں میں کسٹمر سپورٹ۔",
      featureContact: "آج ہی رابطہ کریں – ہماری تمام سروسز دیکھیں۔",

      cta: "آج ہی رابطہ کریں",
      imageAlt: "آپ کا قابلِ اعتماد ویزا پارٹنر",
    },

    // TRUST BADGES STRIP
    trustBadges: {
      iata: {
        title: "IATA سے تصدیق شدہ",
        desc: "مکمل مجاز ایجنسی",
      },
      support: {
        title: "ہنگامی معاونت",
        desc: "24/7 دستیاب",
      },
      trusted: {
        title: "مسافروں کا اعتماد",
        desc: "15+ سال کا تجربہ",
      },
      premium: {
        title: "پریمیم سروس",
        desc: "ذاتی توجہ",
      },
    },

    // Generic <SideIconDesc /> content.
    // Add a key here and pass it to the component as sectionKey / itemKey.
    sideSections: {
      visaSolutions: {
        head: "ماہرانہ ویزا حل",
        details: "تمام منازل کے لیے آسان کارروائی اور یقینی منظوری",
      },
      airlinePartners: {
        head: "قابلِ اعتماد ایئرلائن پارٹنرز",
        details:
          "ہم دنیا کی معروف بین الاقوامی ایئرلائنز کے ساتھ مل کر بہترین کرائے اور آسان سفری تجربہ فراہم کرتے ہیں۔",
      },
    },

    sideIcons: {
      flightBooking: {
        title: "فلائٹ بکنگ",
        desc:
          "ہر منزل کے لیے سستی پروازیں بُک کریں — انفرادی مسافروں اور خاندانوں کے لیے لچکدار آپشنز کے ساتھ۔",
      },
      hotelReservations: {
        title: "ہوٹل بکنگ",
        desc: "دنیا بھر میں آرام دہ رہائش آسانی اور سہولت کے ساتھ بُک کریں۔",
      },
      visaProcessing: {
        title: "ویزا پروسیسنگ",
        desc:
          "تیز اور قابلِ اعتماد ویزا سروس جو مسافروں کے لیے آسان منظوری یقینی بناتی ہے۔",
      },
      support247: {
        title: "24/7 معاونت",
        desc: "آپ کی تمام سفری ضروریات کے لیے چوبیس گھنٹے کسٹمر سپورٹ۔",
      },
    },

    countries: {
      japan: "جاپان",
      egypt: "مصر",
      austria: "آسٹریا",
      czechRepublic: "جمہوریہ چیک",
      india: "انڈیا",
      morocco: "مراکش",
    },

    packageItems: {
      pakistan: {
        name: "پاکستان",
        description:
          "پاکستان کے حسین مناظر، بھرپور ثقافتی ورثہ، پُررونق شہر اور ناقابلِ فراموش سفری تجربات دریافت کریں۔",
      },
      pakistanVisa: {
        name: "پاکستان ویزا",
        description:
          "پاکستان ویزا کی تیز اور قابلِ اعتماد سروس، ماہرانہ رہنمائی اور آسان دستاویزی معاونت کے ساتھ۔",
      },
      saudiVisa: {
        name: "سعودی ویزا",
        description:
          "آسان درخواستی عمل، پیشہ ورانہ معاونت اور بروقت منظوری کے ساتھ اپنا سعودی ویزا حاصل کریں۔",
      },
      umrahPackage: {
        name: "عمرہ پیکیج",
        description:
          "مکمل عمرہ پیکیجز جن میں ویزا، رہائش، ٹرانسپورٹ اور پورے سفر کے دوران بھرپور معاونت شامل ہے۔",
      },
      india: {
        name: "انڈیا",
        description:
          "انڈیا کی متنوع ثقافت، تاریخی مقامات، روحانی منازل اور عالمی شہرت یافتہ مقامات دریافت کریں۔",
      },
      esimCard: {
        name: "ای سم",
        description:
          "سستے eSIM پلانز کے ساتھ دنیا بھر میں جڑے رہیں — فوری ایکٹیویشن اور بلا رکاوٹ موبائل ڈیٹا۔",
      },

      destPakistan: {
        name: "پاکستان",
        description:
          "وادیٔ ہنزہ، سکردو اور قراقرم کی بلند و بالا چوٹیوں کے دلکش حسن سے لطف اٹھائیں۔",
      },
      destAfghanistan: {
        name: "افغانستان",
        description:
          "وادیٔ بامیان کی تاریخی عظمت اور کابل کی پُررونق ثقافت دریافت کریں۔",
      },
      destSaudiArabia: {
        name: "سعودی عرب",
        description:
          "مقدس شہروں اور تاریخی مقامات کے رہنمائی شدہ دوروں کے ساتھ روحانی سفر کا تجربہ کریں۔",
      },
      destIndia: {
        name: "انڈیا",
        description:
          "مشہور تاج محل دیکھیں اور پنک سٹی کے شاندار محلات اور قلعے دریافت کریں۔",
      },
      destKurdistan: {
        name: "کردستان",
        description:
          "قدیم قلعے، خوبصورت پہاڑی مناظر اور کرد علاقے کی پُرخلوص مہمان نوازی دریافت کریں۔",
      },
      destTurkiye: {
        name: "ترکیہ",
        description:
          "تاریخ، ثقافت اور منفرد مناظر کا بہترین امتزاج۔ ہوائی غبارے اور شاندار طرزِ تعمیر آپ کے منتظر ہیں۔",
      },

      umrahComingSoon: {
        name: "جلد آ رہا ہے",
        description:
          "ہم نئے بہترین عمرہ پیکیجز پر کام کر رہے ہیں۔ اپڈیٹس کے لیے منتظر رہیں!",
      },

      visaPakFamily3m: {
        name: "پاکستان فیملی ویزا (3 ماہ)",
        description:
          "تین ماہ کے قیام کے لیے فیملی ویزا سروس۔ تیز اور قابلِ اعتماد کارروائی۔",
      },
      visaPakTourist: {
        name: "پاکستان ٹورسٹ ویزا",
        description:
          "پاکستان کے لیے ٹورسٹ ویزا۔ ہماری محدود مدت کی خصوصی رعایت سے فائدہ اٹھائیں۔",
      },
      visaSaudiTourist: {
        name: "سعودی عرب ٹورسٹ ویزا",
        description:
          "سعودی عرب کے سفر کے لیے آسان اور بےفکر ٹورسٹ ویزا سروس۔",
      },
      visaPakFamily1y: {
        name: "پاکستان فیملی ویزا (1 سال)",
        description:
          "ایک سال کی مدت کے لیے طویل المدتی فیملی ویزا۔ مؤثر اور بروقت سروس۔",
      },
      visaKenya: {
        name: "کینیا ویزا",
        description: "کینیا کے سفر کے لیے آسان ویزا درخواستی عمل۔",
      },
      visaOthers: {
        name: "دیگر — درخواست پر",
        description:
          "کسی اور ملک کا ویزا درکار ہے؟ ذاتی کوٹیشن کے لیے ہم سے رابطہ کریں۔",
      },

      pkgTanzania: {
        name: "تنزانیہ",
        description: "قدیم مندر، روایتی چائے کی تقریبات اور خوبصورت گیشا محلے۔",
      },
      pkgOman: {
        name: "عمان",
        description: "اہرامِ جیزہ، مصری میوزیم اور فرعونی تاریخ کا بھرپور ورثہ۔",
      },
      pkgMalaysia: {
        name: "ملائیشیا",
        description: "شاہی محلات، کلاسیکی موسیقی اور عالمی معیار کے عجائب گھر۔",
      },
      pkgIndonesia: {
        name: "انڈونیشیا",
        description:
          "خوابناک طرزِ تعمیر، قرونِ وسطیٰ کا سحر اور بھرپور بوہیمین ثقافت۔",
      },
      pkgThailand: {
        name: "تھائی لینڈ",
        description: "تاریخی یادگاریں، پُررونق بازار اور متنوع روحانی ورثہ۔",
      },
      pkgJapan: {
        name: "جاپان",
        description: "پُررونق بازار، شاندار محلات اور اصل مراکشی روایات۔",
      },
    },
  },
};

// =======================================================
// LOCALE LOOKUP
// The components read homepageTranslations[language] directly, so regional
// codes ("nl-NL", "nl_BE", "NL") must resolve to the same object as "nl".
// Without these aliases such a code silently falls back to English.
// =======================================================

const LOCALE_ALIASES: Record<LanguageCode, string[]> = {
  en: ["en-US", "en-GB", "en-AU", "en-CA", "en-IN", "en-NL"],
  nl: ["nl-NL", "nl-BE", "nl-AW", "nl-SR", "dut", "nld", "dutch"],
  de: ["de-DE", "de-AT", "de-CH", "de-LU", "ger", "deu"],
  fr: ["fr-FR", "fr-BE", "fr-CA", "fr-CH", "fr-LU", "fra"],
  it: ["it-IT", "it-CH", "ita"],
  es: ["es-ES", "es-MX", "es-AR", "es-CO", "es-419", "spa"],
  ar: [
    "ar-SA",
    "ar-AE",
    "ar-EG",
    "ar-MA",
    "ar-QA",
    "ar-KW",
    "ar-BH",
    "ar-OM",
    "ar-JO",
    "ar-LB",
    "ara",
  ],
  ur: ["ur-PK", "ur-IN", "urd"],
};

const buildLocaleLookup = (): Record<string, HomepageTranslation> => {
  const lookup: Record<string, HomepageTranslation> = {};

  (Object.keys(baseHomepageTranslations) as LanguageCode[]).forEach((code) => {
    const value = baseHomepageTranslations[code];

    [code, ...LOCALE_ALIASES[code]].forEach((variant) => {
      const underscored = variant.replace(/-/g, "_");

      [variant, underscored].forEach((form) => {
        lookup[form] = value;
        lookup[form.toLowerCase()] = value;
        lookup[form.toUpperCase()] = value;
      });
    });
  });

  return lookup;
};

export const homepageTranslations: Record<LanguageCode, HomepageTranslation> &
  Record<string, HomepageTranslation> = {
  ...buildLocaleLookup(),
  ...baseHomepageTranslations,
};

// =======================================================
// HELPERS
// =======================================================

export const getHomepageTranslation = (
  language: string | undefined
): HomepageTranslation => {
  if (!language) return baseHomepageTranslations.en;

  const direct = homepageTranslations[language];
  if (direct) return direct;

  // "nl-NL-x-something" / "nl_BE" / unknown region -> "nl"
  const short = language.toLowerCase().split(/[-_]/)[0] as LanguageCode;

  return baseHomepageTranslations[short] || baseHomepageTranslations.en;
};

/**
 * Formats a price with the language-correct "from" wording.
 * Example: en -> "From € 685", ur -> "€ 685 سے"
 */
export const formatFromPrice = (
  t: HomepageTranslation,
  price: string
): string => t.fromPrice.replace("{price}", price);

// =======================================================
// LEGACY EXPORT (kept for backwards compatibility)
// packageTranslations[lang][packageKey] -> { name, description }
// English display names are also kept as aliases so older
// lookups such as packageTranslations.en["Pakistan Visa"] keep working.
// =======================================================

const legacyNameAliases: Record<string, PackageKey> = {
  Pakistan: "pakistan",
  "Pakistan Visa": "pakistanVisa",
  "Saudi Visa": "saudiVisa",
  "Umrah Package": "umrahPackage",
  India: "india",
  "E-Sim": "esimCard",
};

export const packageTranslations = Object.fromEntries(
  (Object.keys(baseHomepageTranslations) as LanguageCode[]).map((lang) => {
    const items = baseHomepageTranslations[lang].packageItems;

    const aliased = Object.fromEntries(
      Object.entries(legacyNameAliases).map(([displayName, key]) => [
        displayName,
        items[key],
      ])
    );

    return [lang, { ...items, ...aliased }];
  })
) as unknown as Record<LanguageCode, Record<string, PackageContent>>;
