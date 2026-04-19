// Exists because the browser can't hit Spring directly with a Bearer token
// (the token is in an httpOnly cookie that Spring doesn't know about).
// This handler bridges: it reads the cookie and makes the authenticated call to Spring.

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { me } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";
import { ACCESS_TOKEN_COOKIE } from "@/lib/cookies";

export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: "UNAUTHENTICATED", message: "No session" },
      { status: 401 },
    );
  }

  try {
    const claims = await me(accessToken);
    return NextResponse.json(claims);
  } catch (error) {
    if (error instanceof ApiError) {
      // 401 from Spring means the token is expired or revoked — treat as logged out.
      // Client code should redirect to /login on 401 from this endpoint.
      return NextResponse.json(
        { error: error.code ?? "AUTH_FAILED", message: error.message },
        { status: error.status },
      );
    }
    console.error("Me route unexpected error:", error);
    return NextResponse.json(
      { error: "UPSTREAM_UNAVAILABLE", message: "Could not verify session" },
      { status: 502 },
    );
  }
}
