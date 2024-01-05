import React from "react";
import Link from "next/link";

const Blogs2 = () => {
  return (
    <section className="blog-list section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color">Get The Latest News</h6>
              <h3>What Our Trending News.</h3>
              <p>We provide company and finance service for startups and company business.</p>
              <Link href="/blog/blog-dark">
                <span>More Blog Posts</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/1.jpg" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark" className="date">
                      <span>
                        <i>06</i> August
                      </span>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark" className="tag">
                      <span>WordPress</span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      How to use solid color combine with simple furnitures.
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".5s">
              <div className="img valign">
                <img src="/img/blog/2.jpg" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark" className="date">
                      <span>
                        <i>06</i> August
                      </span>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark" className="tag">
                      <span>WordPress</span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      How to use solid color combine with simple furnitures.
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/3.jpg" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark" className="date">
                      <span>
                        <i>06</i> August
                      </span>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark" className="tag">
                      <span>WordPress</span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      How to use solid color combine with simple furnitures.
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
