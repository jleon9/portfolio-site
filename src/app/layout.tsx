import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jean-François Léon | Software Developer',
  description: 'Full-stack developer specializing in Next.js, React, and TypeScript. Explore projects including AIOOM, Cegex Management Software, and Geograph.',
  openGraph: {
    title: 'Jean-François Léon | Software Developer',
    description: 'Full-stack developer specializing in Next.js, React, and TypeScript. Explore projects including AIOOM, Cegex Management Software, and Geograph.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Jean-François Léon | Software Developer',
    description: 'Full-stack developer specializing in Next.js, React, and TypeScript. Explore projects including AIOOM, Cegex Management Software, and Geograph.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
