// Exists because this is the first authenticated page a user sees post-login.
// Server component: reads the cookie, calls Spring /v1/auth/me directly,
// redirects to /login if the token is rejected (expired, revoked, tampered).
//
// Why server-side and not client-side fetch? Two reasons:
// 1. The cookie is httpOnly — we have to call Spring from the server anyway.
// 2. Rendering the authenticated shell on the server avoids a flash of unauthed content.

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { me } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";
import { ACCESS_TOKEN_COOKIE } from "@/lib/cookies";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Dashboard — Orchestrate",
};

// IMPORTANT: opt out of prerendering. This page reads request cookies,
// so it must run at request time, not build time.
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value;

  // Defense in depth: proxy.ts already redirects here, but if someone bypasses it
  // (direct call, proxy misconfigured, whatever) we still don't render.
  if (!accessToken) {
    redirect("/login");
  }

  let claims;
  try {
    claims = await me(accessToken);
  } catch (error) {
    if (error instanceof ApiError && error.status === 401) {
      // Token expired or revoked. Kick to login.
      // TODO: try refresh flow first before bouncing the user all the way out.
      redirect("/login");
    }
    // Spring is down or something else. Surface to the user instead of infinite redirect.
    throw error;
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold">
          Welcome, {claims.displayName}
        </h1>
        <p className="text-muted-foreground mt-1">
          You're signed in to{" "}
          <span className="text-foreground font-medium">{claims.tenant}</span>
          {" "}as{" "}
          <span className="text-foreground font-medium">{claims.role}</span>.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Session claims</CardTitle>
          <CardDescription>
            What the backend knows about this session. Dev-only debug view —
            remove before launch.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-2 text-sm">
            <dt className="text-muted-foreground">User ID</dt>
            <dd className="font-mono">{claims.sub}</dd>
            <dt className="text-muted-foreground">Email</dt>
            <dd>{claims.email}</dd>
            <dt className="text-muted-foreground">Tenant</dt>
            <dd>{claims.tenant}</dd>
            <dt className="text-muted-foreground">Agency ID</dt>
            <dd className="font-mono">{claims.agencyId}</dd>
            <dt className="text-muted-foreground">Role</dt>
            <dd>{claims.role}</dd>
            <dt className="text-muted-foreground">Session ID</dt>
            <dd className="font-mono">{claims.sid}</dd>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Next steps</CardTitle>
          <CardDescription>
            What's coming as we build out the workspace.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="text-muted-foreground ml-4 list-disc space-y-1 text-sm">
            <li>Clients module — manage agency clients</li>
            <li>Agents module — configure AI agents per client</li>
            <li>Tasks &amp; conversations — orchestration workflows</li>
            <li>Billing &amp; integrations — coming soon</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
