import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import WorksHeader from "@/components/Headers/WorksHeader";
import Works from "@/components/Works/WorksStyle2";
import Footer from "@/components/Common/Footer";
import { getPortfolio, getVideos } from "@/app/(api)/api";

export const metadata = {

  title: "C141",
};

const Works2Page = async () => {
	const presentations = await getPortfolio();
	const videos = await getVideos();
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
			<WorksHeader />
			<div className="main-content">
				<Works
					grid={3}
					filterPosition="center"
					presentations={presentations}
					videos={videos}
				/>
				<Footer />
			</div>
		</>
	);
};

export default Works2Page;
