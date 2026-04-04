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
  title: 'Startline — See every screen before you sign anything',
  description: 'We design your complete product visually, then build it with a vetted offshore team, daily standups, and a 30-day money-back guarantee. From $10–15/hr.',
  openGraph: {
    title: 'Startline — See every screen before you sign anything',
    description: 'We design your complete product visually, then build it with a vetted offshore team, daily standups, and a 30-day money-back guarantee.',
    url: 'https://startline.build',
    siteName: 'Startline',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startline — See every screen before you sign anything',
    description: 'Your product, designed screen by screen, before you pay a dollar.',
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
