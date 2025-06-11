import React from "react";
import "../../../tailwind.css";

export interface PreviewCard {
	src: string;
}

const PreviewCard: React.FC<PreviewCard> = ({ src }) => {
	return (
		<div className="xl:max-w-[294px] sm:max-w-full h-full rounded-[20px] overflow-hidden shadow-lg">
			<img src={src}></img>
		</div>
	);
};
export default PreviewCard;
