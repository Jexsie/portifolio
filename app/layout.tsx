import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://jessyssebuliba.github.io/portfolio-site'
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Jessy Ssebuliba - Frontend Developer & Open Source Contributor",
    template: "%s - Jessy Ssebuliba",
  },
  description:
    "Frontend developer specializing in React, Angular, Next.js, Vue. Backend experience with SpringBoot, Web3 with Hedera. Active contributor to Eclipse Foundation and Hiero Ledger.",
  keywords: [
    "frontend developer",
    "React",
    "Angular",
    "Next.js",
    "Vue",
    "SpringBoot",
    "Web3",
    "Hedera",
    "Eclipse Foundation",
    "Hiero Ledger",
    "OpenMRS",
    "open source",
  ],
  authors: [{ name: "Jessy Ssebuliba" }],
  creator: "Jessy Ssebuliba",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Jessy Ssebuliba - Frontend Developer & Open Source Contributor",
    description:
      "Frontend developer specializing in React, Angular, Next.js, Vue. Backend experience with SpringBoot, Web3 with Hedera.",
    siteName: "Jessy Ssebuliba Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jessy Ssebuliba - Frontend Developer & Open Source Contributor",
    description:
      "Frontend developer specializing in React, Angular, Next.js, Vue. Backend experience with SpringBoot, Web3 with Hedera.",
    creator: "@jessyssebuliba",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={baseUrl} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
