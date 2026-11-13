import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader current="" />

      <main id="main">
        <section>
          <div className="container section__inner page-intro">
            <p className="section__label page-intro__label">
              <span>
                <span className="accent">404</span> / Not found
              </span>
            </p>
            <div className="section__body section__body--tight">
              <h1 className="display-xl">
                This page doesn&apos;t exist{" "}
                <span className="faint">or has moved.</span>
              </h1>
              <div className="btn-row btn-row--tight">
                <Link href="/" className="btn btn--primary">
                  Back to home
                </Link>
                <Link href="/posts" className="btn">
                  Read posts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter home={false} />
    </>
  );
}
