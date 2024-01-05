import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import FreelanceHeader from '@/components/Headers/FreelanceHeader';
import Services from '@/components/Services/Services5';
import Works from '@/components/Works/Works5';
import AboutUs from '@/components/AboutUs/AboutUs5';
import FullTestimonials from '@/components/Testimonials/FullTestimonials';
import Blogs from '@/components/Blogs/Blogs2';
import ContactForm from '@/components/Contact/ContactFormS';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Vie - Freelancer Light'
}

export default function Home7() {
  return (
    <>
      <Loading />
      <Navbar theme="light" />
      <FreelanceHeader />
      <Services />
      <Works />
      <AboutUs />
      <FullTestimonials showHead />
      <Blogs />
      <ContactForm noLine />
      <Footer />
    </>
  )
}