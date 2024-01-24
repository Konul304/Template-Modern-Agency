'use client';
import React from 'react';
import Link from 'next/link';

const BlogGrid = (data) => {
  return (
    <section className="blog-pg blog section-padding pt-0">
      <div className="container">
        <div className="posts">
          <div className="row">
            {data?.data?.map((item) => {
              return (
                <div className="col-lg-4" key={item.id}>
                  <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                    <a href={`/cases/cases-dark/${item?.id}`} className="img">
                      <img src="/img/blog/b2.jpg" alt="" />
                    </a>
                    <div className="cont">
                      <div>
                        <div className="info">
                          {/* <Link href="/blog/blog-dark" className="date">
                          <span>
                            <i>{blogItem.date.day}</i>
                            {blogItem.date.month}
                          </span>
                        </Link> */}
                          {/* <span>/</span> */}
                          {item.tags.map((tagItem, index) => (
                            <Link
                              key={index}
                              href={`/cases/cases-dark/${item?.id}`}
                              className="tag"
                            >
                              <span>{tagItem?.tag}</span>
                            </Link>
                          ))}
                        </div>
                        <h5>
                          <Link href={`/cases/cases-dark/${item?.id}`}>
                            {item.title.substr(0, 55) + '...'}
                          </Link>
                        </h5>
                        <div className="btn-more">
                          <Link
                            href={`/cases/cases-dark/${item?.id}`}
                            className="simple-btn"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* {blogs.map((blogItem) => (
              <div className="col-lg-4" key={blogItem.id}>
                <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                  <a href="/blog-details/blog-details-dark" className="img">
                    <img src={blogItem.image} alt="" />
                  </a>
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
                          <Link
                            key={index}
                            href="/blog/blog-dark/"
                            className="tag"
                          >
                            <span>{tag}</span>
                          </Link>
                        ))}
                      </div>
                      <h5>
                        <Link href="/blog-details/blog-details-dark">
                          {blogItem.title.substr(0, 55) + '...'}
                        </Link>
                      </h5>
                      <div className="btn-more">
                        <Link
                          href="/blog-details/blog-details-dark"
                          className="simple-btn"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
            {/* <div className="pagination">
              <span className="active">
                <Link href={`/blog/blog-dark`}>1</Link>
              </span>
              <span>
                <Link href={`/blog/blog-dark`}>2</Link>
              </span>
              <span>
                <Link href={`/blog/blog-dark}`}>
                  <i className="fas fa-angle-right"></i>
                </Link>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
