import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import SliderHeader from '@/components/Headers/SliderHeader';
import AboutUs from '@/components/AboutUs/AboutUs1';
import Services from '@/components/Services/Services1';
import Numbers from '@/components/Numbers/Numbers1';
import Partners from '@/components/Clients/Partners';
import Footer from '@/components/Common/Footer';
import Works from '@/components/Works/Works1';
import FullTestimonials from '@/components/Testimonials/FullTestimonials';

export const metadata = {
  title: 'Vie - Main Demo Dark',
};

export default function Home1() {
  return (
    <>
      {/* <Loading /> */}
      <Navbar />
      <SliderHeader />
      <div className="main-content">
        <AboutUs />
        <Numbers />
        <Partners theme="dark" />
        <Services />
        {/* <Services3 /> */}
        <Works />
        <FullTestimonials />
        {/* <SkillsCircle theme="dark" />
        <Blogs />
        <CallToAction /> */}
        <Footer />
      </div>
    </>
  );
}
