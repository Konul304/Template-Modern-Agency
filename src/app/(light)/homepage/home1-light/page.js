import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import SliderHeader from '@/components/Headers/SliderHeader';
import AboutUs from '@/components/AboutUs/AboutUs1';
import Services from '@/components/Services/Services1';
import Works from '@/components/Works/Works1';
import Numbers from '@/components/Numbers/Numbers1';
import Testimonials from '@/components/Testimonials/TestimonialsWithVideo';
import SkillsCircle from '@/components/Skills/SkillsCircle';
import Clients from '@/components/Clients/Clients1';
import Blogs from '@/components/Blogs/Blogs1';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Vie - Main Demo Light'
}

export default function Home1() {
  return (
    <>
      <Loading />
      <Navbar />
      <SliderHeader />
      <div className="main-content">
        <AboutUs />
        <Services />
        <Works />
        <Numbers />
        <Testimonials />
        <SkillsCircle theme="light" />
        <Clients theme="light" />
        <Blogs />
        <CallToAction />
        <Footer />
      </div>
    </>
  )
}