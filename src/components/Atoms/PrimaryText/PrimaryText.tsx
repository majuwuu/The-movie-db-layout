import React from "react";

export interface PrimaryTextProps {
	label: string;
	size: "10px" | "11px" | "12px" | "13px" | "18px";
	weigth: "bold" | "normal" | "light" | "medium" | "semibold" | "thin";
}

const PrimaryText: React.FC<PrimaryTextProps> = ({ label, size, weigth }) => {
	return (
		<div className="m-0 p-0">
			<span
				style={{
					fontSize: size,
					fontFamily: "quicksand, sans-serif",
					fontWeight: weigth,
				}}
				className={`m-0 p-0 text-white whitespace-nowrap`}>
				{label}
			</span>
		</div>
	);
};
export default PrimaryText;
