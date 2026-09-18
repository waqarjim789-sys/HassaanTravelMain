import { NextRequest, NextResponse } from "next/server";
import { localeForCountry } from "./i18n";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const existingLocale =
    request.cookies.get("NEXT_LOCALE")?.value;

  if (!existingLocale) {
    const country =
      request.headers.get("x-vercel-ip-country");

    const locale =
      localeForCountry(country);

    if (locale) {
      response.cookies.set(
        "NEXT_LOCALE",
        locale,
        {
          maxAge: 60 * 60 * 24 * 365,
          path: "/",
        }
      );
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico).*)",
  ],
};