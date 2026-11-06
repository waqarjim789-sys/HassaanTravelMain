/**
 * HASSAAN TRAVEL — LANGUAGE UTILITIES
 * Locale configuration remains in apps/web/i18n.ts.
 */
import {
  DEFAULT_LOCALE,
  FALLBACK_LOCALE,
  LOCALES,
  type Locale,
  isSupportedLocale,
} from "@/i18n";

const LANGUAGE_KEY = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

// Preserve imports used by existing components.
export const LANGUAGES = LOCALES.map((locale) => ({
  code: locale.code,
  name: locale.label,
  flag: locale.flag,
}));

export const DEFAULT_LANGUAGE = DEFAULT_LOCALE;

function resolveLocale(value: unknown): Locale | null {
  if (typeof value !== "string") return null;

  const normalized = value.trim().toLowerCase().replace(/_/g, "-");
  if (!normalized) return null;

  if (isSupportedLocale(normalized)) return normalized;

  const base = normalized.split("-")[0];
  if (isSupportedLocale(base)) return base;

  const match = LOCALES.find((locale) => {
    const code = locale.code.toLowerCase().replace(/_/g, "-");
    return code === normalized;
  }) ?? LOCALES.find((locale) => {
    const code = locale.code.toLowerCase().replace(/_/g, "-");
    return code.split("-")[0] === base;
  });

  return match?.code ?? null;
}

/** Read the cookie first, then localStorage if the cookie is unavailable. */
export function getSavedLanguage(): Locale | null {
  if (typeof window === "undefined") return null;

  try {
    const cookie = document.cookie
      .split(";")
      .map((item) => item.trim())
      .find((item) => item.startsWith(`${LANGUAGE_KEY}=`));

    if (cookie) {
      const saved = resolveLocale(
        decodeURIComponent(cookie.slice(LANGUAGE_KEY.length + 1))
      );
      if (saved) return saved;
    }
  } catch {
    // Blocked cookies or malformed values must not prevent storage fallback.
  }

  try {
    return resolveLocale(window.localStorage.getItem(LANGUAGE_KEY));
  } catch {
    return null;
  }
}

/** Remember explicit selections; either storage mechanism may be blocked. */
export function saveLanguage(language: string): void {
  if (typeof window === "undefined") return;

  const locale = resolveLocale(language);
  if (!locale) return;

  try {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${LANGUAGE_KEY}=${encodeURIComponent(locale)}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
  } catch {
    // localStorage can still remember the choice when cookies are blocked.
  }

  try {
    window.localStorage.setItem(LANGUAGE_KEY, locale);
  } catch {
    // Language switching still works for this session through the provider.
  }
}

/** Use the first supported browser preference without saving it. */
export function detectBrowserLanguage(): Locale {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return FALLBACK_LOCALE;
  }

  const preferences = [...(navigator.languages ?? []), navigator.language];

  for (const preference of preferences) {
    const locale = resolveLocale(preference);
    if (locale) return locale;
  }

  return FALLBACK_LOCALE;
}
