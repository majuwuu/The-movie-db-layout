import React from "react";
import "../../../tailwind.css";

export interface TagItem {
	label: string;
	color: "#F36F45" | "#8769FF" | "#61D1EA";
}

const TagItem: React.FC<TagItem> = ({ label, color }) => {
	return (
		<div className="rounded-sm">
			<p
				style={{ backgroundColor: color }}
				className={` text-[10px] py-1 p-2 rounded-[20px] text-white w-min whitespace-nowrap `}>
				{label}
			</p>
		</div>
	);
};
export default TagItem;
