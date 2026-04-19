"use client";

// Exists because login is the primary re-entry point for existing users.
// For v1 we ask for tenantSlug explicitly. Later, when subdomain routing is live,
// we'll infer tenantSlug from the host and hide this field.

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

type FormState = {
  tenantSlug: string;
  email: string;
  password: string;
};

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") ?? "/dashboard";

  const [form, setForm] = useState<FormState>({
    tenantSlug: "",
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
          message?: string;
        } | null;
        setError(body?.message ?? "Login failed");
        return;
      }

      router.push(nextPath);
      router.refresh();
    } catch (err) {
      console.error("Login network error:", err);
      setError("Could not reach the server. Check your connection.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col gap-2">
        <Label htmlFor="tenantSlug">Workspace</Label>
        <Input
          id="tenantSlug"
          value={form.tenantSlug}
          onChange={(e) => update("tenantSlug", e.target.value.toLowerCase())}
          placeholder="acme"
          required
          autoFocus
          disabled={submitting}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          required
          disabled={submitting}
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          {/* TODO: wire up password reset flow in a later phase */}
          <span className="text-muted-foreground text-xs cursor-not-allowed">
            Forgot password?
          </span>
        </div>
        <Input
          id="password"
          type="password"
          value={form.password}
          onChange={(e) => update("password", e.target.value)}
          required
          disabled={submitting}
          autoComplete="current-password"
        />
      </div>

      <Button type="submit" className="mt-2" disabled={submitting}>
        {submitting ? "Signing in…" : "Sign in"}
      </Button>

      <p className="text-muted-foreground text-center text-sm">
        New to Orchestrate?{" "}
        <Link href="/signup" className="text-foreground underline-offset-4 hover:underline">
          Create a workspace
        </Link>
      </p>
    </form>
  );
}
