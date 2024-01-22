"use client";

import { getPortfolio } from "@/app/(api)/api";
import { useEffect, useState } from "react";

const Footer = ({ hideBGCOLOR, portfolio }) => {
  const [portfolioData, setPortfolioData] = useState();

  const getPortfolioData = async () => {
    try {
      const portfolio = await getPortfolio();
      console.log(portfolio);
      setPortfolioData([
        portfolio[portfolio?.length - 1],
        portfolio[portfolio?.length - 2],
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+87986451666</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Portfolio</h5>
              </div>
              <ul>
                {portfolioData?.map((item) => {
                  const img_link =
                    "https://project141.s3.eu-north-1.amazonaws.com/" +
                    item?.logoLink;
                  return (
                    <li key={item?.id}>
                      <div className="img">
                        <a href="#">
                          <img src={img_link} alt="" />
                        </a>
                      </div>
                      <div className="sm-post">
                        <a href="#">
                          <p>{item?.title}</p>
                          {/* <span className="date">14 sep 2023</span> */}
                        </a>
                      </div>
                    </li>
                  );
                })}

                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="title">
                <h5>Socials</h5>
              </div>
              {/* <div className="logo">
                <img src="/img/logo-light.png" alt="logo" />
              </div> */}
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
