// =======================================================
// VISA PAGE TRANSLATIONS
// Used by app/visa/page.tsx and components/layout/visas/Services.tsx
// Languages: en | nl | de | fr | it | es | ar | ur
// "\n" in headings is kept on purpose: CommonHeader uses whitespace-pre-line.
// =======================================================

import { createTranslator } from "@/lib/createTranslator";

export type VisaServiceKey = "saudi" | "pakistan" | "other";

const en = {
  header: {
    heading:
      "Affordable Visa Services for Travelers in the \nNetherlands and neighbouring countries",
    description:
      "Get your KSA, Pakistani and many other visas quickly and easily with Hassaan Travel.",
  },

  services: {
    heading: "Our Services",
    items: {
      saudi: {
        title: "Saudi Visa Services",
        desc: "Expert guidance for Saudi visit, business, and family visas with a streamlined, hassle-free application process.",
        imageAlt: "Mount Arafat crowd pilgrimage during Hajj",
        button: "Apply for Saudi Visa",
      },
      pakistan: {
        title: "Pakistani Visa Services",
        desc: "Fast and reliable processing for E-visas, tourist visas, and business entry requirements for Pakistan.",
        imageAlt: "Beautiful lake and mountains landscape in Pakistan",
        button: "Get Pakistani Visa",
      },
      other: {
        title: "Other Visa Services",
        desc: "Professional assistance for UAE, Umrah, and other global destinations tailored to your travel needs.",
        imageAlt: "Global travel destinations and visa documentation",
        button: "Explore More Visas",
      },
    },
  },

  cta: {
    heading: "Ready to Apply for Your Visa?",
    description:
      "Our travel experts are ready to guide you through the visa process quickly and smoothly. Contact us now for instant support.",
    callButton: "Call Now",
    bookButton: "Book Now",
  },
} as const;

export const getVisaTranslation = createTranslator(en, {
  // =====================================================
  // DUTCH
  // =====================================================
  nl: {
    header: {
      heading:
        "Voordelige visumdiensten voor reizigers in \nNederland en de omliggende landen",
      description:
        "Vraag uw visum voor Saoedi-Arabië, Pakistan en vele andere landen snel en eenvoudig aan bij Hassaan Travel.",
    },
    services: {
      heading: "Onze diensten",
      items: {
        saudi: {
          title: "Visumdiensten Saoedi-Arabië",
          desc: "Deskundige begeleiding bij Saoedische bezoek-, zakelijke en familievisa, met een soepel en zorgeloos aanvraagproces.",
          imageAlt: "Pelgrims bij de berg Arafat tijdens de Hadj",
          button: "Vraag een Saoedisch visum aan",
        },
        pakistan: {
          title: "Visumdiensten Pakistan",
          desc: "Snelle en betrouwbare afhandeling van e-visa, toeristenvisa en zakelijke inreisvereisten voor Pakistan.",
          imageAlt: "Prachtig meer- en berglandschap in Pakistan",
          button: "Vraag een Pakistaans visum aan",
        },
        other: {
          title: "Overige visumdiensten",
          desc: "Professionele hulp bij visa voor de VAE, Umrah en andere bestemmingen wereldwijd, afgestemd op uw reisbehoeften.",
          imageAlt: "Reisbestemmingen wereldwijd en visumdocumenten",
          button: "Bekijk meer visa",
        },
      },
    },
    cta: {
      heading: "Klaar om uw visum aan te vragen?",
      description:
        "Onze reisexperts begeleiden u snel en soepel door het visumproces. Neem nu contact op voor directe ondersteuning.",
      callButton: "Bel nu",
      bookButton: "Boek nu",
    },
  },

  // =====================================================
  // GERMAN
  // =====================================================
  de: {
    header: {
      heading:
        "Günstige Visa-Services für Reisende in den \nNiederlanden und den Nachbarländern",
      description:
        "Erhalten Sie Ihr Visum für Saudi-Arabien, Pakistan und viele weitere Länder schnell und einfach mit Hassaan Travel.",
    },
    services: {
      heading: "Unsere Leistungen",
      items: {
        saudi: {
          title: "Visa-Services für Saudi-Arabien",
          desc: "Fachkundige Beratung für saudische Besuchs-, Geschäfts- und Familienvisa mit einem reibungslosen, unkomplizierten Antragsverfahren.",
          imageAlt: "Pilger am Berg Arafat während des Hadsch",
          button: "Saudi-Visum beantragen",
        },
        pakistan: {
          title: "Visa-Services für Pakistan",
          desc: "Schnelle und zuverlässige Bearbeitung von E-Visa, Touristenvisa und geschäftlichen Einreisebestimmungen für Pakistan.",
          imageAlt: "Wunderschöne See- und Berglandschaft in Pakistan",
          button: "Pakistan-Visum beantragen",
        },
        other: {
          title: "Weitere Visa-Services",
          desc: "Professionelle Unterstützung für die VAE, Umrah und weitere Reiseziele weltweit – ganz nach Ihren Reisebedürfnissen.",
          imageAlt: "Reiseziele weltweit und Visumunterlagen",
          button: "Weitere Visa entdecken",
        },
      },
    },
    cta: {
      heading: "Bereit, Ihr Visum zu beantragen?",
      description:
        "Unsere Reiseexperten begleiten Sie schnell und reibungslos durch das Visumverfahren. Kontaktieren Sie uns jetzt für sofortige Unterstützung.",
      callButton: "Jetzt anrufen",
      bookButton: "Jetzt buchen",
    },
  },

  // =====================================================
  // FRENCH
  // =====================================================
  fr: {
    header: {
      heading:
        "Services de visa abordables pour les voyageurs \naux Pays-Bas et dans les pays voisins",
      description:
        "Obtenez rapidement et facilement votre visa pour l'Arabie saoudite, le Pakistan et de nombreux autres pays avec Hassaan Travel.",
    },
    services: {
      heading: "Nos services",
      items: {
        saudi: {
          title: "Services de visa pour l'Arabie saoudite",
          desc: "Un accompagnement expert pour les visas saoudiens de visite, d'affaires et familiaux, avec une procédure simple et sans tracas.",
          imageAlt: "Pèlerins au mont Arafat pendant le Hajj",
          button: "Demander un visa saoudien",
        },
        pakistan: {
          title: "Services de visa pour le Pakistan",
          desc: "Traitement rapide et fiable des e-visas, visas touristiques et formalités d'entrée professionnelles pour le Pakistan.",
          imageAlt: "Magnifique paysage de lac et de montagnes au Pakistan",
          button: "Obtenir un visa pakistanais",
        },
        other: {
          title: "Autres services de visa",
          desc: "Une assistance professionnelle pour les Émirats arabes unis, l'Omra et d'autres destinations dans le monde, adaptée à vos besoins.",
          imageAlt: "Destinations de voyage dans le monde et documents de visa",
          button: "Découvrir d'autres visas",
        },
      },
    },
    cta: {
      heading: "Prêt à demander votre visa ?",
      description:
        "Nos experts vous accompagnent rapidement et sereinement tout au long de la procédure de visa. Contactez-nous dès maintenant pour une assistance immédiate.",
      callButton: "Appelez maintenant",
      bookButton: "Réserver",
    },
  },

  // =====================================================
  // ITALIAN
  // =====================================================
  it: {
    header: {
      heading:
        "Servizi visti convenienti per i viaggiatori \nnei Paesi Bassi e nei paesi limitrofi",
      description:
        "Ottieni in modo rapido e semplice il visto per l'Arabia Saudita, il Pakistan e molti altri paesi con Hassaan Travel.",
    },
    services: {
      heading: "I nostri servizi",
      items: {
        saudi: {
          title: "Servizi visti per l'Arabia Saudita",
          desc: "Assistenza esperta per visti sauditi di visita, d'affari e familiari, con una procedura semplice e senza pensieri.",
          imageAlt: "Pellegrini sul monte Arafat durante l'Hajj",
          button: "Richiedi il visto saudita",
        },
        pakistan: {
          title: "Servizi visti per il Pakistan",
          desc: "Gestione rapida e affidabile di e-visa, visti turistici e requisiti d'ingresso per affari in Pakistan.",
          imageAlt: "Splendido paesaggio di lago e montagne in Pakistan",
          button: "Ottieni il visto pakistano",
        },
        other: {
          title: "Altri servizi visti",
          desc: "Assistenza professionale per Emirati Arabi Uniti, Umrah e altre destinazioni nel mondo, su misura per le tue esigenze di viaggio.",
          imageAlt: "Destinazioni di viaggio nel mondo e documenti per il visto",
          button: "Scopri altri visti",
        },
      },
    },
    cta: {
      heading: "Pronto a richiedere il tuo visto?",
      description:
        "I nostri esperti di viaggio ti guideranno nella procedura del visto in modo rapido e semplice. Contattaci ora per assistenza immediata.",
      callButton: "Chiama ora",
      bookButton: "Prenota ora",
    },
  },

  // =====================================================
  // SPANISH
  // =====================================================
  es: {
    header: {
      heading:
        "Servicios de visado asequibles para viajeros \nen los Países Bajos y países vecinos",
      description:
        "Consigue tu visado para Arabia Saudí, Pakistán y muchos otros países de forma rápida y sencilla con Hassaan Travel.",
    },
    services: {
      heading: "Nuestros servicios",
      items: {
        saudi: {
          title: "Servicios de visado para Arabia Saudí",
          desc: "Asesoramiento experto para visados saudíes de visita, negocios y familiares, con un proceso de solicitud ágil y sin complicaciones.",
          imageAlt: "Peregrinos en el monte Arafat durante el Hajj",
          button: "Solicitar visado saudí",
        },
        pakistan: {
          title: "Servicios de visado para Pakistán",
          desc: "Tramitación rápida y fiable de visados electrónicos, visados de turista y requisitos de entrada por negocios para Pakistán.",
          imageAlt: "Precioso paisaje de lago y montañas en Pakistán",
          button: "Obtener visado pakistaní",
        },
        other: {
          title: "Otros servicios de visado",
          desc: "Asistencia profesional para los Emiratos Árabes Unidos, la Umrah y otros destinos del mundo, adaptada a tus necesidades de viaje.",
          imageAlt: "Destinos de viaje en todo el mundo y documentación de visado",
          button: "Ver más visados",
        },
      },
    },
    cta: {
      heading: "¿Listo para solicitar tu visado?",
      description:
        "Nuestros expertos en viajes te guiarán por el proceso de visado de forma rápida y sencilla. Contáctanos ahora para recibir ayuda inmediata.",
      callButton: "Llamar ahora",
      bookButton: "Reservar ahora",
    },
  },

  // =====================================================
  // ARABIC
  // =====================================================
  ar: {
    header: {
      heading:
        "خدمات تأشيرات بأسعار مناسبة للمسافرين \nفي هولندا والدول المجاورة",
      description:
        "احصل على تأشيرة السعودية وباكستان والعديد من الدول الأخرى بسرعة وسهولة مع Hassaan Travel.",
    },
    services: {
      heading: "خدماتنا",
      items: {
        saudi: {
          title: "خدمات التأشيرة السعودية",
          desc: "إرشاد متخصص لتأشيرات الزيارة والأعمال والتأشيرات العائلية السعودية، بإجراءات تقديم مبسطة وخالية من المتاعب.",
          imageAlt: "حجاج على جبل عرفات خلال موسم الحج",
          button: "قدّم على التأشيرة السعودية",
        },
        pakistan: {
          title: "خدمات تأشيرة باكستان",
          desc: "معالجة سريعة وموثوقة للتأشيرات الإلكترونية والسياحية ومتطلبات دخول رجال الأعمال إلى باكستان.",
          imageAlt: "منظر خلاب لبحيرة وجبال في باكستان",
          button: "احصل على تأشيرة باكستان",
        },
        other: {
          title: "خدمات تأشيرات أخرى",
          desc: "مساعدة احترافية لتأشيرات الإمارات والعمرة ووجهات عالمية أخرى بما يناسب احتياجات سفرك.",
          imageAlt: "وجهات سفر عالمية ومستندات التأشيرة",
          button: "استكشف المزيد من التأشيرات",
        },
      },
    },
    cta: {
      heading: "هل أنت مستعد للتقديم على تأشيرتك؟",
      description:
        "خبراؤنا جاهزون لإرشادك خلال إجراءات التأشيرة بسرعة وسهولة. تواصل معنا الآن للحصول على دعم فوري.",
      callButton: "اتصل الآن",
      bookButton: "احجز الآن",
    },
  },

  // =====================================================
  // URDU
  // =====================================================
  ur: {
    header: {
      heading:
        "نیدرلینڈز اور ہمسایہ ممالک کے مسافروں کے لیے \nسستی ویزا سروسز",
      description:
        "Hassaan Travel کے ساتھ سعودی عرب، پاکستان اور دیگر کئی ممالک کا ویزا جلد اور آسانی سے حاصل کریں۔",
    },
    services: {
      heading: "ہماری سروسز",
      items: {
        saudi: {
          title: "سعودی ویزا سروسز",
          desc: "سعودی وزٹ، بزنس اور فیملی ویزا کے لیے ماہرانہ رہنمائی، آسان اور بےفکر درخواستی عمل کے ساتھ۔",
          imageAlt: "حج کے دوران میدانِ عرفات میں حجاج",
          button: "سعودی ویزا کے لیے درخواست دیں",
        },
        pakistan: {
          title: "پاکستان ویزا سروسز",
          desc: "پاکستان کے لیے ای ویزا، ٹورسٹ ویزا اور بزنس انٹری کی تیز اور قابلِ اعتماد پروسیسنگ۔",
          imageAlt: "پاکستان میں جھیل اور پہاڑوں کا خوبصورت منظر",
          button: "پاکستانی ویزا حاصل کریں",
        },
        other: {
          title: "دیگر ویزا سروسز",
          desc: "متحدہ عرب امارات، عمرہ اور دنیا کی دیگر منازل کے لیے آپ کی ضرورت کے مطابق پیشہ ورانہ معاونت۔",
          imageAlt: "دنیا بھر کی سفری منازل اور ویزا دستاویزات",
          button: "مزید ویزے دیکھیں",
        },
      },
    },
    cta: {
      heading: "اپنے ویزا کے لیے درخواست دینے کو تیار ہیں؟",
      description:
        "ہمارے سفری ماہرین ویزا کے عمل میں تیزی اور آسانی سے آپ کی رہنمائی کے لیے تیار ہیں۔ فوری مدد کے لیے ابھی رابطہ کریں۔",
      callButton: "ابھی کال کریں",
      bookButton: "ابھی بک کریں",
    },
  },
});

export type VisaTranslation = ReturnType<typeof getVisaTranslation>;