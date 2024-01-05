import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import WorksHeader from '@/components/Headers/WorksHeader';
import Works from '@/components/Works/WorksStyle1';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Vie - Works Light'
}

export default function WorksPage() {
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
      <WorksHeader />
      <div className="main-content">
        <Works />
        <Footer />
      </div>
    </>
  )
}
