"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getDirection } from "@/i18n";
import { createTranslator } from "@/lib/createTranslator";

// Storage keys and values are unchanged so existing visitors keep their choice.
const CONSENT_KEY = "ht_cookie_consent";
const EXPIRY_KEY = "ht_cookie_expiry";
const PREFERENCES_KEY = "ht_cookie_preferences";
const CONSENT_DAYS = 180;

type ConsentValue = "accepted" | "rejected" | "custom";

const getCookieTranslation = createTranslator(
  {
    regionLabel: "Cookie consent",
    title: "We Value Your Privacy",
    descriptionBefore:
      "Hassaan Travel uses cookies to improve your browsing experience, analyze website traffic, and personalize content. By clicking",
    descriptionAfter: ", you agree to our use of cookies.",
    acceptAll: "Accept All",
    rejectAll: "Reject All",
    customize: "Customize",
    privacyPolicy: "Privacy Policy",
    functionalTitle: "Functional & analytical cookies",
    functionalDesc:
      "Needed for the website to work properly and to measure its use.",
    alwaysOn: "Always on",
    marketingTitle: "Social media & advertising cookies",
    marketingDesc:
      "Used to share content on social media and to measure advertisements.",
    savePreferences: "Save preferences",
  } as const,
  {
    nl: {
      regionLabel: "Cookietoestemming",
      title: "Wij hechten waarde aan uw privacy",
      descriptionBefore:
        "Hassaan Travel gebruikt cookies om uw surfervaring te verbeteren, websiteverkeer te analyseren en inhoud te personaliseren. Door op",
      descriptionAfter: " te klikken, gaat u akkoord met ons gebruik van cookies.",
      acceptAll: "Alles accepteren",
      rejectAll: "Alles weigeren",
      customize: "Aanpassen",
      privacyPolicy: "Privacybeleid",
      functionalTitle: "Functionele en analytische cookies",
      functionalDesc:
        "Nodig om de website goed te laten werken en het gebruik te meten.",
      alwaysOn: "Altijd aan",
      marketingTitle: "Social media- en advertentiecookies",
      marketingDesc:
        "Gebruikt om inhoud via social media te delen en advertenties te meten.",
      savePreferences: "Voorkeuren opslaan",
    },
    de: {
      regionLabel: "Cookie-Einwilligung",
      title: "Ihre Privatsphäre ist uns wichtig",
      descriptionBefore:
        "Hassaan Travel verwendet Cookies, um Ihr Surferlebnis zu verbessern, den Website-Verkehr zu analysieren und Inhalte zu personalisieren. Mit einem Klick auf",
      descriptionAfter: " stimmen Sie der Verwendung von Cookies zu.",
      acceptAll: "Alle akzeptieren",
      rejectAll: "Alle ablehnen",
      customize: "Anpassen",
      privacyPolicy: "Datenschutzerklärung",
      functionalTitle: "Funktionale und analytische Cookies",
      functionalDesc:
        "Erforderlich, damit die Website richtig funktioniert und ihre Nutzung gemessen werden kann.",
      alwaysOn: "Immer aktiv",
      marketingTitle: "Social-Media- und Werbe-Cookies",
      marketingDesc:
        "Werden verwendet, um Inhalte in sozialen Medien zu teilen und Werbung zu messen.",
      savePreferences: "Einstellungen speichern",
    },
    fr: {
      regionLabel: "Consentement aux cookies",
      title: "Votre vie privée compte pour nous",
      descriptionBefore:
        "Hassaan Travel utilise des cookies pour améliorer votre navigation, analyser le trafic du site et personnaliser le contenu. En cliquant sur",
      descriptionAfter: ", vous acceptez notre utilisation des cookies.",
      acceptAll: "Tout accepter",
      rejectAll: "Tout refuser",
      customize: "Personnaliser",
      privacyPolicy: "Politique de confidentialité",
      functionalTitle: "Cookies fonctionnels et analytiques",
      functionalDesc:
        "Nécessaires au bon fonctionnement du site et à la mesure de son utilisation.",
      alwaysOn: "Toujours actifs",
      marketingTitle: "Cookies réseaux sociaux et publicitaires",
      marketingDesc:
        "Utilisés pour partager du contenu sur les réseaux sociaux et mesurer les publicités.",
      savePreferences: "Enregistrer les préférences",
    },
    it: {
      regionLabel: "Consenso ai cookie",
      title: "Teniamo alla tua privacy",
      descriptionBefore:
        "Hassaan Travel utilizza i cookie per migliorare la tua esperienza di navigazione, analizzare il traffico del sito e personalizzare i contenuti. Facendo clic su",
      descriptionAfter: ", accetti il nostro utilizzo dei cookie.",
      acceptAll: "Accetta tutto",
      rejectAll: "Rifiuta tutto",
      customize: "Personalizza",
      privacyPolicy: "Informativa sulla privacy",
      functionalTitle: "Cookie funzionali e analitici",
      functionalDesc:
        "Necessari per il corretto funzionamento del sito e per misurarne l'utilizzo.",
      alwaysOn: "Sempre attivi",
      marketingTitle: "Cookie social e pubblicitari",
      marketingDesc:
        "Utilizzati per condividere contenuti sui social e misurare le pubblicità.",
      savePreferences: "Salva preferenze",
    },
    es: {
      regionLabel: "Consentimiento de cookies",
      title: "Valoramos tu privacidad",
      descriptionBefore:
        "Hassaan Travel utiliza cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en",
      descriptionAfter: ", aceptas nuestro uso de cookies.",
      acceptAll: "Aceptar todo",
      rejectAll: "Rechazar todo",
      customize: "Personalizar",
      privacyPolicy: "Política de privacidad",
      functionalTitle: "Cookies funcionales y analíticas",
      functionalDesc:
        "Necesarias para que el sitio funcione correctamente y para medir su uso.",
      alwaysOn: "Siempre activas",
      marketingTitle: "Cookies de redes sociales y publicidad",
      marketingDesc:
        "Se usan para compartir contenido en redes sociales y medir los anuncios.",
      savePreferences: "Guardar preferencias",
    },
    ar: {
      regionLabel: "الموافقة على ملفات تعريف الارتباط",
      title: "نحن نحترم خصوصيتك",
      descriptionBefore:
        "تستخدم Hassaan Travel ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة الزيارات وتخصيص المحتوى. بالنقر على",
      descriptionAfter: "، فإنك توافق على استخدامنا لملفات تعريف الارتباط.",
      acceptAll: "قبول الكل",
      rejectAll: "رفض الكل",
      customize: "تخصيص",
      privacyPolicy: "سياسة الخصوصية",
      functionalTitle: "ملفات تعريف الارتباط الوظيفية والتحليلية",
      functionalDesc: "ضرورية لعمل الموقع بشكل صحيح وقياس استخدامه.",
      alwaysOn: "مفعّلة دائمًا",
      marketingTitle: "ملفات تعريف الارتباط للتواصل الاجتماعي والإعلانات",
      marketingDesc:
        "تُستخدم لمشاركة المحتوى على وسائل التواصل الاجتماعي وقياس الإعلانات.",
      savePreferences: "حفظ التفضيلات",
    },
    ur: {
      regionLabel: "کوکیز کی رضامندی",
      title: "ہم آپ کی پرائیویسی کا احترام کرتے ہیں",
      descriptionBefore:
        "Hassaan Travel آپ کے براؤزنگ تجربے کو بہتر بنانے، ویب سائٹ ٹریفک کا تجزیہ کرنے اور مواد کو آپ کے مطابق بنانے کے لیے کوکیز استعمال کرتا ہے۔",
      descriptionAfter: " پر کلک کر کے آپ ہمارے کوکیز کے استعمال سے اتفاق کرتے ہیں۔",
      acceptAll: "سب قبول کریں",
      rejectAll: "سب مسترد کریں",
      customize: "ترتیب دیں",
      privacyPolicy: "پرائیویسی پالیسی",
      functionalTitle: "فنکشنل اور تجزیاتی کوکیز",
      functionalDesc:
        "ویب سائٹ کے درست کام کرنے اور اس کے استعمال کی پیمائش کے لیے ضروری۔",
      alwaysOn: "ہمیشہ فعال",
      marketingTitle: "سوشل میڈیا اور اشتہاری کوکیز",
      marketingDesc:
        "سوشل میڈیا پر مواد شیئر کرنے اور اشتہارات کی پیمائش کے لیے استعمال ہوتی ہیں۔",
      savePreferences: "ترجیحات محفوظ کریں",
    },
  }
);

// localStorage can be blocked (private mode, strict settings).
function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Choice simply is not remembered; the banner still closes.
  }
}

const buttonBase = {
  padding: "14px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: 700,
  fontSize: "15px",
} as const;

export default function CookieBanner() {
  const { language } = useLanguage();
  const t = getCookieTranslation(language);
  const titleId = useId();
  const marketingId = useId();

  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Show when there is no choice yet, or the saved choice has expired.
  useEffect(() => {
    const consent = readStorage(CONSENT_KEY);
    const expiry = readStorage(EXPIRY_KEY);
    const expiryTime = expiry ? Date.parse(expiry) : NaN;
    const expired = Number.isFinite(expiryTime) && expiryTime < Date.now();

    if (!consent || expired) {
      setShow(true);
      timers.current.push(setTimeout(() => setAnimate(true), 100));
    }

    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const closeBanner = () => {
    setAnimate(false);
    timers.current.push(setTimeout(() => setShow(false), 250));
  };

  const saveConsent = (value: ConsentValue, allowMarketing: boolean) => {
    const expire = new Date();
    expire.setDate(expire.getDate() + CONSENT_DAYS);

    writeStorage(CONSENT_KEY, value);
    writeStorage(EXPIRY_KEY, expire.toISOString());
    writeStorage(
      PREFERENCES_KEY,
      JSON.stringify({ functional: true, marketing: allowMarketing })
    );

    closeBanner();
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      dir={getDirection(language)}
      style={{
        position: "fixed",
        bottom: "25px",
        insetInlineStart: "25px",
        insetInlineEnd: "25px",
        maxWidth: "520px",
        maxHeight: "calc(100dvh - 50px)",
        overflowY: "auto",
        background: "#ffffff",
        borderRadius: "24px",
        padding: "24px",
        boxShadow: "0 30px 80px rgba(0,0,0,.35)",
        transition: "all .30s ease",
        transform: animate ? "translateY(0px)" : "translateY(40px)",
        opacity: animate ? 1 : 0,
        zIndex: 999999,
        border: "1px solid #e5e7eb",
        textAlign: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "15px",
        }}
      >
        <span aria-hidden="true" style={{ fontSize: "34px" }}>🍪</span>

        <h3
          id={titleId}
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          {t.title}
        </h3>
      </div>

      <p
        style={{
          color: "#4b5563",
          lineHeight: "1.7",
          fontSize: "15px",
          marginBottom: "20px",
        }}
      >
        {t.descriptionBefore} <strong>{t.acceptAll}</strong>
        {t.descriptionAfter}
      </p>

      {/* CUSTOMIZE PANEL */}
      {showSettings && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "16px",
            padding: "14px",
            border: "1px solid #e5e7eb",
            borderRadius: "14px",
            background: "#F9FAFB",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: "14px", color: "#111827" }}>
                {t.functionalTitle}
              </p>
              <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#6b7280" }}>
                {t.functionalDesc}
              </p>
            </div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#0B6B3A",
                whiteSpace: "nowrap",
              }}
            >
              {t.alwaysOn}
            </span>
          </div>

          <label
            htmlFor={marketingId}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              cursor: "pointer",
            }}
          >
            <span>
              <span style={{ display: "block", fontWeight: 700, fontSize: "14px", color: "#111827" }}>
                {t.marketingTitle}
              </span>
              <span style={{ display: "block", marginTop: "4px", fontSize: "13px", color: "#6b7280" }}>
                {t.marketingDesc}
              </span>
            </span>
            <input
              id={marketingId}
              type="checkbox"
              checked={marketing}
              onChange={(event) => setMarketing(event.target.checked)}
              style={{ width: "20px", height: "20px", flexShrink: 0, accentColor: "#0B6B3A" }}
            />
          </label>

          <button
            type="button"
            onClick={() => saveConsent("custom", marketing)}
            style={{
              ...buttonBase,
              background: "#2563EB",
              color: "#fff",
              border: "none",
            }}
          >
            {t.savePreferences}
          </button>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          type="button"
          onClick={() => saveConsent("accepted", true)}
          style={{
            ...buttonBase,
            background: "#0B6B3A",
            color: "#fff",
            border: "none",
          }}
        >
          <span aria-hidden="true">✓ </span>
          {t.acceptAll}
        </button>

        <button
          type="button"
          onClick={() => saveConsent("rejected", false)}
          style={{
            ...buttonBase,
            background: "#F3F4F6",
            color: "#111827",
            border: "1px solid #d1d5db",
          }}
        >
          <span aria-hidden="true">✕ </span>
          {t.rejectAll}
        </button>

        <button
          type="button"
          aria-expanded={showSettings}
          onClick={() => setShowSettings((previous) => !previous)}
          style={{
            ...buttonBase,
            background: "#fff",
            color: "#2563EB",
            border: "1px solid #2563EB",
          }}
        >
          <span aria-hidden="true">⚙ </span>
          {t.customize}
        </button>

        <Link
          href="/privacy-policy"
          style={{
            padding: "12px 20px",
            border: "1px solid #d1d5db",
            borderRadius: "10px",
            color: "#111827",
            textDecoration: "none",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {t.privacyPolicy}
        </Link>
      </div>
    </div>
  );
}