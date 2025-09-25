import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roteiros Personalizados para Viagens à Europa',
  description: 'Crie roteiros de viagem personalizados, com mapas, avaliações e reservas via Civitatis, GetYourGuide, Viator e Tiqets.',
  keywords: ['roteiros de viagem', 'viagem Europa', 'planejamento de viagem', 'roteiros personalizados'],
  authors: [{ name: 'RoteirosApp' }],
  creator: 'RoteirosApp',
  publisher: 'RoteirosApp',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://roteiros-app.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt',
      'en-US': '/en',
      'es-ES': '/es',
      'fr-FR': '/fr',
      'de-DE': '/de',
      'it-IT': '/it',
    },
  },
  openGraph: {
    title: 'Roteiros Personalizados para Viagens à Europa',
    description: 'Crie roteiros de viagem personalizados, com mapas, avaliações e reservas via Civitatis, GetYourGuide, Viator e Tiqets.',
    url: 'https://roteiros-app.vercel.app',
    siteName: 'RoteirosApp',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Roteiros Personalizados para Viagens',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roteiros Personalizados para Viagens à Europa',
    description: 'Crie roteiros de viagem personalizados, com mapas, avaliações e reservas via Civitatis, GetYourGuide, Viator e Tiqets.',
    images: ['/og-image.jpg'],
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
  manifest: '/manifest.json',
  icons: {
    icon: '/icon-192x192.png',
    apple: '/icon-192x192.png',
  },
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) notFound()

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}