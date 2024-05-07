'use client';
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Cases.module.scss';
import { getCases } from '@/app/(api)/api';
import { useQuery } from 'react-query';

const CasesHomePage = () => {
  const { data, isLoading, isError } = useQuery(
    ['caseData'],
    async () => await getCases(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  if (data?.length > 3) {
    data?.splice(0, data?.length - 3);
  }
  return (
    <section className="blog section-padding sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
                RECENT ARTICLES
              </h6> */}
              <h3 className="wow color-font mb-4">Our Cases</h3>
            </div>
          </div>
        </div>
        <div className="blog-pg">
          <div className="posts">
            <div className="row">
              {data?.map((item) => {
                const img_url =
                  'https://project141.s3.eu-north-1.amazonaws.com/' +
                  item?.logoLink;
                return (
                  <div className="col-lg-4">
                    <div
                      className="item mb-80 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <a href={`/cases/cases-dark/${item?.id}`} className="img">
                        <img src={img_url} alt="" />
                      </a>
                      <div className="cont">
                        <div>
                          <div className="info">
                            {/* <Link href="/blog/blog-dark" className="date">
                          <span>
                            <i>06</i> August
                          </span>
                        </Link> */}
                            {/* <span>/</span> */}
                            {item?.tagNames?.map((tag) => {
                              return (
                                <Link
                                  href={`/cases/cases-dark/${item?.id}`}
                                  className="tag"
                                >
                                  <span>{tag}</span>
                                </Link>
                              );
                            })}
                          </div>
                          <h5>
                            <Link href={`/cases/cases-dark/${item?.id}`}>
                              {item?.title}
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
            </div>
            <div className={styles.see_more_container}>
              <a href={`/cases/cases-dark`} className={styles.see_more}>
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesHomePage;
