'use client';
import React, { useEffect, useState } from 'react';

function Header() {
  const [backgroundPosition, setBackgroundPosition] = useState(0);

  function handleScroll() {
    setBackgroundPosition(-(window.scrollY - 0.25 * window.scrollY));
  }

  useEffect(() => {
    setBackgroundPosition(-(window.scrollY - 0.25 * window.scrollY));
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="works-header particles valign bg-img parallaxie" data-overlay-dark="4" style={{
      backgroundImage: `url(/demo-img/bg.png)`,
      minHeight: '100vh',
      zIndex: '99999',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center ' + backgroundPosition + 'px'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11 static">
            <div className="capt mt-50">
              <div className="bactxt custom-font valign">
                <span className="full-width" style={{ color: 'transparent' }}> vie </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header