import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        cardForeground: 'hsl(var(--card-foreground))',
        muted: 'hsl(var(--muted))',
        mutedForeground: 'hsl(var(--muted-foreground))',
        primary: 'hsl(var(--primary))',
        primaryForeground: 'hsl(var(--primary-foreground))',
        accent: 'hsl(var(--accent))',
        accentForeground: 'hsl(var(--accent-foreground))',
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui'],
        display: ['var(--font-display)', 'system-ui']
      },
      boxShadow: {
        halo: '0 0 0 1px rgba(148, 163, 184, 0.18), 0 30px 80px -30px rgba(15, 23, 42, 0.45)',
        glow: '0 0 60px rgba(56, 189, 248, 0.25)',
        focus: '0 0 0 1px hsl(var(--ring)), 0 0 0 6px hsl(var(--ring) / 0.25)'
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 20% 20%, rgba(129, 140, 248, 0.35), transparent 45%), radial-gradient(circle at 80% 10%, rgba(244, 114, 182, 0.25), transparent 48%), radial-gradient(circle at 50% 80%, rgba(56, 189, 248, 0.3), transparent 55%)',
        grid: 'linear-gradient(to right, rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.12) 1px, transparent 1px)',
        spotlight: 'radial-gradient(circle at top, rgba(139, 92, 246, 0.25), transparent 60%)',
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E\")"
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        shimmer: 'shimmer 4s ease-in-out infinite',
        scan: 'scan 12s linear infinite',
        glowPulse: 'glowPulse 6s ease-in-out infinite',
        breathe: 'breathe 8s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        scan: {
          '0%': { transform: 'translateX(-30%)' },
          '100%': { transform: 'translateX(30%)' }
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' }
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.03)', opacity: '1' }
        }
      }
    }
  },
  plugins: [typography]
}

export default config
