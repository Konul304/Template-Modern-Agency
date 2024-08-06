'use client';
import React, { useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
//= Scripts
import removeSlashFromBagination from '@/common/removeSlashpagination';
import { getTestimonials } from '@/app/(api)/api';
import { useQuery } from 'react-query';
import HTMLReactParser from 'html-react-parser';

const swiperOptions = {
  modules: [Autoplay, Navigation],
  loop: true,
  navigation: {
    prevEl: '.arrows .prev',
    nextEl: '.arrows .next',
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
    },
    410: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    110: {
      slidesPerView: 1,
      centeredSlides: false,
    },
  },
};

function FullTestimonials({
  withIMG,
  withCOLOR,
  noPadding,
  classText,
  showHead,
}) {
  const { data, isLoading, isError } = useQuery(
    ['testimonialData'],
    async () => await getTestimonials(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  // const img_link =
  //   'https://project141.s3.eu-north-1.amazonaws.com/' + data?.historyPhotoLink;

  useEffect(() => {
    removeSlashFromBagination();
  }, []);

  return (
    <section
      className={`testimonials ${
        withIMG
          ? 'section-padding bg-img'
          : withCOLOR
          ? 'section-padding back-color'
          : noPadding
          ? ''
          : 'section-padding'
      } ${classText ? classText : ''}`}
      style={{
        backgroundImage: `${withIMG ? 'url(' + withIMG + ')' : 'none'}`,
      }}
    >
      {showHead && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  TESTIMONIALS
                </h6>
                <h3 className="wow color-font">
                  We love our clients from all over the world.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container-fluid position-re">
        <div className="row wow fadeInUp" data-wow-delay=".5s">
          <div className="col-lg-12">
            <Swiper
              {...swiperOptions}
              className="slic-item"
              data-wow-delay=".5s"
            >
              {data?.map((item) => {
                const img_url =
                  'https://project141.s3.eu-north-1.amazonaws.com/' +
                  item?.logoLink;
                return (
                  <SwiperSlide className="item" key={item?.id}>
                    <div className="info valign">
                      <div className="cont">
                        <div className="author">
                          <div className="img">
                            <img src={img_url} alt="" />
                          </div>
                          <h6 className="author-name ">{item?.fullName}</h6>
                          <span className="author-details">
                            {' '}
                            {item?.position}, {item?.company}{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p>
                      {item?.testimonial && HTMLReactParser(item?.testimonial)}
                    </p>
                  </SwiperSlide>
                );
              })}
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
  );
}

export default FullTestimonials;
