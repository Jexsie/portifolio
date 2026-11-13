import Link from "next/link";
import Hashgraph from "./components/Hashgraph";
import { ArrowDown, ArrowRight, ArrowUpRight, Download } from "./components/Icons";
import ProjectCard from "./components/ProjectCard";
import PostRow from "./components/PostRow";
import Section from "./components/Section";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import {
  CV_URL,
  EMAIL,
  PHONE,
  experience,
  expertise,
  openSource,
  projects,
  recognition,
  socials,
  stats,
  toolbox,
} from "./data/site";
import { getAllPosts } from "@/lib/posts";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* intro */}
        <section id="intro">
          <div className="container intro__inner">
            <div className="intro__text">
              <p className="intro__eyebrow">
                <span className="accent">0.0.1</span> / Kampala, Uganda / UTC+3
              </p>
              <h1 className="display-xl">
                <span className="accent">Jessy Ssebuliba,</span>{" "}
                a software engineer &amp; open source developer{" "}
                <span className="faint">based in Uganda.</span>
              </h1>
              <p className="lead">
                Committer at Hiero, creator of Hiero Enterprise JS and software
                engineer at Open Elements. My work runs from Solidity contracts
                and wallet integrations through to the libraries and frontends
                that other developers build on.
              </p>
              <div className="btn-row btn-row--tight">
                <a href={`mailto:${EMAIL}`} className="btn btn--primary">
                  Say hello
                  <ArrowUpRight />
                </a>
                <a href={CV_URL} download className="btn">
                  Download CV
                  <Download />
                </a>
              </div>
              <ul className="social-links">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} {...external}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Hashgraph />
          </div>
        </section>

        {/* at a glance */}
        <section aria-label="At a glance" className="section">
          <ul className="container stats">
            {stats.map((s) => (
              <li key={s.label}>
                <span className="stats__value">
                  {s.value}
                  <span className="stats__unit"> {s.unit}</span>
                </span>
                <span className="stats__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </section>

        <Section id="about" num="0.0.2" label="About" bare>
          <div className="about">
            <figure className="about__photo">
              <img
                src="/images/about-photo.jpg"
                srcSet="/images/about-photo.jpg 1x, /images/about-photo@2x.jpg 2x"
                alt="Portrait of Jessy Ssebuliba"
              />
              <figcaption className="caption">
                Jessy Ssebuliba / Kampala, UG
              </figcaption>
            </figure>
            <div className="about__text">
              <p className="about__headline">
                Certified Hedera Developer. Web3 engineer. Open-source
                contributor.
              </p>
              <p className="about__bio">
                I&apos;m Jessy Ssebuliba, an open source developer based in
                Kampala, Uganda. I&apos;m an active contributor and maintainer
                at Hiero ledger, and I&apos;ve been building across the open
                source world through OpenMRS, Eclipse Adoptium, and Open Data
                Ensemble. I&apos;m a member of Support and Care Africa, which
                provides support for the open source community, and a Hedera
                advocate. I focus on blockchain systems, applied cryptography,
                and zero-knowledge proofs, and my work neatly revolves around
                those.
              </p>
              <div className="btn-row">
                <a href={CV_URL} download className="btn">
                  Download CV
                  <Download />
                </a>
                <a href="#contact" className="link-arrow link-arrow--caps">
                  Let&apos;s connect
                  <ArrowDown />
                </a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="stack" num="0.0.3" label="Stack">
          <h3 className="section__title">What I know deeply.</h3>
          <div className="card-grid">
            {expertise.map((e, i) => (
              <article key={e.title} className="card">
                <span className="card__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="card__title">{e.title}</h4>
                <p className="copy">{e.body}</p>
              </article>
            ))}
          </div>
          <dl className="rows rows--dl">
            {toolbox.map((t) => (
              <div key={t.term}>
                <dt>{t.term}</dt>
                <dd>{t.detail}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="works" num="0.0.4" label="Work">
          <h3 className="section__title">Some of my favorite projects lately.</h3>

          <article className="feature">
            <div className="feature__text">
              <p className="mono-label">
                Creator, maintainer / TypeScript monorepo / Apache-2.0
              </p>
              <h4 className="feature__title">Hiero Enterprise JS</h4>
              <p>
                It removes the glue code between the Hiero SDK and a real
                Node.js service, so Express, Fastify and NestJS applications get
                typed access to accounts, tokens, NFTs, contracts and topics
                with no client setup.
              </p>
              <p>
                The write path, enterprise-core, holds the network client and
                operator keys. The read path, enterprise-mirror, is a
                zero-dependency mirror-node client with pagination, filters and
                rate limiting. Both sit behind one interface.
              </p>
              <p className="badge">
                Hiero bounty winner, Hedera Hello Future: Apex, 2026
              </p>
              <a
                href="https://github.com/hiero-hackers/hiero-enterprise-js"
                className="link-arrow"
                {...external}
              >
                github.com/hiero-hackers/hiero-enterprise-js
                <ArrowUpRight />
              </a>
            </div>
            <div className="code-panel">
              <p className="code-panel__title">
                enterprise-core / create a topic, post a message
              </p>
              <pre>
                <code>
                  <span className="k">import</span> {"{\n  HieroContext,\n  TopicService,\n} "}
                  <span className="k">from</span>{" "}
                  <span className="s">&quot;@hiero-hackers/enterprise-core&quot;</span>
                  {";\n\n"}
                  <span className="k">const</span> context ={" "}
                  <span className="k">new</span> HieroContext();{"\n"}
                  <span className="k">const</span> topics ={" "}
                  <span className="k">new</span> TopicService(context);{"\n\n"}
                  <span className="k">const</span> {"{ topicId } = "}
                  <span className="k">await</span> topics.createTopic({"{\n  topicMemo: "}
                  <span className="s">&quot;order events&quot;</span>
                  {",\n});\n\n"}
                  <span className="k">await</span> topics.submitMessage({"{\n  topicId,\n  message: "}
                  <span className="s">&quot;order 42 shipped&quot;</span>
                  {",\n});"}
                </code>
              </pre>
            </div>
          </article>

          <div className="card-grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="open-source" num="0.0.5" label="Open source">
          <h3 className="section__title">Roles and maintainership.</h3>
          <ul className="rows">
            {openSource.map((o) => (
              <li key={o.name}>
                <div className="row-head">
                  <h4 className="card__title">{o.name}</h4>
                  <span>{o.org}</span>
                </div>
                <p className="row-meta">
                  <span className="accent">{o.role}</span>
                  {o.detail && (
                    <>
                      <br />
                      {o.detail}
                    </>
                  )}
                </p>
                <p className="copy row-body">{o.body}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" num="0.0.6" label="Experience">
          <h3 className="section__title">Four years of building across the web.</h3>
          <ol className="rows rows--timeline">
            {experience.map((job) => (
              <li key={job.period}>
                <p className={`row-meta${job.current ? " accent" : ""}`}>
                  {job.period}
                </p>
                <div className="row-body">
                  <h4>{job.company}</h4>
                  <p className="role">{job.role}</p>
                  {job.points.length > 1 ? (
                    <ul className="bullets">
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="copy">
                      {job.points[0]}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="recognition" num="0.0.7" label="Recognition">
          <h3 className="section__title">Recognition and certification.</h3>
          <div className="card-grid card-grid--wide">
            {recognition.map((r) => (
              <article key={r.title} className="card">
                <span className="card__num">{r.when}</span>
                <h4 className="card__title">{r.title}</h4>
                <p className="copy">{r.body}</p>
              </article>
            ))}
            <article className="card">
              <span className="card__num">Certification</span>
              <h4 className="card__title">Certified Hedera Developer</h4>
              <p className="copy">
                Also an active learner at Cyfrin Updraft, with progress listed
                at{" "}
                <a href="https://profiles.cyfrin.io/u/jexsie" {...external}>
                  profiles.cyfrin.io/u/jexsie
                </a>
                .
              </p>
            </article>
          </div>
        </Section>

        <Section id="posts" num="0.0.8" label="Posts">
          <h3 className="section__title">Posts &amp; articles.</h3>
          <div>
            {latestPosts.map((post) => (
              <PostRow key={post.slug} post={post} />
            ))}
          </div>
          <Link href="/posts" className="link-arrow link-arrow--caps">
            All posts
            <ArrowRight />
          </Link>
        </Section>

        <Section id="contact" num="0.0.9" label="Contact">
          <p className="contact__headline">
            I love to hear from you. Whether you have a question or just want to
            chat about web3 — <span className="accent">shoot me a message.</span>
          </p>
          <div className="contact__grid">
            <div className="contact__block">
              <h3>Reach me at</h3>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={PHONE.href}>{PHONE.label}</a>
            </div>
            <div className="contact__block">
              <h3>Social</h3>
              <ul className="social-links social-links--large">
                {socials
                  .filter((s) => s.label !== "Cyfrin")
                  .map((s) => (
                    <li key={s.label}>
                      <a href={s.href} {...external}>
                        {s.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <a href={`mailto:${EMAIL}`} className="btn btn--primary btn--xl">
              Say hello
              <ArrowUpRight />
            </a>
          </div>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
