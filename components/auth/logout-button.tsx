"use client";

// Exists because logout needs: (1) a POST call to clear cookies, (2) a router refresh
// to re-run the proxy check and kick the user back to /login.
// Separate client component so the surrounding layout can stay a server component.

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onClick() {
    setLoading(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (err) {
      console.warn("Logout request failed, navigating anyway:", err);
    }
    // Either way, the cookie should be gone. Push + refresh makes the proxy redirect to /login.
    router.push("/login");
    router.refresh();
  }

  return (
    <Button variant="outline" size="sm" onClick={onClick} disabled={loading}>
      {loading ? "Signing out…" : "Sign out"}
    </Button>
  );
}
