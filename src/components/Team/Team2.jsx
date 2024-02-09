import HTMLReactParser from 'html-react-parser';
import React from 'react';

function Team2(data) {
  const img_url =
    'https://project141.s3.eu-north-1.amazonaws.com/' + data?.data?.imageLink;
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
              <div className="text-center mt-5">
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
