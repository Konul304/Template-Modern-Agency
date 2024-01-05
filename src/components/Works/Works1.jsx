'use client';
import React from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
//= Static Data
import worksData from "@/data/works1.json";

const swiperOptions = {
  modules: [Autoplay, Navigation],
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  slidesPerView: 2,
  centeredSlides: true,
  autoPlay: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 2,
    },
  },
}

function Works1() {
  return (
    <section className="work-carousel metro position-re">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                {
                  worksData.map(slide => (
                    <SwiperSlide key={slide.id} className="swiper-slide">
                      <div className="content wow noraidus fadeInUp" data-wow-delay=".3s">
                        <div className="item-img bg-img wow imago" style={{ backgroundImage: `url(${slide.image})` }}></div>
                        <div className="cont">
                          <h6 className="color-font">
                            <a href="#">{slide.title}</a>
                          </h6>
                          <h4>
                            <Link href="/project-details2/project-details2-dark">
                              {slide.secTex}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              <div className="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer">
                <span className="simple-btn right">Next</span>
              </div>
              <div className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer">
                <span className="simple-btn">Prev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works1;