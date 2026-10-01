import { Container } from '../Container'
import { Section } from '../Section'
import { Reveal } from '../Reveal'
import { experience, courses } from '@/lib/site'

export function Experience() {
  return (
    <Section id="experience" className="experience-section">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="max-w-sm">
              <p className="section-index"><i /> Experience <span>03</span></p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em]">Growing with the work.</h2>
              <p className="mt-4 leading-7 text-muted-foreground">From an engineering internship to building production software for healthcare teams.</p>
              <div className="mt-10 border-t border-border pt-6">
                <p className="eyebrow text-muted-foreground">Continued learning</p>
                <div className="mt-4 space-y-4">
                  {courses.map((course) => (
                    <div key={course.title}>
                      <p className="text-base font-semibold">{course.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{course.provider} | {course.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-border">
              {experience.map((item) => (
                <article key={item.role} className="grid gap-4 border-b border-border py-7 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:py-9">
                  <div>
                    <p className="text-sm font-semibold text-primary">{item.period}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xl font-semibold tracking-tight">{item.role}</h3>
                      <span className="text-sm text-muted-foreground">{item.company}</span>
                    </div>
                    <ul className="mt-5 space-y-3 text-base leading-7 text-muted-foreground">
                      {item.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span aria-hidden="true" className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-primary" /><span>{bullet}</span></li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
