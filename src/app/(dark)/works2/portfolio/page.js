import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import WorksHeader from '@/components/Headers/WorksHeader';
import Footer from '@/components/Common/Footer';
import WorksStylePortfolio from '@/components/Works/worksStylePortfolio';

export const metadata = {
  title: 'C141',
};

const Works2Page = async () => {
  return (
    <>
      <Loading />
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      <WorksHeader />
      <div className="main-content">
        <WorksStylePortfolio grid={3} filterPosition="center" />
        <Footer />
      </div>
    </>
  );
};

export default Works2Page;
