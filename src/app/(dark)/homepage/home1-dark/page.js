import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import SliderHeader from "@/components/Headers/SliderHeader";
import AboutUs from "@/components/AboutUs/AboutUs1";
import Services from "@/components/Services/Services1";
import Numbers from "@/components/Numbers/Numbers1";
import Partners from "@/components/Clients/Partners";
import Footer from "@/components/Common/Footer";
import Works from "@/components/Works/Works1";
import FullTestimonials from "@/components/Testimonials/FullTestimonials";
import Cases from "@/components/Blogs/Cases";
import Services1 from "@/components/Services/Services1";
import { getAbout, getPartners, getPortfolio } from "@/app/(api)/api";

export const metadata = {
  title: "C141",
};

const Home1 = async () => {
  const response = await getAbout();
  const partnerData = await getPartners();
  const portfolio = await getPortfolio();

  return (
    <>
      <Loading />
      <Navbar />
      <SliderHeader />
      <div className="main-content">
        <AboutUs data={response} />
        <Numbers />
        <Partners theme="dark" partners={partnerData} />
        {/* <Services /> */}
        <Services1 style="4item" />
        {/* <Services3 /> */}
        <Works portfolio={portfolio} />
        <FullTestimonials />
        {/* <SkillsCircle theme="dark" />
        <CallToAction /> */}
        <Cases />
        <Footer />
      </div>
    </>
  );
};

export default Home1;
