import { ArrowLeft, ArrowUp } from "./Icons";

export default function SiteFooter({ home = true }: { home?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>© Copyright Jessy Ssebuliba {new Date().getFullYear()}</span>
        {home ? (
          <a href="#top">
            Back to top
            <ArrowUp />
          </a>
        ) : (
          <a href="/">
            Back to home
            <ArrowLeft />
          </a>
        )}
      </div>
    </footer>
  );
}
