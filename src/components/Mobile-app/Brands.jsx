import React from 'react';
//= Static Data
import brands from '@/data/mobile-app/brands.json';

function Brands() {
  return (
    <section className="brands pt-80 pb-80 bg-dark" data-overlay-dark="0">
      <div className="container">
        <div className="head mb-60 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="text">
                <h2>We’ve <span>154+ <img src={brands.image} alt="" className="bord-gr" /></span> Global Partners</h2>
                <span className="mt-10">Professional Design Agency to provide solutions</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            brands.brands.map((brand, index) => (
              index < 5 ?
                <div className={`col-lg ${index !== 4 ? 'col-sm-3' : 'lg-hide'}`} key={brand.id} v-if="">
                  <div className="item">
                    <div className="img">
                      <a href="#0">
                        <img src={brand.image} alt="" className="front" />
                        <img src={brand.image} alt="" className="back" />
                      </a>
                    </div>
                  </div>
                </div>
                :
                <div className="col-lg" key={brand.id}>
                  <div className="item">
                    <div className="img">
                      <a href="#0">
                        <img src={brand.image} alt="" className="front" />
                        <img src={brand.image} alt="" className="back" />
                      </a>
                    </div>
                  </div>
                </div>
            ))
          }
        </div>
        <div className="row lg-hide">
        </div>
      </div>
      <div className="circle-blur"></div>
    </section>
  )
}

export default Brands