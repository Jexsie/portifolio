"use client";

import { useEffect, useState } from "react";
import { sections } from "../data/site";

/**
 * Numbered section index. On the home page it links to in-page anchors and
 * highlights the section in view; elsewhere it links back to the home page
 * and highlights `current`.
 */
export default function SectionNav({ current }: { current?: string }) {
  const onHome = current === undefined;
  const [active, setActive] = useState(current ?? sections[0].id);

  useEffect(() => {
    if (!onHome) return;

    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <nav aria-label="Sections" className="section-nav">
      <div className="container section-nav__inner">
        {sections.map((s) => (
          <a
            key={s.id}
            href={onHome ? `#${s.id}` : s.id === "posts" ? "/posts" : `/#${s.id}`}
            aria-current={active === s.id ? (onHome ? "location" : "page") : undefined}
          >
            <span>{s.num}</span>
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
