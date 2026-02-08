import { NextRequest, NextResponse } from 'next/server';

const LOCALES = ['en', 'fa', 'ps'] as const;

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hasLocale = LOCALES.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));

  if (!hasLocale) {
    const redirectPath = pathname === '/' ? '/en' : `/en${pathname}`;
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon|logo|.*\\.).*)'],
};
