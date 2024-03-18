'use client';
import React from 'react';
//= Static Data
import Link from 'next/link';
import { useQuery } from 'react-query';
import { getServiceFAQ, getServices } from '@/app/(api)/api';
// import styles from '../../styles/Serv/ices.module.scss';

const HomepageServicesSection = ({ style, lines }) => {
  const {
    data: services,
    isLoading,
    isError,
  } = useQuery(['servicesFAQ'], async () => await getServiceFAQ(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
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
              {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Features
              </h6> */}
              <h3 className="wow color-font">Our Services</h3>
            </div>
          </div>
        </div>
        <div className="row_services">
          {services?.map((item, index) => {
            return (
              <div
                key={index}
                className="col-md-4 wow fadeInLeft"
                data-wow-delay={`0s`}
              >
                <Link href={`/services/services_dark`} className="item-box">
                  <div className="cont">
                    <h6 className="text-center">{item?.title}</h6>
                    {/* <p>sdfsd</p> */}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomepageServicesSection;
