import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Mobile-app/Navbar';
import Header from '@/components/Mobile-app/AltHeader';
import AppServices from '@/components/Mobile-app/AppServices';
import Statistics from '@/components/Mobile-app/Statistics';
import Pricing from '@/components/Mobile-app/Pricing1';
import FAQ from '@/components/Mobile-app/FAQ';
import Footer from '@/components/Mobile-app/Footer';

export const metadata = {
  title: 'Vie - Services Light'
}

export default function Services() {
  const headerData = {
    title: "Popular Services",
    page: "Services"
  }

  return (
    <>
      <Loading />
      <Navbar theme="light" />
      <Header headerData={headerData} />
      <AppServices />
      <Statistics theme="light" />
      <Pricing bgGray="1" />
      <FAQ />
      <Footer />
    </>
  )
}