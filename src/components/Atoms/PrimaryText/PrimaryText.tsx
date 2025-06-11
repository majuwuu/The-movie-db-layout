import React from "react";

export interface PrimaryTextProps {
	label: string;
	size: "10px" | "11px" | "12px" | "13px";
	weigth: "bold" | "normal" | "light" | "medium" | "semibold" | "thin";
}

const PrimaryText: React.FC<PrimaryTextProps> = ({ label, size, weigth }) => {
	return (
		<div>
			<span
				style={{
					fontSize: size,
					fontFamily: "quicksand, sans-serif",
				}}
				className={` text-white whitespace-nowrap font-${weigth}`}>
				{label}
			</span>
		</div>
	);
};
export default PrimaryText;
