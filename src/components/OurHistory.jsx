'use client';
import { getAbout } from '@/app/(api)/api';
import HTMLReactParser from 'html-react-parser';
import React from 'react';
import { useQuery } from 'react-query';

const OurHistory = () => {
  const { data, isLoading, isError } = useQuery(
    ['aboutData'],
    async () => await getAbout(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const img_link =
    'https://project141.s3.eu-north-1.amazonaws.com/' + data?.historyPhotoLink;
  return (
    <div>
      <header className="slider-stwo valign position-re">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="img">
                <img src={`${img_link}`} alt="" />
              </div>
            </div>
            <div className="col-lg-7 valign">
              <div className="cont">
                <h1 className="mb-10 fw-600">{data?.historyTitle}</h1>
                {/* <p>{data?.historyText}</p> */}
                <div>{data && HTMLReactParser(data?.historyText)}</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default OurHistory;
