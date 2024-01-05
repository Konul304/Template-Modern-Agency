'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
//= Scripts
import fadeWhenScroll from "@/common/fadeWhenScroll";
import removeSlashFromBagination from "@/common/removeSlashpagination";
//= Static Data
import caseStudyData from "@/data/case-study.json";

const swiperOptions = {
  modules: [Navigation, EffectFade],
  speed: 1000,
  effect: "fade",
  navigation: {
    prevEl: ".controls .swiper-button-prev",
    nextEl: ".controls .swiper-button-next",
  },
}

function CaseStudy() {
  useEffect(() => {
    removeSlashFromBagination();
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
  }, []);

  return (
    <section className="case-study">
      <div id="content-carousel-container-unq-1" className="swiper-container" data-swiper="container">
        <Swiper {...swiperOptions} className="swiper-wrapper">
          {
            caseStudyData.map(slide => (
              <SwiperSlide key={slide.id} className="swiper-slide bg-img" style={{ backgroundImage: `url(${slide.image})` }} data-overlay-dark="7">
                <div className="container d-flex align-items-end">
                  <div className="cont">
                    <a href="#">
                      <span>Case Study</span>
                      <h6 className="main-color">{slide.date}</h6>
                      <h4>{slide.title}</h4>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="controls">
          <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy