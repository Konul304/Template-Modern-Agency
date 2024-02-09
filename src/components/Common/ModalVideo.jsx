'use client';
import React, { useEffect, useState, useRef } from 'react';

function ModalVideo({ isOpen, onClose, source }) {
  const closeBtn = useRef(null);
  console.log(source);
  return isOpen ? (
    <div
      className="modal-video"
      tabIndex="-1"
      role="dialog"
      aria-label="video"
      onClick={onClose}
    >
      <div className="modal-video-body">
        <div className="modal-video-inner">
          <button
            className="modal-video-close-btn"
            aria-label="video"
            ref={closeBtn}
            onClick={onClose}
          />
          <div className="modal-video-movie-wrap">
            <iframe
              src={source}
              width="640"
              height="480"
              allow="autoplay"
              allowFullScreen="allowFullScreen"
              style={{ marginTop: '65px', height: '550px' }}
              // tabIndex="-1"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ModalVideo;
