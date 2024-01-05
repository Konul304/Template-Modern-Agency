import React from 'react';

function CallToAction() {
  return (
    <section className="call-action section-padding bg-img" style={{ backgroundImage: `url('/img/patrn.svg')` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <h6 className="wow words chars splitting" data-splitting>
                Purchase The Vie
              </h6>
              <h2 className="wow words chars splitting" data-splitting>
                and Make <br />
                <b className="back-color">Your Life Easier</b>.
              </h2>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            <a href="#" className="butn bord curve wow fadeInUp" data-wow-delay=".5s">
              <span>Purchase Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction