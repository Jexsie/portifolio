import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone, Globe } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Angular, Next.js, Vue.js, TypeScript",
    },
    {
      icon: Globe,
      title: "Backend Development",
      description: "SpringBoot, Java, RESTful APIs, Microservices",
    },
    {
      icon: Smartphone,
      title: "Web3 & Blockchain",
      description: "Hedera Hashgraph, Smart Contracts, DApp Development",
    },
    {
      icon: Palette,
      title: "Open Source",
      description: "Eclipse Foundation, Hiero Ledger, OpenMRS",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate frontend developer with expertise in modern JavaScript frameworks and libraries. I have
              intermediate backend knowledge with SpringBoot and I'm certified in Web3 development with Hedera. As an
              active open-source contributor, I contribute to Eclipse Foundation, Hiero Ledger, and OpenMRS projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <skill.icon className="h-12 w-12 text-gray-700 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
