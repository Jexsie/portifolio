import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

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
    <div className="s-pagewrap">
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
        <section className="s-posts">
          <div className="row posts-header">
            <div className="column lg-12">
              <h2 className="text-pretitle with-line">Blog</h2>
              <p className="h1">Posts &amp; Articles</p>
              <p className="posts-lead">
                Thoughts on frontend development, Web3 engineering, and building
                for the decentralized web.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="column lg-12">
              <ul className="posts-list">
                {posts.map((post) => (
                  <li key={post.slug} className="posts-list__item">
                    <Link
                      href={`/posts/${post.slug}`}
                      className="posts-list__link"
                    >
                      <article>
                        <time className="posts-list__date" dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <h3 className="posts-list__title">{post.title}</h3>
                        <p className="posts-list__desc">{post.description}</p>
                        <div className="posts-list__tags">
                          {post.tags.map((tag) => (
                            <span key={tag} className="posts-list__tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </article>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
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
