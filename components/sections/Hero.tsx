'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'
import { site } from '@/lib/site'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const copyY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -55])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.88, 1], reduceMotion ? [1, 1, 1] : [1, 0.82, 0])
  const portraitY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 76])
  const portraitScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.055])

  function movePortrait(event: React.MouseEvent<HTMLElement>) {
    if (!portraitRef.current) return
    const rect = portraitRef.current.getBoundingClientRect()
    portraitRef.current.style.setProperty('--pointer-x', `${((event.clientX - rect.left) / rect.width) * 100}%`)
    portraitRef.current.style.setProperty('--pointer-y', `${((event.clientY - rect.top) / rect.height) * 100}%`)
  }

  return (
    <section ref={heroRef} className="editorial-hero relative isolate overflow-hidden">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-topline"><span>SH / SOFTWARE ENGINEER</span><span>BASED IN BENGALURU · {new Date().getFullYear()}</span></div>
      <div className="hero-stage">
        <motion.div className="hero-copy" style={{ y: copyY, opacity: copyOpacity }}>
          <p className="hero-kicker"><i /> Building software for people who care for people</p>
          <h1><span>Shashank</span><em>Hegde</em></h1>
          <p className="hero-intro">I turn complex healthcare workflows into dependable software. Backend systems, thoughtful details, and a little bit of obsession with getting it right.</p>
          <div className="hero-actions">
            <Link href="#projects" className="hero-primary">Explore my work <ArrowDownIcon /></Link>
            <a href={site.resumeUrl} className="hero-resume">Résumé <ArrowTopRightIcon /></a>
          </div>
          <div className="hero-location"><span className="hero-status"><i /> Open to backend / .NET roles in Bengaluru or remote</span><span> C# / .NET / HEALTHCARE</span></div>
        </motion.div>
        <motion.div ref={portraitRef} className="portrait-stage" onMouseMove={movePortrait} style={{ y: portraitY, scale: portraitScale }}>
          <div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" />
          <span className="portrait-chip portrait-chip-one"><i /> C# / .NET <small>BACKEND</small></span>
          <span className="portrait-chip portrait-chip-two"><i /> HEALTHCARE <small>TECH</small></span>
          <span className="portrait-chip portrait-chip-three"><i /> BUILDER <small>BY NATURE</small></span>
          <div className="portrait-image-wrap"><Image src="/shashank-portrait.png" alt="Shashank Hegde, software engineer" fill priority sizes="(max-width: 900px) 90vw, 54vw" className="portrait-image" /></div>
          <span className="portrait-stamp">BENGALURU<br />INDIA · 2026</span>
          <span className="portrait-side-note">ENGINEER / BUILDER / CURIOUS HUMAN</span>
        </motion.div>
        <div className="hero-big-name" aria-hidden="true">SHASHANK<span>®</span></div>
      </div>
      <a href="#about" className="hero-scroll-bridge"><span className="bridge-label">THE PERSON BEHIND THE SYSTEMS</span><span className="bridge-center">Scroll to explore <i><ArrowDownIcon /></i></span><span className="bridge-coordinate">01 - 05</span></a>
    </section>
  )
}
