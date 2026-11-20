import { NextRequest, NextResponse } from "next/server";

import {
  DEFAULT_LOCALE,
  isSupportedLocale,
  localeForCountry,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  type Locale,
} from "./i18n";

/**
 * Request header that carries the resolved language to the server render
 * (read in app/layout.tsx). Keep the name in sync with layout.tsx.
 */
export const LOCALE_HEADER = "x-ht-locale";

/**
 * Search engines and link-preview bots. They get the site default (nl),
 * exactly what any visitor without cookie / browser / region signal gets.
 * Without this, Googlebot (crawling from the US) receives English only.
 * Explicit names on purpose: a bare "bot" match would also catch phone
 * models such as "Cubot".
 * Long-term fix: per-language URLs (/nl, /en, …) with hreflang.
 */
const CRAWLER_PATTERN =
  /(googlebot|google-inspectiontool|googleother|storebot-google|adsbot-google|mediapartners-google|bingbot|bingpreview|duckduckbot|yandexbot|baiduspider|applebot|slurp|facebookexternalhit|facebot|twitterbot|linkedinbot|whatsapp|telegrambot|discordbot|slackbot|petalbot|ahrefsbot|semrushbot)/i;

function isCrawler(userAgent: string | null): boolean {
  return !!userAgent && CRAWLER_PATTERN.test(userAgent);
}

/** "nl-NL" / "nl_BE" / "NL" -> "nl"; unsupported -> null. */
function toLocale(value: string | null | undefined): Locale | null {
  if (!value) return null;
  const base = value.trim().toLowerCase().split(/[-_]/)[0] ?? "";
  return isSupportedLocale(base) ? base : null;
}

/** First supported language from Accept-Language, ordered by q-value. */
function localeFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;

  const preferences = header
    .split(",")
    .map((part, index) => {
      const [tag = "", ...params] = part.trim().split(";");
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const q = qParam ? Number(qParam.trim().slice(2)) : 1;
      return { tag, q: Number.isFinite(q) ? q : 0, index };
    })
    .filter((item) => item.tag && item.q > 0)
    // Higher q first; keep original order for equal q.
    .sort((a, b) => b.q - a.q || a.index - b.index);

  for (const { tag } of preferences) {
    const locale = toLocale(tag);
    if (locale) return locale;
  }

  return null;
}

/**
 * Detection priority (as agreed in the i18n plan):
 * crawler → saved cookie → browser language → region (IP) → default (layout)
 */
export function proxy(request: NextRequest) {
  const crawler = isCrawler(request.headers.get("user-agent"));

  // 1. Respect the user's saved choice (only if it is a supported value).
  const savedLocale = crawler
    ? null
    : toLocale(request.cookies.get(LOCALE_COOKIE)?.value);

  // 2. Browser language. Not persisted (same as the client logic).
  const browserLocale =
    crawler || savedLocale
      ? null
      : localeFromAcceptLanguage(request.headers.get("accept-language"));

  // 3. Region from Vercel, persisted as before.
  const regionLocale =
    crawler || savedLocale || browserLocale
      ? null
      : localeForCountry(request.headers.get("x-vercel-ip-country"));

  const resolvedLocale = crawler
    ? DEFAULT_LOCALE
    : savedLocale ?? browserLocale ?? regionLocale;

  // Pass the decision to this same request's server render, so the very
  // first page is already in the right language and direction.
  // Any client-sent value of this header is discarded.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.delete(LOCALE_HEADER);
  if (resolvedLocale) {
    requestHeaders.set(LOCALE_HEADER, resolvedLocale);
  }

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Crawlers never reach this branch: regionLocale is null for them.
  if (regionLocale) {
    response.cookies.set(LOCALE_COOKIE, regionLocale, {
      maxAge: LOCALE_COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
      secure: request.nextUrl.protocol === "https:",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
  ],
};