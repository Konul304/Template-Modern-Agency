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
import { getAbout } from "@/app/(api)/api";

export const metadata = {
  title: "Vie - Main Demo Dark",
};

const Home1 = async () => {
  const response = await getAbout();
  return (
    <>
      <Loading />
      <Navbar />
      <SliderHeader />
      <div className="main-content">
        <AboutUs data={response} />
        <Numbers />
        <Partners theme="dark" />
        {/* <Services /> */}
        <Services1 style="4item" />
        {/* <Services3 /> */}
        <Works />
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
