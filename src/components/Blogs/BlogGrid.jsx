'use client';
import React from 'react';
import Link from 'next/link';
import { getCases } from '@/app/(api)/api';
import { useQuery } from 'react-query';

const BlogGrid = () => {
  const { data, isLoading, isError } = useQuery(
    ['casesData'],
    async () => await getCases(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  return (
    <section className="blog-pg blog section-padding pt-0">
      <div className="container">
        <div className="posts">
          <div className="row">
            {data?.map((item) => {
              const img_url =
                'https://project141.s3.eu-north-1.amazonaws.com/' +
                item?.logoLink;
              return (
                <div className="col-lg-4" key={item.id}>
                  <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                    <a href={`/cases/${item?.id}`} className="img">
                      <img src={img_url} alt="" />
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
                          {item.tagNames.map((tagItem, index) => {
                            return (
                              <>
                                <Link
                                  key={index}
                                  href={`/cases/${item?.id}`}
                                  className="tag"
                                >
                                  <span
                                    className="wow color-font fw-700 "
                                    key={index}
                                  >
                                    {tagItem}
                                  </span>
                                  &nbsp;&nbsp;&nbsp;
                                </Link>
                              </>
                            );
                          })}
                        </div>
                        <h5>
                          <Link
                            href={`/cases/${item?.id}`}
                            style={{ color: '#5f5f5f' }}
                          >
                            {item.title.substr(0, 55) + '...'}
                          </Link>
                        </h5>
                        <div className="btn-more">
                          <Link
                            href={`/cases/${item?.id}`}
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
