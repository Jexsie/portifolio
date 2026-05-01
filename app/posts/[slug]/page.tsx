import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeExternalLinks from "rehype-external-links";
import rehypeStringify from "rehype-stringify";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";

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
    <div className="s-pagewrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="s-header">
        <div className="header-mobile">
          <span className="mobile-home-link">
            <a href="/">JEXSIE.</a>
          </span>
          <a className="mobile-menu-toggle" href="#0">
            <span>Menu</span>
          </a>
        </div>

        <div className="row wide main-nav-wrap">
          <nav className="column lg-12 main-nav">
            <ul>
              <li>
                <a href="/" className="home-link">
                  JEXSIE.
                </a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#works">Works</a>
              </li>
              <li className="current">
                <a href="/posts">Posts</a>
              </li>
              <li>
                <a href="/#contact">Say Hello</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="s-content">
        <article className="s-post">
          <div className="row post-header">
            <div className="column lg-12">
              <Link href="/posts" className="post-back">
                ← All Posts
              </Link>
              <time className="post-date" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h1 className="post-title">{post.title}</h1>
              <div className="post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="post-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="row post-content">
            <div className="column lg-10 md-12 post-content__body">
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
          </div>
        </article>
      </main>

      <footer className="s-footer">
        <div className="row">
          <div className="column ss-copyright">
            <span>© Copyright Jessy Ssebuliba {new Date().getFullYear()}</span>
          </div>
          <div className="ss-go-top">
            <a title="Back to Top" href="#top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
