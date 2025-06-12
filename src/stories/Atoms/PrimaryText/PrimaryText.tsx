import React from "react";
import "../../../tailwind.css";
import { PrimaryTextProps } from "../../../types/atoms";

const PrimaryText: React.FC<PrimaryTextProps> = ({
	label,
	size,
	weigth,
	color,
}) => {
	return (
		<div className="m-0 p-0">
			<span
				style={{
					fontSize: size,
					fontFamily: "quicksand, sans-serif",
					fontWeight: weigth,
					color: color ? color : "#fff",
				}}
				className={`m-0 p-0 select-none text-white `}>
				{label}
			</span>
		</div>
	);
};
export default PrimaryText;
