import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import StarItem from "../../Atoms/StarItem";
import { RatedProps } from "../../../types/molecules";

const Rated = ({ rate }: RatedProps) => {
	return (
		<div className="flex items-center w-full h-full ">
			<div className="w-2.5 mt-2 mb-5  mx-0.5">
				<StarItem />
			</div>
			<div className="mb-5 ">
				<PrimaryText size="10px" weigth="normal" label={rate} />
			</div>
		</div>
	);
};

export default Rated;
