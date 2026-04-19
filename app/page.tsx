// Exists as the marketing root for now. Will eventually redirect to a real marketing site
// or detect the host and route to login based on tenant subdomain.

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-8 p-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Orchestrate</h1>
        <p className="text-muted-foreground mt-4">
          AI-powered orchestration for modern marketing agencies.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button asChild>
          <Link href="/signup">Create workspace</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/login">Sign in</Link>
        </Button>
      </div>
    </div>
  );
}
