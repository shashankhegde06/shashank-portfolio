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
            <div className="space-y-2">
              <p className="text-2xl font-semibold md:text-3xl">{site.name}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                {site.role} | {site.location}
              </p>
            </div>
            <h1 className="text-5xl leading-[0.92] md:text-7xl">
              I contribute to backend engineering
              <span className="block text-shimmer animate-shimmer">for real-world healthcare workflows.</span>
            </h1>
            <p className="text-sm font-medium tracking-wide text-foreground/80">
              I work like I ride: steady on the surface, careful under the hood.
            </p>
            <p className="max-w-2xl text-lg text-muted-foreground">
              I build maintainable backend systems in C# and .NET, build cross-platform apps with .NET MAUI, and support
              AWS deployments in production environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-halo transition hover:-translate-y-1"
              >
                Explore work
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground"
              >
                Get in touch
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
                <span>Profile snapshot</span>
                <span>2026</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold">
                Engineering focused on reliability, clean code, and long-term maintainability.
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

