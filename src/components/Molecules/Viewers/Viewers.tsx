import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import TagItem from "../../Atoms/TagItem";
import PlusIcon from "../../Atoms/PlusIcon";
import ViewItem from "../../Atoms/ViewItem";

export interface ViewersProps {
	viewers: string;
}

const Viewers: React.FC<ViewersProps> = ({ viewers }) => {
	return (
		<div className="flex items-center w-full h-full ">
			<div className="w-2.5 mt-1 mx-2">
				<ViewItem />
			</div>
			<div>
				<PrimaryText size="10px" weigth="normal" label={viewers} />
			</div>
		</div>
	);
};

export default Viewers;
