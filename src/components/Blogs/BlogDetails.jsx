import React from "react";
//= Components
import Image from "./Details/Image";
import Content from "./Details/Content";
import Pagination from "./Details/Pagination";
import CommentsArea from "./Details/CommentsArea";
import CommentsForm from "./Details/CommentsForm";
import SimilarCases from "@/components/Blogs/SimilarCases";
import WorksStyle2 from "../Works/WorksStyle2";

const BlogDetails = ({ theme, data }) => {
  const caseData = data?.data?.find(
    (item) => item.id?.toString() === data?.id?.casesID
  );
  const hasImages = caseData?.caseImages && caseData?.caseImages.length > 0;
  const hasVideos = caseData?.caseVideos && caseData.caseVideos.length > 0;
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-11"> */}
          <div className="">
            <Image data={caseData} />
            <Content data={caseData} />
            {(hasImages || hasVideos) && (
              <WorksStyle2
                id={caseData?.id}
                grid={3}
                // presentations={item?.servicePresentations}
                videos={caseData?.caseVideos}
                images={caseData?.caseImages}
                hideHeader={true}
                filterPosition="center"
              />
            )}
            {/* <Pagination /> */}
            {/* <CommentsArea />
              <CommentsForm theme={theme} /> */}
          </div>
          {/* </div> */}
        </div>
      </div>
      <SimilarCases data={data} />
    </section>
  );
};

export default BlogDetails;
