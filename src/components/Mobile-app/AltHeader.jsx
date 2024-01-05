import React from 'react'

function AltHeader({ headerData }) {
  return (
    <header className="page-app-header valign bg-img" data-overlay-dark="8" style={{ backgroundImage: `url('/mobile-app/img/p1.jpg')` }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1>{headerData.title}</h1>
              <div className="links">
                <a to="#0">Home</a>
                <span className="icon pe-7s-angle-right"></span>
                <a to="#0">{headerData.page}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AltHeader