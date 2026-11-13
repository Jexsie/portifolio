import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  num: string;
  label: string;
  children: ReactNode;
  /** Replace the default column wrapper (e.g. the About layout). */
  bare?: boolean;
}

export default function Section({ id, num, label, children, bare }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container section__inner">
        <div className="section__label">
          <span className="accent">{num}</span>
          <h2>{label}</h2>
        </div>
        {bare ? children : <div className="section__body">{children}</div>}
      </div>
    </section>
  );
}
