import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Jessy Ssebuliba - Frontend Developer & Open Source Contributor",
  description:
    "Frontend developer specializing in React, Angular, Next.js, Vue. Backend experience with SpringBoot, Web3 with Hedera. Active contributor to Eclipse Foundation and Hiero Ledger.",
  keywords:
    "frontend developer, React, Angular, Next.js, Vue, SpringBoot, Web3, Hedera, Eclipse Foundation, Hiero Ledger, OpenMRS",
  authors: [{ name: "Jessy Ssebuliba" }],
  creator: "Jessy Ssebuliba",
  openGraph: {
    title: "Jessy Ssebuliba - Frontend Developer & Open Source Contributor",
    description:
      "Frontend developer specializing in React, Angular, Next.js, Vue. Backend experience with SpringBoot, Web3 with Hedera.",
    url: "https://jessyssebuliba.dev",
    siteName: "Jessy Ssebuliba Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jessy Ssebuliba - Frontend Developer & Open Source Contributor",
    description:
      "Frontend developer specializing in React, Angular, Next.js, Vue. Backend experience with SpringBoot, Web3 with Hedera.",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
