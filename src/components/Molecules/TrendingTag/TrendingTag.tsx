import React, { useState } from "react";
import "../../../tailwind.css";
import TagItem from "../../Atoms/TagItem";

const TrendingTag: React.FC = () => {
	return (
		<div className=" w-full h-full ">
			<TagItem label={"#1 Trending 🔥"} color="#FFFFFF" />
		</div>
	);
};

export default TrendingTag;
