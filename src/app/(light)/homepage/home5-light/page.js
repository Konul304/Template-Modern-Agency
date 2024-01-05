import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import Header from '@/components/Headers/Header4';
import AboutUs from '@/components/AboutUs/AboutUs3';
import Works from '@/components/Works/Works3';
import Services from '@/components/Services/Services3';
import MinimalArea2 from '@/components/Others/MinimalArea2';
import FullTestimonials from '@/components/Testimonials/FullTestimonials';
import Team from '@/components/Team/Team1';
import Blogs from '@/components/Blogs/Blogs4';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Vie - Digital Agency Light'
}

export default function Home5() {
  return (
    <>
      <Loading />
      <Navbar theme="light" />
      <Header />
      <AboutUs />
      <Works />
      <Services />
      <MinimalArea2 />
      <FullTestimonials classText="pb-0" />
      <Team />
      <Blogs />
      <CallToAction />
      <Footer />
    </>
  )
}