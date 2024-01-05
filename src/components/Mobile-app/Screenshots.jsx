'use client';
import React, { useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
//= Static Data
import screenshots from '@/data/mobile-app/screen-shots.json';

const swiperOptions = {
  modules: [Pagination],
  speed: 1000,
  spaceBetween: 30,
  loop: true,
  parallax: false,
  slidesPerView: 5,
  pagination: {
    type: "bullets",
    clickable: true,
    el: ".secreen-shots .swiper-pagination",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 5,
    },
  }
}

function Screenshots() {
  useEffect(() => {
    let swiperContainer = document.querySelector('.secreen-shots .swiper-container');
    let swiperPagination = document.querySelector('.secreen-shots .swiper-pagination');
    if (swiperContainer) {
      swiperContainer.appendChild(swiperPagination);
    }
  }, []);

  return (
    <section className="secreen-shots section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30"><span className="left"></span> Apps Screenshot <span className="Right"></span></h6>
              <h2>Amazing Designer Create Our Application Let’s See</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...swiperOptions}>
              {
                screenshots.map((screenshot, index) => (
                  <SwiperSlide className="SwiperSlide" key={index}>
                    <div className="item">
                      <div className="img">
                        <img src={screenshot} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Screenshots;