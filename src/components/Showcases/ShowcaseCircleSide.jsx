'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
//= Scripts
import removeSlashFromBagination from "@/common/removeSlashpagination";
import fadeWhenScroll from "@/common/fadeWhenScroll";
//= Static Data
import fullScreenData from "@/data/fullScreen.json";

const swiperOptions = {
  modules: [Parallax, Navigation, Pagination, Autoplay],
  speed: 1000,
  mousewheel: true,
  parallax: true,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: true,
  spaceBetween: 500,
  navigation: {
    prevEl: ".txt-botm .swiper-button-prev",
    nextEl: ".txt-botm .swiper-button-next",
  },
  breakpoints: {
    0: {
      spaceBetween: 0,
    },
    640: {
      spaceBetween: 0,
    },
    768: {
      spaceBetween: 30,
    },
    1024: {
      spaceBetween: 500,
    },
  },
  onSwiper: (swiper) => {
    setTimeout(() => {
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].childNodes[0].setAttribute(
          "data-swiper-parallax",
          0.75 * swiper.width
        );
      }
    });
  }
}

function ShowcaseCircleSide() {
  useEffect(() => {
    removeSlashFromBagination();
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
  }, []);

  return (
    <header className="slider circle-slide showcase-carus">
      <div id="content-carousel-container-unq-1" className="swiper-container">
        <Swiper {...swiperOptions} className="swiper-wrapper">
          {
            fullScreenData.map(slide => (
              <SwiperSlide key={slide.id} className="SwiperSlide">
                <div className="full-width">
                  <div className="bg-img valign" style={{ backgroundImage: `url(${slide.image})` }} data-overlay-dark="1">
                    <div className="caption ontop valign">
                      <div className="o-hidden">
                        <h1 data-swiper-parallax="-2000">
                          <Link href="/project-details2/project-details2-dark">
                            <div className="stroke">{slide.title.first}</div>
                            <span>{slide.title.second}</span>
                          </Link>
                        </h1>
                      </div>
                    </div>
                    <div className="copy-cap valign">
                      <div className="cap">
                        <h1 data-swiper-parallax="-2000">
                          <Link href="/project-details2/project-details2-dark">
                            <div className="stroke">{slide.title.first}</div>
                            <span>{slide.title.second}</span>
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className="txt-botm">
        <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
          <div>
            <span>Next Slide</span>
          </div>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div>
            <span>Prev Slide</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ShowcaseCircleSide;