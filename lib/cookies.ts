// Exists because cookie name and options MUST be identical in every place they're set/read/cleared.
// A drift here is a silent logout bug. Single source of truth.
import "server-only";

import { env, isProd } from "@/lib/env";

/** The cookie name that holds our access JWT. Scoped to httpOnly on the client. */
export const ACCESS_TOKEN_COOKIE = "magenc_access_token";

/** The cookie name that holds our refresh token. Separate cookie, separate lifetime. */
export const REFRESH_TOKEN_COOKIE = "magenc_refresh_token";

/**
 * Options for the access cookie. Short-lived (matches JWT TTL).
 * `maxAge` is set at the callsite based on what the API returns.
 */
export function accessCookieOptions(maxAgeSeconds: number) {
  return {
    httpOnly: true,
    secure: isProd,
    // `lax` is right for the signup/login flow because the POST comes from the same origin.
    // If we ever enable cross-origin POST from the marketing site, bump to `none` + `secure`.
    sameSite: "lax" as const,
    path: "/",
    domain: env.COOKIE_DOMAIN || undefined,
    maxAge: maxAgeSeconds,
  };
}

/** Options for the refresh cookie. Longer-lived than access. */
export function refreshCookieOptions(maxAgeSeconds: number) {
  return {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax" as const,
    // Scoped narrowly: refresh cookie is ONLY sent to the refresh endpoint.
    // Reduces blast radius if it's ever leaked through XSS in an image request.
    path: "/api/auth/refresh",
    domain: env.COOKIE_DOMAIN || undefined,
    maxAge: maxAgeSeconds,
  };
}

/** Options used to CLEAR a cookie. Must match the domain/path used to set it. */
export function clearCookieOptions(path: string = "/") {
  return {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax" as const,
    path,
    domain: env.COOKIE_DOMAIN || undefined,
    maxAge: 0,
  };
}
