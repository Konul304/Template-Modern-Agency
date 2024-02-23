'use client';
import Split from '@/components/Common/Split';
//= Static Data
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { getPartners } from '@/app/(api)/api';
import { useQuery } from 'react-query';
//= Scripts

const Clients = ({ theme }) => {
  const {
    data: partners,
    isLoading,
    isError,
  } = useQuery(['partnerData'], async () => await getPartners(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const swiperOptions = {
    modules: [Autoplay, Navigation],
    loop: true,
    navigation: {
      prevEl: '.arrows .prev',
      nextEl: '.arrows .next',
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

  const partnersPerPage = 8; // Number of partners to render per SwiperSlide
  const totalSlides = Math.ceil(partners?.length / partnersPerPage);

  return (
    <section className="clients section-padding">
      <h1 className="wow color-font text-center mb-50 fw-700 ">Our Partners</h1>
      <div className="container-fluid position-re">
        <div className="row wow fadeInUp" data-wow-delay=".5s">
          <div className="col-lg-12">
            <Swiper
              {...swiperOptions}
              className="slic-item"
              data-wow-delay=".5s"
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <SwiperSlide className="item" key={slideIndex}>
                  <div className="row bord">
                    {partners
                      ?.slice(
                        slideIndex * partnersPerPage,
                        (slideIndex + 1) * partnersPerPage
                      )
                      .map((partner) => (
                        <div key={partner.id} className="col-md-3 col-6 brands">
                          <div
                            className="item wow fadeIn"
                            data-wow-delay={`${
                              partner.id === 1
                                ? '.3'
                                : partner.id === 2
                                ? '.6'
                                : partner.id === 3
                                ? '.8'
                                : partner.id === 4
                                ? '.3'
                                : ''
                            }s`}
                          >
                            <div className="img">
                              <img
                                src={`https://project141.s3.eu-north-1.amazonaws.com/${partner?.logoLink}`}
                                alt=""
                              />
                              <Split>
                                <a
                                  href="#0"
                                  className="link words chars splitting"
                                  data-splitting
                                >
                                  {partner.link}
                                </a>
                              </Split>
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
      </div>
    </section>
  );
};

export default Clients;
