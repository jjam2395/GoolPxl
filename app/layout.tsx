import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-barlow-condensed',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'GoolPxl - Football Documentary',
  description: 'Cinematic storytelling of the beautiful game. Discover the untold stories behind football&apos;s greatest moments.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/Logo-GoolPxl-32x32.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Logo-GoolPxl-32x32.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo-completo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/Logo-GP-transparent.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} ${playfairDisplay.variable} bg-background dark`}>
      <body className={`${barlow.className} font-sans font-normal antialiased bg-background`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
