'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import initIsotope from "@/common/initIsotope";

function Works6() {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className="portfolio po-arch section-padding pb-70" id="works">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">Projects</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active"> All </span>
              <span data-filter=".brand">Interior</span>
              <span data-filter=".web">Architecture</span>
              <span data-filter=".graphic">Residential</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div className="col-md-6 items graphic lg-mr wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/arch/work/1.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>BUGANVILLA HOUSE</h5>
                <span className="tags main-color custom-font">
                  <a href="#0">Arch</a>,
                  <a href="#0">Interior</a>
                </span>
              </div>
            </div>

            <div className="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/arch/work/2.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>The Concept</h5>
                <span className="tags main-color custom-font">
                  <a href="#0">Arch</a>,
                  <a href="#0">Interior</a>
                </span>
              </div>
            </div>

            <div className="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/arch/work/5.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Private House</h5>
                <span className="tags main-color custom-font">
                  <a href="#0">Arch</a>,
                  <a href="#0">Interior</a>
                </span>
              </div>
            </div>

            <div className="col-md-6 items web graphic wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/arch/work/3.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>Floating House Messinia</h5>
                <span className="tags main-color custom-font">
                  <a href="#0">Arch</a>,
                  <a href="#0">Interior</a>
                </span>
              </div>
            </div>

            <div className="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/arch/work/4.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>IN THE PINE FOREST</h5>
                <span className="tags main-color custom-font">
                  <a href="#0">Arch</a>,
                  <a href="#0">Interior</a>
                </span>
              </div>
            </div>

            <div className="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/arch/work/6.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h5>VILLAS IN SOCHI</h5>
                <span className="tags main-color custom-font">
                  <a href="#0">Arch</a>,
                  <a href="#0">Interior</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works6