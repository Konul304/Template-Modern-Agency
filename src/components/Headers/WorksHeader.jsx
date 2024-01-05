'use client';
import React, { useRef, useEffect } from 'react';

function WorksHeader() {
  const fixedSlider = useRef();

  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector('.main-content');
      const slideHeight = fixedSlider.current.offsetHeight;
      MainContent.style.marginTop = slideHeight + "px";
    }
  }, []);

  return (
    <header ref={fixedSlider} className="works-header fixed-slider hfixd valign sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx text-center">
                <h1 className="color-font">amazing works</h1>
                <p>
                  Creativity involves breaking out of expected &amp; repeatable
                  patterns in order to look at things in different way than ever
                  before.
                </p>
              </div>
              <div className="bactxt custom-font valign">
                <span className="full-width">Works</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default WorksHeader