import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import { LanguageProvider } from '@/contexts/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'

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
  title: 'Clikxo | استوديو إبداعي رقمي',
  description: 'نحن لا نبني مواقع، بل نصنع أبعادًا رقمية حيث يلتقي التصميم بالكود كفن وعلم',
  keywords: ['تطوير الويب', 'تصميم جرافيك', 'Next.js', 'React', 'UAE', 'Dubai', 'Web Design', 'Clikxo'],
  authors: [{ name: 'Clikxo Studio' }],
  openGraph: {
    title: 'Clikxo | استوديو إبداعي رقمي',
    description: 'نحن لا نبني مواقع، بل نصنع أبعادًا رقمية',
    url: 'https://clikxo.com',
    siteName: 'Clikxo',
    locale: 'ar_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clikxo | استوديو إبداعي رقمي',
    description: 'نحن لا نبني مواقع، بل نصنع أبعادًا رقمية',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmArabic.variable} ${ibmMono.variable}`}>
      <body className="font-sans">
        <LanguageProvider>
          <LanguageSwitcher />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  )
}
