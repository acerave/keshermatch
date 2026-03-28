import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "fr", "es"];
const DEFAULT_LOCALE = "en";

function hasLocale(pathname: string) {
  return SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") || "";

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // ישראל → עברית
  if (host.includes("keshermatch.co.il")) {
    return NextResponse.next();
  }

  // בינלאומי → הפניה ל־/en
  if (host.includes("keshermatch.com")) {
    if (!hasLocale(pathname)) {
      const url = request.nextUrl.clone();
      url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};