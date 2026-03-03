import { Container } from '../Container'
import { Section } from '../Section'
import { Reveal } from '../Reveal'
import { site } from '@/lib/site'

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <div className="text-[120px] font-display leading-none text-foreground/10">05</div>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">Contact</p>
              <h2 className="mt-6 text-3xl font-semibold md:text-4xl">
                Let’s ship intelligent software together.
              </h2>
              <p className="mt-4 text-muted-foreground">
                I’m open to full‑time roles and collaborations across backend systems, ML, and product engineering.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-border bg-background/60 px-5 py-4">
                  <span>Email</span>
                  <span className="text-muted-foreground">{site.email}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border bg-background/60 px-5 py-4">
                  <span>Location</span>
                  <span className="text-muted-foreground">{site.location}</span>
                </div>
              </div>
            </div>

            <form action={`mailto:${site.email}`} method="post" encType="text/plain" className="glass-surface outline-glow rounded-3xl border border-border p-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="name"
                  placeholder="Name"
                  aria-label="Name"
                  required
                  className="h-12 rounded-2xl border border-border bg-background/70 px-4 text-sm outline-none transition focus-visible:shadow-focus"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  required
                  className="h-12 rounded-2xl border border-border bg-background/70 px-4 text-sm outline-none transition focus-visible:shadow-focus"
                />
              </div>
              <input
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                className="h-12 w-full rounded-2xl border border-border bg-background/70 px-4 text-sm outline-none transition focus-visible:shadow-focus"
              />
              <textarea
                name="message"
                placeholder="Tell me about the project..."
                aria-label="Message"
                rows={4}
                className="w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition focus-visible:shadow-focus"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-halo transition hover:-translate-y-1"
              >
                Send message
              </button>
              <p className="text-xs text-muted-foreground">
                This form opens your email client with a prefilled message.
              </p>
            </form>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
