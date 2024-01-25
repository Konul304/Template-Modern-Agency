import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import SliderHeader from '@/components/Headers/SliderHeader';
import AboutUs from '@/components/AboutUs/AboutUs1';
import Services from '@/components/Services/Services1';
import Numbers from '@/components/Numbers/Numbers1';
import Partners from '@/components/Clients/Partners';
import Footer from '@/components/Common/Footer';
import Works from '@/components/Works/Works1';
import FullTestimonials from '@/components/Testimonials/FullTestimonials';
import Cases from '@/components/Blogs/Cases';
import Services1 from '@/components/Services/Services1';
import {
  getAbout,
  getCases,
  getPartners,
  getPortfolio,
  getServices,
  getSlider,
} from '@/app/(api)/api';
import HomepageServicesSection from '@/components/Services/HomepageServicesSection';

export const metadata = {
  title: 'C141',
};

const Home1 = async () => {
  const response = await getAbout();
  const partnerData = await getPartners();
  const portfolio = await getPortfolio();
  const cases = await getCases();
  const sliderData = await getSlider();
  const services = await getServices();
  return (
    <>
      <Loading />
      <Navbar />
      <SliderHeader data={sliderData} />
      <div className="main-content">
        <AboutUs data={response} />
        <Numbers />
        <Partners theme="dark" partners={partnerData} />
        {/* <Services /> */}
        <HomepageServicesSection style="4item" services={services} />
        {/* <Services3 /> */}
        <Works portfolio={portfolio} />
        <FullTestimonials />
        {/* <SkillsCircle theme="dark" />
        <CallToAction /> */}
        <Cases data={cases} />
        <Footer />
      </div>
    </>
  );
};

export default Home1;
