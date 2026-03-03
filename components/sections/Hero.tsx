'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '../Container'
import { site, highlightStats } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 lg:pt-32">
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Award-level systems design</p>
            <h1 className="text-5xl leading-[0.92] md:text-7xl">
              The portfolio of a
              <span className="block text-shimmer animate-shimmer">precision-first engineer.</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              I build AI-assisted healthcare platforms where reliability, clinician trust, and production discipline
              are non‑negotiable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-halo transition hover:-translate-y-1"
              >
                Explore work
              </Link>
              <a
                href={site.resumeUrl}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground"
              >
                Download resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="glass-surface outline-glow rounded-[32px] border border-border p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-muted-foreground">
                <span>System telemetry</span>
                <span>2026</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold">
                Architecting resilient EHR workflows with intelligence and empathy.
              </h2>
              <div className="mt-6 grid gap-3 text-sm text-muted-foreground">
                {highlightStats.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-8 top-10 h-20 w-20 rounded-3xl border border-border bg-card/80 shadow-halo" />
            <div className="absolute -left-10 bottom-8 h-28 w-28 rounded-full border border-border bg-card/70 shadow-halo" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
