"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "../LanguageProvider";
import { getDirection } from "@/i18n";

// ─── Types ────────────────────────────────────────────────────────────────────

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  telephone: string;
  employ: string;
  travelDate: string;
  additionalWishes: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const translations = {
  en: {
    title: "Book your trip", close: "Close", name: "Name", namePlaceholder: "Your Name",
    email: "E-mail", telephone: "Telephone", employ: "Employ", travelDate: "Travel date",
    additionalWishes: "Additional wishes", messagePlaceholder: "Tell us about your travel plans…",
    success: "Request sent successfully!", error: "Something went wrong. Please try again.",
    sending: "Sending...", sent: "Sent!", send: "Send request",
  },
  nl: {
    title: "Boek uw reis", close: "Sluiten", name: "Naam", namePlaceholder: "Uw naam",
    email: "E-mail", telephone: "Telefoon", employ: "Beroep", travelDate: "Reisdatum",
    additionalWishes: "Aanvullende wensen", messagePlaceholder: "Vertel ons over uw reisplannen…",
    success: "Aanvraag succesvol verzonden!", error: "Er is iets misgegaan. Probeer het opnieuw.",
    sending: "Verzenden...", sent: "Verzonden!", send: "Aanvraag verzenden",
  },
  de: {
    title: "Buchen Sie Ihre Reise", close: "Schließen", name: "Name", namePlaceholder: "Ihr Name",
    email: "E-Mail", telephone: "Telefon", employ: "Beruf", travelDate: "Reisedatum",
    additionalWishes: "Zusätzliche Wünsche", messagePlaceholder: "Erzählen Sie uns von Ihren Reiseplänen…",
    success: "Anfrage erfolgreich gesendet!", error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    sending: "Wird gesendet...", sent: "Gesendet!", send: "Anfrage senden",
  },
  fr: {
    title: "Réservez votre voyage", close: "Fermer", name: "Nom", namePlaceholder: "Votre nom",
    email: "E-mail", telephone: "Téléphone", employ: "Profession", travelDate: "Date du voyage",
    additionalWishes: "Souhaits supplémentaires", messagePlaceholder: "Parlez-nous de vos projets de voyage…",
    success: "Demande envoyée avec succès !", error: "Une erreur s'est produite. Veuillez réessayer.",
    sending: "Envoi en cours...", sent: "Envoyé !", send: "Envoyer la demande",
  },
  it: {
    title: "Prenota il tuo viaggio", close: "Chiudi", name: "Nome", namePlaceholder: "Il tuo nome",
    email: "E-mail", telephone: "Telefono", employ: "Professione", travelDate: "Data del viaggio",
    additionalWishes: "Richieste aggiuntive", messagePlaceholder: "Raccontaci dei tuoi programmi di viaggio…",
    success: "Richiesta inviata con successo!", error: "Qualcosa è andato storto. Riprova.",
    sending: "Invio in corso...", sent: "Inviato!", send: "Invia richiesta",
  },
  es: {
    title: "Reserve su viaje", close: "Cerrar", name: "Nombre", namePlaceholder: "Su nombre",
    email: "Correo electrónico", telephone: "Teléfono", employ: "Profesión", travelDate: "Fecha del viaje",
    additionalWishes: "Peticiones adicionales", messagePlaceholder: "Cuéntenos sobre sus planes de viaje…",
    success: "¡Solicitud enviada correctamente!", error: "Algo salió mal. Por favor, inténtelo de nuevo.",
    sending: "Enviando...", sent: "¡Enviado!", send: "Enviar solicitud",
  },
  ar: {
    title: "احجز رحلتك", close: "إغلاق", name: "الاسم", namePlaceholder: "اسمك",
    email: "البريد الإلكتروني", telephone: "رقم الهاتف", employ: "المهنة", travelDate: "تاريخ السفر",
    additionalWishes: "طلبات إضافية", messagePlaceholder: "أخبرنا عن خطط سفرك…",
    success: "تم إرسال الطلب بنجاح!", error: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    sending: "جارٍ الإرسال...", sent: "تم الإرسال!", send: "إرسال الطلب",
  },
  ur: {
    title: "اپنا سفر بک کریں", close: "بند کریں", name: "نام", namePlaceholder: "آپ کا نام",
    email: "ای میل", telephone: "فون نمبر", employ: "پیشہ", travelDate: "سفر کی تاریخ",
    additionalWishes: "اضافی درخواستیں", messagePlaceholder: "اپنے سفری منصوبوں کے بارے میں بتائیں…",
    success: "درخواست کامیابی سے بھیج دی گئی!", error: "کچھ غلط ہو گیا۔ براہ کرم دوبارہ کوشش کریں۔",
    sending: "بھیجا جا رہا ہے...", sent: "بھیج دیا گیا!", send: "درخواست بھیجیں",
  },
} as const;

// ─── Default State ────────────────────────────────────────────────────────────

const defaultForm: FormState = {
  name: "",
  email: "",
  telephone: "",
  employ: "",
  travelDate: "",
  additionalWishes: "",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState<FormState>(defaultForm);
  const [status, setStatus]     = useState<SubmitStatus>("idle");

  const { language } = useLanguage();
  const t = translations[language] ?? translations.en;
  const formId = useId();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isOpen) setStatus("idle");
    return () => {
      if (closeTimer.current !== null) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
    };
  }, [isOpen]);

// ─── Form Config ──────────────────────────────────────────────────────────────

  const formFieldsConfig = [
  {
    id: "row-1",
    isRow: true,
    fields: [
      { label: t.name,   name: "name",  type: "text",  placeholder: t.namePlaceholder,       required: true },
      { label: t.email, name: "email", type: "email", placeholder: "your@email.com",  required: true },
    ],
  },
  {
    id: "row-2",
    isRow: true,
    fields: [
      { label: t.telephone, name: "telephone", type: "tel",  placeholder: "+31 123 456 789", required: true },
      { label: t.employ,    name: "employ",    type: "text", placeholder: "",                required: false },
    ],
  },
  {
    id: "travelDate",
    isRow: false,
    label: t.travelDate,
    name: "travelDate",
    type: "date",
    placeholder: "",
    required: true,
  },
  {
    id: "additionalWishes",
    isRow: false,
    label: t.additionalWishes,
    name: "additionalWishes",
    type: "textarea",
    placeholder: t.messagePlaceholder,
    required: false,
    rows: 4,
  },
];

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "booking", ...formData }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData(defaultForm);
        // Close modal after 1.5s so user sees the success message
        closeTimer.current = setTimeout(() => {
          setStatus("idle");
          onClose();
        }, 1500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div dir={getDirection(language)} className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* DARK OVERLAY */}
      <div
        className="absolute inset-0  bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* MODAL CARD */}
      <div className="bg-white rounded-2xl w-full max-w-135 shadow-2xl relative z-10 max-h-[calc(100dvh-2rem)] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 pt-6 pb-4">
          <h3 className="text-xl font-bold text-gray-900 tracking-tight">
            {t.title}
          </h3>
          <button
            type="button"
            aria-label={t.close}
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* FORM BODY */}
        <form onSubmit={handleFormSubmit} className="px-6 pb-6 space-y-4">
          {formFieldsConfig.map((rowItem) => {

            // 2-column row (Name/Email or Tel/Employ)
            if (rowItem.isRow && rowItem.fields) {
              return (
                <div key={rowItem.id} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {rowItem.fields.map((field) => (
                    <div key={field.name}>
                      <label htmlFor={`${formId}-${field.name}`} className="block text-xs font-bold text-gray-900 mb-1.5">
                        {field.label}
                      </label>
                      <input
                        id={`${formId}-${field.name}`}
                        dir={field.type === "email" || field.type === "tel" ? "ltr" : undefined}
                        required={field.required}
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof FormState]}
                        onChange={handleChange}
                        placeholder={field.placeholder || undefined}
                        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-[#0F91D5] transition-colors placeholder:text-gray-300 text-gray-800"
                      />
                    </div>
                  ))}
                </div>
              );
            }

            // Textarea
            if (rowItem.type === "textarea") {
              return (
                <div key={rowItem.id}>
                  <label htmlFor={`${formId}-${rowItem.name}`} className="block text-xs font-bold text-gray-900 mb-1.5">
                    {rowItem.label}
                  </label>
                  <textarea
                    id={`${formId}-${rowItem.name}`}
                    name={rowItem.name}
                    value={formData[rowItem.name as keyof FormState]}
                    onChange={handleChange}
                    rows={rowItem.rows}
                    placeholder={rowItem.placeholder || undefined}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-[#0F91D5] transition-colors placeholder:text-gray-300 resize-none text-gray-800"
                  />
                </div>
              );
            }

            // Standard input (Travel Date)
            return (
              <div key={rowItem.id}>
                <label htmlFor={`${formId}-${rowItem.name}`} className="block text-xs font-bold text-gray-900 mb-1.5">
                  {rowItem.label}
                </label>
                <input
                  id={`${formId}-${rowItem.name}`}
                  dir={rowItem.type === "date" ? "ltr" : undefined}
                  required={rowItem.required}
                  type={rowItem.type}
                  name={rowItem.name}
                  value={formData[rowItem.name as keyof FormState]}
                  onChange={handleChange}
                  placeholder={rowItem.placeholder || undefined}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-[#0F91D5] transition-colors text-gray-800"
                />
              </div>
            );
          })}

          {/* STATUS MESSAGES */}
          {status === "success" && (
            <p role="status" className="text-green-600 text-sm text-center">✅ {t.success}</p>
          )}
          {status === "error" && (
            <p role="alert" className="text-red-500 text-sm text-center">❌ {t.error}</p>
          )}

          {/* SUBMIT BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full bg-[#0F91D5] hover:bg-[#0d82c0] text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm cursor-pointer disabled:opacity-60"
            >
              {status === "loading" ? t.sending : status === "success" ? `✓ ${t.sent}` : t.send}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}