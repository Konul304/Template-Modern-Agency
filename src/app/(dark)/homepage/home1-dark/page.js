import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import SliderHeader from '@/components/Headers/SliderHeader';
import AboutUs from '@/components/AboutUs/AboutUs1';
import Services from '@/components/Services/Services1';
import Numbers from '@/components/Numbers/Numbers1';
import Testimonials from '@/components/Testimonials/TestimonialsWithVideo';
import Clients from '@/components/Clients/Clients1';
import Footer from '@/components/Common/Footer';
import Services3 from '@/components/Services/Services3';
import Works from '@/components/Works/Works1';
import SkillsCircle from '@/components/Skills/SkillsCircle';
import FullTestimonials from '@/components/Testimonials/FullTestimonials';

export const metadata = {
  title: 'Vie - Main Demo Dark',
};

export default function Home1() {
  return (
    <>
      <Loading />
      <Navbar />
      <SliderHeader />
      <div className="main-content">
        <AboutUs />
        <Numbers />
        <Clients theme="dark" />
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
