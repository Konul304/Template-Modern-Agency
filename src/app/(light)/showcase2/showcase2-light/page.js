import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import ShowcaseCircleSide from '@/components/Showcases/ShowcaseCircleSide';

export const metadata = {
  title: 'Vie - Showcase 2 Light'
}

export default function Showcase2Page() {
  return (
    <>
      <Loading />
      <NavbarFullMenu theme="light" />
      <ShowcaseCircleSide />
    </>
  )
}
