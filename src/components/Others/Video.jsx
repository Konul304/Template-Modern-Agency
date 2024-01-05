'use client';
import React, { useState } from 'react';
//= Components
import ModalVideo from "@/components/Common/ModalVideo";

function Video() {
  const [isOpen, setOpen] = useState(false);

  function openVideo(e) {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section className="video bg-img parallaxie" style={{ backgroundImage: `url('/img/bg-vid.jpg')` }}>
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen}
        videoId="127203262"
        onClose={() => setOpen(false)}
      />
      <a className="vid valign" href="#" onClick={openVideo}>
        <div className="vid-butn">
          <span className="icon">
            <i className="pe-7s-play"></i>
          </span>
        </div>
      </a>
      <div className="container">
        <div className="stauts">
          <div className="item">
            <h4>3<span>K</span> +</h4>
            <h6>Happy Clients</h6>
          </div>
          <div className="item">
            <h4>14<span>K</span> +</h4>
            <h6>Success Projects</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video