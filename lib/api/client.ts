// Exists because EVERY request to Spring should go through this file.
// It centralizes base URL, error parsing, and typed responses.
// Server-side only: uses env.API_URL which isn't exposed to the browser.
import "server-only";

import { env } from "@/lib/env";
import type { ApiErrorBody } from "@/lib/api/types";

/**
 * Error class thrown when Spring returns a non-2xx response.
 * Preserves the status code and parsed error body so callers can branch on either.
 */
export class ApiError extends Error {
  readonly status: number;
  readonly body: ApiErrorBody | null;

  constructor(status: number, body: ApiErrorBody | null, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }

  /** Convenience: error code from the Spring response body, e.g. "SLUG_ALREADY_TAKEN". */
  get code(): string | undefined {
    return this.body?.error ?? undefined;
  }
}

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  /** Bearer token or cookie-derived auth. Pass in explicitly; we never reach into cookies() from here. */
  authHeader?: string;
  /** Pass through caller's IP and UA to Spring so the audit log records real values. */
  clientIp?: string;
  userAgent?: string;
};

/**
 * Low-level request primitive. Returns parsed JSON on 2xx, throws ApiError otherwise.
 * The generic T is the expected response shape — the caller asserts this, we don't runtime-validate.
 */
export async function apiRequest<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const url = `${env.API_URL}${path}`;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (options.authHeader) headers["Authorization"] = options.authHeader;
  if (options.clientIp) headers["X-Forwarded-For"] = options.clientIp;
  if (options.userAgent) headers["User-Agent"] = options.userAgent;

  const response = await fetch(url, {
    method: options.method ?? "GET",
    headers,
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
    // IMPORTANT: Next caches fetch by default. Auth calls must NEVER be cached.
    cache: "no-store",
  });

  if (!response.ok) {
    const errorBody = await safeParseJson<ApiErrorBody>(response);
    throw new ApiError(
      response.status,
      errorBody,
      errorBody?.message ?? errorBody?.detail ?? `API ${response.status}`,
    );
  }

  // 204 No Content — return empty object cast to T. Caller's contract responsibility.
  if (response.status === 204) return {} as T;

  return (await response.json()) as T;
}

async function safeParseJson<T>(response: Response): Promise<T | null> {
  try {
    return (await response.json()) as T;
  } catch {
    return null;
  }
}
