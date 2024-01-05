'use client';
import React, { useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
//= Scripts
import removeSlashFromBagination from '@/common/removeSlashpagination';

const swiperOptions = {
  modules: [Autoplay, Navigation],
  loop: true,
  navigation: {
    prevEl: ".arrows .prev",
    nextEl: ".arrows .next",
  },
  centeredSlides: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 60,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    767: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    480: {
      slidesPerView: 1,
      centeredSlides: false,
    }
  },
}

function FullTestimonials({ withIMG, withCOLOR, noPadding, classText, showHead }) {
  useEffect(() => {
    removeSlashFromBagination();
  }, []);

  return (
    <section className={`testimonials ${withIMG ? 'section-padding bg-img' : withCOLOR ? 'section-padding back-color' : noPadding ? '' : 'section-padding'} ${classText ? classText : ''}`} style={{ backgroundImage: `${withIMG ? 'url(' + withIMG + ')' : 'none'}` }}>
      {
        showHead &&
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">Testimonials</h6>
                <h3 className="wow color-font">
                  We love our clients from all over the world.
                </h3>
              </div>
            </div>
          </div>
        </div>
      }

      <div className="container-fluid position-re">
        <div className="row wow fadeInUp" data-wow-delay=".5s">
          <div className="col-lg-12">
            <Swiper {...swiperOptions} className="slic-item" data-wow-delay=".5s">
              <SwiperSlide className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/1.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">Alex Regelman</h6>
                      <span className="author-details"> Co-founder, Colabrio </span>
                    </div>
                  </div>
                </div>
                <p>
                  I would highly recommend Vie Digital. I worked with the team on
                  an animation for our ‘Click &amp; Collect’ service.
                </p>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/1.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">Alex Regelman</h6>
                      <span className="author-details"> Co-founder, Colabrio </span>
                    </div>
                  </div>
                </div>
                <p>
                  I would highly recommend Vie Digital. I worked with the team on
                  an animation for our ‘Click &amp; Collect’ service.
                </p>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/1.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">Alex Regelman</h6>
                      <span className="author-details"> Co-founder, Colabrio </span>
                    </div>
                  </div>
                </div>
                <p>
                  I would highly recommend Vie Digital. I worked with the team on
                  an animation for our ‘Click &amp; Collect’ service.
                </p>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="info valign">
                  <div className="cont">
                    <div className="author">
                      <div className="img">
                        <img src="/img/clients/1.jpg" alt="" />
                      </div>
                      <h6 className="author-name color-font">Alex Regelman</h6>
                      <span className="author-details"> Co-founder, Colabrio </span>
                    </div>
                  </div>
                </div>
                <p>
                  I would highly recommend Vie Digital. I worked with the team on
                  an animation for our ‘Click &amp; Collect’ service.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="arrows">
          <div className="container">
            <div className="next cursor-pointer">
              <span className="pe-7s-angle-right"></span>
            </div>
            <div className="prev cursor-pointer">
              <span className="pe-7s-angle-left"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullTestimonials;