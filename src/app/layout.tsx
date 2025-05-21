import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Jean-François Léon | Software Developer',
  description: 'Full-stack developer specializing in Next.js, React, and TypeScript. Explore projects including AIOOM, Cegex Management Software, and Geograph.',
  openGraph: {
    title: 'Jean-François Léon | Software Developer',
    description: 'Full-stack developer specializing in Next.js, React, and TypeScript. Explore projects including AIOOM, Cegex Management Software, and Geograph.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Portfolio',
    images: [
      {
        url: '/tech-banner3.png',
        width: 1200,
        height: 630,
        alt: 'Jean-François Léon - Software Developer Portfolio',
      },
    ],

  },
  twitter: {
    card: 'summary',
    title: 'Jean-François Léon | Software Developer',
    description: 'Full-stack developer specializing in Next.js, React, and TypeScript. Explore projects including AIOOM, Cegex Management Software, and Geograph.',
    images: ['/tech-banner3.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
