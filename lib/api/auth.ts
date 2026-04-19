// Exists because this is the ONE file that knows which Spring endpoint handles which auth flow.
// If Spring renames /v1/auth/login, only this file changes.
import "server-only";

import { apiRequest } from "@/lib/api/client";
import type {
  LoginRequest,
  MeResponse,
  RefreshRequest,
  SignupRequest,
  SignupResponse,
  TokenResponse,
} from "@/lib/api/types";

type ClientMeta = {
  clientIp?: string;
  userAgent?: string;
};

/** POST /v1/auth/signup — creates agency + first admin + returns tokens. */
export function signup(
  request: SignupRequest,
  meta: ClientMeta = {},
): Promise<SignupResponse> {
  return apiRequest<SignupResponse>("/v1/auth/signup", {
    method: "POST",
    body: request,
    ...meta,
  });
}

/** POST /v1/auth/login — tenant-scoped login. Requires tenantSlug. */
export function login(
  request: LoginRequest,
  meta: ClientMeta = {},
): Promise<TokenResponse> {
  return apiRequest<TokenResponse>("/v1/auth/login", {
    method: "POST",
    body: request,
    ...meta,
  });
}

/** POST /v1/auth/refresh — swap refresh token for new access + refresh pair. */
export function refresh(request: RefreshRequest): Promise<TokenResponse> {
  return apiRequest<TokenResponse>("/v1/auth/refresh", {
    method: "POST",
    body: request,
  });
}

/** POST /v1/auth/logout — revokes server-side session and refresh token. */
export function logout(
  refreshToken: string,
  accessToken: string,
): Promise<void> {
  return apiRequest<void>("/v1/auth/logout", {
    method: "POST",
    body: { refreshToken } satisfies RefreshRequest,
    authHeader: `Bearer ${accessToken}`,
  });
}

/** GET /v1/auth/me — requires Authorization header. Returns JWT claims. */
export function me(accessToken: string): Promise<MeResponse> {
  return apiRequest<MeResponse>("/v1/auth/me", {
    method: "GET",
    authHeader: `Bearer ${accessToken}`,
  });
}
