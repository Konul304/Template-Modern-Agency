'use client';
import React, { useRef, useEffect } from 'react';

function ServicesHeader() {
  const fixedSlider = useRef();

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
                <h1 className="color-font">Our Services</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  blanditiis aliquam officia exercitationem est totam, voluptas
                  nemo adipisci consequatur sit expedita non ut natus dolor et
                  placeat provident fuga temporibus.
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
  );
}

export default ServicesHeader;
