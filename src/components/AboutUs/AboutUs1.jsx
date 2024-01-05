import React from 'react';
//= Static Data
import aboutData from "@/data/about-us1.json";

function AboutUs1() {
  return (
    <section className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 mb-10">{aboutData.smallTitle}</h6>
              <h3 className="fw-600 text-u ls1 mb-30 color-font">
                {aboutData.title}
              </h3>
              <p>{aboutData.content}</p>
              <a href="#" className="butn bord curve mt-30">
                <span>Read More</span>
              </a>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src={aboutData.image} alt={aboutData.title} />
            <div className="stauts">
              {
                aboutData.status.map(stat => (
                  <div className="item" key={stat.id}>
                    <h4>
                      {stat.number}
                      <span>{stat.letter}</span>
                    </h4>
                    <h6>{stat.statusName}</h6>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs1