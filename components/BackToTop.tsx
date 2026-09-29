'use client'

import { useEffect, useState } from 'react'
import { ChevronUpIcon } from '@radix-ui/react-icons'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const shouldShow = window.scrollY > 640 && window.scrollY < maxScroll - 240
      setVisible((current) => current === shouldShow ? current : shouldShow)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)
    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      })}
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center border border-primary bg-primary text-primary-foreground shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-foreground active:translate-y-0 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <ChevronUpIcon aria-hidden="true" />
    </button>
  )
}
