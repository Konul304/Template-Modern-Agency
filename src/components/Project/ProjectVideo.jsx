'use client';
import React, { useState } from 'react';
//= Components
import ModalVideo from "@/components/Common/ModalVideo";

function ProjectVideo({ projectVideoData }) {
  const [isOpen, setOpen] = useState(false);

  function openVideo(event) {
    event.preventDefault();
    setOpen(true);
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="video-wrapper section-padding bg-img parallaxie valign" style={{ backgroundImage: `url(${projectVideoData.projectHeaderImage})` }} data-overlay-dark="4">
          <div className="full-width text-center">
            <ModalVideo videoId="AzwC6umvd1s" channel="youtube" isOpen={isOpen} onClose={() => setOpen(false)} autoplay />
            <a href="#" onClick={openVideo} className="vid">
              <div className="vid-butn">
                <span className="icon">
                  <i className="fas fa-play"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectVideo;