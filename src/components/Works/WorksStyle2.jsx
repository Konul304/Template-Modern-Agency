'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
//= Scripts
import initIsotope from '@/common/initIsotope';
import { download_icon } from '../../../public/img';
import styles from '../../styles/Works2.module.scss';
import ModalVideo from '../Common/ModalVideo';

function WorksStyle2({
  grid,
  filterPosition,
  hideHeader = false,
  presentations,
  videos,
  images,
  id,
}) {
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
    initIsotope(id);
    // }, 500);
  }, [id]);

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

  return (
    <section
      className={`${
        grid ? (grid === 3 ? 'three-column' : null) : null
      } portfolio pt-60  pb-70`}
    >
      {!hideHeader && (
        <div className={`container`}>
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
          <div
            className={`filtering-${id} filtering ${
              filterPosition === 'center'
                ? 'text-center'
                : filterPosition === 'left'
                ? 'text-left'
                : 'text-right'
            } col-12`}
          >
            <div className="filter">
              {/* {presentations && presentations.length > 0 && (
                <span data-filter=".presentation">Presentation content</span>
              )} */}
              {videos && videos.length > 0 && (
                <span data-filter=".videos" className="active">
                  Videos
                </span>
              )}
              {images && images.length > 0 && (
                <span data-filter=".images">Images</span>
              )}
            </div>
          </div>

          <div className={`gallery-${id} full-width`}>
            {presentations?.map((item, index) => {
              const img_link =
                'https://project141.s3.eu-north-1.amazonaws.com/' +
                item?.logoLink;
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
                        <img src={img_link} alt="image" />
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
              const cover_link =
                'https://project141.s3.eu-north-1.amazonaws.com/' +
                item?.logoLink;
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
                      <img src={cover_link} alt="image" />
                      <div className="item-img-overlay"></div>
                    </div>
                  </div>
                  <div className="cont">
                    <h6 className="text-center mt-4">{item?.title}</h6>
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

            {images?.map((item, index) => {
              const img_link =
                'https://project141.s3.eu-north-1.amazonaws.com/' +
                item?.logoLink;
              return (
                <div
                  key={index}
                  className={`${
                    grid === 3
                      ? 'col-lg-4 col-md-6'
                      : grid === 2
                      ? 'col-md-6'
                      : 'col-12'
                  } items images wow fadeInUp`}
                  data-wow-delay=".4s"
                >
                  <div className="item-img">
                    <div className="imago wow">
                      <Link href={img_link} target="_blank">
                        <img src={img_link} alt="image" />
                      </Link>
                      <div className="item-img-overlay"></div>
                    </div>
                  </div>
                  <div className="cont">
                    <h6 className="text-center mt-4">{item?.title}</h6>
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
