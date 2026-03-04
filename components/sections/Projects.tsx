import { Container } from '../Container'
import { Section } from '../Section'
import { Reveal } from '../Reveal'
import { projects } from '@/lib/site'

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Reveal>
          <div>
            <div>
              <div className="text-[120px] font-display leading-none text-foreground/10">03</div>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">Projects</p>
              <h2 className="mt-6 text-3xl font-semibold md:text-4xl">Selected engineering work.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Practical projects that reflect backend thinking, quality focus, and production readiness.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>

      <div className="mt-12 overflow-x-auto pb-8">
        <div className="flex min-w-max snap-x snap-mandatory gap-6 px-6 lg:px-12">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <article className="glass-surface outline-glow w-[320px] snap-center rounded-3xl border border-border p-6 transition hover:-translate-y-1 md:w-[440px]">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  <span>{project.period}</span>
                  <span>Case {index + 1}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{project.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {project.highlights.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.3em]">
                  {project.links.caseStudy !== '#' && (
                    <a className="text-foreground transition hover:text-primary" href={project.links.caseStudy}>
                      Case Study
                    </a>
                  )}
                  {project.links.repo !== '#' && (
                    <a className="text-muted-foreground transition hover:text-foreground" href={project.links.repo}>
                      Source
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
