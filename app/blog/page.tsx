import Link from 'next/link'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { getAllPosts } from '@/lib/mdx'

export const metadata = {
  title: 'Blog | Shashank Hegde',
  description: 'Notes on backend systems, APIs, and software engineering.'
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main>
      <Section>
        <Container>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold">Thoughts on engineering and applied ML.</h1>
          <p className="mt-4 text-muted-foreground">In-depth writeups, project breakdowns, and learning notes.</p>

          <div className="mt-10 grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-border bg-card/60 p-6 hover:border-foreground"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {post.date} · {post.readingTime}
                  </p>
                  <h2 className="text-2xl font-semibold">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}

