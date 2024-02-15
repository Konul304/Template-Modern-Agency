"use client";
import { getPresentationInfo } from "@/app/(api)/api";
import React, { useRef, useEffect } from "react";
import { useQuery } from "react-query";

function WorksHeader() {
  const fixedSlider = useRef();
  const {
    data: presentationInfo,
    isLoading: infoLoading,
    isError: infoError,
  } = useQuery(["presentationInfo"], async () => await getPresentationInfo(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  // });
  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector(".main-content");
      const slideHeight = fixedSlider.current.offsetHeight;
      MainContent.style.marginTop = slideHeight + "px";
    }
  }, []);

  const img_link =
    "https://project141.s3.eu-north-1.amazonaws.com/" +
    presentationInfo?.[0]?.imageLink;
  return (
    <header
      ref={fixedSlider}
      className="works-header fixed-slider hfixd valign sub-bg"
      style={{
        backgroundImage: `url('${img_link}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: "0.5",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx text-center"> */}
          <div>
            <h1 className="color-font">{presentationInfo?.[0]?.pageTitle}</h1>
          </div>
        </div>
        {/* <div className="bactxt custom-font valign">
          <img src={`img_link`} className="full-width" /> */}
        {/* </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
}

export default WorksHeader;
