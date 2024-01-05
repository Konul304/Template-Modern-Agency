'use client';
import React, { useEffect } from 'react';
//= Scripts
import initFullNavbarMenu from "@/common/initFullNavbarMenu";

function NavbarFullMenu({ theme }) {
  useEffect(() => {
    initFullNavbarMenu();
  }, []);

  return (
    <>
      <div id="navi" className={`topnav ${theme ? (theme === 'light' ? 'light' : '') : ''}`}>
        <div className="container-fluid">
          <div className="logo">
            <a href="#0">
              {
                theme === 'light' ?
                  <img src="/img/logo-dark.png" alt="logo" />
                  :
                  <img src="/img/logo-light.png" alt="logo" />
              }
            </a>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <span className="text" data-splitting>
              <span className="menu-text">Menu</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">01.</span>Home
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/homepage/home1-dark">
                              <span className="nm">01.</span>Main Home
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/homepage/home2-dark">
                              <span className="nm">02.</span>Creative Agency
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/homepage/home5-dark">
                              <span className="nm">03.</span>Digital Agency
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/homepage/home4-dark">
                              <span className="nm">04.</span>Business One Page
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/homepage/home3-dark">
                              <span className="nm">05.</span>Corporate
                            </a>
                          </div>
                        </li>

                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/homepage/home6-dark">
                              <span className="nm">06.</span>Modern Agency
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/homepage/home7-dark">
                              <span className="nm">07.</span>Freelancer
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/homepage/home8-dark">
                              <span className="nm">08.</span>Architecture
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/about/about-dark">
                        <span className="nm">02.</span>About Us
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">03.</span>Works
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/showcase/showcase-dark">
                              <span className="nm">01.</span>ShowCase Parallax
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/showcase3/showcase3-dark">
                              <span className="nm">02.</span>ShowCase Carousel
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/showcase2/showcase2-dark">
                              <span className="nm">03.</span>ShowCase Circle
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/works/works-dark">
                              <span className="nm">04.</span>Portfolio Masonry
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/works2/works2-dark">
                              <span className="nm">05.</span>Portfolio Filtering
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/works3/works3-dark">
                              <span className="nm">06.</span>Portfolio Gallery
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">04.</span>Blogs
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/blog/blog-dark">
                              <span className="nm">01.</span>Blog Standerd
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/blog-list/blog-list-dark">
                              <span className="nm">02.</span>Blog List
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/blog-grid/blog-grid-dark">
                              <span className="nm">03.</span>Blog Grid
                            </a>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <a className="sub-link" href="/blog-details/blog-details-dark">
                              <span className="nm">04.</span>Blog Details
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <a className="link" href="/contact/contact-dark">
                        <span className="nm">05.</span>Contact
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Phone :</h6>
                  <p>+03 762-2367-723</p>
                </div>
                <div className="item">
                  <h6>Address :</h6>
                  <p>541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io</p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">Vie_website@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarFullMenu