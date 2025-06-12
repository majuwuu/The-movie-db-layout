import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import PlayItem from "../../Atoms/PlayItem";
import TagItem from "../../Atoms/TagItem";
import Rated from "../Rated";

export interface CardDescriptionProps {
	title: string;
	country: string;
	link: string;
	timeAgo: string;
	duration: string;
	stars?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({
	title,
	country,
	link,
	timeAgo,
	duration,
	stars,
}) => {
	return (
		<div
			className="w-full  h-20 pt-4
			rounded-b-xl rounded-t-xl backdrop-blur-[5px] bg-black/70 p-4 
		 relative">
			<div
				className="absolute w-full 
			h-full z-0 text-white "
			/>
			<div className="flex bg-red-40 justify-between px-2 items-center relative z-10">
				<div className="flex">
					<div className=" w-8 h-12 flex flex-col justify-start mx-2">
						<PlayItem />
					</div>
					<div className="flex -mt-1 ml-4 flex-col leading-[16px]">
						<PrimaryText size={"11px"} weigth={"bold"} label={title} />
						<PrimaryText size={"10px"} weigth={"thin"} label={country} />
						<PrimaryText size={"10px"} weigth={"thin"} label={timeAgo} />
					</div>
				</div>
				<div className="flex">
					<div className="w-1 h-8 mr-4 bg-gradient-to-b from-white/10 backdrop-blur-xl via-white/80 to-white/10"></div>
					{stars ? (
						<Rated rate={stars} />
					) : (
						<TagItem label={duration} color="#FFFFFF" />
					)}
				</div>
			</div>
		</div>
	);
};

export default CardDescription;
