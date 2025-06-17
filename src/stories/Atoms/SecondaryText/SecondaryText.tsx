import React from "react";
import "../../../tailwind.css";
import { SecondaryTextProps } from "../../../types/atoms";

const SecondaryText = ({ label, size, weigth }: SecondaryTextProps) => {
	return (
		<div>
			<span
				style={{
					fontSize: size,
					fontFamily: "quicksand, sans-serif",
				}}
				className={` text-[--color-tertiary-gray] font-normal`}>
				{label}
			</span>
		</div>
	);
};
export default SecondaryText;
