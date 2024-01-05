import React from "react";
//= Components
import Image from './Details/Image';
import Content from './Details/Content';
import Pagination from './Details/Pagination';
import CommentsArea from './Details/CommentsArea';
import CommentsForm from './Details/CommentsForm';

const BlogDetails = ({ theme }) => {
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <Image />
              <Content />
              <Pagination />
              <CommentsArea />
              <CommentsForm theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
