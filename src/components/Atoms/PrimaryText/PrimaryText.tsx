import React from "react";
import "../../../tailwind.css";

export interface PrimaryTextProps {
	label: string;
	size: "10px" | "11px" | "12px" | "13px" | "14px" | "18px";
	weigth: "bold" | "normal" | "light" | "medium" | "semibold" | "thin";
	color?: "#606265";
}

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
