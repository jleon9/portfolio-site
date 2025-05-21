import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jean-François Léon | Software Developer',
  description: 'Creative portfolio showcasing full-stack development projects including AIOOM, Cegex Management Software, and Geograph.',
  openGraph: {
    title: 'Jean-François Léon | Software Developer',
    description: 'Creative portfolio showcasing full-stack development projects including AIOOM, Cegex Management Software, and Geograph.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/portfolio-profile-pic.png',
        width: 1200,
        height: 630,
        alt: 'Jean-François Léon - Software Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jean-François Léon | Software Developer',
    description: 'Creative portfolio showcasing full-stack development projects including AIOOM, Cegex Management Software, and Geograph.',
    images: ['/portfolio-profile-pic.png'],
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
