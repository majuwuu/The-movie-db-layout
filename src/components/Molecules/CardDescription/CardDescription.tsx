import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import PlayItem from "../../Atoms/PlayItem";
import TagItem from "../../Atoms/TagItem";

export interface CardDescriptionProps {
	title: string;
	country: string;
	link: string;
	timeAgo: string;
	duration: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({
	title,
	country,
	link,
	timeAgo,
	duration,
}) => {
	return (
		<div className="w-full  relative">
			<div
				className="absolute w-full 
			h-full z-0 rounded-b-lg rounded-t-lg backdrop-blur-[2px] bg-white/15 p-4 text-white "
			/>
			<div className="flex bg-red-40 justify-around items-center relative z-10">
				<PlayItem />
				<div className="flex flex-col  leading-[11px]">
					<PrimaryText size={"11px"} weigth={"bold"} label={title} />
					<PrimaryText size={"10px"} weigth={"thin"} label={country} />
					<PrimaryText size={"10px"} weigth={"thin"} label={timeAgo} />
				</div>
				<TagItem label={duration} color="#FFFFFF" />
			</div>
		</div>
	);
};

export default CardDescription;
