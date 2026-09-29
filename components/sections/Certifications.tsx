import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { certifications } from '@/lib/site'
import { Container } from '../Container'
import { Section } from '../Section'
import { Reveal } from '../Reveal'

export function Certifications() {
  return (
    <Section id="certifications" className="certifications-section bg-muted/45">
      <Container>
        <Reveal>
          <div className="certification-heading">
            <div>
              <p className="eyebrow flex items-center gap-3 text-primary"><span className="h-px w-8 bg-primary" /> Learning in practice</p>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Certifications<span className="text-primary">.</span></h2>
            </div>
            <span className="certification-count">{String(certifications.length).padStart(2, '0')} CREDENTIAL{certifications.length === 1 ? '' : 'S'}</span>
          </div>
          <div className="certification-list">
            {certifications.map((certification, index) => (
              <a key={certification.title} href={certification.credentialUrl} target="_blank" rel="noreferrer" className="certification-card">
                <span className="certification-number">0{index + 1}</span>
                <span className="certification-copy"><strong>{certification.title}</strong><span>{certification.program}</span><small>{certification.provider}</small></span>
                <span className="certification-open">View credential <ArrowTopRightIcon aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
