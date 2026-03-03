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
3. Set the Production Domain and update:
   - `app/layout.tsx` metadataBase
   - `app/robots.ts` sitemap URL
   - `app/sitemap.ts` baseUrl

## Content updates
- Edit resume data in `lib/site.ts`.
- Add blog posts in `content/blog/*.mdx`.
- Replace `public/resume.pdf` with the latest resume.

## Notes
- Replace `site.socials.linkedin` and `site.socials.github` with your real links.
- Consider adding a headshot to `public/portrait.jpg` and wiring it in the hero if desired.
