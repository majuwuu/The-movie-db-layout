import React from "react";
import "../../../tailwind.css";

export interface TagItem {
	label: string;
	color: "#F36F45" | "#8769FF" | "#61D1EA" | "#FFFFFF";
}

const TagItem: React.FC<TagItem> = ({ label, color }) => {
	return (
		<div className="rounded-sm">
			<p
				style={{ backgroundColor: color }}
				className={` text-[10px] py-1  px-3 rounded-[20px] text-[#2C383B] w-min whitespace-nowrap `}>
				{label}
			</p>
		</div>
	);
};
export default TagItem;
