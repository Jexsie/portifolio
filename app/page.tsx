import FolioItem, { FolioModal } from "./components/FolioItem";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <>
      {/* # preloader
      ================================================== */}
      <div id="preloader">
        <div id="loader"></div>
      </div>

      {/* # page wrap
      ================================================== */}
      <div className="s-pagewrap">
        <div className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* ## site header
          ================================================== */}
        <header className="s-header">
          <div className="header-mobile">
            <span className="mobile-home-link">
              <a href="index.html">JEXSIE.</a>
            </span>
            <a className="mobile-menu-toggle" href="#0">
              <span>Menu</span>
            </a>
          </div>

          <div className="row wide main-nav-wrap">
            <nav className="column lg-12 main-nav">
              <ul>
                <li>
                  <a href="#intro" className="home-link">
                    JEXSIE.
                  </a>
                </li>
                <li className="current">
                  <a href="#intro" className="smoothscroll">
                    Intro
                  </a>
                </li>
                <li>
                  <a href="#about" className="smoothscroll">
                    About
                  </a>
                </li>
                <li>
                  <a href="#works" className="smoothscroll">
                    Works
                  </a>
                </li>
                <li>
                  <a href="/posts">Posts</a>
                </li>
                <li>
                  <a href="#contact" className="smoothscroll">
                    Say Hello
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* end s-header */}

        {/* ## main content
          ================================================== */}
        <main className="s-content">
          {/* ### intro
              ================================================== */}
          <section id="intro" className="s-intro target-section">
            <div className="row intro-content wide">
              <div className="column">
                <div className="text-pretitle with-line">Hello World</div>

                <h1 className="text-huge-title">
                  Jessy Ssebuliba, <br />
                  a frontend &amp; <br />
                  web3 engineer <br />
                  based in Uganda.
                </h1>
              </div>

              <ul className="intro-social">
                <li>
                  <a
                    href="https://github.com/jexsie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/amjexsie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/jexsie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/amjexsie"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            {/* end intro content */}

            <a href="#about" className="intro-scrolldown smoothscroll">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
              </svg>
            </a>
          </section>
          {/* end s-intro */}

          {/* ### about
              ================================================== */}
          <section id="about" className="s-about target-section">
            <div className="row about-info wide" data-animate-block>
              <div className="column lg-6 md-12 about-info__pic-block">
                <img
                  src="images/about-photo.jpg"
                  srcSet="images/about-photo.jpg 1x, images/about-photo@2x.jpg 2x"
                  alt=""
                  className="about-info__pic"
                  data-animate-el
                />
              </div>

              <div className="column lg-6 md-12">
                <div className="about-info__text">
                  <h2 className="text-pretitle with-line" data-animate-el>
                    About
                  </h2>
                  <p className="attention-getter" data-animate-el>
                   Certified Hedera Developer. Web3 engineer. Open-source contributor.

I'm Jessy Ssebuliba, and for the past three years I've been building at the intersection of blockchain engineering and open source software. My work spans decentralized asset tokenization, NFT interoperability, and healthcare technology — with notable contributions to OpenMRS and the Eclipse Adoptium.

I'm currently focused on Hiero ledger solutions, building tools that make distributed ledger technology more accessible and interoperable. 

I believe open source is how meaningful technology gets built — through transparency, collaboration, and a long-term commitment to the communities you serve.

Happy to connect with you 👋!
                  </p>
                  <a
                    href="/jessy-ssebuliba-resume.pdf"
                    download
                    className="btn btn--medium u-fullwidth"
                    data-animate-el
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            {/* about-info */}

            <div className="row about-expertise" data-animate-block>
              <div className="column lg-12">
                <h2 className="text-pretitle" data-animate-el>
                  Expertise
                </h2>

                <ul className="skills-list h1" data-animate-el>
                  <li>Frontend Development</li>
                  <li>Web3 Engineering</li>
                  <li>React &amp; Next.js</li>
                  <li>Smart Contracts</li>
                  <li>DApp Development</li>
                </ul>
              </div>
            </div>
            {/* end about-expertise */}

            <div className="row about-timelines" data-animate-block>
              <div className="column lg-6 tab-12">
                {/* Experience timeline - uncomment and fill when ready */}
              </div>
              {/* end column */}

              <div className="column lg-6 tab-12">
                {/* Education timeline - uncomment and fill when ready */}
              </div>
              {/* end column */}
            </div>
            {/* end about-timelines */}
          </section>
          {/* end s-about */}

          {/* ### works
              ================================================== */}
          <section id="works" className="s-works target-section">
            <div className="row works-portfolio">
              <div className="column lg-12" data-animate-block>
                <h2 className="text-pretitle" data-animate-el>
                  Recent Works
                </h2>
                <p className="h1" data-animate-el>
                  Here are some of my favorite projects I have done lately. Feel
                  free to check them out.
                </p>

                <ul className="folio-list row block-lg-one-half block-stack-on-1000">
                  {projects.map((project) => (
                    <FolioItem key={project.id} project={project} />
                  ))}
                </ul>
                {/* end folio-list */}
              </div>
              {/* end column */}

              {/* Modal Templates Popup */}
              {projects.map((project) => (
                <FolioModal key={project.id} project={project} />
              ))}
            </div>
            {/* end works-portfolio */}

            <div className="row testimonials">
              <div className="column lg-12" data-animate-block>
                <div
                  className="swiper-container testimonial-slider"
                  data-animate-el
                >
                  <div className="swiper-wrapper">
                    {/* Testimonial slides - uncomment and fill when ready */}
                  </div>
                  {/* end swiper-wrapper */}

                  <div className="swiper-pagination"></div>
                </div>
                {/* end swiper-container */}
              </div>
              {/* end column */}
            </div>
            {/* end row testimonials */}
          </section>
          {/* end s-works */}

          {/* ### contact
              ================================================== */}
          <section id="contact" className="s-contact target-section">
            <div className="row contact-top">
              <div className="column lg-12">
                <h2 className="text-pretitle">Get In Touch</h2>

                <p className="h1">
                  I love to hear from you. Whether you have a question or just
                  want to chat about web3 — shoot me a message.
                </p>
              </div>
            </div>
            {/* end contact-top */}

            <div className="row contact-bottom">
              <div className="column lg-3 md-5 tab-6 stack-on-550 contact-block">
                <h3 className="text-pretitle">Reach me at</h3>
                <p className="contact-links">
                  <a
                    href="mailto:jessiessebuliba@gmail.com"
                    className="mailtoui"
                  >
                    jessiessebuliba@gmail.com
                  </a>
                  <br />
                  <a href="tel:+256754544829">+256 754 544829</a>
                </p>
              </div>
              <div className="column lg-4 md-5 tab-6 stack-on-550 contact-block">
                <h3 className="text-pretitle">Social</h3>
                <ul className="contact-social">
                  <li>
                    <a
                      href="https://github.com/jexsie"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/jexsie"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/amjexsie"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      X
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/amjexsie"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div className="column lg-4 md-12 contact-block">
                <a
                  href="mailto:jessiessebuliba@gmail.com"
                  className="mailtoui btn btn--medium u-fullwidth contact-btn"
                >
                  Say Hello.
                </a>
              </div>
            </div>
            {/* end contact-bottom */}
          </section>
          {/* end contact */}
        </main>
        {/* end s-content */}

        {/* ## footer
          ================================================== */}
        <footer className="s-footer">
          <div className="row">
            <div className="column ss-copyright">
              <span>
                © Copyright Jessy Ssebuliba {new Date().getFullYear()}
              </span>
            </div>

            <div className="ss-go-top">
              <a className="smoothscroll" title="Back to Top" href="#top">
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
        {/* end s-footer */}
      </div>
      {/* end -s-pagewrap */}
    </>
  );
}
