'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
//= Scripts
import initIsotope from '@/common/initIsotope';
import { download_icon } from '../../../public/img';
import styles from '../../styles/Works2.module.scss';
import ModalVideo from '../Common/ModalVideo';
import Image from 'next/image';

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

  const handleDownload = (pdfUrl, pdfName) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    if (pdfName) {
      link.download = pdfName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const videos = [
    {
      title: 'Baltika Event',
      videoLink:
        'https://drive.google.com/file/d/19_RNVhyi3xATvZlAENZnK60gDN2D5ZR5/view?usp=drive_link',
      logoLink: '/img/Baltika_cover.jpg',
    },
    {
      title: 'Bosch 4',
      videoLink:
        'https://drive.google.com/file/d/1k6ey8BI-e_rnuslGvd3WAp_Wk8eNAtFR/view?usp=drive_link',
      logoLink: '/img/Bosch4_cover.jpg',
    },
    {
      title: 'Bosch 15',
      videoLink:
        'https://drive.google.com/file/d/1XBnVM-sQ6DAZ-rvTnEB5ifi647psbWEo/view?usp=drive_link',
      logoLink: '/img/Bosch15_cover.jpg',
    },
    {
      title: 'Bosch Ramin',
      videoLink:
        'https://drive.google.com/file/d/1j7tyxM6XhJBopvSkpjOlf0T42NqZXBV7/view?usp=drive_link',
      logoLink: '/img/BoschRamin_cover.jpg',
    },
    {
      title: 'BoschAllPre',
      videoLink:
        'https://drive.google.com/file/d/16dulJAelTFyVU4pSdr9w9qiE7Rewc0aD/view?usp=drive_link',
      logoLink: '/img/BoschAllPre_cover.jpg',
    },
    {
      title: 'BoschFarhadSocial',
      videoLink:
        'https://drive.google.com/file/d/1b8wGKZ90KV_kFdyVRwm0aNhN-w4TJRto/view?usp=drive_link',
      logoLink: '/img/BoschFarhadSocial_cover.jpg',
    },
  ];

  const presentations = [
    {
      title: 'BTL Portfolio',
      logoLink: '/img/BTL.jpg',
      pdfLink:
        'https://drive.google.com/file/d/1LAssrnVAVugkgJQXsuzmCBez8dZ0Op5m/view?usp=drive_link',
    },
    {
      title: 'Event Portfolio',
      logoLink: '/img/Event.jpg',
      pdfLink:
        'https://drive.google.com/file/d/1V70zz_dO7WuxlNfwScXvqlh6t-LAs4bF/view?usp=drive_link',
    },
    {
      title: 'Production Portfolio',
      logoLink: '/img/Production.jpg',
      pdfLink:
        'https://drive.google.com/file/d/1eCV_p3tpImBX0BxGvol2m0o1UBT50P_P/view?usp=drive_link',
    },
  ];

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
            {presentations?.map((item, index) => {
              const download_url = item?.pdfLink
                ?.replace('/view?usp=drive_link', '')
                ?.replace('file/d/', 'uc?id=');
              const view_url = item?.pdfLink?.replace(
                'view?usp=drive_link',
                'preview'
              );
              return (
                <div
                  key={index}
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
                      <Link href={view_url} target="_blank">
                        <img src={item?.logoLink} alt="image" />
                      </Link>
                      <div className="item-img-overlay"></div>
                    </div>
                  </div>
                  <div className="cont">
                    <h6>
                      {item?.title}
                      <span
                        onClick={handleDownload}
                        className={styles.download_icon}
                      >
                        <div
                          onClick={() =>
                            handleDownload(download_url, item?.title)
                          }
                        >
                          {download_icon}
                        </div>
                      </span>
                    </h6>
                    {/* <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span> */}
                  </div>
                </div>
              );
            })}

            {videos?.map((item, index) => {
              const video_link = item?.videoLink?.replace(
                'view?usp=drive_link',
                'preview'
              );
              return (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 col-12 items videos wow fadeInUp`}
                  data-wow-delay=".4s"
                >
                  <div className="item-img">
                    <div
                      onClick={() => handleToggleModal(index)}
                      className="imago wow w-100 h-100"
                    >
                      <img src={item?.logoLink} alt="image" />
                      <div className="item-img-overlay"></div>
                    </div>
                  </div>
                  <div className="cont">
                    <h6>{item?.title}</h6>
                    <ModalVideo
                      source={video_link}
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
