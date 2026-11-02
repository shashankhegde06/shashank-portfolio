'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Container } from '../Container'
import { Section } from '../Section'
import { Reveal } from '../Reveal'
import { projects } from '@/lib/site'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

type ProjectScreenshot = { src: string; label: string; alt: string; aspect: string }
type ScreenshotViewer = { title: string; screenshots: ProjectScreenshot[]; index: number }

export function Projects() {
  const [category, setCategory] = useState<'All' | 'Professional' | 'Academic' | 'Personal'>('All')
  const [activeScreenshots, setActiveScreenshots] = useState<Record<string, number>>({})
  const [screenshotViewer, setScreenshotViewer] = useState<ScreenshotViewer | null>(null)
  const isScreenshotViewerOpen = screenshotViewer !== null
  const reduceMotion = useReducedMotion()
  const viewerRef = useRef<HTMLDivElement>(null)
  const viewerCloseRef = useRef<HTMLButtonElement>(null)
  const visibleProjects = projects.filter((project) => category === 'All' || project.category === category)
  const featured = category === 'All' || category === 'Professional' ? visibleProjects[0] : null
  const otherProjects = category === 'Academic' || category === 'Personal' ? visibleProjects : visibleProjects.slice(1)
  const filters = [
    { label: 'All work', value: 'All' as const },
    { label: 'Professional', value: 'Professional' as const },
    { label: 'Academic', value: 'Academic' as const },
    { label: 'Personal', value: 'Personal' as const }
  ]

  useEffect(() => {
    if (!screenshotViewer) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setScreenshotViewer(null)
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setScreenshotViewer((current) => current ? { ...current, index: (current.index + 1) % current.screenshots.length } : null)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setScreenshotViewer((current) => current ? { ...current, index: (current.index - 1 + current.screenshots.length) % current.screenshots.length } : null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [screenshotViewer])

  useEffect(() => {
    if (!isScreenshotViewerOpen) return
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    viewerCloseRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [isScreenshotViewerOpen])

  function trapViewerFocus(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Tab' || !viewerRef.current) return
    const focusable = Array.from(viewerRef.current.querySelectorAll<HTMLElement>('button:not([disabled])'))
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (!first || !last) return
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <Section id="projects" className="bg-muted/45">
      <Container>
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="section-index"><i /> Selected work <span>02</span></p>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Thoughtful engineering, put to work.</h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-muted-foreground">A few examples of systems and product improvements built for real healthcare and infrastructure workflows.</p>
          </div>
        </Reveal>

        <div className="mb-7 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by type">
          <span className="mr-1 text-sm text-muted-foreground">View</span>
          {filters.map((filter) => {
            const count = filter.value === 'All' ? projects.length : projects.filter((project) => project.category === filter.value).length
            const selected = category === filter.value
            return (
              <motion.button
                key={filter.value}
                type="button"
                aria-pressed={selected}
                onClick={() => setCategory(filter.value)}
                className={`relative isolate inline-flex min-h-11 items-center gap-2 overflow-hidden border px-4 text-sm font-medium transition duration-200 active:scale-[0.98] ${selected ? 'border-primary text-primary-foreground' : 'border-border bg-card text-muted-foreground hover:border-primary hover:text-primary'}`}
              >
                {selected && <motion.span layoutId="project-filter-highlight" className="absolute inset-0 z-0 bg-primary" transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }} />}
                <span className="relative z-10">{filter.label}</span><span className={`relative z-10 ${selected ? 'text-primary-foreground/70' : 'text-muted-foreground/70'}`}>{count}</span>
              </motion.button>
            )
          })}
          <span className="sr-only" aria-live="polite">Showing {visibleProjects.length} projects</span>
        </div>

        {featured && (
          <Reveal>
            <article className="featured-project overflow-hidden border border-border bg-card lg:grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="featured-project-art relative flex min-h-[22rem] flex-col justify-between overflow-hidden p-7 text-white sm:p-10">
                <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '34px 34px' }} />
                <div className="relative flex items-center justify-between text-sm uppercase tracking-[0.16em] text-white/75"><span>Product workflow</span><span>01</span></div>
                <div className="relative max-w-sm">
                  <span className="inline-flex border border-white/30 px-3 py-1.5 text-sm text-white/85">Task center</span>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3 bg-white p-4 text-foreground shadow-lg">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                      <div className="min-w-0 flex-1"><p className="text-base font-semibold">Assigned to me</p><p className="mt-1 text-sm text-muted-foreground">Provider task view</p></div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">Open</span>
                    </div>
                    <div className="ml-7 flex items-center gap-3 border border-white/25 bg-white/10 p-3 backdrop-blur-sm">
                      <span className="flex h-7 w-7 items-center justify-center bg-accent text-primary">!</span>
                      <div><p className="text-base font-medium">Priority routing</p><p className="text-sm text-white/75">Assigned and unassigned tasks</p></div>
                    </div>
                  </div>
                </div>
                <p className="relative text-sm text-white/75">Greenway Health | 2026</p>
              </div>

              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground"><span>{featured.period}</span><span className="h-1 w-1 rounded-full bg-primary" /><span>Professional project</span></div>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{featured.title}</h3>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{featured.description}</p>
                <ul className="mt-6 space-y-3 text-base leading-7 text-muted-foreground">
                  {featured.highlights.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /><span>{item}</span></li>)}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">{featured.tags.map((tag) => <span key={tag} className="border border-border px-3 py-2 text-sm text-muted-foreground">{tag}</span>)}</div>
              </div>
            </article>
          </Reveal>
        )}

        <motion.div layout className="relative mt-5 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
          {otherProjects.map((project, index) => {
            const screenshotIndex = activeScreenshots[project.title] ?? 0
            const screenshot = project.screenshots[screenshotIndex]

            return (
            <motion.div
              key={project.title}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.35, delay: reduceMotion ? 0 : index * 0.045 }}
              className="h-full"
            >
              <article className="project-card group flex h-full flex-col border border-border bg-card p-6 transition duration-200 hover:-translate-y-1 hover:border-primary/50 sm:p-8">
                {screenshot && (
                  <div className="mb-6 overflow-hidden border border-border bg-muted">
                    <motion.div
                      key={`${project.title}-${screenshotIndex}`}
                      initial={reduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: reduceMotion ? 0.01 : 0.22 }}
                      className={`relative overflow-hidden ${screenshot.aspect === 'standard' ? 'aspect-[4/3]' : 'aspect-[16/9]'}`}
                    >
                      <button
                        type="button"
                        onClick={() => setScreenshotViewer({ title: project.title, screenshots: project.screenshots, index: screenshotIndex })}
                        aria-label={`Enlarge ${project.title} ${screenshot.label} screenshot`}
                        className="absolute inset-0 cursor-zoom-in text-left focus-visible:outline-none"
                      >
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                        />
                        <span className="absolute bottom-3 left-3 bg-background/90 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur-sm">{screenshot.label} preview · click to enlarge</span>
                      </button>
                    </motion.div>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-3 py-2.5">
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Screenshots</span>
                      <div className="flex gap-1.5" role="group" aria-label={`Choose ${project.title} screenshot`}>
                        {project.screenshots.map((item, itemIndex) => (
                          <button
                            key={item.src}
                            type="button"
                            aria-pressed={screenshotIndex === itemIndex}
                            onClick={() => setActiveScreenshots((current) => ({ ...current, [project.title]: itemIndex }))}
                            className={`min-h-9 border px-2.5 text-xs font-medium transition ${screenshotIndex === itemIndex ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'}`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground"><span>{project.period}</span><span className="font-mono">0{index + (category === 'Academic' || category === 'Personal' ? 1 : 2)}</span></div>
                <h3 className="mt-6 max-w-md text-2xl font-semibold tracking-[-0.025em]">{project.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{project.description}</p>
                <ul className="mt-5 flex-1 space-y-3 text-base leading-7 text-muted-foreground">
                  {project.highlights.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /><span>{item}</span></li>)}
                </ul>
                <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-5">{project.tags.map((tag) => <span key={tag} className="text-sm font-medium text-muted-foreground">{tag}</span>)}</div>
                {project.links.repo !== '#' && <a href={project.links.repo} target="_blank" rel="noreferrer" className="project-repo-link mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary">GitHub repository <ArrowTopRightIcon aria-hidden="true" /></a>}
              </article>
            </motion.div>
          )
          })}
          </AnimatePresence>
        </motion.div>
        {screenshotViewer && (
          <div
            className="screenshot-viewer-backdrop fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setScreenshotViewer(null)
            }}
          >
            <div
              ref={viewerRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${screenshotViewer.title} screenshot viewer`}
              onKeyDown={trapViewerFocus}
              className="screenshot-viewer-dialog relative flex h-[min(88vh,56rem)] max-h-full w-full max-w-6xl flex-col overflow-hidden border border-white/15 bg-[#111210] text-white shadow-2xl"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold sm:text-base">{screenshotViewer.title}</p>
                  <p className="mt-0.5 text-xs text-white/55">{screenshotViewer.screenshots[screenshotViewer.index].label} · {screenshotViewer.index + 1} of {screenshotViewer.screenshots.length}</p>
                </div>
                <button
                  ref={viewerCloseRef}
                  type="button"
                  onClick={() => setScreenshotViewer(null)}
                  aria-label="Close screenshot viewer"
                  className="flex h-10 shrink-0 items-center gap-2 border border-white/20 px-3 text-sm transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-none"
                >
                  <span aria-hidden="true">×</span><span className="hidden sm:inline">Close</span>
                </button>
              </div>
              <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black/35 p-3 sm:p-6">
                <Image
                  key={screenshotViewer.screenshots[screenshotViewer.index].src}
                  src={screenshotViewer.screenshots[screenshotViewer.index].src}
                  alt={screenshotViewer.screenshots[screenshotViewer.index].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-contain"
                />
                {screenshotViewer.screenshots.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous screenshot"
                      onClick={() => setScreenshotViewer((current) => current ? { ...current, index: (current.index - 1 + current.screenshots.length) % current.screenshots.length } : null)}
                      className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl transition hover:bg-primary sm:left-5"
                    >‹</button>
                    <button
                      type="button"
                      aria-label="Next screenshot"
                      onClick={() => setScreenshotViewer((current) => current ? { ...current, index: (current.index + 1) % current.screenshots.length } : null)}
                      className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl transition hover:bg-primary sm:right-5"
                    >›</button>
                  </>
                )}
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-xs text-white/55 sm:px-6">
                <span>Use ← and → to browse</span>
                <span>ESC to close</span>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  )
}
