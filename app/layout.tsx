import './globals.css'
import type { Metadata } from 'next'
import { Bricolage_Grotesque, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Background } from '@/components/Background'
import { SkipToContent } from '@/components/SkipToContent'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/site'

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600'],
  display: 'swap'
})

const sans = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

export const metadata: Metadata = {
  title: `${site.name} | Portfolio`,
  description: site.positioning,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} | Portfolio`,
    description: site.positioning,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Portfolio`,
    description: site.positioning
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} font-sans`}>
        <ThemeProvider>
          <SkipToContent />
          <Background />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
