import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import PageHeader from '@/components/Headers/PageHeader';
import BlogDetails from '@/components/Blogs/BlogDetails';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Vie - Blog Details Light'
}

export default function BlogDetailsPage() {
  return (
    <>
      <Loading />
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar theme="light" />
      <PageHeader title="Blog Details." paragraph="All the most current news and events of our creative team." />
      <BlogDetails />
      <Footer />
    </>
  )
}
