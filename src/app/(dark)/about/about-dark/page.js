import React from 'react';
//= Page components
import Navbar from '@/components/Common/Navbar';
import PagesHeader from '@/components/Headers/PagesHeader';
import AboutIntro from '@/components/AboutUs/AboutIntro';
import Team from '@/components/Team/Team1';
import Partners from '@/components/Clients/Partners';
import Footer from '@/components/Common/Footer';
import Loading from '@/components/Common/Loader';
import OurHistory from '@/components/OurHistory';
import { getAbout } from '@/app/(api)/api';

export const metadata = {
  title: 'Vie - About Dark',
};

const AboutDark = async () => {
  const response = await getAbout();
  return (
    <>
      <Loading />
      <Navbar />
      <PagesHeader data={response}>
        Our dedicated team of creatives is bursting with talent, experience and
        passion for what we do.
      </PagesHeader>
      <AboutIntro data={response} />
      <Partners theme="dark" />
      <OurHistory data={response} />
      <Team />
      {/* <Services style="4item" />
      <TestimonialsWithVideo />
      <SkillsCircle from="aboutPage" />
      <MinimalArea />
      <CallToAction /> */}
      <Footer />
    </>
  );
};

export default AboutDark;
