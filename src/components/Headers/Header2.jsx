'use client';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

function Header2() {
  const fixedSlider = useRef();

  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector('.main-content');
      const slideHeight = fixedSlider.current.offsetHeight;
      if (MainContent) MainContent.style.marginTop = slideHeight + "px";
    }
  }, []);

  return (
    <header ref={fixedSlider} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>Digital Consulting Agency</h6>
              </div>
              <h1 className="mb-10 fw-600">Unique Business Consulting.</h1>
              <p>
                We help our clients succeed by creating brand identities,
                digital experiences, and print materials.
              </p>
              <Link href={`/about/about-dark`} className="butn bord curve mt-30">
                <span>About Us</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/img/slid/001.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Header2