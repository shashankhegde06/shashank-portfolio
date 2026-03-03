import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.date
  }))

  return [
    { url: site.url, lastModified: new Date().toISOString() },
    { url: `${site.url}/blog`, lastModified: new Date().toISOString() },
    ...posts
  ]
}
