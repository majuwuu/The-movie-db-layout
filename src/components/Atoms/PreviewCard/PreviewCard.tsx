import React from "react";
import "../../../tailwind.css";

export interface PreviewCard {
	imageSrc: string;
}

const PreviewCard: React.FC<PreviewCard> = ({ imageSrc }) => {
	return (
		<div className="w-full h-full overflow-hidden shadow-lg">
			<img className="w-full" src={imageSrc}></img>
		</div>
	);
};
export default PreviewCard;
