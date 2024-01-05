'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const swiperOptions = {
  modules: [Navigation],
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  speed: 1000,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
}

function Works2() {
  const [loadSwiper, setloadSwiper] = useState(false);

  useEffect(() => {
    setloadSwiper(true);
  }, []);

  return (
    <section className="work-carousel section-padding caroul position-re pb-0">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">Latest Work</h6>
              <h3 className="wow color-font">
                Our Recent Web Design &amp; <br /> Some Past Projects.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <div className="swiper-container">
                {
                  loadSwiper &&
                  <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="content wow fadeInUp" data-wow-delay=".3s">
                        <div className="item-img bg-img wow imago" style={{ backgroundImage: 'url(/img/portfolio/curs/1.jpg)' }}>
                        </div>
                        <div className="cont bgbox">
                          <h6>
                            <Link href="/project-details2/project-details2-dark">
                              art &amp; illustration
                            </Link>
                          </h6>
                          <h4>
                            <Link href="/project-details2/project-details2-dark">
                              Innovation and Crafts.
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="content wow fadeInUp" data-wow-delay=".3s">
                        <div className="item-img bg-img wow imago" style={{ backgroundImage: 'url(/img/portfolio/curs/2.jpg)' }}>
                        </div>
                        <div className="cont bgbox">
                          <h6>
                            <Link href="/project-details2/project-details2-dark">
                              art &amp; illustration
                            </Link>
                          </h6>
                          <h4>
                            <Link href="/project-details2/project-details2-dark">
                              Inspiring new space.
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="content wow fadeInUp" data-wow-delay=".3s">
                        <div className="item-img bg-img wow imago" style={{ backgroundImage: 'url(/img/portfolio/curs/3.jpg)' }}>
                        </div>
                        <div className="cont bgbox">
                          <h6>
                            <Link href="/project-details2/project-details2-dark">
                              art &amp; illustration
                            </Link>
                          </h6>
                          <h4>
                            <Link href="/project-details2/project-details2-dark">
                              Natural plus modern.
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="content wow fadeInUp" data-wow-delay=".3s">
                        <div className="item-img bg-img wow imago" style={{ backgroundImage: 'url(/img/portfolio/curs/4.jpg)' }}>
                        </div>
                        <div className="cont bgbox">
                          <h6>
                            <Link href="/project-details2/project-details2-dark">
                              art &amp; illustration
                            </Link>
                          </h6>
                          <h4>
                            <Link href="/project-details2/project-details2-dark">
                              Innovation and Crafts.
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="content wow fadeInUp" data-wow-delay=".3s">
                        <div className="item-img bg-img wow imago" style={{ backgroundImage: 'url(/img/portfolio/curs/5.jpg)' }}>
                        </div>
                        <div className="cont bgbox">
                          <h6>
                            <Link href="/project-details2/project-details2-dark">
                              art &amp; illustration
                            </Link>
                          </h6>
                          <h4>
                            <Link href="/project-details2/project-details2-dark">
                              Inspiring new space.
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                }
                <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
                  <i className="ion-ios-arrow-right"></i>
                </div>
                <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
                  <i className="ion-ios-arrow-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works2;