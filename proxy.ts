// Exists because Next.js 16 renamed middleware → proxy. This is the network boundary
// that runs BEFORE any route is rendered. Keep it lightweight: just the cookie existence check.
//
// Deep auth validation (verifying JWT signature, checking session is active) happens in
// Spring Boot when the actual API call is made. This file's only job is to redirect
// obviously-unauthed requests away from protected routes before rendering work starts.

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// IMPORTANT: cannot import from lib/cookies.ts here because that file is 'server-only'
// and proxy runs in a more restricted context. Hardcode the cookie name.
const ACCESS_TOKEN_COOKIE = "magenc_access_token";

/** Paths that require an access cookie to even render. Unauthed requests → /login. */
const PROTECTED_PREFIXES = ["/dashboard"];

/** Paths that authed users should NOT see (they get kicked to /dashboard instead). */
const AUTH_ONLY_PREFIXES = ["/login", "/signup"];

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hasSession = request.cookies.has(ACCESS_TOKEN_COOKIE);

  // Case 1: unauthed user trying to reach a protected route → redirect to /login
  if (!hasSession && PROTECTED_PREFIXES.some((p) => pathname.startsWith(p))) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Case 2: authed user on /login or /signup → redirect to /dashboard
  // (They probably bookmarked the login page. No reason to show it.)
  if (hasSession && AUTH_ONLY_PREFIXES.some((p) => pathname.startsWith(p))) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// Run the proxy only on paths that matter. Excluding /api, /_next, static files,
// and image optimization keeps us off the hot path for every asset request.
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
