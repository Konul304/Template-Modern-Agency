'use client';
import React from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { getPortfolio } from '@/app/(api)/api';
import { useQuery } from 'react-query';
//= Static Data

const swiperOptions = {
  modules: [Autoplay, Navigation],
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
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
};

const Works1 = () => {
  const {
    data: portfolio,
    isLoading,
    isError,
  } = useQuery(['portfolioData'], async () => await getPortfolio(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  return (
    <section className="work-carousel metro position-re">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                {portfolio?.map((item) => {
                  const img_url =
                    'https://project141.s3.eu-north-1.amazonaws.com/' +
                    item?.logoLink;
                  return (
                    <SwiperSlide key={item?.id} className="swiper-slide">
                      <div
                        className="content wow noraidus fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div
                          className="item-img bg-img wow imago"
                          style={{ backgroundImage: `url(${img_url})` }}
                        ></div>
                        <div className="cont">
                          <h6 className="color-font">
                            <a href="#">{item?.title}</a>
                          </h6>
                          {/* <h4>
                            <Link href="/project-details2/project-details2-dark">
                              {slide.secTex}
                            </Link>
                          </h4> */}
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
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
  );
};

export default Works1;
