import React from 'react';
//= Page components
import Navbar from '@/components/Common/Navbar';
import Footer from '@/components/Common/Footer';
import Loading from '@/components/Common/Loader';
import Services1 from '@/components/Services/Services1';
import BlogStanderd from '@/components/Blogs/BlogStanderd';
import { getServices } from '@/app/(api)/api';

export const metadata = {
  title: "C141",
};

export default async function Services() {
	const services = await getServices();
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
				<Services1 services={services} style="4item" />
				<BlogStanderd services={services} />
				<Footer />
			</div>
		</>
	);
}
