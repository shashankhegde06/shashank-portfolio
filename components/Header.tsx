'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'
import { site, navItems } from '@/lib/site'
import { ScrollProgress } from './ScrollProgress'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <ScrollProgress />
      <div
        className={`border-b border-border transition-all ${
          isScrolled ? 'bg-background/90 backdrop-blur' : 'bg-transparent'
        }`}
      >
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
            {site.name.split(' ')[0]}
          </Link>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.25em] md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={site.resumeUrl}
              className="hidden rounded-full border border-border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground transition hover:border-foreground md:inline-flex"
            >
              Resume
            </a>
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 md:hidden"
            >
              <span className="relative h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-4 bg-foreground transition ${
                    isOpen ? 'translate-y-[5px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[5px] h-0.5 w-4 bg-foreground transition ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[10px] h-0.5 w-4 bg-foreground transition ${
                    isOpen ? '-translate-y-[5px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </Container>
      </div>

      {isOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur md:hidden">
          <Container className="flex flex-col gap-6 py-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  )
}
