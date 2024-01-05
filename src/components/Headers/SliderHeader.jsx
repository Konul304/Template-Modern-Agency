'use client';
import React, { useEffect, useRef } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax } from 'swiper';
//= Scripts
import removeSlashFromBagination from "@/common/removeSlashpagination";
import fadeWhenScroll from "@/common/fadeWhenScroll";
//= Static Data
import intro1Data from "@/data/intro1.json";

const swiperOptions = {
  modules: [Parallax, Navigation, Pagination],
  speed: 1000,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  parallax: true,
  pagination: {
    type: "fraction",
    clickable: true,
    el: ".swiper-pagination",
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

function SliderHeader() {
  const fixedSlider = useRef();

  useEffect(() => {
    removeSlashFromBagination();
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
  }, []);

  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector('.main-content');
      const slideHeight = fixedSlider.current.offsetHeight;
      MainContent.style.marginTop = slideHeight + "px";
    }
  }, []);

  return (
    <header className="slider slider-prlx fixed-slider text-center" ref={fixedSlider}>
      <div className="swiper-container parallax-slider">
        <Swiper {...swiperOptions} className="swiper-wrapper">
          {
            intro1Data.map(slide => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="bg-img valign" style={{ backgroundImage: `url(${slide.image})` }} data-overlay-dark="6">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10">
                        <div className="caption center mt-30">
                          <h1 className="color-font">{slide.title}</h1>
                          {
                            slide.content &&
                            <p>{slide.content}</p>
                          }
                          <a href="#" className="butn bord curve mt-30">
                            <span>Look More</span>
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
        <div className="setone setwo">
          <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className="swiper-pagination top botm"></div>

        <div className="social-icon">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </header>
  )
}

export default SliderHeader;