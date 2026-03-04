import { Container } from './Container'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Portfolio</p>
          <p className="mt-2 text-lg font-semibold">{site.name}</p>
          <p className="text-sm text-muted-foreground">{site.positioning}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a className="text-muted-foreground hover:text-foreground" href={`mailto:${site.email}`}>
            Email
          </a>
          <a
            className="text-muted-foreground hover:text-foreground"
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-muted-foreground hover:text-foreground"
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </Container>
    </footer>
  )
}
