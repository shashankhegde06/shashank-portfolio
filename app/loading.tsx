export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24">
        <div className="h-5 w-32 rounded-full bg-muted animate-pulse" />
        <div className="h-16 w-full max-w-3xl rounded-3xl bg-muted animate-pulse" />
        <div className="h-6 w-full max-w-2xl rounded-3xl bg-muted animate-pulse" />
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-36 rounded-3xl bg-muted animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
