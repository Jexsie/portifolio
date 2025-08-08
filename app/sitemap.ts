import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  // Use environment variable or fallback for GitHub Pages
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://jessyssebuliba.github.io/portfolio-site'
    : 'http://localhost:3000'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]

  // Blog posts
  const blogPosts = [
    "getting-started-with-hedera",
    "contributing-to-eclipse-foundation",
    "building-web3-dapps-with-hedera",
  ]

  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
