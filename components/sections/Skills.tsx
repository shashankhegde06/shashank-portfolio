'use client'

import { Container } from '../Container'
import { Section } from '../Section'
import { Reveal } from '../Reveal'
import { motion } from 'framer-motion'
import { skills, skillLevels } from '@/lib/site'

const skillCards = [
  { label: 'Languages', items: skills.languages },
  { label: 'Frameworks', items: skills.frameworks },
  { label: 'Databases', items: skills.databases },
  { label: 'Tools', items: skills.tools },
  { label: 'Platforms', items: skills.platforms },
  { label: 'AI Tooling', items: skills.aiTools }
]

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <div className="text-[120px] font-display leading-none text-foreground/10">02</div>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">Capability</p>
              <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
                Systems depth across every layer of delivery.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Full‑stack execution across backend reliability, ML pipelines, and clinician‑first UX.
              </p>
              <div className="mt-8 space-y-4">
                {skillLevels.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-sm font-medium">
                      <span>{item.label}</span>
                      <span className="text-muted-foreground">{item.value}%</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative grid gap-5 md:grid-cols-2"
              style={{ perspective: '1200px' }}
            >
              {skillCards.map((card, index) => (
                <div
                  key={card.label}
                  className="glass-surface outline-glow rounded-3xl border border-border p-5 transition hover:-translate-y-1"
                  style={{
                    transform: `rotateY(${index % 2 === 0 ? '-6deg' : '6deg'}) rotateX(${index % 3 === 0 ? '3deg' : '-3deg'})`
                  }}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{card.label}</p>
                  <p className="mt-3 text-sm">{card.items.join(' · ')}</p>
                </div>
              ))}
              <div className="glass-surface outline-glow rounded-3xl border border-border p-5 md:col-span-2">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Core Subjects</p>
                <p className="mt-3 text-sm">{skills.subjects.join(' · ')}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
