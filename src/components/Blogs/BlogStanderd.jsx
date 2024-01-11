import React from 'react';
import Link from 'next/link';
//= Static Data
import blogs from '@/data/blogs1.json';

const BlogStanderd = () => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {blogs.map((blogItem, index) => (
                <div
                  className={`item ${
                    index === blogs.length - 1 ? '' : 'mb-80'
                  }`}
                  key={blogItem.id}
                >
                  <div className="img">
                    <div>
                      <img src={blogItem.image} alt="" />
                    </div>
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        {/* <div className="date">
                          <span className="num">{blogItem.date.day}</span>
                          <span>{blogItem.date.month}</span>
                        </div> */}
                        {/* <div className="tags">
                          {blogItem.tags.map((tag, index) => (
                            <Link key={index} href="/blog/blog-dark">
                              {tag}
                            </Link>
                          ))}
                        </div> */}
                        <h4 className="title">
                          <div>{blogItem.title}</div>
                        </h4>
                        <p>{blogItem.content}</p>
                        {/* <Link href={`/blog-details/blog-details-dark`} className="butn bord curve mt-30">
                          Read More
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="pagination">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
