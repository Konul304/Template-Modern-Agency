'use client';
import { useEffect } from 'react';
import loadingPace from '@/common/loadingPace';

function LoadingScreen() {
	useEffect(() => {
		// const handlePace = () => {
			if (typeof Pace !== 'undefined') loadingPace();
		// };
		// setTimeout(handlePace, 1000);
		// return () => clearTimeout(handlePace);
	});

	return (
		<div className="hideX">
			<div className="loading">
				{/* <span>L</span>
				<span>o</span>
				<span>a</span>
				<span>d</span>
				<span>i</span>
				<span>n</span>
				<span>g</span> */}
			</div>
			<div id="preloader"></div>
		</div>
	);
}

export default LoadingScreen;
