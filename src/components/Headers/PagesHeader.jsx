import React from 'react';

function PagesHeader({ children, imageLink }) {
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont mt-100 mb-50 text-center">
              <h1 className="color-font fw-700">
                {children}
              </h1>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="img">
              <img src={imageLink} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  )
}

export default PagesHeader