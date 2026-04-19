// Exists because missing env vars should crash at startup, not at the first API call.
// Server-side only. Do NOT import this from client components.
import "server-only";

function required(name: string): string {
  const value = process.env[name];
  if (!value || value.trim() === "") {
    throw new Error(
      `Missing required environment variable: ${name}. Check .env.local`,
    );
  }
  return value;
}

export const env = {
  /** Spring Boot API base URL. In dev: http://localhost:8080. In prod: https://api.orchestrate.marketing. */
  API_URL: required("MAGENC_API_URL"),
  /** Cookie domain scope. In dev: empty (host-only). In prod: .orchestrate.marketing. */
  COOKIE_DOMAIN: process.env.MAGENC_COOKIE_DOMAIN ?? "",
  /** "development" | "production" | "test" */
  NODE_ENV: process.env.NODE_ENV ?? "development",
} as const;

export const isDev = env.NODE_ENV === "development";
export const isProd = env.NODE_ENV === "production";
