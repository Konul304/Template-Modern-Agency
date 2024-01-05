import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import Header from '@/components/Headers/Header2';
import Services from '@/components/Services/Services1';
import Video from '@/components/Others/Video';
import Portfolio from '@/components/Portfolio';
import FullTestimonials from '@/components/Testimonials/FullTestimonials';
import Team from '@/components/Team/Team2';
import Blogs from '@/components/Blogs/Blogs2';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Vie - Creative Agency Dark'
}

export default function Home2() {
  return (
    <>
      <Loading />
      <Navbar />
      <Header />
      <Services style="4item" />
      <Video />
      <Portfolio grid={3} filterPosition="center" />
      <FullTestimonials noPadding />
      <Team />
      <Blogs />
      <CallToAction />
      <Footer />
    </>
  )
}