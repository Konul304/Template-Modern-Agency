'use client';
import React, { useEffect } from "react";
import Link from "next/link";
//= Components
import Split from "@/components/Common/Split";
//= Scripts
import { thumparallax, thumparallaxDown } from "@/common/thumparallax";
//= Static Data
import AboutUs3date from "@/data/sections/about-us3.json";

const AboutUs3 = () => {
  useEffect(() => {
    setTimeout(() => {
      thumparallax();
      thumparallaxDown();
    }, 500);
  }, []);

  return (
    <section className="agency section-padding position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="imgsec md-mb50">
              <div className="row">
                <div className="col-md-6">
                  <div className="item">
                    <div
                      className="imgone big-bord wow fadeInDown"
                      data-wow-delay=".8s"
                    >
                      <img
                        className="thumparallax-down"
                        src={AboutUs3date.image1}
                        alt=""
                      />
                    </div>
                    <div className="exp">
                      <h2 className="nmb-font">{AboutUs3date.exp.nmb}</h2>
                      <h6>{AboutUs3date.exp.name}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <div
                      className="imgtwo big-bord wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <img
                        className="thumparallax"
                        src={AboutUs3date.image2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="content">
              <Split>
                <h4 className="wow words chars splitting" data-splitting>
                  {AboutUs3date.title.first} <br /> {AboutUs3date.title.second}
                </h4>
              </Split>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  {AboutUs3date.content.first} <br />
                  {AboutUs3date.content.second}
                </p>
              </Split>
              <Link href={`/about/about-dark`} className="butn bord curve mt-40 wow fadeInUp" data-wow-delay=".8s">
                <span>{AboutUs3date.smallTitle}</span>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default AboutUs3;
