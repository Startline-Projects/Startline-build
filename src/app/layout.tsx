import type { Metadata } from 'next'
import { Syne, Epilogue } from 'next/font/google'
import { NDAProvider } from '@/context/NDAContext'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne-var',
  display: 'swap',
})

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-epilogue-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Startline — Where Tech Founders Start',
  description: 'We show you the full product before you sign anything. Then we build it fast with a vetted team, daily huddles, and a 30-day money-back guarantee.',
  openGraph: {
    title: 'Startline — Where Tech Founders Start',
    description: 'We show you the full product before you sign anything. Then we build it fast with a vetted team, daily huddles, and a 30-day money-back guarantee.',
    url: 'https://startline.build',
    siteName: 'Startline',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startline — Where Tech Founders Start',
    description: 'We show you the full product before you sign anything.',
  },
  metadataBase: new URL('https://startline.build'),
  alternates: { canonical: 'https://startline.build' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${epilogue.variable} antialiased`}>
        <NDAProvider>
          {children}
        </NDAProvider>
      </body>
    </html>
  )
}
