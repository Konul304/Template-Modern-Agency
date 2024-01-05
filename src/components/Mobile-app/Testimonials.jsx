'use client';
import React, { useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
//= Static Data
import testimonials from "@/data/mobile-app/testimonials.json";

const swiperOptions = {
  modules: [Pagination],
  speed: 1000,
  spaceBetween: 30,
  loop: true,
  parallax: false,
  slidesPerView: 3,
  pagination: {
    type: "bullets",
    clickable: true,
    el: ".app-testim .swiper-pagination",
  },
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
      slidesPerView: 2,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 3,
    }
  }
}

function Testimonials() {
  useEffect(() => {
    let swiperContainer = document.querySelector('.app-testim .swiper-container');
    let swiperPagination = document.querySelector('.app-testim .swiper-pagination');

    if (swiperContainer) swiperContainer.appendChild(swiperPagination);
  }, []);

  return (
    <section className="app-testim section-padding bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30"><span className="left"></span> Clients Feedback <span className="Right"></span></h6>
              <h2>Valuable Clinets Feedback About Our Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...swiperOptions}>
              {
                testimonials.map(testimonial => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="item">
                      <div className="icon mb-50">
                        <img src={testimonial['icon-image']} alt="" />
                      </div>
                      <div className="text">
                        <p>
                          {testimonial.content}
                        </p>
                      </div>
                      <div className="info">
                        <div className="img">
                          <img src={testimonial.author.image} alt="" />
                        </div>
                        <div className="cont">
                          <h6 className="mb-10">{testimonial.author.name}</h6>
                          <span>{testimonial.author.position}</span>
                        </div>
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

export default Testimonials;