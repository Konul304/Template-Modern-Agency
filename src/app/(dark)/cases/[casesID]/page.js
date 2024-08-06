import { getCases } from '@/app/(api)/api';
import BlogDetailsPage from '@/components/Blogs/BlogDetailsPage';
import React from 'react';

const page = async ({ params }) => {
  const data = await getCases();
  return (
    <>
      <BlogDetailsPage data={data} id={params} />
    </>
  );
};

export default page;
