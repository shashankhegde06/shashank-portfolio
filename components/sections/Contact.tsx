'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowTopRightIcon, CheckIcon, CopyIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Container } from '../Container'
import { Section } from '../Section'
import { Reveal } from '../Reveal'
import { site } from '@/lib/site'

export function Contact() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const resetTimer = useRef<number | null>(null)

  useEffect(() => () => {
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current)
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopyState('copied')
    } catch {
      setCopyState('failed')
    }

    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current)
    resetTimer.current = window.setTimeout(() => setCopyState('idle'), 2400)
  }

  const copyLabel = copyState === 'copied' ? 'Copied' : copyState === 'failed' ? 'Try again' : 'Copy email'

  return (
    <Section id="contact" className="contact-section bg-primary text-primary-foreground">
      <Container>
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow flex items-center gap-3 text-accent"><span className="h-px w-8 bg-accent" /> Get in touch</p>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">Let’s build something that matters.</h2>
              <p className="mt-5 max-w-xl leading-7 text-primary-foreground/75">Open to thoughtful conversations about software engineering, healthcare technology, and good product work.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${site.email}`} className="group inline-flex min-h-12 items-center gap-3 border border-primary-foreground/35 px-5 py-3 text-base font-semibold transition hover:border-accent hover:bg-primary-foreground/5">
                <EnvelopeClosedIcon aria-hidden="true" /> {site.email} <ArrowTopRightIcon aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copyState === 'copied' ? 'Email address copied' : 'Copy email address'}
                title={copyState === 'failed' ? 'Clipboard access failed. Try again.' : copyLabel}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-primary-foreground/35 px-4 py-3 text-base font-semibold transition hover:border-accent hover:bg-primary-foreground/5 active:scale-[0.98]"
              >
                {copyState === 'copied' ? <CheckIcon aria-hidden="true" /> : <CopyIcon aria-hidden="true" />}
                {copyLabel}
              </button>
              <span className="sr-only" role="status" aria-live="polite">
                {copyState === 'copied' ? 'Email address copied to clipboard.' : copyState === 'failed' ? 'Could not copy email address.' : ''}
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
