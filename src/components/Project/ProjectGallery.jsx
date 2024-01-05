import React from 'react';

function ProjectGallery({ projectGalleryData }) {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          {
            projectGalleryData.map((imageLink, index) => (
              <a href="#0" key={index} className={`col-md-${index + 1 === projectGalleryData.length ? '12' : '3'} popimg`}>
                <img alt="" src={imageLink} />
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProjectGallery