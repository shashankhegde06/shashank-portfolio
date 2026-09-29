import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { frontmatter, content } = getPostBySlug(slug)

  return (
    <main>
      <Section>
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{frontmatter.date}</p>
          <h1 className="mt-4 text-4xl font-semibold">{frontmatter.title}</h1>
          <p className="mt-4 text-muted-foreground">{frontmatter.excerpt}</p>
          <article className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
            <MDXRemote source={content} />
          </article>
        </Container>
      </Section>
    </main>
  )
}

