'use client';
import { getAbout } from '@/app/(api)/api';
import React from 'react';
import { useQuery } from 'react-query';

const PagesHeader = ({ children }) => {
  const { data, isLoading, isError } = useQuery(
    ['aboutData'],
    async () => await getAbout(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const img_link =
    'https://project141.s3.eu-north-1.amazonaws.com/' + data?.wePhotoLink;

  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-10">
            <div className="cont mt-100 mb-50 text-center">
              <h1 className="color-font fw-700">
                {children}
              </h1>
            </div>
          </div> */}
          <div className="">
            <div className="about_header_img">
              <img src={`${img_link}`} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;
