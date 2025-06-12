import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import StarItem from "../../Atoms/StarItem";
import { RatedProps } from "../../../types/molecules";

const Rated: React.FC<RatedProps> = ({ rate }) => {
	return (
		<div className="flex items-center w-full h-full ">
			<div className="w-2.5 mt-1 mx-2">
				<StarItem />
			</div>
			<div>
				<PrimaryText size="10px" weigth="normal" label={rate} />
			</div>
		</div>
	);
};

export default Rated;
