import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Mobile-app/Navbar';
import Header from '@/components/Mobile-app/AltHeader';
import Works from '@/components/Mobile-app/Works';
import Footer from '@/components/Mobile-app/Footer';

export const metadata = {
  title: 'Vie - Portfolio Dark'
}

export default function Portfolio() {
  const headerData = {
    title: "Latest Works",
    page: "Portfolio"
  }

  return (
    <>
      <Loading />
      <Navbar />
      <Header headerData={headerData} />
      <Works theme="dark" />
      <Footer />
    </>
  )
}