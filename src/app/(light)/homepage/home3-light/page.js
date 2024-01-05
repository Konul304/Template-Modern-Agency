import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import Header from '@/components/Headers/Header3';
import Services from '@/components/Services/Services2';
import Numbers from '@/components/Numbers/Numbers2';
import Works from '@/components/Works/Works2';
import FullTestimonials from '@/components/Testimonials/FullTestimonials';
import Team from '@/components/Team/Team1';
import Blogs from '@/components/Blogs/Blogs3';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Vie - Corporate Business Light'
}

export default function Home3() {
  return (
    <>
      <Loading />
      <Navbar theme="light" />
      <Header />
      <Services />
      <Works />
      <Numbers />
      <FullTestimonials withIMG="/img/testim-img.jpg" />
      <Team />
      <Blogs />
      <Footer />
    </>
  )
}