'use client';
import React, { useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax } from 'swiper';
//= Scripts
import removeSlashFromBagination from "@/common/removeSlashpagination";
import fadeWhenScroll from "@/common/fadeWhenScroll";
//= Static Data
import intro5Data from "@/data/intro5.json";

const swiperOptions = {
  modules: [Parallax, Navigation, Pagination],
  speed: 1000,
  navigation: {
    prevEl: ".setting .controls .swiper-button-prev",
    nextEl: ".setting .controls .swiper-button-next",
  },
  parallax: true,
  pagination: {
    clickable: true,
    el: ".setting .swiper-pagination",
  },
  onSwiper: (swiper) => {
    for (var i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i].childNodes[0].setAttribute(
        "data-swiper-parallax",
        0.75 * swiper.width
      );
    }
  }
}

function Header5() {
  useEffect(() => {
    removeSlashFromBagination();
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
  }, []);

  return (
    <header id="arch-slider" className="slider arch-slider">
      <div className="swiper-container parallax-slider">
        <Swiper {...swiperOptions} className="swiper-wrapper">
          {
            intro5Data.map((slide, index) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="bg-img valign" style={{ backgroundImage: `url(${slide.image})` }} data-overlay-dark="6">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="caption mt-30">
                          <h5>0{index + 1} .</h5>
                          <h1>
                            {
                              typeof slide.title === 'object' ?
                                <>
                                  {slide.title.first} <br />
                                  {slide.title.second}
                                </>
                                :
                                <>
                                  {slide.title}
                                </>
                            }
                          </h1>
                          {
                            slide.content &&
                            <p>{slide.content}</p>
                          }
                        </div>
                      </div>
                      <div className="col-lg-4 valign">
                        <div className="explore">
                          <a href="#0">
                            Explore Project
                            <i className="ion-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="setting">
          <div className="controls">
            <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
              <i className="ion-chevron-right"></i>
            </div>
            <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
              <i className="ion-chevron-left"></i>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </header>
  )
}

export default Header5;