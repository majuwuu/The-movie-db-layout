import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import PlayItem from "../../Atoms/PlayItem";
import TagItem from "../../Atoms/TagItem";
import Rated from "../Rated";
import { CardDescriptionProps } from "../../../types/molecules";

const CardDescription = ({
	title,
	secondaryTitle,
	link,
	thirdTitle,
	duration,
	stars,
}: CardDescriptionProps) => {
	return (
		<div
			className="w-full bg-black/40 minx-h-[60px]
			rounded-b-xl rounded-t-xl backdrop-blur-[5px] 
		 relative
		 cursor-pointer
		 ">
			<div
				className="absolute w-full 
			h-full z-0 text-white "
			/>
			<div className="flex  justify-between px-4.5 items-center  relative z-10">
				<div className="flex pt-3">
					<div className=" w-7 h-12 flex flex-col justify-start mx-2">
						<PlayItem />
					</div>
					<div className="flex -mt-1 ml-1 flex-col leading-[13px]">
						<div title={title}>
							<PrimaryText size={"11px"} weigth={"bold"} label={title} />
						</div>
						<PrimaryText size={"10px"} weigth={"thin"} label={secondaryTitle} />
						{thirdTitle && (
							<PrimaryText size={"10px"} weigth={"thin"} label={thirdTitle} />
						)}
					</div>
				</div>
				<div className="flex ">
					<div className="w-1 h-8 mr-4 bg-gradient-to-b from-white/20 backdrop-blur-xl via-white/50 to-white/20"></div>
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
