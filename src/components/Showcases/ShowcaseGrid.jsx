'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Mousewheel } from 'swiper';
//= Scripts
import removeSlashFromBagination from "@/common/removeSlashpagination";
import tooltipEffect from "@/common/tooltipEffect";
//= Static Data
import fullScreenData from "@/data/fullScreen.json";

const swiperOptions = {
  modules: [Autoplay, Navigation, Mousewheel],
  slidesPerView: 4,
  speed: 1000,
  mousewheel: true,
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  navigation: {
    prevEl: ".txt-botm .swiper-button-prev",
    nextEl: ".txt-botm .swiper-button-next",
  }
}

function ShowcaseGrid() {
  useEffect(() => {
    tooltipEffect()
    removeSlashFromBagination();
    document.querySelector('.div-tooltip-tit').style.display = 'block';
    document.querySelector('.div-tooltip-sub').style.display = 'block';
  }, []);

  return (
    <header className="slider showcase-grid">
      <div id="content-carousel-container-unq-1">
        <Swiper {...swiperOptions}>
          {
            fullScreenData.map(slide => (
              <SwiperSlide key={slide.id}>
                <div className="bg-img" style={{ backgroundImage: `url(${slide.image})` }} data-tooltip-tit={slide.title.first + ' ' + slide.title.second} data-tooltip-sub={slide.sub}></div>
              </SwiperSlide>
            ))
          }
        </Swiper>
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

          <div className="swiper-pagination dots"></div>
        </div>
      </div>
    </header>
  )
}

export default ShowcaseGrid;