import React from 'react';

function LatestNews() {
  return (
    <section className="blog section-padding" id="blogs">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">Latest News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
              <div className="img">
                <img src="/img/arch/blog/1.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <a href="#0" className="date">
                      <span> <i>06</i> August </span>
                    </a>
                    <span>/</span>
                    <a href="#0" className="tag">
                      <span className="main-color">Architecture</span>
                    </a>
                  </div>
                  <h5>
                    <a href="#0">
                      How to use solid color combine with simple furnitures.
                    </a>
                  </h5>
                  <div className="btn-more">
                    <a href="#0" className="simple-btn main-color"> Read More </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <div className="img">
                <img src="/img/arch/blog/2.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <a href="#0" className="date">
                      <span> <i>06</i> August </span>
                    </a>
                    <span>/</span>
                    <a href="#0" className="tag">
                      <span className="main-color">Architecture</span>
                    </a>
                  </div>
                  <h5>
                    <a href="#0">
                      How to use solid color combine with simple furnitures.
                    </a>
                  </h5>
                  <div className="btn-more">
                    <a href="#0" className="simple-btn main-color"> Read More </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestNews