import React, { useState } from "react";
import SkeletonLoader from "../../Atoms/SkeletonLoader";
import "../../../tailwind.css";

const SkeletonPopularLoader = () => {
	return (
		<>
			<div className="w-full lg:w-[258px] lg:h-[139px]">
				<SkeletonLoader />
			</div>
			<div className="w-full lg:w-[258px] lg:h-[139px]">
				<SkeletonLoader />
			</div>
			<div className="w-full lg:w-[258px] lg:h-[139px]">
				<SkeletonLoader />
			</div>
		</>
	);
};

export default SkeletonPopularLoader;
