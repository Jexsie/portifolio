import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { ArrowRight, ArrowUpRight } from "../components/Icons";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { EMAIL } from "../data/site";

export const metadata: Metadata = {
  title: "Posts — Jessy Ssebuliba",
  description:
    "Articles and thoughts on frontend development, Web3 engineering, and building decentralized applications.",
  alternates: {
    canonical: "https://jexsie.com/posts",
  },
  openGraph: {
    title: "Posts — Jessy Ssebuliba",
    description:
      "Articles and thoughts on frontend development, Web3 engineering, and building decentralized applications.",
    url: "https://jexsie.com/posts",
    type: "website",
    siteName: "Jessy Ssebuliba",
  },
  twitter: {
    card: "summary",
    title: "Posts — Jessy Ssebuliba",
    description:
      "Articles and thoughts on frontend development, Web3 engineering, and building decentralized applications.",
    creator: "@amjexsie",
  },
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <>
      <SiteHeader current="posts" />

      <main id="main">
        <section>
          <div className="container section__inner page-intro">
            <p className="section__label page-intro__label">
              <span>
                <span className="accent">0.0.8</span> / Blog
              </span>
            </p>
            <div className="section__body section__body--tight">
              <h1 className="display-xl">Posts &amp; articles.</h1>
              <p className="lead">
                Thoughts on frontend development, Web3 engineering, and building
                for the decentralized web.
              </p>
            </div>
          </div>
        </section>

        <section aria-label="All posts" className="section">
          <div className="container section__inner">
            <p className="section__label muted">
              {posts.length} {posts.length === 1 ? "post" : "posts"}
            </p>
            <div className="post-list">
              {posts.map((post) => (
                <article key={post.slug} className="card post-card">
                  <time className="post-card__date" dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                  <h2>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p>{post.description}</p>
                  {post.tags.length > 0 && (
                    <ul className="tags">
                      {post.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href={`/posts/${post.slug}`}
                    className="link-arrow link-arrow--caps"
                    aria-label={`Read the post: ${post.title}`}
                  >
                    Read the post
                    <ArrowRight />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Contact" className="section cta-band">
          <div className="container cta-band__inner">
            <p className="about__headline">
              Have a question, or just want to chat about web3?
            </p>
            <a href={`mailto:${EMAIL}`} className="btn btn--primary">
              Say hello
              <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter home={false} />
    </>
  );
}
