import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import PlayItem from "../../Atoms/PlayItem";
import TagItem from "../../Atoms/TagItem";
import Rated from "../Rated";

export interface CardDescriptionProps {
	title: string;
	secondaryTitle: string;
	link: string;
	thirdTitle?: string;
	duration: string;
	stars?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({
	title,
	secondaryTitle,
	link,
	thirdTitle,
	duration,
	stars,
}) => {
	return (
		<div
			className="w-full  pt-4 pb-1
			rounded-b-xl rounded-t-xl backdrop-blur-[5px] bg-black/70 
		 relative
		 cursor-pointer
		 ">
			<div
				className="absolute w-full 
			h-full z-0 text-white "
			/>
			<div className="flex bg-red-40 justify-between px-2 items-center relative z-10">
				<div className="flex">
					<div className=" w-7 h-12 flex flex-col justify-start mx-2">
						<PlayItem />
					</div>
					<div className="flex -mt-1 ml-1 flex-col leading-[16px]">
						<div title={title}>
							<PrimaryText size={"11px"} weigth={"bold"} label={title} />
						</div>
						<PrimaryText size={"10px"} weigth={"thin"} label={secondaryTitle} />
						{thirdTitle && (
							<PrimaryText size={"10px"} weigth={"thin"} label={thirdTitle} />
						)}
					</div>
				</div>
				<div className="flex">
					<div className="w-1 h-8 mr-4 bg-gradient-to-b from-white/10 backdrop-blur-xl via-white/80 to-white/10"></div>
					<div className="mr-2">
						{stars ? (
							<Rated rate={stars} />
						) : (
							<TagItem label={duration} color="#FFFFFF" />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardDescription;
