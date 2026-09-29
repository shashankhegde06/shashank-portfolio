'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowDownIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'
import { site } from '@/lib/site'

export function Hero() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 })

  function movePortrait(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    setPointer({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 })
  }

  return (
    <section className="editorial-hero relative isolate overflow-hidden" onMouseMove={movePortrait}>
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-topline"><span>SH / SOFTWARE ENGINEER</span><span>BASED IN BENGALURU · {new Date().getFullYear()}</span></div>
      <div className="hero-stage">
        <div className="hero-copy">
          <p className="hero-kicker"><i /> Building software for people who care for people</p>
          <h1><span>Shashank</span><em>Hegde</em></h1>
          <p className="hero-intro">I turn complex healthcare workflows into dependable software. Backend systems, thoughtful details, and a little bit of obsession with getting it right.</p>
          <div className="hero-actions">
            <Link href="#projects" className="hero-primary">Explore my work <ArrowDownIcon /></Link>
            <a href={site.resumeUrl} className="hero-resume">Résumé <ArrowTopRightIcon /></a>
          </div>
          <div className="hero-location"><span className="hero-status"><i /> Open to meaningful conversations</span><span> C# / .NET / HEALTHCARE</span></div>
        </div>
        <div className="portrait-stage" style={{ '--pointer-x': `${pointer.x}%`, '--pointer-y': `${pointer.y}%` } as React.CSSProperties}>
          <div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" />
          <div className="portrait-image-wrap"><Image src="/shashank-portrait.png" alt="Shashank Hegde, software engineer" fill priority sizes="(max-width: 900px) 90vw, 54vw" className="portrait-image" /></div>
          <span className="portrait-stamp">BENGALURU<br />INDIA · 2026</span>
          <span className="portrait-side-note">ENGINEER / BUILDER / CURIOUS HUMAN</span>
        </div>
        <div className="hero-big-name" aria-hidden="true">SHASHANK<span>®</span></div>
      </div>
      <a href="#about" className="hero-scroll-bridge"><span className="bridge-label">THE PERSON BEHIND THE SYSTEMS</span><span className="bridge-center">Scroll to explore <i><ArrowDownIcon /></i></span><span className="bridge-coordinate">01 — 06</span></a>
    </section>
  )
}
