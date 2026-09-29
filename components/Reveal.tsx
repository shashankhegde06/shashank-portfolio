'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({
  children,
  delay = 0,
  y = 24
}: {
  children: React.ReactNode
  delay?: number
  y?: number
}) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, y, scale: 0.985, filter: 'blur(8px)' }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-12% 0px -10% 0px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
