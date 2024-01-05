'use client';
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
//= Components
import Split from "@/components/Common/Split";
//= Static Data
import funFactDate from '@/data/sections/fun-fact.json'


const Numbers = () => {
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
    <section className="number-sec section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                FUN FACTS
              </h6>
              <h3 className="wow color-font">
                Pleasure in the job puts perfection in the work.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {funFactDate.map((item, index) => (
            <div key={item.id} className="col-md-4">
              <div className="item no-bord sm-mb50">
                <span className={`icon ${item.icon}`}></span>
                <h3>
                  &nbsp;
                  {
                    renderCounters &&
                    <CountUp redraw={true} end={item.value} duration="3">
                      <span className="count" />
                    </CountUp>
                  }
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                    {item.content}
                  </p>
                </Split>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Numbers