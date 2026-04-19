// Exists for the same reason as signup/route.ts: isolate token handling from the browser.
// Difference: login requires tenantSlug. Browser knows it via subdomain or query param.

import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";

import { login } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
  accessCookieOptions,
  refreshCookieOptions,
} from "@/lib/cookies";
import type { LoginRequest } from "@/lib/api/types";

export async function POST(req: Request) {
  let body: LoginRequest;
  try {
    body = (await req.json()) as LoginRequest;
  } catch {
    return NextResponse.json(
      { error: "INVALID_JSON", message: "Request body must be JSON" },
      { status: 400 },
    );
  }

  const headerList = await headers();
  const clientIp =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const userAgent = headerList.get("user-agent") ?? "unknown";

  try {
    const result = await login(body, { clientIp, userAgent });

    const cookieStore = await cookies();
    cookieStore.set(
      ACCESS_TOKEN_COOKIE,
      result.accessToken,
      accessCookieOptions(result.expiresIn),
    );
    cookieStore.set(
      REFRESH_TOKEN_COOKIE,
      result.refreshToken,
      refreshCookieOptions(60 * 60 * 24 * 30),
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ApiError) {
      // 401 from Spring = bad credentials. Normalize the message so we don't leak whether
      // the email exists (timing-safe login is handled server-side, message is for the user).
      const message =
        error.status === 401
          ? "Invalid email or password"
          : error.message;
      return NextResponse.json(
        {
          error: error.code ?? "LOGIN_FAILED",
          message,
          detail: error.body?.detail,
        },
        { status: error.status },
      );
    }
    console.error("Login route unexpected error:", error);
    return NextResponse.json(
      {
        error: "UPSTREAM_UNAVAILABLE",
        message: "Could not reach the authentication service. Try again.",
      },
      { status: 502 },
    );
  }
}
