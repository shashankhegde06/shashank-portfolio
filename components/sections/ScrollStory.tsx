'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform, type MotionStyle } from 'framer-motion'
import { ArrowDownIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'

const chapters = [
  {
    number: '01', label: 'Make the work visible', title: 'A job search, with a system.',
    copy: 'DevTrack brings applications, interviews, and follow-ups into one calm workspace, so the next step is always easy to find.',
    image: '/devtrack-dashboard.png', alt: 'DevTrack dashboard showing job search activity and application metrics', tag: 'DEVTRACK · DASHBOARD', color: '#bce7ce',
  },
  {
    number: '02', label: 'Keep the details close', title: 'Built for the everyday flow.',
    copy: 'A quick capture form, useful filters, and local first data make it practical to keep every opportunity up to date.',
    image: '/devtrack-add-application.png', alt: 'DevTrack add application form', tag: 'DEVTRACK · APPLICATIONS', color: '#e7c9a8',
  },
  {
    number: '03', label: 'Bring useful things together', title: 'Technology with a local point of view.',
    copy: 'KrishiMitra combines farm records with nearby market price reports and recent agriculture news for arecanut growers.',
    image: '/krishimitra-market-news.png', alt: 'KrishiMitra market prices and recent agriculture news', tag: 'KRISHIMITRA · MARKET & NEWS', color: '#d8df9a',
  },
]

export function ScrollStory() {
  const storyRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const tiltX = useSpring(useMotionValue(0), { stiffness: 150, damping: 22 })
  const tiltY = useSpring(useMotionValue(0), { stiffness: 150, damping: 22 })
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ['start start', 'end end'] })
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['2%', '-2%'])

  function tiltVisual(event: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !window.matchMedia('(hover: hover)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    tiltX.set(y * -5)
    tiltY.set(x * 6)
    event.currentTarget.style.setProperty('--glare-x', `${(x + 0.5) * 100}%`)
    event.currentTarget.style.setProperty('--glare-y', `${(y + 0.5) * 100}%`)
  }

  function resetTilt() {
    tiltX.set(0)
    tiltY.set(0)
  }

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const next = Math.min(chapters.length - 1, Math.floor(value * chapters.length))
    setActive(next)
  })

  return (
    <section ref={storyRef} className="scroll-story" aria-label="A closer look at selected projects">
      <div className="scroll-story-sticky">
        <div className="scroll-story-topline"><span>THE WORK, IN MOTION</span><span>SELECTED PERSONAL PROJECTS</span></div>
        <span className="scroll-story-ghost" aria-hidden="true">{chapters[active].number}</span>
        <div className="scroll-story-layout">
          <div className="scroll-story-visual-column">
            <motion.div className="scroll-story-visual" onMouseMove={tiltVisual} onMouseLeave={resetTilt} style={{ y: imageY, rotateX: tiltX, rotateY: tiltY, transformPerspective: 1400, '--story-accent': chapters[active].color } as MotionStyle}>
              <div className="scroll-story-orbit" aria-hidden="true"><span /><span /><span /></div>
              <div className="scroll-story-screen">
                {chapters.map((chapter, index) => (
                  <motion.div key={chapter.image} className="scroll-story-image" initial={false}
                    animate={{ opacity: active === index ? 1 : 0, scale: active === index ? 1 : 1.035 }}
                    transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.2, 0.8, 0.2, 1] }}
                    aria-hidden={active !== index}>
                    <Image src={chapter.image} alt={chapter.alt} fill sizes="(max-width: 900px) 90vw, 52vw" priority={index === 0} className="object-contain" />
                  </motion.div>
                ))}
              </div>
              <div className="scroll-story-image-label"><span>{chapters[active].tag}</span><span>{chapters[active].number} / 03</span></div>
            </motion.div>
            <div className="scroll-story-visual-note"><span>SCROLL TO MOVE THROUGH THE STORY</span><ArrowDownIcon aria-hidden="true" /></div>
          </div>
          <div className="scroll-story-copy-column">
            <p className="scroll-story-heading">Small ideas.<br /><em>Useful software.</em></p>
            <div className="scroll-story-chapters">
              {chapters.map((chapter, index) => (
                <article key={chapter.number} className={`scroll-story-chapter ${active === index ? 'is-active' : ''}`}>
                  <p className="scroll-story-chapter-index"><span>{chapter.number}</span> {chapter.label}</p>
                  <h2>{chapter.title}</h2>
                  <p className="scroll-story-chapter-copy">{chapter.copy}</p>
                </article>
              ))}
            </div>
            <Link href="#projects" className="scroll-story-link">Explore all projects <ArrowTopRightIcon aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="scroll-story-progress" aria-hidden="true"><span style={{ transform: `scaleX(${(active + 1) / chapters.length})` }} /></div>
      </div>
      <div className="scroll-story-steps" aria-hidden="true">{chapters.map((item) => <div key={item.number} />)}</div>
    </section>
  )
}
