"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="outline"
      className="h-10 rounded-full border-border/80 bg-brand-surface px-4 text-sm text-foreground shadow-brand hover:bg-brand-surface-strong"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="mr-2 text-base leading-none" aria-hidden="true">
        {mounted ? (isDark ? "◐" : "◑") : "◌"}
      </span>
      {mounted ? (isDark ? "Dark mode" : "Light mode") : "Theme"}
    </Button>
  )
}
