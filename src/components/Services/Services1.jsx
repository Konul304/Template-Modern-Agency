"use client";
import React from "react";
//= Static Data
import Link from "next/link";
import { getServiceDetail, getServices } from "@/app/(api)/api";
import { useQuery } from "react-query";
import HTMLReactParser from "html-react-parser";
// import styles from '../../styles/Serv/ices.module.scss';
import styles from "../../styles/Cases.module.scss";

function Services1({ style, lines }) {
  const { data, isLoading, isError } = useQuery(
    ["serviceDetails"],
    async () => await getServiceDetail(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const video_url = data?.videoLink?.replace("view?usp=drive_link", "preview");
  return (
    <section
      className={`services bords section-padding ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-8 col-md-10"> */}
          <div className="sec-head  text-center ">
            {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Features
              </h6> */}
            <h3 className="wow color-font">
              {" "}
              {data?.title && HTMLReactParser(data?.title)}
            </h3>
          </div>
          {/* </div> */}
          <iframe
            src={video_url}
            width="1240"
            height="680"
            allow="autoplay"
            autoPlay
            allowFullScreen="allowFullScreen"
            style={{ marginTop: "65px", height: "550px" }}
            // tabIndex="-1"
            muted
          ></iframe>
          <h2 className={styles.team_info}>
            {data?.description && HTMLReactParser(data?.description)}
          </h2>
        </div>
        {/* <div className="row_services"> */}
        {/* {services?.map((item, index) => {
            return (
              <div
                key={index}
                className="col-md-4 wow fadeInLeft"
                data-wow-delay={`0s`}
              >
                <Link href={`#service-${item.id}`} className="item-box">
                  <div className="cont">
                    <h6 className="text-center">{item?.title}</h6>
                    {/* <p>sdfsd</p> */}
        {/* </div>
                </Link>
              </div> */}
        {/* ); */}
        {/* // })} */}
        {/* // </div> */}
      </div>
    </section>
  );
}

export default Services1;
