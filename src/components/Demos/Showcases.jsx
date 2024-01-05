import React from 'react';
import Link from 'next/link';

function Showcases() {
  return (
    <section className="masonery section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h3 className="color-font">Showcases</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="gallery full-width">
            <div className="col-lg-3 col-md-6 items">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <Link target="_blank" href="/showcase/showcase-dark">
                  <div className="img">
                    <img src="/demo-img/s1.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Full Screen</h6>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 items">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <Link target="_blank" href="/showcase/showcase-light">
                  <div className="img">
                    <img src="/demo-img/s01.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Full Screen</h6>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 items">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <Link target="_blank" href="/showcase3/showcase3-dark">
                  <div className="img">
                    <img src="/demo-img/s2.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Showcase Carousel</h6>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 items">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <Link target="_blank" href="/showcase3/showcase3-light">
                  <div className="img">
                    <img src="/demo-img/s02.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Showcase Carousel</h6>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 items">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <Link target="_blank" href="/showcase2/showcase2-dark">
                  <div className="img">
                    <img src="/demo-img/s3.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Showcase Circle</h6>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 items">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <Link target="_blank" href="/showcase2/showcase2-light">
                  <div className="img">
                    <img src="/demo-img/s03.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Showcase Circle</h6>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 items">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <Link target="_blank" href="/works/works-dark">
                  <div className="img">
                    <img src="/demo-img/w1.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Works 3 column</h6>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 items">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <Link target="_blank" href="/works/works-light">
                  <div className="img">
                    <img src="/demo-img/w01.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Works 3 column</h6>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 items">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <Link target="_blank" href="/works2/works2-dark">
                  <div className="img">
                    <img src="/demo-img/w2.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Works Filtering</h6>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 items">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <Link target="_blank" href="/works2/works2-light">
                  <div className="img">
                    <img src="/demo-img/w02.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Works Filtering</h6>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 items">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <Link target="_blank" href="/works3/works3-dark">
                  <div className="img">
                    <img src="/demo-img/w3.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Works Gallery</h6>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 items">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <Link target="_blank" href="/works3/works3-light">
                  <div className="img">
                    <img src="/demo-img/w03.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Works Gallery</h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="line top left"></div>
    </section>
  )
}

export default Showcases