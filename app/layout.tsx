import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import { AssetPathProvider } from '@/components/AssetPathProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageTransition } from '@/components/PageTransition'

const geist = Geist({ 
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Dottssa Irene Maria Beconi - Odontoiatria e Medicina Estetica del Volto | Pistoia',
  description: 'Dottoressa Irene Maria Beconi: Specialista in odontoiatria e medicina estetica del volto a Pistoia. Trattamenti personalizzati con tecnologie avanzate per il tuo benessere e la tua bellezza naturale.',
  keywords: 'odontoiatria Pistoia, medicina estetica Pistoia, dentista Pistoia, chirurgia orale, filler, botulino, impianti dentali, Irene Maria Beconi',
  authors: [{ name: 'Dottssa Irene Maria Beconi' }],
  creator: 'Dottssa Irene Maria Beconi',
  publisher: 'Dottssa Irene Maria Beconi',
  openGraph: {
    title: 'Dottssa Irene Maria Beconi - Odontoiatria e Medicina Estetica',
    description: 'Specialista in odontoiatria e medicina estetica del volto a Pistoia. Trattamenti personalizzati per il tuo benessere.',
    type: 'website',
    locale: 'it_IT',
    alternateLocale: ['en_US'],
    siteName: 'Dottssa Irene Maria Beconi',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Dottssa Irene Maria Beconi Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/logo.svg',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`scroll-smooth ${geist.variable} ${geistMono.variable} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="IT-PT" />
        <meta name="geo.placename" content="Pistoia" />
        <meta name="geo.position" content="43.9333;10.9167" />
        <meta name="ICBM" content="43.9333, 10.9167" />
        <link rel="canonical" href="https://dottoressairenebeconi.it" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#068c8c" />
        <meta name="msapplication-TileColor" content="#068c8c" />
        
        {/* Structured Data - Medical Professional */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: 'Dottssa Irene Maria Beconi',
              description: 'Specialista in odontoiatria e medicina estetica del volto',
              url: 'https://dottoressairenebeconi.it',
              telephone: '+39 XXX XXX XXXX',
              email: 'info@dottoressairenebeconi.it',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Via Example, 123',
                addressLocality: 'Pistoia',
                postalCode: '51100',
                addressRegion: 'PT',
                addressCountry: 'IT',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '43.9333',
                longitude: '10.9167',
              },
              areaServed: {
                '@type': 'City',
                name: 'Pistoia',
              },
              medicalSpecialty: ['Dentistry', 'Oral Surgery', 'Aesthetic Medicine'],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className={`${geist.className} antialiased`} style={{ fontFamily: 'var(--font-geist), sans-serif' }}>
        <AssetPathProvider />
        <LanguageProvider>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
