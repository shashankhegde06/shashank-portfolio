# Shashank Hegde Portfolio

Premium, recruiter-focused portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- MDX blog scaffold
- next-themes for light/dark mode

## Setup
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Deployment (Vercel)
1. Push the repo to GitHub.
2. Import in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain in Vercel. This value is used for metadata, the sitemap, and robots.txt.

## Content updates
- Replace `public/resume.pdf` to update the resume linked from the hero and header.
- Add blog posts in `content/blog/*.mdx`.

## Notes
- Replace `site.socials.linkedin` and `site.socials.github` with your real links.
- Consider adding a headshot to `public/portrait.jpg` and wiring it in the hero if desired.
