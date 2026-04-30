"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    document.documentElement.classList.remove("ss-preload");
    document.documentElement.classList.add("ss-loaded");
  }, []);

  return (
    <div className="s-pagewrap">
      <header className="s-header">
        <div className="header-mobile">
          <span className="mobile-home-link">
            <a href="/">JEXSIE.</a>
          </span>
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
              <li>
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
        <section className="s-404">
          <div className="row">
            <div className="column lg-12 s-404__content">
              <div className="s-404__big">404</div>
              <h1 className="s-404__title">Page Not Found</h1>
              <p className="s-404__desc">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved.
              </p>
              <div className="s-404__actions">
                <Link href="/" className="btn btn--medium">
                  Back to Home
                </Link>
                <Link href="/posts" className="btn btn--medium btn--stroke">
                  Read Posts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="s-footer">
        <div className="row">
          <div className="column ss-copyright">
            <span>© Copyright Jessy Ssebuliba {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
