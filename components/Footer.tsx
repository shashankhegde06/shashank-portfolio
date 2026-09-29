import { Container } from './Container'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border py-7">
      <Container className="flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. Built with care.</p>
        <nav aria-label="Social links" className="flex gap-5">
          <a className="transition hover:text-primary" href={site.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="transition hover:text-primary" href={site.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="transition hover:text-primary" href={`mailto:${site.email}`}>Email</a>
        </nav>
      </Container>
    </footer>
  )
}
