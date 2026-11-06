/**
 * HASSAAN TRAVEL — GENERIC TRANSLATION FACTORY
 * ============================================
 *
 * Shared by every page-level translations file (umrah, visa, packages, ...).
 * Locale configuration stays in apps/web/i18n.ts.
 *
 * Behaviour:
 * - "nl-NL", "nl_BE", "NL" all resolve to "nl".
 * - Unsupported locales fall back to English.
 * - Missing keys fall back to English per key.
 * - An explicit empty string ("") is kept as-is. Use it for heading parts
 *   a language does not need, e.g. { start: "", highlight: "…", end: "…" }.
 * - Empty or missing arrays fall back to the English array.
 * - Results are cached per locale, so the same object is returned every time.
 *
 * Usage:
 *
 *   const en = { header: { title: "Umrah" }, steps: ["One", "Two"] } as const;
 *
 *   export const getUmrahTranslation = createTranslator(en, {
 *     nl: { header: { title: "Umrah" }, steps: ["Een", "Twee"] },
 *     ur: { header: { title: "عمرہ" } },
 *   });
 *
 *   // In a client component:
 *   const { language } = useLanguage();
 *   const t = getUmrahTranslation(language);
 */

import { FALLBACK_LOCALE, isSupportedLocale, type Locale } from "@/i18n";

type AnyFunction = (...args: never[]) => unknown;

/** Turns `as const` literal types into plain string / number / array types. */
export type Widen<T> = T extends AnyFunction
  ? T
  : T extends string
    ? string
    : T extends number
      ? number
      : T extends boolean
        ? boolean
        : T extends readonly (infer U)[]
          ? Widen<U>[]
          : T extends object
            ? { -readonly [K in keyof T]: Widen<T[K]> }
            : T;

/**
 * Shape allowed for non-English dictionaries.
 * Objects may be incomplete; arrays are replaced as a whole.
 */
export type PartialTranslation<T> = T extends AnyFunction
  ? T
  : T extends readonly unknown[]
    ? T
    : T extends object
      ? { [K in keyof T]?: PartialTranslation<T[K]> }
      : T;

/** Normalizes any incoming language value to a supported Locale. */
export function resolveLocale(language: unknown): Locale {
  if (typeof language !== "string") return FALLBACK_LOCALE;

  const base = language.trim().toLowerCase().split(/[-_]/)[0] ?? "";

  return isSupportedLocale(base) ? base : FALLBACK_LOCALE;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function hasOwn(source: Record<string, unknown>, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(source, key);
}

/** Fills missing values from English without modifying either source object. */
function mergeWithFallback(fallback: unknown, selected: unknown): unknown {
  if (typeof fallback === "string") {
    // Any provided string wins, including an intentional "".
    // Only a missing or non-string value falls back to English.
    return typeof selected === "string" ? selected : fallback;
  }

  if (Array.isArray(fallback)) {
    return Array.isArray(selected) && selected.length > 0 ? selected : fallback;
  }

  if (isPlainObject(fallback)) {
    const source = isPlainObject(selected) ? selected : {};
    const result: Record<string, unknown> = {};

    // Keep extra keys that exist only in the selected language.
    for (const key of Object.keys(source)) {
      result[key] = source[key];
    }

    for (const [key, value] of Object.entries(fallback)) {
      result[key] = mergeWithFallback(
        value,
        hasOwn(source, key) ? source[key] : undefined
      );
    }

    return result;
  }

  return selected === undefined || selected === null ? fallback : selected;
}

/**
 * Builds a cached lookup function for one dictionary set.
 * English is the complete base; every other language may be partial.
 */
export function createTranslator<T extends object>(
  english: T,
  translations: Partial<
    Record<Exclude<Locale, "en">, PartialTranslation<Widen<T>>>
  >
): (language: unknown) => Widen<T> {
  const cache = new Map<Locale, Widen<T>>();

  return function getTranslation(language: unknown): Widen<T> {
    const locale = resolveLocale(language);

    const cached = cache.get(locale);
    if (cached) return cached;

    const selected = locale === "en" ? undefined : translations[locale];
    const result = mergeWithFallback(english, selected) as Widen<T>;

    cache.set(locale, result);
    return result;
  };
}

/**
 * Replaces {placeholders} in a translated string.
 * Unknown placeholders are left untouched so missing values stay visible.
 *
 *   interpolate("{count} months ago", { count: 5 }) -> "5 months ago"
 */
export function interpolate(
  template: string,
  values: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    hasOwn(values, key) ? String(values[key]) : match
  );
}