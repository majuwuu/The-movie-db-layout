import React from "react";
import "../../../tailwind.css";
import { TagItemProps } from "../../../types/atoms";

const TagItem: React.FC<TagItemProps> = ({ label, color }) => {
	return (
		<div className="rounded-sm">
			<p
				style={{ backgroundColor: color }}
				className={` text-[10px] py-1 px-2.5 rounded-[20px] text-[#2C383B] w-min whitespace-nowrap `}>
				{label}
			</p>
		</div>
	);
};
export default TagItem;
