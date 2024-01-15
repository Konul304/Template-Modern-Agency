import React from 'react';
//= Static Data
import Link from 'next/link';
import styles from '../../styles/Services.module.scss';

function Services1({ style, lines }) {
  return (
    <section
      className={`services bords section-padding ${
        style === '4item' ? 'lficon' : lines ? '' : 'pt-0'
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Features
              </h6>
              <h3 className="wow color-font">Our Services</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 wow fadeInLeft" data-wow-delay={`0s`}>
            <Link href="#" className="item-box">
              <div className="cont">
                <h6 className="text-center">ATL</h6>
                {/* <p>sdfsd</p> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 wow fadeInLeft" data-wow-delay={`0s`}>
            <Link href="#" className="item-box">
              <div className="cont">
                <h6>BTI</h6>
                {/* <p>sdfsd</p> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 wow fadeInLeft" data-wow-delay={`0s`}>
            <Link href="#" className="item-box">
              <div className="cont">
                <h6>PR</h6>
                {/* <p>sdfsd</p> */}
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 wow fadeInLeft" data-wow-delay={`0s`}>
            <Link href="#" className="item-box">
              <div className="cont">
                <h6>Production</h6>
                {/* <p>sdfsd</p> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 wow fadeInLeft" data-wow-delay={`0s`}>
            <Link href="#" className="item-box">
              <div className="cont">
                <h6>Design</h6>
                {/* <p>sdfsd</p> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 wow fadeInLeft" data-wow-delay={`0s`}>
            <Link href="#" className="item-box">
              <div className="cont">
                <h6>Digital Marketing</h6>
                {/* <p>sdfsd</p> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services1;
