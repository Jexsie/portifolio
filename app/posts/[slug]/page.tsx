import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeExternalLinks from "rehype-external-links";
import rehypeStringify from "rehype-stringify";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { ArrowLeft } from "../../components/Icons";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} — Jessy Ssebuliba`,
    description: post.description,
    alternates: {
      canonical: `https://jexsie.com/posts/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://jexsie.com/posts/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Jessy Ssebuliba"],
      tags: post.tags,
      siteName: "Jessy Ssebuliba",
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
      creator: "@amjexsie",
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeExternalLinks, {
      target: "_blank",
      rel: ["noopener", "noreferrer"],
    })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(post.content);
  const contentHtml = processedContent.toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Jessy Ssebuliba",
      url: "https://jexsie.com",
    },
    url: `https://jexsie.com/posts/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader current="posts" />

      <main id="main">
        <article>
          <div className="container section__inner page-intro">
            <div className="section__label section__label--stack">
              <span>
                <span className="accent">0.0.8</span> / Post
              </span>
              <Link href="/posts" className="link-arrow link-arrow--caps">
                <ArrowLeft />
                All posts
              </Link>
            </div>
            <header className="section__body section__body--tight">
              <time className="post-card__date" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <h1 className="display-xl">{post.title}</h1>
              {post.tags.length > 0 && (
                <ul className="tags">
                  {post.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </header>
          </div>

          <div className="section">
            <div className="container section__inner">
              <div className="section__label" aria-hidden="true" />
              <div className="section__body">
                <div
                  className="post-body"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              </div>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter home={false} />
    </>
  );
}
