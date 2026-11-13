import { EMAIL } from "../data/site";
import SectionNav from "./SectionNav";

export default function SiteHeader({ current }: { current?: string }) {
  const onHome = current === undefined;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container site-header__inner">
          <a href={onHome ? "#top" : "/"} className="brand">
            JEXSIE<span>.</span>
          </a>
          <a href={`mailto:${EMAIL}`} className="btn btn--sm">
            Say hello
          </a>
        </div>
      </header>
      <SectionNav current={current} />
    </>
  );
}
