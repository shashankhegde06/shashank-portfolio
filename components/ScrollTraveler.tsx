'use client'

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

export function ScrollTraveler() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 })
  const markerTop = useTransform(progress, [0, 1], ['0%', '100%'])
  const orbit = useTransform(progress, [0, 1], [0, 360])

  if (reduceMotion) return null

  return (
    <div className="scroll-traveler" aria-hidden="true">
      <div className="scroll-traveler-track">
        <span className="scroll-traveler-track-glow" />
      </div>
      <motion.div className="scroll-traveler-marker" style={{ top: markerTop, x: '-50%', y: '-50%' }}>
        <motion.div className="scroll-traveler-orbit" style={{ rotate: orbit }}>
          <span />
        </motion.div>
        <span className="scroll-traveler-core" />
      </motion.div>
    </div>
  )
}
