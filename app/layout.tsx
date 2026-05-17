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
  title: 'GoolPxl - Rumbo al mundial 2026',
  description: 'El fútbol que amas, contado como una película. Camino al Mundial 2026: historias, leyendas y momentos que pueden cambiarlo todo.',
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
