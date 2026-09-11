/**
 * HASSAAN TRAVEL — CENTRAL LANGUAGE CONFIGURATION
 * ================================================
 *
 * Single source of truth for all locale behaviour.
 *
 * Controls:
 * - Supported languages
 * - Default locale
 * - Translation fallback
 * - RTL/LTR direction
 * - Country language hints
 * - Locale cookies
 * - SEO site URL helpers
 */

export const LOCALES = [
  { code: "nl", label: "Nederlands", englishName: "Dutch", flag: "🇳🇱" },
  { code: "en", label: "English", englishName: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", englishName: "German", flag: "🇩🇪" },
  { code: "fr", label: "Français", englishName: "French", flag: "🇫🇷" },
  { code: "it", label: "Italiano", englishName: "Italian", flag: "🇮🇹" },
  { code: "es", label: "Español", englishName: "Spanish", flag: "🇪🇸" },
  { code: "ar", label: "العربية", englishName: "Arabic", flag: "🇸🇦" },
  { code: "ur", label: "اردو", englishName: "Urdu", flag: "🇵🇰" },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];

export const LOCALE_CODES = LOCALES.map(
  ({ code }) => code
) as Locale[];


/**
 * Default website language
 */
export const DEFAULT_LOCALE: Locale = "nl";


/**
 * Missing translations fallback
 */
export const FALLBACK_LOCALE: Locale = "en";


/**
 * RTL languages
 */
export const RTL_LOCALES: readonly Locale[] = [
  "ar",
  "ur",
];


export function getDirection(
  locale: Locale | string
): "rtl" | "ltr" {
  return RTL_LOCALES.includes(locale as Locale)
    ? "rtl"
    : "ltr";
}


/**
 * Country → locale hints
 *
 * Used only when:
 * 1. User has no saved preference
 * 2. Browser language is unsupported
 *
 * Never override explicit user choice.
 */
export const COUNTRY_TO_LOCALE: Record<string, Locale> = {

  NL: "nl",
  BE: "nl",
  SR: "nl",
  AW: "nl",
  CW: "nl",

  GB: "en",
  IE: "en",
  US: "en",
  CA: "en",
  AU: "en",
  NZ: "en",
  ZA: "en",

  DE: "de",
  AT: "de",
  CH: "de",
  LI: "de",

  FR: "fr",
  LU: "fr",
  MC: "fr",

  IT: "it",
  SM: "it",
  VA: "it",

  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  CL: "es",
  PE: "es",

  SA: "ar",
  AE: "ar",
  QA: "ar",
  KW: "ar",
  BH: "ar",
  OM: "ar",
  JO: "ar",
  EG: "ar",
  MA: "ar",
  DZ: "ar",
  TN: "ar",
  LB: "ar",
  IQ: "ar",
  LY: "ar",
  YE: "ar",

  PK: "ur",
};


/**
 * Cookies
 */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const LOCALE_COOKIE_MAX_AGE =
  60 * 60 * 24 * 365;


export const REGION_COOKIE = "ht-region";

export const REGION_COOKIE_MAX_AGE =
  60 * 60 * 24 * 30;


/**
 * Website URL
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.hassaantravel.nl";


/**
 * Locale helpers
 */

export function isSupportedLocale(
  value: unknown
): value is Locale {
  return (
    typeof value === "string" &&
    LOCALE_CODES.includes(value as Locale)
  );
}


export function getLocaleMeta(
  locale: Locale | string
) {
  return (
    LOCALES.find(
      (item) => item.code === locale
    ) ??
    LOCALES.find(
      (item) => item.code === DEFAULT_LOCALE
    )!
  );
}


export function localeForCountry(
  country?: string | null
): Locale | null {

  if (!country) {
    return null;
  }

  return (
    COUNTRY_TO_LOCALE[
      country.toUpperCase()
    ] ?? null
  );
}