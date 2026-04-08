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
          <span className="mobile-home-link"><a href="index.html">JEXSIE.</a></span>
          <a className="mobile-menu-toggle" href="#0"><span>Menu</span></a>
        </div>

        <div className="row wide main-nav-wrap">
          <nav className="column lg-12 main-nav">
            <ul>
              <li><a href="index.html" className="home-link">JEXSIE.</a></li>
              <li className="current">
                <a href="#intro" className="smoothscroll">Intro</a>
              </li>
              <li><a href="#about" className="smoothscroll">About</a></li>
              <li><a href="#works" className="smoothscroll">Works</a></li>
              <li><a href="#contact" className="smoothscroll">Say Hello</a></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* end s-header */}

      {/* ## main content
        ==================================================- */}
      <main className="s-content">
        {/* ### intro
            ================================================== */}
        <section id="intro" className="s-intro target-section">
          <div className="row intro-content wide">
            <div className="column">
              <div className="text-pretitle with-line">Hello World</div>

              <h1 className="text-huge-title">
                Jessy Ssebuliba, <br />
                a frontend & <br />
                web3 engineer <br />
                based in Uganda.
              </h1>
            </div>

            <ul className="intro-social">
              <li><a href="https://github.com/jexsie">GitHub</a></li>
              <li><a href="https://twitter.com/amjexsie">Twitter</a></li>
              <li><a href="https://linkedin.com/in/ssebuliba">LinkedIn</a></li>
              <li><a href="https://instagram.com/amjexsie">Instagram</a></li>
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
              <path
                d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
              />
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
                <h2 className="text-pretitle with-line" data-animate-el>About</h2>
                <p className="attention-getter" data-animate-el>
                  I am Jessie Ssebuliba, a Certified Hedera Developer and
                  passionate Web3 engineer with over three years of experience
                  building applications across Web2 and Web3. I work with React,
                  Next.js, Vue, and Tailwind CSS on the frontend, with basic
                  knowledge of Spring Boot on the backend. My experience spans
                  healthcare technology, decentralized asset tokenization, and
                  NFT interoperability, with notable contributions to OpenMRS as
                  a two-time Google Summer of Code developer and to Eclipse
                  Adoptium, and I am currently focused on Hiero ledger
                  solutions.
                </p>
                <a href="#0" className="btn btn--medium u-fullwidth" data-animate-el
                  >Download CV</a
                >
              </div>
            </div>
          </div>
          {/* about-info */}

          <div className="row about-expertise" data-animate-block>
            <div className="column lg-12">
              <h2 className="text-pretitle" data-animate-el>Expertise</h2>

              <ul className="skills-list h1" data-animate-el>
                <li>Frontend Development</li>
                <li>Web3 Engineering</li>
                <li>React & Next.js</li>
                <li>Smart Contracts</li>
                <li>DApp Development</li>
              </ul>
            </div>
          </div>
          {/* end about-expertise */}

          <div className="row about-timelines" data-animate-block>
            <div className="column lg-6 tab-12">
              {/* <h2 className="text-pretitle" data-animate-el>Experience</h2> */}
{/* 
              <div className="timeline" data-animate-el>
                <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <h4 className="timeline__title">Dropbox</h4>
                    <h5 className="timeline__meta">Product Designer</h5>
                    <p className="timeline__timeframe">August 2019 - Present</p>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div> */}

                {/* <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <h4 className="timeline__title">Microsoft</h4>
                    <h5 className="timeline__meta">Frontend Developer</h5>
                    <p className="timeline__timeframe">August 2016 - July 2019</p>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div> */}
              {/* end timeline */}
            </div>
            {/* end column */}

            <div className="column lg-6 tab-12">
              {/* <h2 className="text-pretitle" data-animate-el>Education</h2>

              <div className="timeline" data-animate-el>
                <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <h4 className="timeline__title">University of Life</h4>
                    <h5 className="timeline__meta">Master in Graphic Design</h5>
                    <p className="timeline__timeframe">April 2015</p>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div> */}

                {/* <div className="timeline__block">
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                    <h4 className="timeline__title">School of Cool Designers</h4>
                    <h5 className="timeline__meta">
                      B.A. Degree in Graphic Design
                    </h5>
                    <p className="timeline__timeframe">August 2012</p>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div> */}
              {/* end timeline */}
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
              {/* <h2 className="text-pretitle" data-animate-el>Recent Works</h2>
              <p className="h1" data-animate-el>
                Here are some of my favorite projects I have done lately. Feel
                free to check them out.
              </p> */}

              <ul className="folio-list row block-lg-one-half block-stack-on-1000">
                {/* <li className="folio-list__item column" data-animate-el>
                  <a className="folio-list__item-link" href="#modal-01">
                    <div className="folio-list__item-pic">
                      <img
                        src="images/portfolio/fuji.jpg"
                        srcSet="
                          images/portfolio/fuji.jpg    1x,
                          images/portfolio/fuji@2x.jpg 2x
                        "
                        alt=""
                      />
                    </div>

                    <div className="folio-list__item-text">
                      <div className="folio-list__item-cat">Website</div>
                      <div className="folio-list__item-title">Retro Camera.</div>
                    </div>
                  </a>
                  <a
                    className="folio-list__proj-link"
                    href="#"
                    title="project link"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li> */}
                {/*end folio-list__item */}

                {/* <li className="folio-list__item column" data-animate-el>
                  <a className="folio-list__item-link" href="#modal-02">
                    <div className="folio-list__item-pic">
                      <img
                        src="images/portfolio/lamp.jpg"
                        srcSet="
                          images/portfolio/lamp.jpg    1x,
                          images/portfolio/lamp@2x.jpg 2x
                        "
                        alt=""
                      />
                    </div>

                    <div className="folio-list__item-text">
                      <div className="folio-list__item-cat">Product Design</div>
                      <div className="folio-list__item-title">The White Lamp.</div>
                    </div>
                  </a>
                  <a
                    className="folio-list__proj-link"
                    href="#"
                    title="project link"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li> */}
                {/*end folio-list__item */}

                {/* <li className="folio-list__item column" data-animate-el>
                  <a className="folio-list__item-link" href="#modal-03">
                    <div className="folio-list__item-pic">
                      <img
                        src="images/portfolio/rucksack.jpg"
                        srcSet="
                          images/portfolio/rucksack.jpg    1x,
                          images/portfolio/rucksack@2x.jpg 2x
                        "
                        alt=""
                      />
                    </div>

                    <div className="folio-list__item-text">
                      <div className="folio-list__item-cat">Branding</div>
                      <div className="folio-list__item-title">Rucksuck.</div>
                    </div>
                  </a>
                  <a
                    className="folio-list__proj-link"
                    href="#"
                    title="project link"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li> */}
                {/*end folio-list__item */}

                {/* <li className="folio-list__item column" data-animate-el>
                  <a className="folio-list__item-link" href="#modal-04">
                    <div className="folio-list__item-pic">
                      <img
                        src="images/portfolio/skaterboy.jpg"
                        srcSet="
                          images/portfolio/skaterboy.jpg    1x,
                          images/portfolio/skaterboy@2x.jpg 2x
                        "
                        alt=""
                      />
                    </div>

                    <div className="folio-list__item-text">
                      <div className="folio-list__item-cat">Website</div>
                      <div className="folio-list__item-title">Since Day One.</div>
                    </div>
                  </a>
                  <a
                    className="folio-list__proj-link"
                    href="#"
                    title="project link"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li> */}
                {/*end folio-list__item */}

                {/* <li className="folio-list__item column" data-animate-el>
                  <a className="folio-list__item-link" href="#modal-05">
                    <div className="folio-list__item-pic">
                      <img
                        src="images/portfolio/sanddunes.jpg"
                        srcSet="
                          images/portfolio/sanddunes.jpg    1x,
                          images/portfolio/sanddunes@2x.jpg 2x
                        "
                        alt=""
                      />
                    </div>

                    <div className="folio-list__item-text">
                      <div className="folio-list__item-cat">Illustration</div>
                      <div className="folio-list__item-title">Sand Dunes.</div>
                    </div>
                  </a>
                  <a
                    className="folio-list__proj-link"
                    href="#"
                    title="project link"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li> */}
                {/*end folio-list__item */}

                {/* <li className="folio-list__item column" data-animate-el>
                  <a className="folio-list__item-link" href="#modal-06">
                    <div className="folio-list__item-pic">
                      <img
                        src="images/portfolio/minimalismo.jpg"
                        srcSet="
                          images/portfolio/minimalismo.jpg    1x,
                          images/portfolio/minimalismo@2x.jpg 2x
                        "
                        alt=""
                      />
                    </div>

                    <div className="folio-list__item-text">
                      <div className="folio-list__item-cat">Branding</div>
                      <div className="folio-list__item-title">Minimalismo.</div>
                    </div>
                  </a>
                  <a
                    className="folio-list__proj-link"
                    href="#"
                    title="project link"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li> */}
                {/*end folio-list__item */}
              </ul>
              {/* end folio-list */}
            </div>
            {/* end column */}

            {/* Modal Templates Popup
                    -------------------------------------------- */}
            {/* <div id="modal-01" hidden>
              <div className="modal-popup">
                <img src="images/portfolio/gallery/g-fuji.jpg" alt="" />

                <div className="modal-popup__desc">
                  <h5>Retro Camera</h5>
                  <p>
                    Odio soluta enim quos sit asperiores rerum rerum repudiandae
                    cum. Vel voluptatem alias qui assumenda iure et expedita
                    voluptatem. Ratione officiis quae.
                  </p>
                  <ul className="modal-popup__cat">
                    <li>Branding</li>
                    <li>Product Design</li>
                  </ul>
                </div>

                <a href="https://www.behance.net/" className="modal-popup__details"
                  >Project link</a
                >
              </div>
            </div> */}
            {/* end modal */}

            {/* <div id="modal-02" hidden>
              <div className="modal-popup">
                <img src="images/portfolio/gallery/g-lamp.jpg" alt="" />

                <div className="modal-popup__desc">
                  <h5>The White Lamp</h5>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit.
                  </p>
                  <ul className="modal-popup__cat">
                    <li>Branding</li>
                  </ul>
                </div>

                <a href="https://www.behance.net/" className="modal-popup__details"
                  >Project link</a
                >
              </div>
            </div> */}
            {/* end modal */}

            {/* <div id="modal-03" hidden>
              <div className="modal-popup">
                <img src="images/portfolio/gallery/g-rucksack.jpg" alt="" />

                <div className="modal-popup__desc">
                  <h5>Rucksuck</h5>
                  <p>
                    Exercitationem reprehenderit quod explicabo consequatur
                    aliquid ut magni ut. Deleniti quo corrupti illum velit
                    eveniet ratione necessitatibus ipsam mollitia.
                  </p>
                  <ul className="modal-popup__cat">
                    <li>Product Design</li>
                  </ul>
                </div>

                <a href="https://www.behance.net/" className="modal-popup__details"
                  >Project link</a
                >
              </div>
            </div> */}
            {/* end modal */}

            {/* <div id="modal-04" hidden>
              <div className="modal-popup">
                <img src="images/portfolio/gallery/g-skaterboy.jpg" alt="" />

                <div className="modal-popup__desc">
                  <h5>Since Day One</h5>
                  <p>
                    Dolores velit qui quos nobis. Aliquam delectus voluptas quos
                    possimus non voluptatem voluptas voluptas. Est doloribus
                    eligendi porro doloribus voluptatum.
                  </p>
                  <ul className="modal-popup__cat">
                    <li>Website</li>
                  </ul>
                </div>

                <a href="https://www.behance.net/" className="modal-popup__details"
                  >Project link</a
                >
              </div>
            </div> */}
            {/* end modal */}

            {/* <div id="modal-05" hidden>
              <div className="modal-popup">
                <img src="images/portfolio/gallery/g-sanddunes.jpg" alt="" />

                <div className="modal-popup__desc">
                  <h5>Sand Dunes</h5>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit.
                  </p>
                  <ul className="modal-popup__cat">
                    <li>Illustration</li>
                  </ul>
                </div>

                <a href="https://www.behance.net/" className="modal-popup__details"
                  >Project link</a
                >
              </div>
            </div> */}
            {/* end modal */}

            {/* <div id="modal-06" hidden>
              <div className="modal-popup">
                <img src="images/portfolio/gallery/g-minimalismo.jpg" alt="" />

                <div className="modal-popup__desc">
                  <h5>Minimalismo</h5>
                  <p>
                    Quisquam vel libero consequuntur autem voluptas. Qui aut
                    vero. Omnis fugit mollitia cupiditate voluptas. Aenean
                    sollicitudin, lorem quis bibendum auctor.
                  </p>
                  <ul className="modal-popup__cat">
                    <li>Branding</li>
                    <li>Product Design</li>
                  </ul>
                </div>

                <a href="https://www.behance.net/" className="modal-popup__details"
                  >Project link</a
                >
              </div>
            </div> */}
            {/* end modal */}
          </div>
          {/* end works-portfolio */}

          <div className="row testimonials">
            <div className="column lg-12" data-animate-block>
              <div className="swiper-container testimonial-slider" data-animate-el>
                <div className="swiper-wrapper">
                  {/* <div className="testimonial-slider__slide swiper-slide">
                    <div className="testimonial-slider__author">
                      <img
                        src="images/avatars/user-02.jpg"
                        alt="Author image"
                        className="testimonial-slider__avatar"
                      />
                      <cite className="testimonial-slider__cite">
                        <strong>Tim Cook</strong>
                        <span>CEO, Apple</span>
                      </cite>
                    </div>
                    <p>
                      Molestiae incidunt consequatur quis ipsa autem nam sit
                      enim magni. Voluptas tempore rem. Explicabo a quaerat sint
                      autem dolore ducimus ut consequatur neque. Nisi dolores
                      quaerat fuga rem nihil nostrum. Laudantium quia
                      consequatur molestias delectus culpa.
                    </p>
                  </div> */}
                  {/* end testimonial-slider__slide */}

                  {/* <div className="testimonial-slider__slide swiper-slide">
                    <div className="testimonial-slider__author">
                      <img
                        src="images/avatars/user-03.jpg"
                        alt="Author image"
                        className="testimonial-slider__avatar"
                      />
                      <cite className="testimonial-slider__cite">
                        <strong>Sundar Pichai</strong>
                        <span>CEO, Google</span>
                      </cite>
                    </div>
                    <p>
                      Excepturi nam cupiditate culpa doloremque deleniti
                      repellat. Veniam quos repellat voluptas animi adipisci.
                      Nisi eaque consequatur. Voluptatem dignissimos ut ducimus
                      accusantium perspiciatis. Quasi voluptas eius distinctio.
                      Atque eos maxime.
                    </p>
                  </div> */}
                  {/* end testimonial-slider__slide */}

                  {/* <div className="testimonial-slider__slide swiper-slide">
                    <div className="testimonial-slider__author">
                      <img
                        src="images/avatars/user-01.jpg"
                        alt="Author image"
                        className="testimonial-slider__avatar"
                      />
                      <cite className="testimonial-slider__cite">
                        <strong>Satya Nadella</strong>
                        <span>CEO, Microsoft</span>
                      </cite>
                    </div>
                    <p>
                      Repellat dignissimos libero. Qui sed at corrupti expedita
                      voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed
                      ipsam. Autem eaque officia cum exercitationem sunt
                      voluptatum accusamus. Quasi voluptas eius distinctio.
                      Voluptatem dignissimos ut.
                    </p>
                  </div> */}
                  {/* end testimonial-slider__slide */}

                  {/* <div className="testimonial-slider__slide swiper-slide">
                    <div className="testimonial-slider__author">
                      <img
                        src="images/avatars/user-06.jpg"
                        alt="Author image"
                        className="testimonial-slider__avatar"
                      />
                      <cite className="testimonial-slider__cite">
                        <strong>Jeff Bezos</strong>
                        <span>CEO, Amazon</span>
                      </cite>
                    </div>
                    <p>
                      Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc
                      ac augue. Fusce vel dui. In ac felis quis tortor malesuada
                      pretium. Curabitur vestibulum aliquam leo. Qui sed at
                      corrupti expedita voluptas odit. Nihil ea quia nesciunt.
                      Ducimus aut sed ipsam.
                    </p>
                  </div> */}
                  {/* end testimonial-slider__slide */}
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
                <a href="mailto:jessiessebuliba@gmail.com" className="mailtoui"
                  >jessiessebuliba@gmail.com</a
                >
                <br />
                <a href="tel:+256754544829">+256 754 544829</a>
              </p>
            </div>
            <div className="column lg-4 md-5 tab-6 stack-on-550 contact-block">
              <h3 className="text-pretitle">Social</h3>
              <ul className="contact-social">
                <li><a href="https://github.com/jexsie">GitHub</a></li>
                <li>
                  <a href="https://linkedin.com/in/ssebuliba">LinkedIn</a>
                </li>
                <li><a href="https://twitter.com/amjexsie">Twitter</a></li>
                <li><a href="https://instagram.com/amjexsie">Instagram</a></li>
              </ul>
            </div>
            <div className="column lg-4 md-12 contact-block">
              <a
                href="mailto:jessiessebuliba@gmail.com"
                className="mailtoui btn btn--medium u-fullwidth contact-btn"
                >Say Hello.</a
              >
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
            <span>© Copyright Jessy Ssebuliba 2025</span>
          </div>

          <div className="ss-go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
                />
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