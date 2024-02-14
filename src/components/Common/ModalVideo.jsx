import React, { useEffect, useRef } from 'react';

function ModalVideo({ isOpen, onClose, source }) {
  const closeBtn = useRef(null);

  useEffect(() => {
    const handleButtonClick = () => {
      onClose();
    };

    if (closeBtn.current) {
      closeBtn.current.addEventListener('click', handleButtonClick);
    }

    return () => {
      if (closeBtn.current) {
        closeBtn.current.removeEventListener('click', handleButtonClick);
      }
    };
  }, [onClose]);

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
          />
          <div className="modal-video-movie-wrap">
            <iframe
              src={source}
              width="640"
              height="480"
              allow="autoplay"
              allowFullScreen="allowFullScreen"
              style={{ marginTop: '65px', height: '550px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ModalVideo;
