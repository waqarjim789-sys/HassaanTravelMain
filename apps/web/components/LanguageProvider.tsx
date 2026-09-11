"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import {
  DEFAULT_LOCALE,
  LOCALES,
  Locale,
  getDirection,
  isSupportedLocale,
} from "../i18n";

import {
  detectBrowserLanguage,
  getSavedLanguage,
  saveLanguage,
} from "../lib/language";

import {
  getNavbarTranslations,
} from "../lib/translator";


type LanguageContextType = {
  language: Locale;
  changeLanguage: (lang: Locale) => void;
  t: ReturnType<typeof getNavbarTranslations>;
};


const LanguageContext =
  createContext<LanguageContextType>({
    language: DEFAULT_LOCALE,

    changeLanguage: () => {},

    t: getNavbarTranslations(DEFAULT_LOCALE),
  });


/**
 * Turns any incoming value into a supported Locale, or null.
 *
 * Saved cookies, browser headers and region detection do not agree on a
 * format: "nl", "nl-NL", "nl_BE", "NL" all mean Dutch. Comparing them raw
 * against the supported list is what makes a valid language silently fall
 * through to the default.
 */
function resolveLocale(value: unknown): Locale | null {
  if (typeof value !== "string") return null;

  const raw = value.trim();
  if (!raw) return null;

  // Exact match, e.g. "nl"
  if (isSupportedLocale(raw as Locale)) {
    return raw as Locale;
  }

  // Region stripped, e.g. "nl-NL" / "nl_BE" -> "nl"
  const base = raw.toLowerCase().split(/[-_]/)[0];

  if (isSupportedLocale(base as Locale)) {
    return base as Locale;
  }

  // Finally, match against the configured list case-insensitively,
  // which also covers a LOCALES list that itself uses regional codes.
  const match = (LOCALES as ReadonlyArray<{ code: string }>).find((locale) => {
    const code = locale.code.toLowerCase();
    return code === raw.toLowerCase() || code.split(/[-_]/)[0] === base;
  });

  return match ? (match.code as Locale) : null;
}


export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [language, setLanguage] =
    useState<Locale>(DEFAULT_LOCALE);


  // Resolve the language once on mount: saved choice wins, then detection,
  // otherwise the default already in state.
  useEffect(() => {

    // 1. User previously selected a language
    const saved = resolveLocale(getSavedLanguage());

    if (saved) {
      setLanguage(saved);
      return;
    }


    // 2. Region / browser detection (not persisted — only an explicit
    //    choice via changeLanguage is remembered)
    const detected = resolveLocale(detectBrowserLanguage());

    if (detected) {
      setLanguage(detected);
      return;
    }


    // 3. Fall through to DEFAULT_LOCALE
  }, []);


  // Keep <html lang> and <html dir> in sync with the active language,
  // including the very first render and every later change.
  useEffect(() => {

    document.documentElement.lang = language;

    document.documentElement.dir = getDirection(language);

  }, [language]);


  const changeLanguage = useCallback((lang: Locale) => {

    const next = resolveLocale(lang);

    if (!next) {

      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `[LanguageProvider] Ignored unsupported language: ${JSON.stringify(
            lang
          )}. Supported: ${(LOCALES as ReadonlyArray<{ code: string }>)
            .map((locale) => locale.code)
            .join(", ")}`
        );
      }

      return;
    }

    setLanguage(next);

    saveLanguage(next);

  }, []);


  const value = useMemo<LanguageContextType>(
    () => ({
      language,
      changeLanguage,
      t: getNavbarTranslations(language),
    }),
    [language, changeLanguage]
  );


  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}


export function useLanguage() {

  return useContext(LanguageContext);

}
