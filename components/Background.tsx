export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-70" />
      <div className="absolute inset-0 scene-grid opacity-30" />
      <div className="absolute inset-0 bg-noise opacity-60 mix-blend-soft-light" />
      <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-breathe" />
      <div className="absolute right-[-5%] top-[10%] h-96 w-96 rounded-full bg-accent/25 blur-3xl animate-float" />
      <div className="absolute bottom-[-20%] left-1/3 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-glowPulse" />
      <div className="absolute inset-x-0 top-24 h-32 bg-spotlight opacity-60" />
    </div>
  )
}
