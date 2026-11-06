"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { FaPlane, FaUser, FaPassport, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/components/LanguageProvider";
import { resolveLocale } from "@/lib/createTranslator";

type TripType = "Round Trip" | "One Way" | "Multi-City";
type FormDataType = { [key: string]: string };

type FieldType = {
  label: string;
  name: string;
  type?: string;
  full?: boolean;
  options?: string[];
};

type SectionType = {
  title: string;
  icon: React.ReactNode;
  fields: FieldType[];
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const translations = {
  en: {
    titleFirst: "Air Ticket",
    titleSecond: "Request Form",
    description:
      "Fill out the form below and our travel experts will find you the best flight deals",
    within: "within 24 hours",
    tripTypes: {
      roundTrip: "Round Trip",
      oneWay: "One Way",
      multiCity: "Multi-City",
    },
    sections: {
      flight: "Flight Details",
      passenger: "Passenger Information",
      passport: "Passport Information",
      contact: "Contact Information",
    },
    fields: {
      from: "From (Departure City)",
      to: "To (Destination City)",
      nextCity: "Next City",
      departure: "Departure Date",
      return: "Return Date",
      travelClass: "Your Class",
      firstName: "Given Name",
      middleName: "Middle Name",
      lastName: "Last Name",
      nationality: "Nationality",
      dob: "Date of Birth",
      passport: "Passport Number",
      issueDate: "Date of Issue",
      expiryDate: "Date of Expiry",
      email: "Email Address",
      phone: "Phone Number",
    },
    selectClass: "Select class",
    classes: {
      economy: "Economy Class",
      business: "Business Class",
      first: "First Class",
    },
    success:
      "Request sent! We'll get back to you within 24 hours.",
    error: "Something went wrong. Please try again.",
    sending: "Sending...",
    submit: "Submit Request",
  },

  nl: {
    titleFirst: "Vliegticket",
    titleSecond: "Aanvraagformulier",
    description:
      "Vul onderstaand formulier in en onze reisexperts zoeken de beste vluchtaanbiedingen voor u",
    within: "binnen 24 uur",
    tripTypes: {
      roundTrip: "Retour",
      oneWay: "Enkele reis",
      multiCity: "Meerdere steden",
    },
    sections: {
      flight: "Vluchtgegevens",
      passenger: "Passagiersgegevens",
      passport: "Paspoortgegevens",
      contact: "Contactgegevens",
    },
    fields: {
      from: "Van (vertrekstad)",
      to: "Naar (bestemmingsstad)",
      nextCity: "Volgende stad",
      departure: "Vertrekdatum",
      return: "Retourdatum",
      travelClass: "Uw klasse",
      firstName: "Voornaam",
      middleName: "Tweede naam",
      lastName: "Achternaam",
      nationality: "Nationaliteit",
      dob: "Geboortedatum",
      passport: "Paspoortnummer",
      issueDate: "Datum van uitgifte",
      expiryDate: "Vervaldatum",
      email: "E-mailadres",
      phone: "Telefoonnummer",
    },
    selectClass: "Selecteer klasse",
    classes: {
      economy: "Economy Class",
      business: "Business Class",
      first: "First Class",
    },
    success:
      "Aanvraag verzonden! We nemen binnen 24 uur contact met u op.",
    error: "Er is iets misgegaan. Probeer het opnieuw.",
    sending: "Verzenden...",
    submit: "Aanvraag verzenden",
  },

  de: {
    titleFirst: "Flugticket",
    titleSecond: "Anfrageformular",
    description:
      "Füllen Sie das folgende Formular aus und unsere Reiseexperten finden die besten Flugangebote für Sie",
    within: "innerhalb von 24 Stunden",
    tripTypes: {
      roundTrip: "Hin- und Rückflug",
      oneWay: "Einfacher Flug",
      multiCity: "Mehrere Städte",
    },
    sections: {
      flight: "Flugdetails",
      passenger: "Passagierinformationen",
      passport: "Passinformationen",
      contact: "Kontaktinformationen",
    },
    fields: {
      from: "Von (Abflugstadt)",
      to: "Nach (Zielstadt)",
      nextCity: "Nächste Stadt",
      departure: "Abflugdatum",
      return: "Rückflugdatum",
      travelClass: "Ihre Klasse",
      firstName: "Vorname",
      middleName: "Zweiter Vorname",
      lastName: "Nachname",
      nationality: "Nationalität",
      dob: "Geburtsdatum",
      passport: "Passnummer",
      issueDate: "Ausstellungsdatum",
      expiryDate: "Ablaufdatum",
      email: "E-Mail-Adresse",
      phone: "Telefonnummer",
    },
    selectClass: "Klasse auswählen",
    classes: {
      economy: "Economy Class",
      business: "Business Class",
      first: "First Class",
    },
    success:
      "Anfrage gesendet! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    sending: "Wird gesendet...",
    submit: "Anfrage senden",
  },

  fr: {
    titleFirst: "Billet d'avion",
    titleSecond: "Formulaire de demande",
    description:
      "Remplissez le formulaire ci-dessous et nos experts en voyage trouveront les meilleures offres de vols pour vous",
    within: "dans les 24 heures",
    tripTypes: {
      roundTrip: "Aller-retour",
      oneWay: "Aller simple",
      multiCity: "Multi-destinations",
    },
    sections: {
      flight: "Détails du vol",
      passenger: "Informations passager",
      passport: "Informations du passeport",
      contact: "Coordonnées",
    },
    fields: {
      from: "De (ville de départ)",
      to: "À (ville de destination)",
      nextCity: "Ville suivante",
      departure: "Date de départ",
      return: "Date de retour",
      travelClass: "Votre classe",
      firstName: "Prénom",
      middleName: "Deuxième prénom",
      lastName: "Nom de famille",
      nationality: "Nationalité",
      dob: "Date de naissance",
      passport: "Numéro de passeport",
      issueDate: "Date de délivrance",
      expiryDate: "Date d'expiration",
      email: "Adresse e-mail",
      phone: "Numéro de téléphone",
    },
    selectClass: "Sélectionner une classe",
    classes: {
      economy: "Classe économique",
      business: "Classe affaires",
      first: "Première classe",
    },
    success:
      "Demande envoyée ! Nous vous contacterons dans les 24 heures.",
    error: "Une erreur s'est produite. Veuillez réessayer.",
    sending: "Envoi en cours...",
    submit: "Envoyer la demande",
  },

  it: {
    titleFirst: "Biglietto aereo",
    titleSecond: "Modulo di richiesta",
    description:
      "Compila il modulo qui sotto e i nostri esperti di viaggio troveranno le migliori offerte di volo per te",
    within: "entro 24 ore",
    tripTypes: {
      roundTrip: "Andata e ritorno",
      oneWay: "Solo andata",
      multiCity: "Multi-città",
    },
    sections: {
      flight: "Dettagli del volo",
      passenger: "Informazioni passeggero",
      passport: "Informazioni sul passaporto",
      contact: "Informazioni di contatto",
    },
    fields: {
      from: "Da (città di partenza)",
      to: "A (città di destinazione)",
      nextCity: "Città successiva",
      departure: "Data di partenza",
      return: "Data di ritorno",
      travelClass: "La tua classe",
      firstName: "Nome",
      middleName: "Secondo nome",
      lastName: "Cognome",
      nationality: "Nazionalità",
      dob: "Data di nascita",
      passport: "Numero di passaporto",
      issueDate: "Data di rilascio",
      expiryDate: "Data di scadenza",
      email: "Indirizzo e-mail",
      phone: "Numero di telefono",
    },
    selectClass: "Seleziona classe",
    classes: {
      economy: "Classe economica",
      business: "Classe business",
      first: "Prima classe",
    },
    success:
      "Richiesta inviata! Ti ricontatteremo entro 24 ore.",
    error: "Qualcosa è andato storto. Riprova.",
    sending: "Invio in corso...",
    submit: "Invia richiesta",
  },

  es: {
    titleFirst: "Billete de avión",
    titleSecond: "Formulario de solicitud",
    description:
      "Completa el formulario y nuestros expertos en viajes encontrarán las mejores ofertas de vuelos para ti",
    within: "en un plazo de 24 horas",
    tripTypes: {
      roundTrip: "Ida y vuelta",
      oneWay: "Solo ida",
      multiCity: "Multidestino",
    },
    sections: {
      flight: "Detalles del vuelo",
      passenger: "Información del pasajero",
      passport: "Información del pasaporte",
      contact: "Información de contacto",
    },
    fields: {
      from: "Desde (ciudad de salida)",
      to: "Hasta (ciudad de destino)",
      nextCity: "Ciudad siguiente",
      departure: "Fecha de salida",
      return: "Fecha de regreso",
      travelClass: "Tu clase",
      firstName: "Nombre",
      middleName: "Segundo nombre",
      lastName: "Apellidos",
      nationality: "Nacionalidad",
      dob: "Fecha de nacimiento",
      passport: "Número de pasaporte",
      issueDate: "Fecha de expedición",
      expiryDate: "Fecha de caducidad",
      email: "Dirección de correo electrónico",
      phone: "Número de teléfono",
    },
    selectClass: "Seleccionar clase",
    classes: {
      economy: "Clase económica",
      business: "Clase ejecutiva",
      first: "Primera clase",
    },
    success:
      "¡Solicitud enviada! Nos pondremos en contacto contigo en 24 horas.",
    error: "Algo salió mal. Por favor, inténtalo de nuevo.",
    sending: "Enviando...",
    submit: "Enviar solicitud",
  },

  ar: {
    titleFirst: "تذكرة طيران",
    titleSecond: "نموذج طلب",
    description:
      "املأ النموذج أدناه وسيجد لك خبراؤنا في السفر أفضل عروض الرحلات الجوية",
    within: "خلال 24 ساعة",
    tripTypes: {
      roundTrip: "ذهاب وعودة",
      oneWay: "ذهاب فقط",
      multiCity: "عدة مدن",
    },
    sections: {
      flight: "تفاصيل الرحلة",
      passenger: "معلومات المسافر",
      passport: "معلومات جواز السفر",
      contact: "معلومات الاتصال",
    },
    fields: {
      from: "من (مدينة المغادرة)",
      to: "إلى (مدينة الوجهة)",
      nextCity: "المدينة التالية",
      departure: "تاريخ المغادرة",
      return: "تاريخ العودة",
      travelClass: "درجتك",
      firstName: "الاسم الأول",
      middleName: "الاسم الأوسط",
      lastName: "اسم العائلة",
      nationality: "الجنسية",
      dob: "تاريخ الميلاد",
      passport: "رقم جواز السفر",
      issueDate: "تاريخ الإصدار",
      expiryDate: "تاريخ الانتهاء",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
    },
    selectClass: "اختر الدرجة",
    classes: {
      economy: "الدرجة السياحية",
      business: "درجة رجال الأعمال",
      first: "الدرجة الأولى",
    },
    success:
      "تم إرسال الطلب! سنتواصل معك خلال 24 ساعة.",
    error: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    sending: "جارٍ الإرسال...",
    submit: "إرسال الطلب",
  },

  ur: {
    titleFirst: "ایئر ٹکٹ",
    titleSecond: "درخواست فارم",
    description:
      "نیچے دیا گیا فارم پُر کریں اور ہمارے سفری ماہرین آپ کے لیے بہترین فلائٹ ڈیلز تلاش کریں گے",
    within: "24 گھنٹوں کے اندر",
    tripTypes: {
      roundTrip: "واپسی کا سفر",
      oneWay: "صرف ایک طرف",
      multiCity: "متعدد شہر",
    },
    sections: {
      flight: "فلائٹ کی تفصیلات",
      passenger: "مسافر کی معلومات",
      passport: "پاسپورٹ کی معلومات",
      contact: "رابطے کی معلومات",
    },
    fields: {
      from: "کہاں سے (روانگی کا شہر)",
      to: "کہاں تک (منزل کا شہر)",
      nextCity: "اگلا شہر",
      departure: "روانگی کی تاریخ",
      return: "واپسی کی تاریخ",
      travelClass: "آپ کی کلاس",
      firstName: "پہلا نام",
      middleName: "درمیانی نام",
      lastName: "آخری نام",
      nationality: "قومیت",
      dob: "تاریخ پیدائش",
      passport: "پاسپورٹ نمبر",
      issueDate: "اجراء کی تاریخ",
      expiryDate: "میعاد ختم ہونے کی تاریخ",
      email: "ای میل ایڈریس",
      phone: "فون نمبر",
    },
    selectClass: "کلاس منتخب کریں",
    classes: {
      economy: "اکانومی کلاس",
      business: "بزنس کلاس",
      first: "فرسٹ کلاس",
    },
    success:
      "درخواست بھیج دی گئی! ہم 24 گھنٹوں کے اندر آپ سے رابطہ کریں گے۔",
    error: "کچھ غلط ہو گیا۔ براہ کرم دوبارہ کوشش کریں۔",
    sending: "بھیجا جا رہا ہے...",
    submit: "درخواست جمع کریں",
  },
} as const;

type LanguageKey = keyof typeof translations;

const TicketRequestForm = () => {
  const { language } = useLanguage();

  const lang = resolveLocale(language) as LanguageKey;

  const t = translations[lang] || translations.en;

  const isRTL = lang === "ar" || lang === "ur";

  const [tripType, setTripType] =
    useState<TripType>("Round Trip");

  const [formData, setFormData] =
    useState<FormDataType>({});

  const [status, setStatus] =
    useState<SubmitStatus>("idle");

  const tripTypeLabels: Record<TripType, string> = {
    "Round Trip": t.tripTypes.roundTrip,
    "One Way": t.tripTypes.oneWay,
    "Multi-City": t.tripTypes.multiCity,
  };

  const formSections: SectionType[] = [
    {
      title: t.sections.flight,
      icon: (
        <FaPlane
          size={12}
          className="text-[#0F91D5]"
        />
      ),
      fields: [
        { label: t.fields.from, name: "from" },
        { label: t.fields.to, name: "to" },
        { label: t.fields.nextCity, name: "nextCity" },
        {
          label: t.fields.departure,
          name: "departure",
          type: "date",
        },
        {
          label: t.fields.return,
          name: "return",
          type: "date",
        },
        {
          label: t.fields.travelClass,
          name: "travelClass",
          full: true,
          options: [
            t.classes.economy,
            t.classes.business,
            t.classes.first,
          ],
        },
      ],
    },

    {
      title: t.sections.passenger,
      icon: (
        <FaUser
          size={12}
          className="text-[#0F91D5]"
        />
      ),
      fields: [
        {
          label: t.fields.firstName,
          name: "firstName",
        },
        {
          label: t.fields.middleName,
          name: "middleName",
        },
        {
          label: t.fields.lastName,
          name: "lastName",
        },
        {
          label: t.fields.nationality,
          name: "nationality",
        },
        {
          label: t.fields.dob,
          name: "dob",
          type: "date",
          full: true,
        },
      ],
    },

    {
      title: t.sections.passport,
      icon: (
        <FaPassport
          size={12}
          className="text-[#0F91D5]"
        />
      ),
      fields: [
        {
          label: t.fields.passport,
          name: "passport",
        },
        {
          label: t.fields.issueDate,
          name: "issueDate",
          type: "date",
        },
        {
          label: t.fields.expiryDate,
          name: "expiryDate",
          type: "date",
          full: true,
        },
      ],
    },

    {
      title: t.sections.contact,
      icon: (
        <FaEnvelope
          size={12}
          className="text-[#0F91D5]"
        />
      ),
      fields: [
        {
          label: t.fields.email,
          name: "email",
          type: "email",
        },
        {
          label: t.fields.phone,
          name: "phone",
          type: "tel",
        },
      ],
    },
  ];

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "ticket",
          tripType,
          ...formData,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const isRequiredField = (
    fieldName: string
  ) => {
    const nonRequiredFields = [
      "middleName",
      "passport",
      "issueDate",
      "expiryDate",
      "dob",
      "nationality",
    ];

    if (nonRequiredFields.includes(fieldName)) {
      return false;
    }

    if (
      tripType === "One Way" &&
      fieldName === "return"
    ) {
      return false;
    }

    if (
      fieldName === "nextCity" &&
      tripType !== "Multi-City"
    ) {
      return false;
    }

    return true;
  };

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative w-full min-h-[70vh] py-12 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden flex justify-center items-center"
    >
      <div className="absolute inset-0 -z-30 w-full h-full">
        <Image
          src="/assets/bgimage/h1.webp"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-linear-to-b from-[rgba(207,234,246,0.15)] to-[rgba(85,178,218,0.25)]" />

      <div className="absolute inset-0 -z-10 bg-white/35" />

      <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">
            <span className="text-black">
              {t.titleFirst}
            </span>{" "}
            <span className="text-[#0F91D5]">
              {t.titleSecond}
            </span>
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            {t.description}
            <br />
            {t.within}
          </p>
        </div>

        {/* TRIP TYPE */}
        <div className="flex gap-3 mb-6">
          {(
            [
              "Round Trip",
              "One Way",
              "Multi-City",
            ] as TripType[]
          ).map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setTripType(type)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all shadow-xs ${
                tripType === type
                  ? "bg-[#0F91D5] text-white shadow-md shadow-blue-500/10"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tripTypeLabels[type]}
            </button>
          ))}
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {formSections.map((section) => (
            <div
              key={section.title}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4 font-semibold text-sm text-gray-900">
                {section.icon}
                {section.title}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {section.fields.map((field) => {
                  if (
                    tripType === "One Way" &&
                    field.name === "return"
                  ) {
                    return null;
                  }

                  if (
                    tripType !== "Multi-City" &&
                    field.name === "nextCity"
                  ) {
                    return null;
                  }

                  const isCompulsory =
                    isRequiredField(field.name);

                  return (
                    <div
                      key={field.name}
                      className={
                        field.full
                          ? "sm:col-span-2"
                          : ""
                      }
                    >
                      <label className="text-xs text-gray-600 mb-1 block">
                        {field.label}{" "}
                        {isCompulsory && (
                          <span className="text-red-600 font-bold ml-0.5">
                            *
                          </span>
                        )}
                      </label>

                      {field.options ? (
                        <select
                          required={isCompulsory}
                          name={field.name}
                          value={
                            formData[field.name] || ""
                          }
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-md text-sm focus:border-[#0F91D5] focus:ring-1 focus:ring-[#0F91D5]/30 outline-none transition-all bg-white/80"
                        >
                          <option value="">
                            {t.selectClass}
                          </option>

                          {field.options.map(
                            (option) => (
                              <option
                                key={option}
                                value={option}
                              >
                                {option}
                              </option>
                            )
                          )}
                        </select>
                      ) : (
                        <input
                          required={isCompulsory}
                          type={
                            field.type || "text"
                          }
                          name={field.name}
                          value={
                            formData[field.name] || ""
                          }
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-md text-sm focus:border-[#0F91D5] focus:ring-1 focus:ring-[#0F91D5]/30 outline-none transition-all bg-white/80"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* SUCCESS */}
          {status === "success" && (
            <p className="text-green-600 text-sm text-center mb-4">
              ✅ {t.success}
            </p>
          )}

          {/* ERROR */}
          {status === "error" && (
            <p className="text-red-500 text-sm text-center mb-4">
              ❌ {t.error}
            </p>
          )}

          {/* SUBMIT */}
          <div className="text-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#0F91D5] text-white px-8 py-2.5 rounded-lg font-bold text-sm shadow-md transition-all duration-200 hover:bg-blue-600 hover:shadow-lg disabled:opacity-60"
            >
              {status === "loading"
                ? t.sending
                : t.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TicketRequestForm;