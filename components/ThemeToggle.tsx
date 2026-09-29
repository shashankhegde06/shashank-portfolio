'use client'

import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'
  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? 'light' : 'dark'} theme` : 'Toggle color theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-11 w-11 items-center justify-center border border-border bg-card text-foreground transition duration-200 hover:border-primary hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:shadow-focus"
    >
      {mounted && isDark ? <SunIcon className="transition-transform duration-300" /> : <MoonIcon className="transition-transform duration-300" />}
    </button>
  )
}
