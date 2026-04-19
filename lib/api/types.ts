// Exists because every API shape must have a single TS definition that matches the Spring DTO exactly.
// When the backend shape changes, ONE file changes here. If these drift, the app crashes at runtime.
//
// Mirror of: com.magenc.platform.iam.api.dto & com.magenc.platform.agencies.api.dto

// ─── Requests ──────────────────────────────────────────────────────────────

export interface SignupRequest {
  tenantSlug: string;
  agencyDisplayName: string;
  email: string;
  password: string;
  displayName: string;
}

export interface LoginRequest {
  tenantSlug: string;
  email: string;
  password: string;
}

export interface DiscoveryLoginRequest {
  email: string;
  password: string;
}

export interface SwitchTenantRequest {
  targetTenantSlug: string;
}

export interface RefreshRequest {
  refreshToken: string;
}

// ─── Responses ─────────────────────────────────────────────────────────────

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
}

export interface SignupResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
  agencySlug: string;
  agencyDisplayName: string;
  userId: string;
}

export interface DiscoveryLoginResponse {
  user: {
    id: string;
    email: string;
    displayName: string;
  };
  agencies: Array<{
    slug: string;
    displayName: string;
    role: string;
    loginUrl: string;
  }>;
  discoveryToken: string;
}

export interface MeResponse {
  sub: string;
  email: string;
  displayName: string;
  tenant: string;
  agencyId: string;
  role: string;
  sid: string;
}

// ─── Error shape ───────────────────────────────────────────────────────────
// Mirror of the ProblemDetail-style response from AgencyExceptionHandler.

export interface ApiErrorBody {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  error?: string; // e.g. "RATE_LIMITED", "SLUG_ALREADY_TAKEN"
  message?: string;
}
