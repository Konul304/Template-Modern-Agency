import React from 'react';
//= Static Data
import blogs from "@/data/mobile-app/blog.json";

function Blog() {
  return (
    <section className="app-blog section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30"><span className="left"></span> Blog and News <span className="Right"></span></h6>
              <h2>Read Latest Artices and Tips Latest News & Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {
            blogs.map((blog, index) => (
              <div className="col-lg-6" key={blog.id}>
                <div className={`item ${index !== blogs.length - 1 ? 'md-mb50' : ''}`}>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="img">
                        <img src={blog.image} alt="" />
                      </div>
                    </div>
                    <div className="col-md-7 valign">
                      <div className="cont">
                        <div className="full-width">
                          <div className="tag">
                            <a to="#0">{blog.tag}</a>
                          </div>
                          <div className="title">
                            <h5>{blog.title}</h5>
                          </div>
                          <div className="info">
                            <a to="#0">
                              <span>Post By :</span>
                              {blog.author}
                            </a>
                            <a to="#0">
                              <span>Comments :</span>
                              {
                                blog.comments < 10 ?
                                  <>(0{blog.comments})</>
                                  :
                                  <>({blog.comments})</>
                              }
                            </a>
                          </div>
                          <a to="#0" className="butn-bord-red rounded buton">
                            <span>Read More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blog