'use client';
import React from 'react';

const OurHistory = (data) => {
  return (
    <div>
      <header className="slider-stwo valign position-re">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="img">
                <img src="/img/slid/002.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-7 valign">
              <div className="cont">
                <h1 className="mb-10 fw-600">{data?.data?.historyTitle}</h1>
                <p>{data?.data?.historyText}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default OurHistory;
