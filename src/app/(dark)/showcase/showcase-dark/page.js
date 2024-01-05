import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import ShowcasesFullScreen from '@/components/Showcases/ShowcaseFullscreen';

export const metadata = {
  title: 'Vie - Showcase Dark'
}

export default function ShowcasePage() {
  return (
    <>
      <Loading />
      <NavbarFullMenu />
      <ShowcasesFullScreen />
    </>
  )
}
