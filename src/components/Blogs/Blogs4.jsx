'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Parallax, EffectFade } from 'swiper';
//= Scripts
import removeSlashFromBagination from '@/common/removeSlashpagination';
import thumparallaxDown from '@/common/thumparallaxDown';

const swiperImageOptions = {
  modules: [Pagination, Navigation, Parallax, EffectFade],
  speed: 800,
  effect: "fade",
  spaceBetween: 0,
  loop: true,
  parallax: true,
  slidesPerView: 1,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    type: "fraction",
    clickable: true,
    el: ".swiper-pagination",
  },
  onSwiper: (swiper) => {
    for (var i = 0; i < swiper.slides.length; i++) {
      let img = swiper.slides[i].childNodes[0].childNodes[0].childNodes[0]
      img.setAttribute(
        "data-swiper-parallax",
        0.75 * swiper.width
      );
    }
  }
}

const swiperTextOptions = {
  modules: [Pagination, Navigation],
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    prevEl: ".controls .swiper-button-prev",
    nextEl: ".controls .swiper-button-next",
  },
  pagination: {
    type: "fraction",
    clickable: true,
    el: ".controls .swiper-pagination",
  },
}

function Blogs4() {
  useEffect(() => {
    removeSlashFromBagination();
    thumparallaxDown();
  }, []);

  return (
    <section className="blog-crv sub-bg">
      <div className="stories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 no-padding">
              <Swiper className="swiper-wrapper swiper-container swiper-img" {...swiperImageOptions}>
                <SwiperSlide className="SwiperSlide">
                  <div className="item wow fadeIn" data-wow-delay=".3s">
                    <div className="img">
                      <img className="thumparallax" src="/img/blog/1.jpg" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="SwiperSlide">
                  <div className="item wow fadeIn" data-wow-delay=".3s">
                    <div className="img">
                      <img className="thumparallax" src="/img/blog/2.jpg" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="SwiperSlide">
                  <div className="item wow fadeIn" data-wow-delay=".3s">
                    <div className="img">
                      <img className="thumparallax" src="/img/blog/3.jpg" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-lg-6 no-padding valign">
              <Swiper className="swiper-wrapper swiper-container swiper-content" {...swiperTextOptions}>
                <SwiperSlide className="SwiperSlide">
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                    <div className="content">
                      <div className="tags">
                        <a href="#0">Trending</a>
                      </div>
                      <div className="info">
                        <a href="#0">
                          <i className="far fa-clock"></i>
                          06 Aug 2023
                        </a>
                        <a href="#0">by Alex Morgan</a>
                      </div>
                      <div className="title">
                        <h4>
                          <a href="#0">
                            Create The Lifestyle You Really Desire This World
                          </a>
                        </h4>
                      </div>
                      <div className="text">
                        <p>
                          Success is no accident. It is hard work, perseverance,
                          learning, studying, sacrifice and most of all, love of
                          what you are doing.
                        </p>
                      </div>
                      <div className="more">
                        <Link href="/blog-details/blog-details-dark">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                    <div className="content">
                      <div className="tags">
                        <a href="#0">Trending</a>
                      </div>
                      <div className="info">
                        <a href="#0">
                          <i className="far fa-clock"></i>
                          06 Aug 2023
                        </a>
                        <a href="#0">by Alex Morgan</a>
                      </div>
                      <div className="title">
                        <h4>
                          <a href="#0">
                            List of The Best Investment Projects
                          </a>
                        </h4>
                      </div>
                      <div className="text">
                        <p>
                          Success is no accident. It is hard work, perseverance,
                          learning, studying, sacrifice and most of all, love of
                          what you are doing.
                        </p>
                      </div>
                      <div className="more">
                        <Link href="/blog-details/blog-details-dark">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                    <div className="content">
                      <div className="tags">
                        <a href="#0">Trending</a>
                      </div>
                      <div className="info">
                        <a href="#0">
                          <i className="far fa-clock"></i>
                          06 Aug 2023
                        </a>
                        <a href="#0">by Alex Morgan</a>
                      </div>
                      <div className="title">
                        <h4>
                          <a href="#0">World Best Business Website Company</a>
                        </h4>
                      </div>
                      <div className="text">
                        <p>
                          Success is no accident. It is hard work, perseverance,
                          learning, studying, sacrifice and most of all, love of
                          what you are doing.
                        </p>
                      </div>
                      <div className="more">
                        <Link href="/blog-details/blog-details-dark">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="controls">
            <div className="swiper-button-next swiper-nav-ctrl next-ctrl">
              <i className="fas fa-caret-up"></i>
            </div>
            <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl">
              <i className="fas fa-caret-down"></i>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs4;