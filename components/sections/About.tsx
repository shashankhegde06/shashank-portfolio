import { Container } from '../Container'
import { Section } from '../Section'
import { Reveal } from '../Reveal'
import { education } from '@/lib/site'

export function About() {
  return (
    <Section id="about" className="about-section">
      <span className="section-watermark" aria-hidden="true">01</span>
      <Container>
        <div className="about-layout">
          <Reveal>
            <div className="about-heading">
              <p className="section-index"><i /> A little about me <span>01 / 05</span></p>
              <h2>Good software<br />starts with <em>people.</em></h2>
              <p className="about-aside">Curiosity is the first tool I reach for.</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="about-story">
              <p className="about-lede">I’m a software engineer focused on backend development with C# and .NET, building and supporting healthcare software.</p>
              <p>My journey began with Java and Python at university before I moved into the Microsoft stack and cloud-based development. My work has included API design, data migration, test automation, and production workflows. I enjoy understanding how systems work under the hood and helping teammates turn complex problems into practical solutions.</p>
              <p className="about-small">Outside work, I enjoy tinkering with new ideas, playing sports, travelling, and the occasional sing.</p>
              <div className="education-grid">
                {education.map((item, index) => (
                  <article key={item.degree} className="education-card">
                    <span className="education-number">0{index + 1}</span>
                    <p className="education-degree">{item.degree}</p>
                    <p>{item.school}</p>
                    <span className="education-year">{item.period} <i /> {item.score}</span>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
