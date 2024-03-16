"use client";
import HTMLReactParser from "html-react-parser";
import Split from "@/components/Common/Split";
import React from "react";
import styles from "../../styles/Cases.module.scss";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

function Team2(data) {
  const img_url =
    "https://project141.s3.eu-north-1.amazonaws.com/" + data?.data?.imageLink;

  const swiperOptions = {
    modules: [Autoplay, Navigation],
    loop: true,
    navigation: {
      prevEl: ".arrows .prev",
      nextEl: ".arrows .next",
    },
    centeredSlides: true,
    autoplay: {
      delay: 6000, // Set the autoplay delay to 5000 milliseconds (5 seconds)
      disableOnInteraction: false, // Allow autoplay to continue after user interaction
    },
    slidesPerView: 1,
    spaceBetween: 60,
    breakpoints: {
      1024: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      767: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      480: {
        slidesPerView: 1,
        centeredSlides: false,
      },
    },
  };

  const imagesPerPage = 4;
  const totalSlides = Math.ceil(
    data?.data?.teamMembersImages?.length / imagesPerPage
  );
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h3 className="wow color-font">Our Team</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid position-re">
        <div className="row">
          <div className="col-lg-11">
            <div className="post">
              <img src={img_url} alt="" />
              <div
                className="row wow fadeInUp"
                data-wow-delay=".5s"
                style={{ marginTop: "70px", marginBottom: "70px" }}
              >
                <div className="col-lg-12">
                  <Swiper
                    {...swiperOptions}
                    className="slic-item"
                    data-wow-delay=".5s"
                  >
                    {Array.from({ length: totalSlides }, (_, slideIndex) => (
                      <SwiperSlide className="item" key={slideIndex}>
                        <div className="row bord">
                          {data?.data?.teamMembersImages
                            ?.slice(
                              slideIndex * imagesPerPage,
                              (slideIndex + 1) * imagesPerPage
                            )
                            .map((image) => (
                              <div
                                key={image.id}
                                className="col-md-3 col-6 brands"
                              >
                                <div
                                  className="item wow fadeIn"
                                  data-wow-delay={`${
                                    image.id === 1
                                      ? ".3"
                                      : image.id === 2
                                      ? ".6"
                                      : image.id === 3
                                      ? ".8"
                                      : image.id === 4
                                      ? ".3"
                                      : ""
                                  }s`}
                                >
                                  <div className="img">
                                    <img
                                      src={`https://project141.s3.eu-north-1.amazonaws.com/${image?.logoLink}`}
                                      alt=""
                                    />
                                    {/* <Split>
                                      <a
                                        href={`${partner?.link}`}
                                        className="link words chars splitting"
                                        data-splitting
                                      >
                                        {partner.link}
                                      </a>
                                    </Split> */}
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </SwiperSlide>
                    ))}
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
              <div className={`${styles.team_info} text-center mt-5`}>
                {data?.data?.description &&
                  HTMLReactParser(data?.data?.description)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team2;
