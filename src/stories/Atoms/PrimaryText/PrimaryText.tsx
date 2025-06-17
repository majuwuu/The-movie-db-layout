import React from "react";
import "../../../tailwind.css";
import { PrimaryTextProps } from "../../../types/atoms";

const PrimaryText = ({ label, size, weigth, color }: PrimaryTextProps) => {
	return (
		<div className="m-0 p-0">
			<span
				style={{
					fontSize: size,
					fontFamily: "quicksand, sans-serif",
					fontWeight: weigth,
					color: color ? `var(${color})` : "#fff",
				}}
				className={`m-0 p-0 select-none text-white`}>
				{label}
			</span>
		</div>
	);
};
export default PrimaryText;
