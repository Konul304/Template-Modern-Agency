import React from 'react';
import Link from 'next/link';

function ProjectDetails2Header({ projectHeaderData }) {
  return (
    <section className="page-header proj-det bg-img parallaxie valign"
      style={{ backgroundImage: `url(${projectHeaderData.projectHeaderImage})` }} data-overlay-dark="4">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h6>{projectHeaderData.title.small}</h6>
              <h2>{projectHeaderData.title.big}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <Link href={projectHeaderData.clientURLLink}>
                  {projectHeaderData.clientURLName}
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>{projectHeaderData.date}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                {
                  projectHeaderData.categories.map((cat, index) => (
                    <Link href={cat.link} key={cat.id}>
                      {cat.name}
                      {projectHeaderData.categories.length != index + 1 ? " ," : ""}
                    </Link>
                  ))
                }
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                {
                  projectHeaderData.tags.map((tag, index) => (
                    <Link href={tag.link} key={tag.id}>
                      {tag.name}
                      {projectHeaderData.tags.length != index + 1 ? " ," : ""}
                    </Link>
                  ))
                }
              </p>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}

export default ProjectDetails2Header