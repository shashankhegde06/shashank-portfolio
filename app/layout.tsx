import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Background } from '@/components/Background'
import { SkipToContent } from '@/components/SkipToContent'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: `${site.name} | Portfolio`,
  description: site.positioning,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} | Portfolio`,
    description: site.positioning,
    type: 'website',
    images: ['/opengraph-image']
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Portfolio`,
    description: site.positioning,
    images: ['/opengraph-image']
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <SkipToContent />
          <Background />
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
