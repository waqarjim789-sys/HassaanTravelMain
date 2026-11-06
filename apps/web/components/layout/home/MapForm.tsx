"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { resolveLocale } from "@/lib/createTranslator";

const translations = {
  en: {
    nameRequired: "Name must be at least 2 characters",
    emailInvalid: "Invalid email address",
    messageRequired: "Message must be at least 10 characters",
    formLabel: "Contact Form",
    name: "Your Name",
    email: "your@email.com",
    message: "Tell us about your travel plans...",
    success: "Message sent successfully!",
    error: "Something went wrong. Please try again.",
    sending: "Sending...",
    send: "Send Now",
  },

  nl: {
    nameRequired: "Naam moet minimaal 2 tekens bevatten",
    emailInvalid: "Ongeldig e-mailadres",
    messageRequired: "Bericht moet minimaal 10 tekens bevatten",
    formLabel: "Contactformulier",
    name: "Uw naam",
    email: "uw@email.com",
    message: "Vertel ons over uw reisplannen...",
    success: "Bericht succesvol verzonden!",
    error: "Er is iets misgegaan. Probeer het opnieuw.",
    sending: "Verzenden...",
    send: "Nu verzenden",
  },

  de: {
    nameRequired: "Der Name muss mindestens 2 Zeichen enthalten",
    emailInvalid: "Ungültige E-Mail-Adresse",
    messageRequired: "Die Nachricht muss mindestens 10 Zeichen enthalten",
    formLabel: "Kontaktformular",
    name: "Ihr Name",
    email: "ihre@email.com",
    message: "Erzählen Sie uns von Ihren Reiseplänen...",
    success: "Nachricht erfolgreich gesendet!",
    error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    sending: "Wird gesendet...",
    send: "Jetzt senden",
  },

  fr: {
    nameRequired: "Le nom doit comporter au moins 2 caractères",
    emailInvalid: "Adresse e-mail invalide",
    messageRequired: "Le message doit comporter au moins 10 caractères",
    formLabel: "Formulaire de contact",
    name: "Votre nom",
    email: "votre@email.com",
    message: "Parlez-nous de vos projets de voyage...",
    success: "Message envoyé avec succès !",
    error: "Une erreur s'est produite. Veuillez réessayer.",
    sending: "Envoi en cours...",
    send: "Envoyer maintenant",
  },

  it: {
    nameRequired: "Il nome deve contenere almeno 2 caratteri",
    emailInvalid: "Indirizzo e-mail non valido",
    messageRequired: "Il messaggio deve contenere almeno 10 caratteri",
    formLabel: "Modulo di contatto",
    name: "Il tuo nome",
    email: "tua@email.com",
    message: "Raccontaci dei tuoi programmi di viaggio...",
    success: "Messaggio inviato con successo!",
    error: "Qualcosa è andato storto. Riprova.",
    sending: "Invio in corso...",
    send: "Invia ora",
  },

  es: {
    nameRequired: "El nombre debe tener al menos 2 caracteres",
    emailInvalid: "Dirección de correo electrónico no válida",
    messageRequired: "El mensaje debe tener al menos 10 caracteres",
    formLabel: "Formulario de contacto",
    name: "Su nombre",
    email: "su@email.com",
    message: "Cuéntenos sobre sus planes de viaje...",
    success: "¡Mensaje enviado correctamente!",
    error: "Algo salió mal. Por favor, inténtelo de nuevo.",
    sending: "Enviando...",
    send: "Enviar ahora",
  },

  ar: {
    nameRequired: "يجب أن يحتوي الاسم على حرفين على الأقل",
    emailInvalid: "عنوان البريد الإلكتروني غير صالح",
    messageRequired: "يجب أن تحتوي الرسالة على 10 أحرف على الأقل",
    formLabel: "نموذج التواصل",
    name: "اسمك",
    email: "بريدك@example.com",
    message: "أخبرنا عن خطط سفرك...",
    success: "تم إرسال الرسالة بنجاح!",
    error: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    sending: "جارٍ الإرسال...",
    send: "إرسال الآن",
  },

  ur: {
    nameRequired: "نام کم از کم 2 حروف پر مشتمل ہونا چاہیے",
    emailInvalid: "ای میل ایڈریس درست نہیں ہے",
    messageRequired: "پیغام کم از کم 10 حروف پر مشتمل ہونا چاہیے",
    formLabel: "رابطہ فارم",
    name: "آپ کا نام",
    email: "your@email.com",
    message: "اپنے سفری منصوبوں کے بارے میں بتائیں...",
    success: "پیغام کامیابی سے بھیج دیا گیا!",
    error: "کچھ غلط ہو گیا۔ براہ کرم دوبارہ کوشش کریں۔",
    sending: "بھیجا جا رہا ہے...",
    send: "ابھی بھیجیں",
  },
} as const;

type LanguageKey = keyof typeof translations;

type FormData = {
  name: string;
  email: string;
  message: string;
};

const MapForm = () => {
  const { language } = useLanguage();

  const normalizedLanguage = resolveLocale(language) as LanguageKey;

  const t =
    translations[normalizedLanguage] || translations.en;

  const schema = z.object({
    name: z.string().trim().min(2, t.nameRequired),
    email: z.string().trim().email(t.emailInvalid),
    message: z.string().trim().min(10, t.messageRequired),
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          ...data,
        }),
      });

      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const isRTL =
    normalizedLanguage === "ar" ||
    normalizedLanguage === "ur";

  return (
    <div
      className="bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow space-y-4"
      aria-label={t.formLabel}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* NAME */}
        <div>
          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            aria-label={t.name}
            aria-invalid={!!errors.name}
            placeholder={t.name}
            className="border-2 border-gray-300 p-3 rounded-lg text-sm w-full"
          />

          {errors.name && (
            <p className="text-red-500 text-xs mt-1">
              {t.nameRequired}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            dir="ltr"
            aria-label={t.email}
            aria-invalid={!!errors.email}
            placeholder={t.email}
            className="p-3 rounded-lg text-sm w-full border-2 border-gray-300"
          />

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {t.emailInvalid}
            </p>
          )}
        </div>
      </div>

      {/* MESSAGE */}
      <div>
        <textarea
          {...register("message")}
          placeholder={t.message}
          aria-label={t.message}
          aria-invalid={!!errors.message}
          className="p-3 rounded-lg text-sm w-full border-2 border-gray-300"
          rows={3}
        />

        {errors.message && (
          <p className="text-red-500 text-xs mt-1">
            {t.messageRequired}
          </p>
        )}
      </div>

      {/* SUCCESS */}
      {status === "success" && (
        <p role="status" className="text-green-600 text-sm">
          ✅ {t.success}
        </p>
      )}

      {/* ERROR */}
      {status === "error" && (
        <p role="alert" className="text-red-500 text-sm">
          ❌ {t.error}
        </p>
      )}

      {/* SUBMIT */}
      <button
        onClick={handleSubmit(onSubmit)}
        disabled={status === "loading"}
        className="bg-[#0F91D5] text-white px-6 py-2 rounded-lg text-sm w-full sm:w-auto disabled:opacity-60 cursor-pointer"
        type="button"
      >
        {status === "loading"
          ? t.sending
          : t.send}
      </button>
    </div>
  );
};

export default MapForm;