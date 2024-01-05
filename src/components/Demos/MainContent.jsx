'use client';
import React, { useEffect } from 'react';
//= Components
import Pages from './Pages';
import Showcases from './Showcases';
import InnerPages from './InnerPages';
import Services from './Services';
import CallToAction from './CallToAction';
//= Scripts
import initIsotope from "@/common/initIsotope";

function MainContent() {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <div className="main-content section-padding pb-0">
      <Pages />
      <Showcases />
      <InnerPages />
      <Services />
      <CallToAction />
    </div>
  )
}

export default MainContent