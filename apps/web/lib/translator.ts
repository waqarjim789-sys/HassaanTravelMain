/**
 * HASSAAN TRAVEL — TRANSLATION HELPERS
 * Locale configuration comes from apps/web/i18n.ts.
 */
import {
  FALLBACK_LOCALE,
  isSupportedLocale,
  type Locale,
} from "@/i18n";

import { navbarTranslations } from "../translations/navbar";

type NavbarTranslations = {
  [Key in keyof typeof navbarTranslations.en]: string;
};

/** Use English for missing or blank labels, preserving available translations. */
export function getNavbarTranslations(
  language: Locale | string
): NavbarTranslations {
  const normalized =
    typeof language === "string"
      ? language.trim().toLowerCase().split(/[-_]/)[0]
      : "";

  const locale: Locale = isSupportedLocale(normalized)
    ? normalized
    : FALLBACK_LOCALE;

  const fallback: NavbarTranslations = navbarTranslations.en;
  const selected: Partial<NavbarTranslations> | undefined =
    navbarTranslations[locale as keyof typeof navbarTranslations];

  const result: NavbarTranslations = { ...fallback };

  for (const key of Object.keys(fallback) as Array<keyof NavbarTranslations>) {
    const label = selected?.[key];
    if (typeof label === "string" && label.trim().length > 0) {
      result[key] = label;
    }
  }

  return result;
}
