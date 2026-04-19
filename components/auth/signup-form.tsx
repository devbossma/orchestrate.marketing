"use client";

// Exists because signup is a user-facing form with client-side validation.
// Uses native React state rather than react-hook-form to keep dependencies minimal for v1.
// If validation complexity grows (conditional fields, cross-field rules), migrate to RHF+Zod later.

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

type FormState = {
  agencyDisplayName: string;
  tenantSlug: string;
  displayName: string;
  email: string;
  password: string;
};

const initial: FormState = {
  agencyDisplayName: "",
  tenantSlug: "",
  displayName: "",
  email: "",
  password: "",
};

/** Keep in sync with AgencySlug.java validation regex. */
const SLUG_PATTERN = /^[a-z0-9_]{3,63}$/;

export function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  /** Auto-generate a slug from the agency name as the user types. User can override. */
  function handleAgencyNameChange(value: string) {
    const next: Partial<FormState> = { agencyDisplayName: value };
    // Only auto-fill the slug if the user hasn't customized it.
    if (form.tenantSlug === "" || form.tenantSlug === slugify(form.agencyDisplayName)) {
      next.tenantSlug = slugify(value);
    }
    setForm((prev) => ({ ...prev, ...next }));
  }

  function validate(): string | null {
    if (!form.agencyDisplayName.trim()) return "Agency name is required";
    if (!SLUG_PATTERN.test(form.tenantSlug)) {
      return "Workspace URL must be 3-63 characters, lowercase letters, numbers, or underscores";
    }
    if (!form.displayName.trim()) return "Your name is required";
    if (!form.email.includes("@")) return "Enter a valid email address";
    if (form.password.length < 12) return "Password must be at least 12 characters";
    return null;
  }

  async function onSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
          message?: string;
        } | null;
        setError(body?.message ?? "Signup failed. Try again.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      console.error("Signup network error:", err);
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
        <Label htmlFor="agencyDisplayName">Agency name</Label>
        <Input
          id="agencyDisplayName"
          value={form.agencyDisplayName}
          onChange={(e) => handleAgencyNameChange(e.target.value)}
          placeholder="Acme Marketing"
          required
          autoFocus
          disabled={submitting}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="tenantSlug">Workspace URL</Label>
        <div className="flex items-center gap-2">
          <Input
            id="tenantSlug"
            value={form.tenantSlug}
            onChange={(e) => update("tenantSlug", e.target.value.toLowerCase())}
            placeholder="acme"
            required
            disabled={submitting}
            pattern="^[a-z0-9_]{3,63}$"
          />
          <span className="text-muted-foreground text-sm whitespace-nowrap">
            .orchestrate.marketing
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="displayName">Your name</Label>
        <Input
          id="displayName"
          value={form.displayName}
          onChange={(e) => update("displayName", e.target.value)}
          placeholder="Jane Smith"
          required
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
          placeholder="jane@acme.com"
          required
          disabled={submitting}
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={form.password}
          onChange={(e) => update("password", e.target.value)}
          required
          disabled={submitting}
          autoComplete="new-password"
          minLength={12}
        />
        <p className="text-muted-foreground text-xs">
          Minimum 12 characters.
        </p>
      </div>

      <Button type="submit" className="mt-2" disabled={submitting}>
        {submitting ? "Creating your workspace…" : "Create workspace"}
      </Button>

      <p className="text-muted-foreground text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-foreground underline-offset-4 hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 63);
}
