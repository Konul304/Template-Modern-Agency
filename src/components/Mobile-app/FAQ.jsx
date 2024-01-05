'use client';
import React from "react";
//= Scripts
import handleAccordion from "@/common/handleAccordion";
//= Static Data
import faq from "@/data/mobile-app/faq.json";

function Faq() {
  return (
    <section className="app-faq section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content md-mb50">
              <h6 className="stit mb-30">
                <span className="left"></span> Faqs
              </h6>
              <h2 className="mb-30">Have Any Questions on Minds? Frequently Asked Questions</h2>
              <p>
                Sed perspiciatis unde omnis natus error sit voluptatem accus
                doloremque laudantium totarem aperiam eaqupsa quae abillo
                inventore veritatis quasi architecto
              </p>
              <a href="#0" className="butn-bord-red rounded buton mt-30">
                <span>Get Free 7 Days Trial</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="content">
              <div className="accordion shadwo">
                {
                  faq.map((question, idx) => (
                    <div className={`item ${question.active ? 'active' : ''} ${idx !== faq.length - 1 ? 'mb-30' : ''}`} key={idx} onClick={(e) => handleAccordion(e.currentTarget.querySelector(".accordion-info"))}>
                      <div className="title">
                        <h6>{question.question} <span className="icon pe-7s-angle-right"></span></h6>
                      </div>
                      <div className={`accordion-info ${question.active ? 'active' : ''}`}>
                        <p>{question.answer}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
