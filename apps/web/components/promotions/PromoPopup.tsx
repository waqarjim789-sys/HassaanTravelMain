"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { createTranslator } from "@/lib/createTranslator";

/**
 * true  = show once per browser session (not again on every full page load)
 * false = original behaviour: show on every full page load
 */
const SHOW_ONCE_PER_SESSION = true;
const SESSION_KEY = "ht_promo_seen";

const getPromoTranslation = createTranslator(
  {
    closeLabel: "Close promotion",
    imageAlt: "Explore the latest Hassaan Travel offers",
    badge: "Latest promotion",
    title: "Your next journey starts here",
    description:
      "Discover our latest flight, holiday, visa, Umrah, and travel package offers prepared for you.",
    cta: "Explore latest offers",
    later: "Maybe later",
  } as const,
  {
    nl: {
      closeLabel: "Promotie sluiten",
      imageAlt: "Ontdek de nieuwste aanbiedingen van Hassaan Travel",
      badge: "Nieuwste actie",
      title: "Uw volgende reis begint hier",
      description:
        "Ontdek onze nieuwste aanbiedingen voor vluchten, vakanties, visa, Umrah en reispakketten, speciaal voor u samengesteld.",
      cta: "Bekijk de nieuwste aanbiedingen",
      later: "Misschien later",
    },
    de: {
      closeLabel: "Angebot schließen",
      imageAlt: "Entdecken Sie die neuesten Angebote von Hassaan Travel",
      badge: "Aktuelles Angebot",
      title: "Ihre nächste Reise beginnt hier",
      description:
        "Entdecken Sie unsere neuesten Angebote für Flüge, Urlaub, Visa, Umrah und Reisepakete – speziell für Sie zusammengestellt.",
      cta: "Neueste Angebote entdecken",
      later: "Vielleicht später",
    },
    fr: {
      closeLabel: "Fermer la promotion",
      imageAlt: "Découvrez les dernières offres de Hassaan Travel",
      badge: "Dernière promotion",
      title: "Votre prochain voyage commence ici",
      description:
        "Découvrez nos dernières offres de vols, vacances, visas, Omra et forfaits de voyage, préparées pour vous.",
      cta: "Voir les dernières offres",
      later: "Plus tard",
    },
    it: {
      closeLabel: "Chiudi la promozione",
      imageAlt: "Scopri le ultime offerte di Hassaan Travel",
      badge: "Ultima promozione",
      title: "Il tuo prossimo viaggio inizia qui",
      description:
        "Scopri le nostre ultime offerte su voli, vacanze, visti, Umrah e pacchetti viaggio preparate per te.",
      cta: "Scopri le ultime offerte",
      later: "Forse più tardi",
    },
    es: {
      closeLabel: "Cerrar promoción",
      imageAlt: "Descubre las últimas ofertas de Hassaan Travel",
      badge: "Última promoción",
      title: "Tu próximo viaje empieza aquí",
      description:
        "Descubre nuestras últimas ofertas de vuelos, vacaciones, visados, Umrah y paquetes de viaje preparadas para ti.",
      cta: "Ver las últimas ofertas",
      later: "Quizás más tarde",
    },
    ar: {
      closeLabel: "إغلاق العرض",
      imageAlt: "اكتشف أحدث عروض Hassaan Travel",
      badge: "أحدث العروض",
      title: "رحلتك القادمة تبدأ من هنا",
      description:
        "اكتشف أحدث عروضنا للطيران والعطلات والتأشيرات والعمرة والباقات السياحية التي أعددناها لك.",
      cta: "استكشف أحدث العروض",
      later: "ربما لاحقًا",
    },
    ur: {
      closeLabel: "پروموشن بند کریں",
      imageAlt: "Hassaan Travel کی تازہ ترین پیشکشیں دیکھیں",
      badge: "تازہ ترین پروموشن",
      title: "آپ کا اگلا سفر یہیں سے شروع ہوتا ہے",
      description:
        "آپ کے لیے تیار کردہ فلائٹس، چھٹیوں، ویزا، عمرہ اور ٹریول پیکیجز کی ہماری تازہ ترین پیشکشیں دریافت کریں۔",
      cta: "تازہ ترین پیشکشیں دیکھیں",
      later: "شاید بعد میں",
    },
  }
);

function hasSeenThisSession(): boolean {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeenThisSession(): void {
  try {
    window.sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // Storage blocked: the popup may show again on the next full load.
  }
}

export default function PromoPopup() {
  const { language } = useLanguage();
  const t = getPromoTranslation(language);
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (SHOW_ONCE_PER_SESSION && hasSeenThisSession()) return;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      if (SHOW_ONCE_PER_SESSION) markSeenThisSession();
    }, 600);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [closePopup, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      dir={getDirection(language)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePopup();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative grid w-full max-w-4xl max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-3xl bg-white shadow-2xl md:grid-cols-[1.05fr_1fr]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closePopup}
          aria-label={t.closeLabel}
          className="absolute end-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-2xl leading-none text-gray-700 shadow-md transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0F91D5]"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="relative min-h-52 sm:min-h-64 md:min-h-[430px]">
          <Image
            src="/assets/tour.jpg"
            alt={t.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Gradient fades toward the text side in both directions */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent md:bg-gradient-to-r md:rtl:bg-gradient-to-l"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 text-start">
          <span className="mb-4 w-fit rounded-full bg-[#0F91D5]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest rtl:tracking-normal text-[#0F91D5]">
            {t.badge}
          </span>

          <h2
            id={titleId}
            className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
          >
            {t.title}
          </h2>

          <p
            id={descriptionId}
            className="mt-4 text-base leading-7 text-gray-600"
          >
            {t.description}
          </p>

          <Link
            href="/packages"
            onClick={closePopup}
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#0F91D5] px-6 py-3 font-semibold text-white transition hover:bg-[#0d80bd] focus:outline-none focus:ring-2 focus:ring-[#0F91D5] focus:ring-offset-2"
          >
            {t.cta}
          </Link>

          <button
            type="button"
            onClick={closePopup}
            className="mt-3 min-h-11 rounded-xl px-4 py-2 text-sm font-medium text-gray-500 transition hover:text-gray-800"
          >
            {t.later}
          </button>
        </div>
      </section>
    </div>
  );
}