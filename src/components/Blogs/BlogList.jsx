import React from "react";
import Link from "next/link";
//= Static Data
import blogs from "@/data/blogs2.json";

const BlogList = () => {
  return (
    <section className="blog-pg blog-list section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts mt-80">
              {blogs.map((blogItem) => (
                <div className="item mb-80 wow fadeInUp" key={blogItem.id} data-wow-delay=".3s">
                  <div className="row">
                    <div className="col-lg-6 valign">
                      <div className="img md-mb50">
                        <img src={blogItem.image} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6 valign">
                      <div className="cont">
                        <div>
                          <div className="info">
                            <Link href="/blog/blog-dark" className="date">
                              <span>
                                <i>{blogItem.date.day}</i>
                                {blogItem.date.month}
                              </span>
                            </Link>
                            <span>/</span>
                            {blogItem.tags.map((tag, index) => (
                              <Link key={index} href="/blog/blog-dark" className="tag">
                                <span>{tag}</span>
                              </Link>
                            ))}
                          </div>
                          <h5>
                            <Link href="/blog-details/blog-details-dark">
                              {blogItem.title}
                            </Link>
                          </h5>
                          <p className="mt-10">
                            {blogItem.content.substr(0, 146) + '...'}
                          </p>
                          <div className="btn-more mt-30">
                            <Link href="/blog-details/blog-details-dark" className="simple-btn">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pagination">
                <span className="active">
                  <Link href={`/blog/blog-dark`}>1</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>2</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>
                    <i className="fas fa-angle-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
