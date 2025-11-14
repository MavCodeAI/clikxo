import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/ui/Navigation'
import MouseFollower from '@/components/ui/MouseFollower'
import ParticleEffect from '@/components/ui/ParticleEffect'
import ComplexBackground from '@/components/ui/ComplexBackground'
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ClikXo - Premium Digital Craftsmanship',
  description: 'Where Code Meets Art. Luxury digital experiences crafted with precision and aesthetic excellence.',
  keywords: ['digital agency', 'web development', 'graphic design', 'motion graphics', 'luxury design'],
  authors: [{ name: 'ClikXo Team' }],
  openGraph: {
    title: 'ClikXo - Premium Digital Craftsmanship',
    description: 'Where Code Meets Art. Luxury digital experiences.',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#C6A667',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased">
        <SmoothScrollProvider />
        <ComplexBackground />
        <Navigation />
        <MouseFollower />
        <ParticleEffect />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}
