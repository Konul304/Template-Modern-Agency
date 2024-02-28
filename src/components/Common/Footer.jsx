'use client';

import { getContactData, getPortfolio, postEmail } from '@/app/(api)/api';
import { useEffect, useState } from 'react';
import countryData from '@/data/regions-to-countries';
import { Select, message } from 'antd';

const Footer = ({ hideBGCOLOR }) => {
  const { countries, zones } = require('moment-timezone/data/meta/latest.json');
  const timeZoneToCountry = {};
  const timeZoneCityToCountry = {};
  const [portfolioData, setPortfolioData] = useState();
  const [country, setCountry] = useState({ value: '', label: '' });
  const [contactData, setContactData] = useState();
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phoneNumber: '',
    address: '',
  });
  const [email, setEmail] = useState();
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Successfully subscribed',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Something went wrong',
    });
  };

  const getPortfolioData = async () => {
    try {
      const portfolio = await getPortfolio();
      setPortfolioData([
        portfolio[portfolio?.length - 1],
        portfolio[portfolio?.length - 2],
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const getContact = async () => {
    try {
      const contact = await getContactData();
      setContactData(contact);
    } catch (error) {
      console.log(error);
    }
  };

  const sendEmail = async (e) => {
    e?.preventDefault();
    const query = {
      userMail: email,
    };
    const response = await postEmail(query);
    if (response?.message == 'Added succesfully') {
      success();
    } else {
      error();
    }
  };

  useEffect(() => {
    getPortfolioData();
    getContact();
  }, []);

  useEffect(() => {
    Object.keys(zones).forEach((z) => {
      timeZoneToCountry[z] = countries[zones[z].countries[0]].name;
      const cityArr = z.split('/');
      const city = cityArr[cityArr.length - 1];
      timeZoneCityToCountry[city] = countries[zones[z].countries[0]].name;
    });
    if (Intl) {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const myCountry = Object.entries(countryData).find(
        ([key, value]) => key === userTimeZone
      );
      const currentLocationData = contactData?.find(
        (item) => item.country === myCountry[1]
      );
      setContactInfo({
        email: currentLocationData?.email,
        phoneNumber: currentLocationData?.phoneNumber,
        address: currentLocationData?.address,
      });
    }
  }, [portfolioData, contactData]);

  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      {contextHolder}
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <Select
                showSearch
                // defaultValue="Azerbaijan"
                // placeholder="Choose country"
                style={{ width: 120 }}
                value={
                  country?.label !== ''
                    ? country
                    : {
                        value: 'Azerbaijan',
                        label: 'Azerbaijan',
                      }
                }
                optionFilterProp="children"
                className="footer_select"
                onChange={(value, option) => {
                  setCountry(option);
                  const selectedLocationData = contactData?.find(
                    (item) => item.country === option?.label
                  );
                  if (selectedLocationData) {
                    setContactInfo({
                      email: selectedLocationData?.email,
                      phoneNumber: selectedLocationData?.phoneNumber,
                      address: selectedLocationData?.address,
                    });
                  }
                }}
                options={contactData?.map((item) => ({
                  value: item?.country,
                  label: item?.country,
                }))}
              />
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>{contactInfo?.address}</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>{contactInfo?.email}</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>{contactInfo?.phoneNumber}</p>
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
                    'https://project141.s3.eu-north-1.amazonaws.com/' +
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
                    <form onSubmit={sendEmail} id="footer-email-form">
                      <input
                        type="email"
                        required
                        placeholder="Type Your Email"
                        onChange={(e) => setEmail(e?.target?.value)}
                      />
                      <button
                        type="submit"
                        className="subs pe-7s-paper-plane"
                      ></button>
                    </form>
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
                <a href="https://www.instagram.com/creative_141?igsh=ZjZtZjAxcGdoMjJh">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/c141worldwide?mibextid=ZbWKwL">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/company/marketing-agency-c141-creative-one-for-one-/">
                  <i className="fab fa-linkedin"></i>
                </a>
                {/* <a href="https://www.facebook.com/c141worldwide?mibextid=ZbWKwL">
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
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
