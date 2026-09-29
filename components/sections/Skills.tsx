import { Container } from '../Container'
import { Section } from '../Section'
import { Reveal } from '../Reveal'
import { skills } from '@/lib/site'

const skillGroups = [
  { label: 'Languages', items: skills.languages },
  { label: 'Frameworks', items: skills.frameworks },
  { label: 'Data', items: skills.databases },
  { label: 'Cloud', items: skills.platforms },
  { label: 'Tools', items: skills.tools },
  { label: 'Practices', items: skills.aiTools }
]

export function Skills() {
  return (
    <Section id="skills" className="skills-section bg-muted/45">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="max-w-sm">
              <p className="eyebrow flex items-center gap-3 text-primary"><span className="h-px w-8 bg-primary" /> Toolkit</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em]">The tools behind the work.</h2>
              <p className="mt-4 leading-7 text-muted-foreground">A practical foundation across software development, cloud platforms, and core computer science.</p>
            </div>
            <div>
              <div className="grid border-t border-border sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.label} className="skill-row border-b border-border py-5 sm:odd:pr-8 sm:even:pl-8 sm:even:border-l">
                    <p className="eyebrow text-muted-foreground">{group.label}</p>
                    <p className="mt-2 text-lg font-medium">{group.items.join(' · ')}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <p className="eyebrow text-muted-foreground">Core subjects</p>
                <p className="mt-2 text-base leading-7 text-muted-foreground">{skills.subjects.join(' · ')}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
