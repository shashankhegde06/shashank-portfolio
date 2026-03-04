import { Container } from '../Container'
import { Section } from '../Section'
import { Reveal } from '../Reveal'
import { experience, courses } from '@/lib/site'

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <div className="text-[120px] font-display leading-none text-foreground/10">04</div>
              <p className="mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">Experience</p>
              <h2 className="mt-6 text-3xl font-semibold md:text-4xl">Professional experience as a software engineer.</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                {experience.map((item) => (
                  <div key={item.role} className="glass-surface outline-glow rounded-3xl border border-border p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      <span>{item.company}</span>
                      <span>{item.period}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold">{item.role}</h3>
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>- {bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="glass-surface outline-glow rounded-3xl border border-border p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Coursework</p>
                <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                  {courses.map((course) => (
                    <div key={course.title}>
                      <p className="font-semibold text-foreground">{course.title}</p>
                      <p>{course.provider}</p>
                      <p>{course.focus}</p>
                      <p>{course.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
