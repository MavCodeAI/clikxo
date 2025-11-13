import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import { LanguageProvider } from '@/contexts/LanguageContext'

const ibmArabic = IBM_Plex_Sans_Arabic({
  weight: ['400', '500', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-ibm-arabic',
  display: 'swap',
})

const ibmMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-ibm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clikxo | Creative Digital Studio',
  description: 'We don\'t build websites, we create digital dimensions where design meets code as art and science',
  keywords: ['Web Development', 'Graphic Design', 'Next.js', 'React', 'UAE', 'Dubai', 'Web Design', 'Clikxo'],
  authors: [{ name: 'Clikxo Studio' }],
  openGraph: {
    title: 'Clikxo | Creative Digital Studio',
    description: 'We don\'t build websites, we create digital dimensions',
    url: 'https://clikxo.com',
    siteName: 'Clikxo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clikxo | Creative Digital Studio',
    description: 'We don\'t build websites, we create digital dimensions',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={`${ibmArabic.variable} ${ibmMono.variable}`}>
      <body className="font-sans">
        <LanguageProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  )
}
