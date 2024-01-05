import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import PageHeader from '@/components/Headers/PageHeader';
import BlogList from '@/components/Blogs/BlogList';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Vie - Blog List Light'
}

export default function BlogListPage() {
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
      <PageHeader classText="sub-bg" title="Our News."
        paragraph="All the most current news and events of our creative team." />
      <BlogList />
      <Footer />
    </>
  )
}
