import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Jessy Ssebuliba - Frontend Developer & Web3 Engineer",
  description: "Jessy portfolio",
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
    <html lang="en" className="no-js ss-preload">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body id="top">
        {children}
        {/* Java Script */}
        <script src="/js/plugins.js" defer></script>
        <script src="/js/main.js" defer></script>
      </body>
    </html>
  );
}
