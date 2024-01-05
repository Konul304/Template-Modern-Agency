import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import SliderHeader from '@/components/Headers/SliderHeader';
import AboutUs from '@/components/AboutUs/AboutUs2';
import Services from '@/components/Services/Services1';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials/TestimonialsWithVideo';
import Clients from '@/components/Clients/Clients2';
import Team from '@/components/Team/Team1';
import Blogs from '@/components/Blogs/Blogs4';
import SContactForm from '@/components/Contact/ContactFormS';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Vie - Business One Page Light'
}

export default function Home4() {
  return (
    <>
      <Loading />
      <Navbar />
      <SliderHeader />
      <div class="main-content">
        <AboutUs />
        <Services lines />
        <Portfolio grid={2} filterPosition="left" />
        <Testimonials />
        <Clients theme="light" length={4} />
        <Team />
        <Blogs />
        <SContactForm />
        <Footer hideBGCOLOR />
      </div>
    </>
  )
}