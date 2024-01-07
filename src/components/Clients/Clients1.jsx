"use client";
import React from "react";
//= Components
import Split from "@/components/Common/Split";
//= Static Data
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
//= Scripts
import ClientsData from "@/data/sections/clients.json";

function Clients({ theme }) {
  const first = ClientsData.slice(0, ClientsData.length / 2);
  const second = ClientsData.slice(4, ClientsData.length);
  
const swiperOptions = {
  modules: [Autoplay, Navigation],
  loop: true,
  navigation: {
    prevEl: ".arrows .prev",
    nextEl: ".arrows .next",
  },
  centeredSlides: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 60,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    767: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    480: {
      slidesPerView: 1,
      centeredSlides: false,
    }
  },
}

  return (
    <section className="clients section-padding">
      <h1 className="mb-50 text-center fw-600">Our Partners</h1>
           <div className="container-fluid position-re">
        <div className="row wow fadeInUp" data-wow-delay=".5s">
        <div className="col-lg-12">
           <Swiper {...swiperOptions} className="slic-item" data-wow-delay=".5s">
              <SwiperSlide className="item">
          
              <div className="row bord">
                {first.map((item) => (
                  <div key={item.id} className="col-md-3 col-6 brands">
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${item.id == 1
                        ? ".3"
                        : item.id == 2
                          ? ".6"
                          : item.id == 3
                            ? ".8"
                            : item.id == 4
                              ? ".3"
                              : ""
                        }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                {second.map((item) => (
                  <div
                    key={item.id}
                    className={`${item.id == 5
                      ? "col-md-3 col-6 brands sm-mb30"
                      : item.id == 6
                        ? "col-md-3 col-6 brands sm-mb30"
                        : item.id == 7
                          ? "col-md-3 col-6 brands"
                          : item.id == 8
                            ? "col-md-3 col-6 brands"
                            : ""
                      }`}
                  >
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${item.id == 1
                        ? ".4"
                        : item.id == 2
                          ? ".7"
                          : item.id == 3
                            ? ".5"
                            : item.id == 4
                              ? ".3"
                              : ""
                        }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
        
              </SwiperSlide>
              <SwiperSlide className="item">
            <div>
              <div className="row bord">
                {first.map((item) => (
                  <div key={item.id} className="col-md-3 col-6 brands">
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${item.id == 1
                        ? ".3"
                        : item.id == 2
                          ? ".6"
                          : item.id == 3
                            ? ".8"
                            : item.id == 4
                              ? ".3"
                              : ""
                        }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                {second.map((item) => (
                  <div
                    key={item.id}
                    className={`${item.id == 5
                      ? "col-md-3 col-6 brands sm-mb30"
                      : item.id == 6
                        ? "col-md-3 col-6 brands sm-mb30"
                        : item.id == 7
                          ? "col-md-3 col-6 brands"
                          : item.id == 8
                            ? "col-md-3 col-6 brands"
                            : ""
                      }`}
                  >
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${item.id == 1
                        ? ".4"
                        : item.id == 2
                          ? ".7"
                          : item.id == 3
                            ? ".5"
                            : item.id == 4
                              ? ".3"
                              : ""
                        }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
              </SwiperSlide>
              <SwiperSlide className="item">
            <div>
              <div className="row bord">
                {first.map((item) => (
                  <div key={item.id} className="col-md-3 col-6 brands">
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${item.id == 1
                        ? ".3"
                        : item.id == 2
                          ? ".6"
                          : item.id == 3
                            ? ".8"
                            : item.id == 4
                              ? ".3"
                              : ""
                        }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                {second.map((item) => (
                  <div
                    key={item.id}
                    className={`${item.id == 5
                      ? "col-md-3 col-6 brands sm-mb30"
                      : item.id == 6
                        ? "col-md-3 col-6 brands sm-mb30"
                        : item.id == 7
                          ? "col-md-3 col-6 brands"
                          : item.id == 8
                            ? "col-md-3 col-6 brands"
                            : ""
                      }`}
                  >
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${item.id == 1
                        ? ".4"
                        : item.id == 2
                          ? ".7"
                          : item.id == 3
                            ? ".5"
                            : item.id == 4
                              ? ".3"
                              : ""
                        }s`}
                    >
                      <div className="img">
                        {theme === "light" ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
              </SwiperSlide>
            </Swiper>
          </div>
          </div>

            <div className="arrows">
          <div className="button_container">
            <div className="next cursor-pointer ">
              <span className="pe-7s-angle-right"></span>
            </div>
            <div className="prev cursor-pointer">
              <span className="pe-7s-angle-left"></span>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Clients;
