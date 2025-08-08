import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-gray-700">Jessy Ssebuliba</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Frontend developer specializing in React, Angular, Next.js, and Vue. Backend experience with SpringBoot and
            Web3 development with Hedera. Active open-source contributor to Eclipse Foundation and Hiero Ledger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#projects">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
