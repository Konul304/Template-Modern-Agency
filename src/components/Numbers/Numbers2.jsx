'use client';
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
//= Components
import Split from "@/components/Common/Split";

const Numbers2 = () => {
  const [renderCounters, setRenderCounters] = useState(false);

  useEffect(() => {
    let funFactsSection = document.querySelector(".number-sec");
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setRenderCounters(true);
      } else {
        setRenderCounters(false);
      }
    }).observe(funFactsSection);
  }, []);

  return (
    <section className="block-sec section-padding">
      <div className="container">
        <div className="number-sec">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="item md-mb50">
                <span className="icon pe-7s-smile"></span>
                <h3 className="custom-font">
                  &nbsp;
                  {
                    renderCounters &&
                    <CountUp redraw={true} end={2400} duration="3">
                      <span className="count" />
                    </CountUp>
                  }
                </h3>
                <Split>
                  <p className="wow words chars splitting txt" data-splitting>
                    Happy Clients
                  </p>
                </Split>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item md-mb50">
                <span className="icon pe-7s-portfolio"></span>
                <h3 className="custom-font">
                  &nbsp;
                  {
                    renderCounters &&
                    <CountUp redraw={true} end={133} duration="3">
                      <span className="count" />
                    </CountUp>
                  }
                </h3>
                <Split>
                  <p className="wow txt words chars splitting " data-splitting>
                    Compleate Projects
                  </p>
                </Split>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item sm-mb50">
                <span className="icon pe-7s-cloud-download"></span>
                <h3 className="custom-font">
                  &nbsp;
                  {
                    renderCounters &&
                    <CountUp redraw={true} end={254} duration="3">
                      <span className="count" />
                    </CountUp>
                  }
                  k
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                    Files Downloaded
                  </p>
                </Split>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="item">
                <span className="icon pe-7s-medal"></span>
                <h3 className="custom-font">
                  &nbsp;
                  {
                    renderCounters &&
                    <CountUp redraw={true} end={46} duration="3">
                      <span className="count" />
                    </CountUp>
                  }
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                    Award Win
                  </p>
                </Split>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers2;
