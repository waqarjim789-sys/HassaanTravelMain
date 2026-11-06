"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { resolveLocale } from "@/lib/createTranslator";

const translations = {
  en: {
    title: "Fly to Your",
    titleHighlight: "Dream Country",
    description: "Discover the world's most popular countries with us.",
    bookingText: "Book now to get the best travel experience.",
    country: "Country",
    bookNow: "Book Now",
    showLess: "Show Less Countries ↑",
    exploreAll: "Explore All Countries →",
    countryNames: {
      Pakistan: "Pakistan",
      Afghanistan: "Afghanistan",
      "Saudi Arabia": "Saudi Arabia",
      India: "India",
      Bangladesh: "Bangladesh",
      "Irak (Kurdistan)": "Iraq (Kurdistan)",
      Turkey: "Turkey",
      Africa: "Africa",
    },
    destinations: {
      Pakistan: "Beautiful valleys & cultural heritage",
      Afghanistan: "Historic landscapes & breathtaking mountains",
      "Saudi Arabia": "Holy pilgrimage destination",
      India: "Vibrant history & incredible architecture",
      Bangladesh: "Lush greenery & rich cultural riverscapes",
      "Irak (Kurdistan)": "Ancient citadels & mountainous landscapes",
      Turkey: "Where East meets West",
      Africa: "Timeless pyramids & rich ancient history",
    },
    whatsapp:
      "Assalam-o-Alaikum, I want to book a flight to this country:",
    whatsappDetails:
      "Please let me know about the flight details, ticket availability, and booking options. Thanks!",
  },

  nl: {
    title: "Vlieg naar jouw",
    titleHighlight: "Droomland",
    description: "Ontdek samen met ons de populairste landen ter wereld.",
    bookingText: "Boek nu voor de beste reiservaring.",
    country: "Land",
    bookNow: "Boek nu",
    showLess: "Minder landen tonen ↑",
    exploreAll: "Alle landen ontdekken →",
    countryNames: {
      Pakistan: "Pakistan",
      Afghanistan: "Afghanistan",
      "Saudi Arabia": "Saoedi-Arabië",
      India: "India",
      Bangladesh: "Bangladesh",
      "Irak (Kurdistan)": "Irak (Koerdistan)",
      Turkey: "Turkije",
      Africa: "Afrika",
    },
    destinations: {
      Pakistan: "Prachtige valleien & cultureel erfgoed",
      Afghanistan: "Historische landschappen & adembenemende bergen",
      "Saudi Arabia": "Heilige bedevaartsbestemming",
      India: "Levendige geschiedenis & indrukwekkende architectuur",
      Bangladesh: "Weelderig groen & rijke culturele rivierlandschappen",
      "Irak (Kurdistan)": "Oude citadellen & bergachtige landschappen",
      Turkey: "Waar Oost en West elkaar ontmoeten",
      Africa: "Tijdloze piramides & rijke oude geschiedenis",
    },
    whatsapp:
      "Assalam-o-Alaikum, ik wil graag een vlucht naar dit land boeken:",
    whatsappDetails:
      "Laat me alstublieft weten wat de vluchtgegevens, beschikbaarheid en boekingsmogelijkheden zijn. Bedankt!",
  },

  de: {
    title: "Fliegen Sie in Ihr",
    titleHighlight: "Traumland",
    description: "Entdecken Sie mit uns die beliebtesten Länder der Welt.",
    bookingText: "Buchen Sie jetzt für das beste Reiseerlebnis.",
    country: "Land",
    bookNow: "Jetzt buchen",
    showLess: "Weniger Länder anzeigen ↑",
    exploreAll: "Alle Länder entdecken →",
    countryNames: {
      Pakistan: "Pakistan",
      Afghanistan: "Afghanistan",
      "Saudi Arabia": "Saudi-Arabien",
      India: "Indien",
      Bangladesh: "Bangladesch",
      "Irak (Kurdistan)": "Irak (Kurdistan)",
      Turkey: "Türkei",
      Africa: "Afrika",
    },
    destinations: {
      Pakistan: "Wunderschöne Täler & kulturelles Erbe",
      Afghanistan: "Historische Landschaften & atemberaubende Berge",
      "Saudi Arabia": "Heiliges Pilgerziel",
      India: "Lebendige Geschichte & beeindruckende Architektur",
      Bangladesh: "Üppiges Grün & reiche kulturelle Flusslandschaften",
      "Irak (Kurdistan)": "Alte Zitadellen & bergige Landschaften",
      Turkey: "Wo Ost und West aufeinandertreffen",
      Africa: "Zeitlose Pyramiden & reiche alte Geschichte",
    },
    whatsapp:
      "Assalam-o-Alaikum, ich möchte einen Flug in dieses Land buchen:",
    whatsappDetails:
      "Bitte teilen Sie mir die Flugdaten, Ticketverfügbarkeit und Buchungsmöglichkeiten mit. Vielen Dank!",
  },

  fr: {
    title: "Envolez-vous vers votre",
    titleHighlight: "pays de rêve",
    description: "Découvrez avec nous les pays les plus populaires du monde.",
    bookingText: "Réservez maintenant pour profiter de la meilleure expérience de voyage.",
    country: "Pays",
    bookNow: "Réserver",
    showLess: "Afficher moins de pays ↑",
    exploreAll: "Découvrir tous les pays →",
    countryNames: {
      Pakistan: "Pakistan",
      Afghanistan: "Afghanistan",
      "Saudi Arabia": "Arabie saoudite",
      India: "Inde",
      Bangladesh: "Bangladesh",
      "Irak (Kurdistan)": "Irak (Kurdistan)",
      Turkey: "Turquie",
      Africa: "Afrique",
    },
    destinations: {
      Pakistan: "Belles vallées & patrimoine culturel",
      Afghanistan: "Paysages historiques & montagnes à couper le souffle",
      "Saudi Arabia": "Destination de pèlerinage sacrée",
      India: "Histoire vibrante & architecture remarquable",
      Bangladesh: "Verdure luxuriante & riches paysages fluviaux culturels",
      "Irak (Kurdistan)": "Anciennes citadelles & paysages montagneux",
      Turkey: "Là où l'Est rencontre l'Ouest",
      Africa: "Pyramides intemporelles & riche histoire ancienne",
    },
    whatsapp:
      "Assalam-o-Alaikum, je souhaite réserver un vol vers ce pays :",
    whatsappDetails:
      "Veuillez m'indiquer les détails du vol, la disponibilité des billets et les options de réservation. Merci !",
  },

  it: {
    title: "Vola verso il tuo",
    titleHighlight: "Paese dei sogni",
    description: "Scopri con noi i paesi più popolari del mondo.",
    bookingText: "Prenota ora per vivere la migliore esperienza di viaggio.",
    country: "Paese",
    bookNow: "Prenota ora",
    showLess: "Mostra meno paesi ↑",
    exploreAll: "Esplora tutti i paesi →",
    countryNames: {
      Pakistan: "Pakistan",
      Afghanistan: "Afghanistan",
      "Saudi Arabia": "Arabia Saudita",
      India: "India",
      Bangladesh: "Bangladesh",
      "Irak (Kurdistan)": "Iraq (Kurdistan)",
      Turkey: "Turchia",
      Africa: "Africa",
    },
    destinations: {
      Pakistan: "Bellissime valli & patrimonio culturale",
      Afghanistan: "Paesaggi storici & montagne mozzafiato",
      "Saudi Arabia": "Destinazione per il pellegrinaggio sacro",
      India: "Storia vivace & architettura straordinaria",
      Bangladesh: "Verde rigoglioso & ricchi paesaggi fluviali culturali",
      "Irak (Kurdistan)": "Antiche cittadelle & paesaggi montuosi",
      Turkey: "Dove Oriente e Occidente si incontrano",
      Africa: "Piramidi senza tempo & ricca storia antica",
    },
    whatsapp:
      "Assalam-o-Alaikum, vorrei prenotare un volo per questo paese:",
    whatsappDetails:
      "Fatemi sapere i dettagli del volo, la disponibilità dei biglietti e le opzioni di prenotazione. Grazie!",
  },

  es: {
    title: "Vuela a tu",
    titleHighlight: "País de ensueño",
    description: "Descubre con nosotros los países más populares del mundo.",
    bookingText: "Reserva ahora para disfrutar de la mejor experiencia de viaje.",
    country: "País",
    bookNow: "Reservar ahora",
    showLess: "Mostrar menos países ↑",
    exploreAll: "Explorar todos los países →",
    countryNames: {
      Pakistan: "Pakistán",
      Afghanistan: "Afganistán",
      "Saudi Arabia": "Arabia Saudí",
      India: "India",
      Bangladesh: "Bangladés",
      "Irak (Kurdistan)": "Irak (Kurdistán)",
      Turkey: "Turquía",
      Africa: "África",
    },
    destinations: {
      Pakistan: "Hermosos valles & patrimonio cultural",
      Afghanistan: "Paisajes históricos & montañas impresionantes",
      "Saudi Arabia": "Destino de peregrinación sagrada",
      India: "Historia vibrante & arquitectura extraordinaria",
      Bangladesh: "Vegetación exuberante & ricos paisajes fluviales culturales",
      "Irak (Kurdistan)": "Antiguas ciudadelas & paisajes montañosos",
      Turkey: "Donde Oriente y Occidente se encuentran",
      Africa: "Pirámides eternas & rica historia antigua",
    },
    whatsapp:
      "Assalam-o-Alaikum, quiero reservar un vuelo a este país:",
    whatsappDetails:
      "Por favor, indíqueme los detalles del vuelo, disponibilidad de billetes y opciones de reserva. ¡Gracias!",
  },

  ar: {
    title: "سافر إلى",
    titleHighlight: "بلد أحلامك",
    description: "اكتشف معنا أشهر دول العالم.",
    bookingText: "احجز الآن لتحصل على أفضل تجربة سفر.",
    country: "الدولة",
    bookNow: "احجز الآن",
    showLess: "عرض دول أقل ↑",
    exploreAll: "استكشف جميع الدول ←",
    countryNames: {
      Pakistan: "باكستان",
      Afghanistan: "أفغانستان",
      "Saudi Arabia": "المملكة العربية السعودية",
      India: "الهند",
      Bangladesh: "بنغلاديش",
      "Irak (Kurdistan)": "العراق (كردستان)",
      Turkey: "تركيا",
      Africa: "أفريقيا",
    },
    destinations: {
      Pakistan: "وديان جميلة وتراث ثقافي",
      Afghanistan: "مناظر تاريخية وجبال خلابة",
      "Saudi Arabia": "وجهة للحج والعمرة",
      India: "تاريخ غني وهندسة معمارية مذهلة",
      Bangladesh: "طبيعة خضراء ومناظر نهرية ثقافية غنية",
      "Irak (Kurdistan)": "قلاع تاريخية ومناظر جبلية",
      Turkey: "حيث يلتقي الشرق بالغرب",
      Africa: "أهرامات خالدة وتاريخ عريق غني",
    },
    whatsapp:
      "السلام عليكم، أرغب في حجز رحلة طيران إلى هذه الدولة:",
    whatsappDetails:
      "يرجى تزويدي بتفاصيل الرحلة وتوفر التذاكر وخيارات الحجز. شكرًا!",
  },

  ur: {
    title: "اپنے",
    titleHighlight: "خوابوں کے ملک",
    description: "ہمارے ساتھ دنیا کے مقبول ترین ممالک دریافت کریں۔",
    bookingText: "بہترین سفری تجربے کے لیے ابھی بک کریں۔",
    country: "ملک",
    bookNow: "ابھی بک کریں",
    showLess: "کم ممالک دکھائیں ↑",
    exploreAll: "تمام ممالک دریافت کریں ←",
    countryNames: {
      Pakistan: "پاکستان",
      Afghanistan: "افغانستان",
      "Saudi Arabia": "سعودی عرب",
      India: "بھارت",
      Bangladesh: "بنگلہ دیش",
      "Irak (Kurdistan)": "عراق (کردستان)",
      Turkey: "ترکی",
      Africa: "افریقہ",
    },
    destinations: {
      Pakistan: "خوبصورت وادیاں اور ثقافتی ورثہ",
      Afghanistan: "تاریخی مناظر اور شاندار پہاڑ",
      "Saudi Arabia": "مقدس زیارت کی منزل",
      India: "دلکش تاریخ اور شاندار فنِ تعمیر",
      Bangladesh: "سرسبز مناظر اور ثقافتی دریائی خوبصورتی",
      "Irak (Kurdistan)": "قدیم قلعے اور پہاڑی مناظر",
      Turkey: "جہاں مشرق اور مغرب ملتے ہیں",
      Africa: "قدیم اہرام اور شاندار تاریخی ورثہ",
    },
    whatsapp:
      "السلام علیکم، میں اس ملک کے لیے فلائٹ بک کروانا چاہتا ہوں:",
    whatsappDetails:
      "براہ کرم فلائٹ کی تفصیلات، ٹکٹ کی دستیابی اور بکنگ کے آپشنز سے آگاہ کریں۔ شکریہ!",
  },
} as const;

type LanguageKey = keyof typeof translations;

// `name` is the stable key (also used in the WhatsApp message to the office).
const destinations = [
  {
    name: "Pakistan",
    image: "/assets/destinations/pakistan.webp",
  },
  {
    name: "Afghanistan",
    image: "/assets/destinations/afghanistan.webp",
  },
  {
    name: "Saudi Arabia",
    // TEMPORARY: /assets/destinations/makkah.webp does not exist (404).
    // Switch back once that file is added to public/assets/destinations/.
    image: "/assets/umrah/kaba.webp",
  },
  {
    name: "India",
    image: "/assets/destinations/indi.webp",
  },
  {
    name: "Bangladesh",
    image: "/assets/destinations/ban.webp",
  },
  {
    name: "Irak (Kurdistan)",
    image: "/assets/destinations/iraq.webp",
  },
  {
    name: "Turkey",
    image: "/assets/destinations/turkey.webp",
  },
  {
    name: "Africa",
    image: "/assets/destinations/africa.webp",
  },
];

type Destination = (typeof destinations)[number];

// Card grid: 1 column on mobile, 2 on tablet, 4 on desktop.
const CARD_IMAGE_SIZES = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw";

const HeroSection = () => {
  const [showAll, setShowAll] = useState(false);
  const { language } = useLanguage();

  const lang = resolveLocale(language) as LanguageKey;
  const t = translations[lang] ?? translations.en;
  const direction = getDirection(lang);

  const visibleDestinations = showAll
    ? destinations
    : destinations.slice(0, 4);

  const getCountryName = (item: Destination) =>
    t.countryNames[item.name as keyof typeof t.countryNames] ?? item.name;

  const getCountryDescription = (item: Destination) =>
    t.destinations[item.name as keyof typeof t.destinations] ?? "";

  const handleDestinationBooking = (item: Destination) => {
    const phoneNumber = "31104857673";

    const rawMessage = `${t.whatsapp}

✈️ *${t.country}:* ${item.name}

${t.whatsappDetails}`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="relative w-full py-20 px-6 sm:px-12 md:px-16 overflow-hidden"
      dir={direction}
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/assets/bgimage/h2.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.18]"
        />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight rtl:tracking-normal">
            {t.title}{" "}
            <span className="font-bold text-[#0F91D5]">
              {t.titleHighlight}
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            {t.description}
            <br />
            <span className="font-semibold text-gray-800">
              {t.bookingText}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleDestinations.map((item) => {
            const countryName = getCountryName(item);

            return (
              <div
                key={item.name}
                className="rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-52">
                  <Image
                    src={item.image}
                    alt={countryName}
                    fill
                    sizes={CARD_IMAGE_SIZES}
                    className="object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                  />

                  <div className="absolute bottom-4 start-4 end-4 text-white text-start">
                    <h3 className="text-xl font-bold mb-0.5">
                      {countryName}
                    </h3>

                    <div className="flex items-center gap-1 text-xs text-gray-200">
                      <IoLocationSharp
                        size={14}
                        aria-hidden="true"
                        className="text-red-500 shrink-0"
                      />
                      {t.country}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-6 h-10 line-clamp-2 text-start">
                    {getCountryDescription(item)}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleDestinationBooking(item)}
                    className="w-full bg-[#0F91D5] text-white py-2 rounded-xl font-medium shadow-sm hover:shadow-md transition-all"
                  >
                    {t.bookNow}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <button
            type="button"
            aria-expanded={showAll}
            onClick={() => setShowAll((previous) => !previous)}
            className="bg-white border border-blue-600 text-[#0F91D5] px-6 py-2 rounded-full font-medium transition hover:bg-blue-50 shadow-sm relative z-10"
          >
            {showAll ? t.showLess : t.exploreAll}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;