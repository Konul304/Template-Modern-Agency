import React from 'react';

function Footer({ hideBGCOLOR }) {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
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
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
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
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <a href="#">
                      <img src="/img/blog/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sm-post">
                    <a href="#">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                      <span className="date">14 sep 2023</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <a href="#">
                      <img src="/img/blog/2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sm-post">
                    <a href="#">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                      <span className="date">14 sep 2023</span>
                    </a>
                  </div>
                </li>
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
              <div className="logo">
                <img src="/img/logo-light.png" alt="logo" />
              </div>
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
              <div className="copy-right">
                <p>
                  © 2023, Vie Template. Made with passion by <a href="#0">ThemesCamp</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer