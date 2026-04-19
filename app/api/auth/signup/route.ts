// Exists because the browser must NEVER see the refresh token.
// This route handler is the trusted server-side boundary: it calls Spring,
// strips the tokens from the response body, and sets them as httpOnly cookies.
// The browser only ever receives "ok: true" and lets the cookie do the work.

import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";

import { signup } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";
import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
  accessCookieOptions,
  refreshCookieOptions,
} from "@/lib/cookies";
import type { SignupRequest } from "@/lib/api/types";

export async function POST(req: Request) {
  // 1. Parse and minimally validate the browser's request.
  //    The full validation is on the Spring side; here we just check shape.
  let body: SignupRequest;
  try {
    body = (await req.json()) as SignupRequest;
  } catch {
    return NextResponse.json(
      { error: "INVALID_JSON", message: "Request body must be JSON" },
      { status: 400 },
    );
  }

  // 2. Gather client metadata for the Spring audit log.
  //    x-forwarded-for is set by the load balancer / Vercel edge.
  const headerList = await headers();
  const clientIp =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const userAgent = headerList.get("user-agent") ?? "unknown";

  // 3. Call Spring. If it throws, translate to an HTTP response the browser understands.
  try {
    const result = await signup(body, { clientIp, userAgent });

    // 4. Set the httpOnly cookies. The browser will include them on subsequent requests.
    const cookieStore = await cookies();
    cookieStore.set(
      ACCESS_TOKEN_COOKIE,
      result.accessToken,
      accessCookieOptions(result.expiresIn),
    );
    cookieStore.set(
      REFRESH_TOKEN_COOKIE,
      result.refreshToken,
      // Refresh tokens typically last 30 days. Spring controls this; 30 days is a safe default here.
      refreshCookieOptions(60 * 60 * 24 * 30),
    );

    // 5. Return safe metadata — NOT the tokens.
    return NextResponse.json({
      ok: true,
      agencySlug: result.agencySlug,
      agencyDisplayName: result.agencyDisplayName,
      userId: result.userId,
    });
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        {
          error: error.code ?? "SIGNUP_FAILED",
          message: error.message,
          detail: error.body?.detail,
        },
        { status: error.status },
      );
    }
    // Network errors, DNS failures, etc.
    console.error("Signup route unexpected error:", error);
    return NextResponse.json(
      {
        error: "UPSTREAM_UNAVAILABLE",
        message: "Could not reach the authentication service. Try again.",
      },
      { status: 502 },
    );
  }
}
