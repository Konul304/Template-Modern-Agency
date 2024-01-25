import React from 'react';
//= Components
import Image from './Details/Image';
import Content from './Details/Content';
import Pagination from './Details/Pagination';
import CommentsArea from './Details/CommentsArea';
import CommentsForm from './Details/CommentsForm';
import SimilarCases from '@/components/Blogs/SimilarCases';

const BlogDetails = ({ theme, data }) => {
  const caseData = data?.data?.find(
    (item) => item.id?.toString() === data?.id?.casesID
  );
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <Image data={caseData} />
              <Content data={caseData} />
              {/* <Pagination /> */}
              {/* <CommentsArea />
              <CommentsForm theme={theme} /> */}
            </div>
          </div>
        </div>
      </div>
      <SimilarCases data={data} />
    </section>
  );
};

export default BlogDetails;
