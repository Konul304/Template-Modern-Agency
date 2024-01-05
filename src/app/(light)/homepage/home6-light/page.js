import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import SliderHeader from '@/components/Headers/SliderHeader';
import Services from '@/components/Services/Services4';
import AboutUs from '@/components/AboutUs/AboutUs4';
import Numbers from '@/components/Numbers/Numbers1';
import Works from '@/components/Works/Works4';
import Testimonials from '@/components/Testimonials/FullTestimonials';
import Blogs from '@/components/Blogs/Blogs2';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Vie - Modern Agency Light'
}

export default function Home6() {
  return (
    <>
      <Loading />
      <Navbar />
      <SliderHeader />
      <div className="main-content">
        <Services serviceMB50 />
        <AboutUs />
        <Numbers />
        <Works />
        <Testimonials />
        <Blogs />
        <CallToAction img="/img/patrn1.png" />
        <Footer />
      </div>
    </>
  )
}