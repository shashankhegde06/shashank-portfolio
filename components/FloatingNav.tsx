'use client'

import { useEffect, useState } from 'react'
import { navItems } from '@/lib/site'
import { ThemeToggle } from './ThemeToggle'

export function FloatingNav() {
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      setVisible(currentY < lastY || currentY < 80)
      setLastY(currentY)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="neo-panel flex items-center gap-3 rounded-full px-4 py-2 shadow-halo">
        <nav className="hidden items-center gap-4 text-[10px] uppercase tracking-[0.35em] text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="md:hidden">
            <a
              href={navItems[0]?.href ?? '#about'}
              className="rounded-full border border-border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.3em]"
            >
              Start
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
