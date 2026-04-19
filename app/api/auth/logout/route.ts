// Exists because logout must do TWO things:
// 1. Tell Spring to revoke the server-side session (so the JWT is invalidated even if leaked)
// 2. Clear the browser cookies
// Both steps are best-effort: if Spring is down, we still clear local cookies so the user is logged out locally.

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { logout as apiLogout } from "@/lib/api/auth";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
  clearCookieOptions,
} from "@/lib/cookies";

export async function POST() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;
  const refreshToken = cookieStore.get(REFRESH_TOKEN_COOKIE)?.value;

  // Best-effort Spring-side revocation. Don't fail the logout if Spring is unreachable.
  if (accessToken && refreshToken) {
    try {
      await apiLogout(refreshToken, accessToken);
    } catch (error) {
      console.warn("Logout: upstream revocation failed, clearing cookies anyway", error);
    }
  }

  // Clear both cookies using matching options (same domain/path as when set).
  cookieStore.set(ACCESS_TOKEN_COOKIE, "", clearCookieOptions("/"));
  cookieStore.set(
    REFRESH_TOKEN_COOKIE,
    "",
    clearCookieOptions("/api/auth/refresh"),
  );

  return NextResponse.json({ ok: true });
}
