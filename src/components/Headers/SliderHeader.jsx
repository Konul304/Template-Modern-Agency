'use client';
import React, { useEffect, useRef } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax } from 'swiper';
//= Scripts
import removeSlashFromBagination from '@/common/removeSlashpagination';
import fadeWhenScroll from '@/common/fadeWhenScroll';
//= Static Data
import { getCases, getSlider } from '@/app/(api)/api';
import { useQuery } from 'react-query';
import HTMLReactParser from 'html-react-parser';

const swiperOptions = {
  modules: [Parallax, Navigation, Pagination],
  speed: 1000,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  parallax: true,
  pagination: {
    type: 'fraction',
    clickable: true,
    el: '.swiper-pagination',
  },
  onSwiper: (swiper) => {
    for (var i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i].childNodes[0].setAttribute(
        'data-swiper-parallax',
        0.75 * swiper.width
      );
    }
  },
};

const SliderHeader = () => {
  const fixedSlider = useRef();

  const { data, isLoading, isError } = useQuery(
    ['caseData'],
    async () => await getCases(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const filteredData = data?.filter((item) => item.isSlider === true);

  useEffect(() => {
    removeSlashFromBagination();
    fadeWhenScroll(document.querySelectorAll('.fixed-slider .caption'));
  }, [data]);

  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector('.main-content');
      const slideHeight = fixedSlider.current.offsetHeight;
      MainContent.style.marginTop = slideHeight + 'px';
    }
  }, [data]);

  return (
    <header
      className="slider slider-prlx fixed-slider text-center"
      ref={fixedSlider}
    >
      <div className="swiper-container parallax-slider">
        {filteredData && (
          <Swiper {...swiperOptions} className="swiper-wrapper">
            {filteredData?.map((slide) => {
              const img_url =
                'https://project141.s3.eu-north-1.amazonaws.com/' +
                slide?.sliderLogoLink;
              return (
                <SwiperSlide key={slide.id} className="swiper-slide">
                  <div
                    className="bg-img valign"
                    style={{ backgroundImage: `url('${img_url}')` }}
                    data-overlay-dark="6"
                  >
                    <a
                      href={`/cases/cases-dark/${slide?.id}`}
                      className="container"
                    >
                      <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                          <div className="caption center mt-30">
                            <h1 className="color-font">
                              {' '}
                              {slide.sliderTitle &&
                                HTMLReactParser(slide.sliderTitle)}
                            </h1>
                            {slide.sliderDescription &&
                              HTMLReactParser(slide.sliderDescription)}
                            {/* <a href="#" className="butn bord curve mt-30">
                              <span>Look More</span>
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
        <div className="setone setwo">
          <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className="swiper-pagination top botm"></div>

        {/* <div className="social-icon"> */}
        {/* <a href="https://www.instagram.com/creative_141?igsh=ZjZtZjAxcGdoMjJh">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/c141worldwide?mibextid=ZbWKwL">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/company/marketing-agency-c141-creative-one-for-one-/">
            <i className="fab fa-linkedin"></i>
          </a> */}
        {/* <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest-p"></i>
          </a> */}
        {/* </div> */}
      </div>
    </header>
  );
};

export default SliderHeader;
