import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import ProjectDetails2Header from '@/components/Project/ProjectDetails2Header';
import ProjectIntroduction from '@/components/Project/ProjectIntroduction';
import ProjectGallery from '@/components/Project/ProjectGallery';
import ProjectDescription from '@/components/Project/ProjectDescription';
import ProjectVideo from '@/components/Project/ProjectVideo';
import NextProject from '@/components/Project/NextProject';
import Footer from '@/components/Common/Footer';
//= Static Data
import ProjectDate from "@/data/project-details2.json";

export const metadata = {
  title: 'Vie - Project Details Light'
}

export default function ProjectDetailsPage() {
  return (
    <>
      <Loading />
      <Navbar />
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={ProjectDate} />
        <ProjectIntroduction projectIntroductionData={ProjectDate.intro} />
        <ProjectGallery projectGalleryData={ProjectDate.gallery} />
        <ProjectDescription projectDescriptionData={ProjectDate.description} />
        <ProjectVideo projectVideoData={ProjectDate} />
        <NextProject />
        <Footer />
      </div>
    </>
  )
}
