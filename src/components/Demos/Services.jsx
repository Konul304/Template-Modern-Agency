import React from 'react';

function Services() {
  return (
    <section className="services bords lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-12">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">Best Features</h6>
              <h3 className="wow color-font">
                Creative Agency, Corporate and Portfolio Template
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
            <div className="item-box">
              <div>
                <span className="icon pe-7s-paint-bucket"></span>
              </div>
              <div className="cont">
                <h6>UI/UX Design</h6>
                <p>
                  We provide the best design by following the latest trends.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".7s">
            <div className="item-box">
              <div>
                <span className="icon pe-7s-phone"></span>
              </div>
              <div className="cont">
                <h6>Easily Customizable</h6>
                <p>Build and customize stunning pages in minutes.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".9s">
            <div className="item-box">
              <div>
                <span className="icon pe-7s-display1"></span>
              </div>
              <div className="cont">
                <h6>One / Multi Page</h6>
                <p>Choose the layout style that fits your need.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".5s">
            <div className="item-box">
              <div>
                <span className="icon pe-7s-diskette"></span>
              </div>
              <div className="cont">
                <h6>24/7 Support</h6>
                <p>We commit to keep your site up-to-date.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line top right"></div>
    </section>
  )
}

export default Services