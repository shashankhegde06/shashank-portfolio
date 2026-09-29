'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'
import { site, navItems } from '@/lib/site'
import { ScrollProgress } from './ScrollProgress'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection) setActiveSection(visibleSection.target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <header className={`sticky top-0 z-50 border-b border-border transition-colors ${isScrolled ? 'bg-background/95 backdrop-blur-sm' : 'bg-background'}`}>
      <ScrollProgress />
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} home`} className="group flex shrink-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center bg-primary text-xs font-bold tracking-wide text-primary-foreground">SH</span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">Shashank Hegde</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden h-full items-center gap-7 md:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} aria-current={activeSection === item.href.slice(1) ? 'location' : undefined} className="inline-flex h-full items-center border-b-2 border-transparent text-base text-muted-foreground transition hover:border-primary hover:text-primary aria-[current=location]:border-primary aria-[current=location]:text-primary">{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={site.resumeUrl} className="hidden items-center border border-primary px-4 py-2 text-sm font-semibold text-primary transition duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.98] sm:inline-flex">Resume</a>
          <button type="button" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((prev) => !prev)} className="flex h-11 w-11 items-center justify-center border border-border md:hidden">
            {isOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </button>
        </div>
      </Container>
      {isOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col py-3">
            {navItems.map((item) => <a key={item.href} href={item.href} aria-current={activeSection === item.href.slice(1) ? 'location' : undefined} onClick={() => setIsOpen(false)} className="border-b border-border py-4 text-base text-foreground last:border-0 aria-[current=location]:font-semibold aria-[current=location]:text-primary">{item.label}</a>)}
            <a href={site.resumeUrl} onClick={() => setIsOpen(false)} className="py-3 text-sm font-semibold text-primary">View resume</a>
          </Container>
        </nav>
      )}
    </header>
  )
}
