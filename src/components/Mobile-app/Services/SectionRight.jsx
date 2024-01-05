import React from 'react';

function SectionRight({ theme }) {
  return (
    <div className="row mt-80">
      <div className="col-lg-6 valign">
        <div className="content md-mb50">
          <h6 className="stit mb-30"><span className="left"></span> Core Features</h6>
          <h2 className="mb-30">
            Links, Content & Community. One Online Homepages. Save and Organise Ideas
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta ecabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          </p>
          <div className="butons mt-40">
            <a href="#0" className="butn-bord-red rounded buton">
              <span>Get Free 7 Days Trial</span>
              <i className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
              </i>
            </a>
            <a href="#0" className="butn-more">
              <span>Read More</span>
              <i className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path
                    d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-5 offset-lg-1">
        <div className="serv-img">
          <img src={theme === 'light' ? '/mobile-app/img/app-img/s2-light.png' : '/mobile-app/img/app-img/s2.png'} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SectionRight