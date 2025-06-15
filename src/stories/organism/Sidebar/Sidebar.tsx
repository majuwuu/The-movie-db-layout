import React from "react";
import "../../../tailwind.css";
import TrailerPreview from "../../Molecules/TrailerPreview";
import PrimaryText from "../../Atoms/PrimaryText";
import FavouriteGenres from "../../Molecules/FavouriteGenres";
import AddGenres from "../../Molecules/AddGenres";
import SortBy from "../../Molecules/SortBy";
import PlayItem from "../../Atoms/PlayItem";
import { SidebarProps } from "../../../types/organism";

const Sidebar: React.FC<SidebarProps> = ({
	videos,
	category,
	onCloseSideBar,
}) => {
	return (
		<aside className="bg-[#17171B] relative w-full lg:w-[450px] pt-8.5  items-center xs:min-h-screen flex flex-col m-0 p-0 border-r border-[#323232]">
			<div className="flex w-full justify-between items-center px-6  lg:px-12.5 sm:px-6 whitespace-nowrap">
				<PrimaryText size={"18px"} label="New trailers" weigth="bold" />
				<div className="flex justify-between items-center w-auto">
					<SortBy category={category} />
				</div>
			</div>

			<div className="flex flex-col pt-5.5 pb-5 sm:px-6.5 gap-5.5 w-full items-center ">
				{videos.map((video, idx) => (
					<div
						key={idx}
						className="w-full max-h-[150px]  px-6 max-w-sm sm:max-w-md md:max-w-lg rounded-3xl overflow-hidden">
						<TrailerPreview
							title={video.title}
							secondaryTitle={video.secondaryTitle}
							link={video.link}
							thirdTitle={video.thirdTitle}
							duration={video.duration}
							views={video.views}
							imageSrc={video.imageSrc}
							genre={video.genre}
							description={video.description}
						/>
					</div>
				))}
			</div>

			<div className=" bg-[#1E1E21] w-full">
				<FavouriteGenres category={category} />
				<AddGenres category={category} />
			</div>
			<div
				className="absolute cursor-pointer right-0 xs:-top-4 lg:top-1/12  lg:-right-4.5 transform rotate-180 w-7 lg:block"
				onClick={onCloseSideBar}>
				<PlayItem />
			</div>
		</aside>
	);
};

export default Sidebar;
