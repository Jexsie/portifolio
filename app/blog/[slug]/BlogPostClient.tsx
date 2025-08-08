"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { notFound } from "next/navigation"

interface BlogPost {
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

interface BlogPosts {
  [key: string]: BlogPost
}

interface BlogPostClientProps {
  slug: string
  blogPosts: BlogPosts
}

export function BlogPostClient({ slug, blogPosts }: BlogPostClientProps) {
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
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

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            <div className="prose prose-gray max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{post.content}</div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
