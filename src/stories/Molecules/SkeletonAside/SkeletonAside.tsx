import React, { useState } from "react";
import SkeletonLoader from "../../Atoms/SkeletonLoader";
import "../../../tailwind.css";

const SkeletonAside = () => {
	return (
		<>
			<div className="-full lg:w-[402px] lg:h-[170px]">
				<SkeletonLoader />
			</div>
			<div className="-full lg:w-[402px] lg:h-[170px]">
				<SkeletonLoader />
			</div>
		</>
	);
};

export default SkeletonAside;
