'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
//= Scripts
import initIsotope from '@/common/initIsotope';
import { download_icon } from '../../../public/img';
import styles from '../../styles/Works2.module.scss';
import ModalVideo from '../Common/ModalVideo';

function WorksStyle2({ grid, filterPosition, hideFilter }) {
  const [isOpenMap, setOpenMap] = useState({});

  // Function to handle opening/closing modal for a specific video
  const handleToggleModal = (index) => {
    setOpenMap((prevOpenMap) => ({
      ...prevOpenMap,
      [index]: !prevOpenMap[index],
    }));
  };

  useEffect(() => {
    // setTimeout(() => {
    initIsotope();
    // }, 500);
  }, []);

  const handleDownload = () => {
    console.log('first');
  };

  const videos = [
    {
      name: 'Baltika Event',
      url: 'https://drive.google.com/file/d/19_RNVhyi3xATvZlAENZnK60gDN2D5ZR5/preview',
    },
    {
      name: 'Bosch 4',
      url: 'https://drive.google.com/file/d/1k6ey8BI-e_rnuslGvd3WAp_Wk8eNAtFR/preview',
    },
    {
      name: 'Bosch 15',
      url: 'https://drive.google.com/file/d/1XBnVM-sQ6DAZ-rvTnEB5ifi647psbWEo/preview',
    },
    {
      name: 'Bosch Ramin',
      url: 'https://drive.google.com/file/d/1j7tyxM6XhJBopvSkpjOlf0T42NqZXBV7/preview',
    },
    {
      name: 'BoschAllPre',
      url: 'https://drive.google.com/file/d/16dulJAelTFyVU4pSdr9w9qiE7Rewc0aD/preview',
    },
    {
      name: 'BoschFarhadSocial',
      url: 'https://drive.google.com/file/d/1b8wGKZ90KV_kFdyVRwm0aNhN-w4TJRto/preview',
    },
  ];
  console.log(videos?.Baltika);

  return (
    <section
      className={`${
        grid ? (grid === 3 ? 'three-column' : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Portfolio
                </h6>
                <h3 className="wow color-font fz-40 fw-500">
                  Our Recent Web Design &amp; <br />
                  Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === 'center'
                  ? 'text-center'
                  : filterPosition === 'left'
                  ? 'text-left'
                  : 'text-right'
              } col-12`}
            >
              <div className="filter">
                <span data-filter=".presentation" className="active">
                  {' '}
                  Presentation content{' '}
                </span>
                <span data-filter=".videos">Videos</span>
                {/* <span data-filter=".web">Mobile App</span>
                <span data-filter=".graphic">Creative</span> */}
              </div>
            </div>
          )}

          <div className="gallery full-width">
            <div
              className={`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items presentation wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="imago wow">
                  <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </div>
              </div>
              <div className="cont">
                <h6>
                  Creativity Demand{' '}
                  <span
                    onClick={handleDownload}
                    className={styles.download_icon}
                  >
                    {download_icon}
                  </span>
                </h6>
                {/* <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span> */}
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items presentation wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="imago wow">
                  <img src="/img/portfolio/portfolio/1/2.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </div>
              </div>
              <div className="cont">
                <h6>
                  Through The Breaking
                  <span
                    onClick={handleDownload}
                    className={styles.download_icon}
                  >
                    {download_icon}
                  </span>
                </h6>
                {/* <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span> */}
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items presentation wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="imago wow">
                  <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </div>
              </div>
              <div className="cont">
                <h6>
                  Energies of Love
                  <span
                    onClick={handleDownload}
                    className={styles.download_icon}
                  >
                    {download_icon}
                  </span>
                </h6>
                {/* <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span> */}
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items presentation wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="imago wow">
                  <img src="/img/portfolio/portfolio/1/5.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </div>
              </div>
              <div className="cont">
                <h6>
                  See It Yourself
                  <span
                    onClick={handleDownload}
                    className={styles.download_icon}
                  >
                    {download_icon}
                  </span>
                </h6>
                {/* <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span> */}
              </div>
            </div>

            {videos?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 col-12 items videos wow fadeInUp`}
                  data-wow-delay=".4s"
                >
                  <div className="item-img">
                    <div
                      onClick={() => handleToggleModal(index)}
                      className="imago wow"
                    >
                      <img src="/img/portfolio/portfolio/1/3.jpg" alt="image" />
                      <div className="item-img-overlay"></div>
                    </div>
                  </div>
                  <div className="cont">
                    <h6>{item?.name}</h6>
                    <ModalVideo
                      source={item?.url}
                      isOpen={isOpenMap[index]}
                      onClose={() => handleToggleModal(index)}
                      autoplay
                    />
                    {/* <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorksStyle2;
