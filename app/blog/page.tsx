import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Jessy Ssebuliba",
  description:
    "Technical articles about frontend development, Web3, Hedera, and open-source contributions by Jessy Ssebuliba.",
  openGraph: {
    title: "Blog - Jessy Ssebuliba",
    description: "Technical articles about frontend development, Web3, Hedera, and open-source contributions.",
    url: "https://jessyssebuliba.dev/blog",
  },
}

const blogPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    description: "A comprehensive guide to building modern web applications with Next.js 15 and the App Router.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for 2024",
    description: "Learn the latest TypeScript patterns and practices to write more maintainable code.",
    date: "2024-01-10",
    readTime: "8 min read",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
  },
  {
    slug: "building-responsive-layouts",
    title: "Building Responsive Layouts with Tailwind CSS",
    description: "Master responsive design patterns using Tailwind CSS utility classes.",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["CSS", "Tailwind", "Responsive Design"],
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, design, and technology.
            </p>
          </div>

          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <time>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl">
                    <Link href={`/blog/${post.slug}`} className="text-gray-900 hover:text-gray-700 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
