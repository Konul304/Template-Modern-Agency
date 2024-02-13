'use client';
import { getPresentationInfo } from '@/app/(api)/api';
import React, { useRef, useEffect } from 'react';
import { useQuery } from 'react-query';

function WorksHeader() {
  const fixedSlider = useRef();
  const {
    data: presentationInfo,
    isLoading: infoLoading,
    isError: infoError,
  } = useQuery(['presentationInfo'], async () => await getPresentationInfo(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  // });
  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector('.main-content');
      const slideHeight = fixedSlider.current.offsetHeight;
      MainContent.style.marginTop = slideHeight + 'px';
    }
  }, []);

  return (
    <header
      ref={fixedSlider}
      className="works-header fixed-slider hfixd valign sub-bg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx text-center">
                <h1 className="color-font">
                  {presentationInfo?.[0]?.pageTitle}
                </h1>
              </div>
              <div className="bactxt custom-font valign">
                <span className="full-width">Works</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default WorksHeader;
