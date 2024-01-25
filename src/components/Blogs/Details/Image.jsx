import React from 'react';

const Image = (data) => {
  const img_url =
    'https://project141.s3.eu-north-1.amazonaws.com/' + data?.data?.logoLink;
  return (
    <div className="img">
      <img src={img_url} alt="" />
    </div>
  );
};

export default Image;
