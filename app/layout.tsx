import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Jessy Ssebuliba - Software Engineer & Open Source Developer",
  description:
    "Software engineer and open source developer based in Uganda, building decentralized applications with React, Next.js, and Hedera.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://jexsie.com/",
  },
  openGraph: {
    title: "Jessy Ssebuliba - Software Engineer & Open Source Developer",
    description:
      "Software engineer and open source developer based in Uganda, building decentralized applications with React, Next.js, and Hedera.",
    url: "https://jexsie.com",
    siteName: "Jessy Ssebuliba",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jessy Ssebuliba - Software Engineer & Open Source Developer",
    description:
      "Software engineer and open source developer based in Uganda, building decentralized applications with React, Next.js, and Hedera.",
    creator: "@amjexsie",
  },
  other: {
    "article:author": "https://github.com/jexsie",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d0e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <link rel="stylesheet" href="/css/site.css" />
        <link rel="stylesheet" href="/css/hljs-theme.css" />
      </head>
      <body id="top">{children}</body>
    </html>
  );
}
