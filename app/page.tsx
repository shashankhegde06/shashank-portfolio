import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { Certifications } from '@/components/sections/Certifications'
import { ScrollStory } from '@/components/sections/ScrollStory'

export default function HomePage() {
  return (
    <main id="content" className="min-h-screen">
      <Hero />
      <About />
      <ScrollStory />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  )
}
