'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowTopRightIcon, Cross1Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { navItems, site } from '@/lib/site'

const commands = [
  ...navItems.map((item) => ({ ...item, description: `Jump to ${item.label.toLowerCase()}`, external: false })),
  { href: site.resumeUrl, label: 'Open resume', description: 'View or download the PDF', external: true },
  { href: `mailto:${site.email}`, label: 'Send an email', description: site.email, external: false },
  { href: site.socials.linkedin, label: 'LinkedIn profile', description: 'Connect on LinkedIn', external: true }
]

export function QuickNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [modifier, setModifier] = useState('Ctrl')
  const inputRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return commands.filter((command) =>
      `${command.label} ${command.description}`.toLowerCase().includes(normalizedQuery)
    )
  }, [query])

  useEffect(() => {
    setModifier(navigator.platform.includes('Mac') ? '⌘' : 'Ctrl')
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setIsOpen((open) => !open)
      }
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setQuery('')
      return
    }

    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    inputRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [isOpen])

  function trapTab(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Tab' || !dialogRef.current) return
    const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled])'
    ))
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (!first || !last) return

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label="Open quick navigation"
        title="Quick navigation (Ctrl or Command + K)"
        onClick={() => setIsOpen(true)}
        className="flex h-11 w-11 items-center justify-center border border-border bg-card text-foreground transition hover:border-primary hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:shadow-focus"
      >
        <MagnifyingGlassIcon aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          className="quick-nav-backdrop fixed inset-0 z-[100] flex items-start justify-center bg-black/55 px-4 pt-[12vh] backdrop-blur-sm sm:pt-[16vh]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false)
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-nav-title"
            onKeyDown={trapTab}
            className="quick-nav-dialog w-full max-w-xl overflow-hidden border border-border bg-background shadow-2xl"
          >
            <h2 id="quick-nav-title" className="sr-only">Quick navigation</h2>
            <div className="flex items-center gap-3 border-b border-border px-5">
              <MagnifyingGlassIcon className="shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Where would you like to go?"
                aria-label="Search sections and actions"
                aria-controls="quick-nav-results"
                className="h-16 min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
              />
              <kbd className="hidden border border-border px-2 py-1 text-xs text-muted-foreground sm:inline-block">ESC</kbd>
              <button
                type="button"
                aria-label="Close quick navigation"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none"
              >
                <Cross1Icon aria-hidden="true" />
              </button>
            </div>

            <ul id="quick-nav-results" aria-label="Quick navigation results" aria-live="polite" className="max-h-[min(55vh,26rem)] overflow-y-auto p-2">
              {results.length > 0 ? results.map((command) => (
                <li key={`${command.label}-${command.href}`}>
                  <a
                    href={command.href}
                    target={command.external ? '_blank' : undefined}
                    rel={command.external ? 'noreferrer' : undefined}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between gap-4 px-4 py-3 transition hover:bg-primary/10 focus-visible:bg-primary/10"
                  >
                    <span className="min-w-0">
                      <span className="block font-semibold text-foreground">{command.label}</span>
                      <span className="mt-0.5 block truncate text-sm text-muted-foreground">{command.description}</span>
                    </span>
                    {command.external && <ArrowTopRightIcon aria-hidden="true" className="shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />}
                  </a>
                </li>
              )) : (
                <li className="px-4 py-8 text-center text-sm text-muted-foreground">No matching sections or actions.</li>
              )}
            </ul>

            <div className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-muted-foreground">
              <span>Jump anywhere on the portfolio</span>
              <span><kbd className="border border-border px-1.5 py-1">{modifier}</kbd> + <kbd className="border border-border px-1.5 py-1">K</kbd></span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
