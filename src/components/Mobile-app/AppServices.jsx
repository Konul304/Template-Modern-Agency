import React from "react";
//= Static Data
import features from '@/data/mobile-app/features.json';

function AppServices() {
  return (
    <section className="app-services section-padding bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Application Features
                <span className="right"></span>
              </h6>
              <h2>Amazing Features to Customize your Application Easy</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {
            features.map((feature, index) => (
              <div className="col-lg-4 col-md-6" key={feature.id}>
                <div className={`item ${index !== features.length - 1 ? 'mb-30' : ''}`}>
                  <div className="item-tit mb-15">
                    <div className="icon">
                      <span className={feature.icon}></span>
                    </div>
                    <div className="text-tit">
                      <h5>{feature.title}</h5>
                    </div>
                  </div>
                  <p>{feature.details}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default AppServices;
