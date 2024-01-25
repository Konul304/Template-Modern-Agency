import React from "react";
//= Page components
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import ServicesHeader from "@/components/Headers/ServicesHeader";
import Loading from "@/components/Common/Loader";
import Services1 from "@/components/Services/Services1";
import BlogStanderd from "@/components/Blogs/BlogStanderd";

export const metadata = {
  title: "C141",
};

export default function Services() {
  return (
    <>
      <Loading />
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      {/* <ServicesHeader /> */}
      <div className="main-content">
        {/* <Works grid={2} hideFilter={true} filterPosition="center" /> */}
        <Services1 style="4item" />
        <BlogStanderd />
        <Footer />
      </div>
    </>
  );
}
