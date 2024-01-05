import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Mobile-app/Navbar';
import Header from '@/components/Mobile-app/AltHeader';
import Shop from '@/components/Mobile-app/Shop';
import Footer from '@/components/Mobile-app/Footer';

export const metadata = {
  title: 'Vie - Shop Light'
}

export default function ShopPage() {
  const headerData = {
    title: "Shop",
    page: "Shop"
  }

  return (
    <>
      <Loading />
      <Navbar theme="light" />
      <Header headerData={headerData} />
      <Shop />
      <Footer />
    </>
  )
}