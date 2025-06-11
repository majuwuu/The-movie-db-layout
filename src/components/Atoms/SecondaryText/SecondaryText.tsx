import React from "react";
import "../../../tailwind.css";

export interface SecondaryText {
	label: string;
	size: "10px" | "12px";
	weigth: "thin";
}

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
