import { NextRequest, NextResponse } from "next/server";

import {
  localeForCountry,
  LOCALE_COOKIE,
} from "./i18n";


export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  const existingLocale =
    request.cookies.get(LOCALE_COOKIE)?.value;


  // Respect user's previous language selection
  if (!existingLocale) {
    const country =
      request.headers.get("x-vercel-ip-country");


    const locale =
      localeForCountry(country);


    if (locale) {
      response.cookies.set(
        LOCALE_COOKIE,
        locale,
        {
          maxAge: 60 * 60 * 24 * 365,
          path: "/",
          sameSite: "lax",
        }
      );
    }
  }


  return response;
}


export const config = {
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
  ],
};