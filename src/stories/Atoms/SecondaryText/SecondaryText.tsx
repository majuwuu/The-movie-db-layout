import React from "react";
import "../../../tailwind.css";
import { SecondaryText } from "../../../types/atoms";

const SecondaryText: React.FC<SecondaryText> = ({ label, size, weigth }) => {
	return (
		<div>
			<span
				style={{
					fontSize: size,
					fontFamily: "quicksand, sans-serif",
				}}
				className={` text-[#606265] font-normal`}>
				{label}
			</span>
		</div>
	);
};
export default SecondaryText;
