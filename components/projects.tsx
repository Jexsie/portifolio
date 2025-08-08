import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Hedera DApp Platform",
      description:
        "A decentralized application platform built on Hedera Hashgraph with React frontend, featuring wallet integration and smart contract interactions.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Hedera", "Web3", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Eclipse Foundation Contribution",
      description:
        "Active contributions to Eclipse Foundation projects including bug fixes, feature implementations, and documentation improvements.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Java", "Open Source", "Eclipse", "Community"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Multi-Framework Dashboard",
      description:
        "A comprehensive dashboard application showcasing proficiency across React, Angular, Vue.js, and Next.js with SpringBoot backend.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Angular", "Vue.js", "SpringBoot"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in web development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
