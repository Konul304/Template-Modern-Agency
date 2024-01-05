import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Mobile-app/Navbar';
import Header from '@/components/Mobile-app/Header';
import Brands from '@/components/Mobile-app/Brands';
import Services from '@/components/Mobile-app/Services';
import AppServices from '@/components/Mobile-app/AppServices';
import Screenshots from '@/components/Mobile-app/Screenshots';
import Process from '@/components/Mobile-app/Process';
import TeamVid from '@/components/Mobile-app/TeamWithVideo';
import Pricing from '@/components/Mobile-app/Pricing1';
import Testimonials from '@/components/Mobile-app/Testimonials';
import DownloadApp from '@/components/Mobile-app/DownloadApp';
import Blog from '@/components/Mobile-app/Blog';
import Footer from '@/components/Mobile-app/Footer';

export const metadata = {
  title: 'Vie - Mobile App Dark'
}

export default function MobileApp() {
  return (
    <>
      <Loading />
      <Navbar grLogo="1" />
      <Header />
      <Brands />
      <Services />
      <AppServices />
      <Screenshots />
      <Process />
      <TeamVid />
      <Pricing />
      <Testimonials />
      <DownloadApp />
      <Blog />
      <Footer />
    </>
  )
}