/**
 * HASSAAN TRAVEL — TRANSLATION HELPERS
 * ====================================
 *
 * Translation access layer.
 *
 * Locale configuration comes from:
 * apps/web/i18n.ts
 */

import {
  FALLBACK_LOCALE,
  isSupportedLocale,
  Locale,
} from "@/i18n";

import { navbarTranslations } from "../translations/navbar";


/**
 * Get navbar translations for a locale.
 *
 * Behaviour:
 *
 * Requested locale
 *        |
 *        v
 * Translation exists?
 *        |
 *   Yes ------ No
 *    |          |
 *    v          v
 * Requested   English fallback
 *
 */
export function getNavbarTranslations(
  language: Locale | string
) {

  const locale: Locale = isSupportedLocale(language)
    ? language
    : FALLBACK_LOCALE;


  return (
    navbarTranslations[
      locale as keyof typeof navbarTranslations
    ] ??
    navbarTranslations[
      FALLBACK_LOCALE as keyof typeof navbarTranslations
    ]
  );
}