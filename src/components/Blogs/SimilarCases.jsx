import React from "react";
import Link from 'next/link';
import styles from '../../styles/Cases.module.scss';

const SimilarCases = () => {
  return (
    <section className={`blog ${styles.similar_cases_container}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 ">
            <div className="sec-head  text-center">
              {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
                RECENT ARTICLES
              </h6> */}
              <h3 className="wow color-font">Related Cases</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
              <a  href="/blog-details/blog-details-dark" className="img">
                <img src="/img/blog/1.jpg" alt="" />
              </a>
              <div className="cont">
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
                  <div className="btn-more">
                    <Link href="/blog-details/blog-details-dark" className="simple-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <a  href="/blog-details/blog-details-dark" className="img">
                <img src="/img/blog/2.jpg" alt="" />
              </a>
              <div className="cont">
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
                  <div className="btn-more">
                    <Link href="/blog-details/blog-details-dark" className="simple-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <a  href="/blog-details/blog-details-dark" className="img">
                <img src="/img/blog/3.jpg" alt="" />
              </a>
              <div className="cont">
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
                  <div className="btn-more">
                    <Link href="/blog-details/blog-details-dark" className="simple-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        <a href="/blog-grid/blog-grid-dark/" className={styles.see_more}>See more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarCases;
