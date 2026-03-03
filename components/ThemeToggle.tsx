'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-10 w-16 rounded-full border border-border bg-card/60" />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative h-10 w-16 rounded-full border border-border bg-card/70 transition hover:border-foreground focus-visible:outline-none focus-visible:shadow-focus"
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`absolute top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-foreground transition ${
          isDark ? 'left-1' : 'left-8'
        }`}
      />
      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        D
      </span>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        L
      </span>
    </button>
  )
}
