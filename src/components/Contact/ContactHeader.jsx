'use client';
import React, { useEffect } from 'react';
//= Static Data
import contentHeaderData from "@/data/contact-header.json";

function ContactHeader() {
  useEffect(() => {
    setTimeout(() => {
      if (document.querySelector("#particles-js canvas")) {
        document.querySelector("#particles-js canvas").style.position = "unset";
      }
    }, 500);
  }, []);

  return (
    <header className="pages-header circle-bg valign position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="capt">
              <div className="text-center">
                <h1 className="color-font mb-10 fw-700">
                  {contentHeaderData.title.first} <br />
                  {contentHeaderData.title.second}
                </h1>
                <p>{contentHeaderData.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-color">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
    </header>
  )
}

export default ContactHeader