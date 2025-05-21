import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jean-François Léon | Software Developer",
  description:
    "Full-stack developer specializing in Next.js, React, and TypeScript. Explore projects including AIOOM, Cegex Management Software, and Geograph.",
  openGraph: {
    title: "Jean-François Léon | Software Developer",
    description:
      "Full-stack developer specializing in Next.js, React, and TypeScript. Explore projects including AIOOM, Cegex Management Software, and Geograph.",
    type: "website",
    locale: "en_US",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Jean-François Léon | Software Developer",
    description:
      "Full-stack developer specializing in Next.js, React, and TypeScript. Explore projects including AIOOM, Cegex Management Software, and Geograph.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
