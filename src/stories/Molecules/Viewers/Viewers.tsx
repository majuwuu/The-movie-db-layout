import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import ViewItem from "../../Atoms/ViewItem";
import { ViewersProps } from "../../../types/molecules";

const Viewers: React.FC<ViewersProps> = ({ viewers }) => {
	return (
		<div className="flex items-center w-full h-full ">
			<div className="w-2.5 mt-1 mx-2">
				<ViewItem />
			</div>
			<div>
				<PrimaryText size="10px" weigth="normal" label={viewers} />
			</div>
		</div>
	);
};

export default Viewers;
