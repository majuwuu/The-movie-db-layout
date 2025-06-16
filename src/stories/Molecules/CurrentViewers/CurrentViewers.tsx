import React from "react";
import "../../../tailwind.css";
import TagItem from "../../Atoms/TagItem";
import ImageBubble from "../../Atoms/ImageBubble";
import PrimaryText from "../../Atoms/PrimaryText";
import { CurrentViewersProps } from "../../../types/molecules";

const CurrentViewers = ({ currentViewers }: CurrentViewersProps) => {
	return (
		<div className="w-full flex items-center h-full">
			<div key={currentViewers[0].id}>
				<ImageBubble>
					<img src={currentViewers[0].imageSrc} />
				</ImageBubble>
			</div>
			<div className="-ml-3 mr-3" key={currentViewers[1].id}>
				<ImageBubble>
					<img src={currentViewers[1].imageSrc} />
				</ImageBubble>
			</div>
			<div className="-mt-1">
				<PrimaryText
					size="10px"
					weigth="normal"
					label={`${currentViewers.length}+ friends are watching`}
				/>
			</div>
		</div>
	);
};

export default CurrentViewers;
