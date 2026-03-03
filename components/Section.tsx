import { cn } from './cn'

export function Section({
  id,
  className,
  children
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn('relative isolate py-24 md:py-36', className)}>
      {children}
    </section>
  )
}
