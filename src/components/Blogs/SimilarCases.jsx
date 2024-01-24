import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Cases.module.scss';

const SimilarCases = (data) => {
  const allData = data?.data?.data;
  const caseData = data?.data?.data?.find(
    (item) => item.id?.toString() === data?.data?.id?.casesID
  );
  const tagStrings = caseData?.tags?.map((item) => item.tag);

  const filteredObjects = allData.filter((item) => {
    const tags = item.tags?.map((tagItem) => tagItem.tag) || [];
    return tags.some((tag) => tagStrings.includes(tag));
  });
  const indexOfItemWithId2 = filteredObjects.findIndex(
    (item) => item.id === caseData?.id
  );
  if (indexOfItemWithId2 !== -1) {
    filteredObjects.splice(indexOfItemWithId2, 1);
  }

  return (
    <section className={`blog ${styles.similar_cases_container}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 ">
            <div className="sec-head  text-center">
              {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
                RECENT ARTICLES
              </h6> */}
              <h3 className="wow color-font">Related Cases</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredObjects?.map((item) => {
            return (
              <div key={item?.id} className="col-md-4">
                <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
                  <a href={`/cases/cases-dark${item?.id}`} className="img">
                    <img src="/img/blog/1.jpg" alt="" />
                  </a>
                  <div className="cont">
                    <div>
                      <div className="info">
                        {/* <Link href="/blog/blog-dark" className="date">
                          <span>
                            <i>06</i> August
                          </span>
                        </Link>
                        <span>/</span> */}
                        <Link
                          href={`/cases/cases-dark${item?.id}`}
                          className="tag"
                        >
                          {item?.tags?.map((tag, index) => {
                            <span key={index}>tag</span>;
                          })}
                        </Link>
                      </div>
                      <h5>
                        <Link href={`/cases/cases-dark${item?.id}`}>
                          {item?.title}
                        </Link>
                      </h5>
                      <div className="btn-more">
                        <Link
                          href={`/cases/cases-dark${item?.id}`}
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
      </div>
    </section>
  );
};

export default SimilarCases;
