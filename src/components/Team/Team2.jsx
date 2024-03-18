import HTMLReactParser from 'html-react-parser';
import React from 'react';
import styles from '../../styles/Cases.module.scss';

function Team2(data) {
  const img_url =
    'https://project141.s3.eu-north-1.amazonaws.com/' + data?.data?.imageLink;

  console.log(data);
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
  console.log();
  const imagesPerPage = 4; // Number of partners to render per SwiperSlide
  const totalSlides = Math.ceil(
    data?.data?.teamMembersImages?.length / imagesPerPage
  );
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
                Our Team
              </h6> */}
              <h3 className="wow color-font">Our Team</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-11">
            <div className="post">
              <img src={img_url} alt="" />
              <div
                className="row wow fadeInUp"
                data-wow-delay=".5s"
                style={{ marginTop: '70px', marginBottom: '70px' }}
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
                            .map((member, index) => (
                              <div
                                key={index + 1}
                                className="col-md-3 col-6 brands"
                              >
                                <div
                                  className="item wow fadeIn"
                                  data-wow-delay={`${
                                    index === 1
                                      ? '.3'
                                      : index === 2
                                      ? '.6'
                                      : index === 3
                                      ? '.8'
                                      : index === 4
                                      ? '.3'
                                      : ''
                                  }s`}
                                >
                                  <div className="img">
                                    <img
                                      src={`https://project141.s3.eu-north-1.amazonaws.com/${member}`}
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
              {/* <Pagination /> */}
              {/* <CommentsArea />
              <CommentsForm theme={theme} /> */}
            </div>
          </div>
          {/* {data?.data?.map((item, index) => {
            const img_link =
              'https://project141.s3.eu-north-1.amazonaws.com/' +
              item?.profilePicLink;
            return (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="item cir md-mb50">
                  <div className="img">
                    <img src={img_link} alt="" />
                    <div id="circle1">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="300px"
                        height="300px"
                        viewBox="0 0 300 300"
                        enableBackground="new 0 0 300 300"
                        xmlSpace="preserve"
                      >
                        <defs>
                          <path
                            id="circlePath1"
                            d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                          />
                        </defs>
                        <circle cx="150" cy="100" r="75" fill="none" />
                        <g>
                          <use xlinkHref="#circlePath1" fill="none" />
                          <text fill="#fff">
                            <textPath xlinkHref="#circlePath1">
                              {item?.position}
                            </textPath>
                          </text>
                        </g>
                      </svg>
                    </div>
                    <div className="info">
                      <h6>{item?.fullName}</h6>
                      <div>{item?.phoneNumber}</div>
                      <div>{item?.email}</div>
                      <div>{item?.country}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
}

export default Team2;
