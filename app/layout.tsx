import type { Metadata, Viewport } from "next";
import ExternalScripts from "./ExternalScripts";
import ThemeToggle from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: "Jessy Ssebuliba - Frontend Developer & Web3 Engineer",
  description:
    "Frontend developer and Web3 engineer based in Uganda, building decentralized applications with React, Next.js, and Hedera.",
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
    title: "Jessy Ssebuliba - Frontend Developer & Web3 Engineer",
    description:
      "Frontend developer and Web3 engineer based in Uganda, building decentralized applications with React, Next.js, and Hedera.",
    url: "https://jexsie.com",
    siteName: "Jessy Ssebuliba",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jessy Ssebuliba - Frontend Developer & Web3 Engineer",
    description:
      "Frontend developer and Web3 engineer based in Uganda, building decentralized applications with React, Next.js, and Hedera.",
    creator: "@amjexsie",
  },
  other: {
    "article:author": "https://github.com/jexsie",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="no-js ss-preload" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <script src="/js/theme-init.js" />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/hljs-theme.css" />
      </head>
      <body id="top" suppressHydrationWarning>
        {children}
        <ThemeToggle />
        <ExternalScripts />
      </body>
    </html>
  );
}
