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
      initial={reduced ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -10% 0px' }}
      transition={{ duration: 0.9, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
