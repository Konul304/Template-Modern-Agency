'use client';
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
//= Components
import Split from "@/components/Common/Split";
//= Static Data
import funFactDate from '@/data/sections/fun-fact.json'
import Image from 'next/image';
import { brush, certificate, diamond, heart } from '../../../public/img';


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
              {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
                FUN FACTS
              </h6> */}
              <h3 className="wow color-font">
              Statistics
              </h3>
            </div>
          </div>
        </div>
        <div className="row_statistics">
        <div  className="col-md-2">
              <div className="item no-bord sm-mb50">
                {certificate}
                <h3 className='mt-10'>
                  &nbsp;
                  {
                    renderCounters &&
                    <CountUp redraw={true} end={12} duration="3">
                      <span className="count" />
                    </CountUp>
                  }
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                  Best Stand Design Award
                  </p>
                </Split>
              </div>
            </div>
            <div  className="col-md-2">
              <div className="item no-bord sm-mb50">
                {diamond}
                <h3 className='mt-10'>
                  &nbsp;
                  {
                    renderCounters &&
                    <CountUp redraw={true} end={422} duration="3">
                      <span className="count" />
                    </CountUp>
                  }
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                  Successful Projects
                  </p>
                </Split>
              </div>
            </div>
            <div  className="col-md-2">
              <div className="item no-bord sm-mb50">
                {brush}
                <h3 className='mt-10'>
                  &nbsp;
                  {
                    renderCounters &&
                    <CountUp redraw={true} end={14} duration="3">
                      <span className="count" />
                    </CountUp>
                  }
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                  Years of Experience
                  </p>
                </Split>
              </div>
            </div>
            <div  className="col-md-2">
              <div className="item no-bord sm-mb50">
                <span className='mt-10'>{heart}
                  </span>
                <h3 className='mt-15'>
                  &nbsp;
                  {
                    renderCounters &&
                    <CountUp redraw={true} end={99} duration="3">
                      <span className="count" />
                    </CountUp>
                  }
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                  Happy Clients
                  </p>
                </Split>
              </div>
            </div>
          {/* {funFactDate.map((item, index) => (
            <div key={item.id} className="col-md-4">
              <div className="item no-bord sm-mb50">
                {certificate}
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
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default Numbers