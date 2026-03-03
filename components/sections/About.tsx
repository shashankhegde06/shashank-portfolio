import { Container } from '../Container'
import { Section } from '../Section'
import { Reveal } from '../Reveal'
import { strengths, education, differentiators } from '@/lib/site'

export function About() {
  return (
    <Section id="about">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr]">
            <div className="relative">
              <div className="text-[120px] font-display leading-none text-foreground/10">01</div>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">About</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="glass-surface outline-glow rounded-3xl border border-border p-6">
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Precision engineering for clinician‑first experiences.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground">
                  I build AI-assisted healthcare platforms where reliability, safety, and operational clarity shape
                  every interaction. My work balances system rigor with human‑centered product design.
                </p>
                <div className="mt-6 grid gap-3">
                  {strengths.map((item) => (
                    <div key={item} className="rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-surface outline-glow rounded-3xl border border-border p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Differentiators</p>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    {differentiators.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="glass-surface outline-glow rounded-3xl border border-border p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Education</p>
                  <div className="mt-4 space-y-4">
                    {education.map((item) => (
                      <div key={item.degree}>
                        <p className="text-sm font-semibold">{item.degree}</p>
                        <p className="text-xs text-muted-foreground">{item.school}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.period} · {item.score}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
