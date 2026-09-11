/**
 * HASSAAN TRAVEL — LANGUAGE UTILITIES
 * ===================================
 *
 * This file no longer owns language configuration.
 *
 * Source of truth:
 * apps/web/i18n.ts
 *
 * This file only provides backward-compatible helpers
 * for existing components while using the central locale system.
 */

import {
  DEFAULT_LOCALE,
  FALLBACK_LOCALE,
  LOCALES,
  Locale,
  isSupportedLocale,
} from "@/i18n";


/**
 * Backward compatibility:
 * Existing components may still import LANGUAGES.
 *
 * New code should use LOCALES directly.
 */
export const LANGUAGES = LOCALES.map((locale) => ({
  code: locale.code,
  name: locale.label,
  flag: locale.flag,
}));


/**
 * Backward compatibility alias.
 *
 * Old code:
 * DEFAULT_LANGUAGE
 *
 * New system:
 * DEFAULT_LOCALE
 */
export const DEFAULT_LANGUAGE = DEFAULT_LOCALE;


/**
 * Get saved language preference.
 *
 * Uses NEXT_LOCALE cookie/localStorage fallback.
 *
 * The main persistence system is now controlled
 * by i18n.ts.
 */
export function getSavedLanguage(): Locale | null {

  if (typeof window === "undefined") {
    return null;
  }


  const saved =
    document.cookie
      .split("; ")
      .find((item) =>
        item.startsWith("NEXT_LOCALE=")
      )
      ?.split("=")[1];


  if (saved && isSupportedLocale(saved)) {
    return saved;
  }


  return null;
}


/**
 * Save selected language.
 *
 * Uses NEXT_LOCALE cookie.
 */
export function saveLanguage(
  language: string
) {

  if (!isSupportedLocale(language)) {
    return;
  }


  document.cookie =
    `NEXT_LOCALE=${language}; path=/; max-age=${60 * 60 * 24 * 365}`;
}


/**
 * Detect browser language.
 *
 * Priority:
 * 1. Browser supported locale
 * 2. Fallback locale
 */
export function detectBrowserLanguage(): Locale {

  if (typeof window === "undefined") {
    return FALLBACK_LOCALE;
  }


  const browserLocale =
    navigator.language
      .toLowerCase()
      .split("-")[0];


  return isSupportedLocale(browserLocale)
    ? browserLocale
    : FALLBACK_LOCALE;
}