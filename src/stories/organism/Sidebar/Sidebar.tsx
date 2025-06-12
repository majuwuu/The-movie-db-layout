import React from "react";
import "../../../tailwind.css";
import TrailerPreview from "../../Molecules/TrailerPreview";
import PrimaryText from "../../Atoms/PrimaryText";
import FavouriteGenres from "../../Molecules/FavouriteGenres";
import AddGenres from "../../Molecules/AddGenres";
import SortBy from "../../Molecules/SortBy";
import PlayItem from "../../Atoms/PlayItem";
import { SidebarProps } from "../../../types/organism";

const Sidebar: React.FC<SidebarProps> = ({ videos, category }) => {
	return (
		<aside className="bg-[#17171B] relative w-full lg:w-[450px] pt-8 items-center min-h-screen flex flex-col m-0 p-0 border-r border-[#323232]">
			<div className="flex w-full justify-between items-center px-6 sm:px-10 mb-4 whitespace-nowrap">
				<PrimaryText size={"18px"} label="New trailers" weigth="bold" />
				<div className="flex justify-between items-center w-auto">
					<SortBy category={category} />
				</div>
			</div>

			<div className="flex flex-col gap-6 w-full items-center px-4 sm:px-6">
				{videos.map((video, idx) => (
					<div
						key={idx}
						className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-3xl overflow-hidden">
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

			<div className="w-full mt-8">
				<FavouriteGenres category={category} />
				<AddGenres category={category} />
			</div>
			<div className="absolute top-1/12 -right-4.5 transform rotate-180 w-7 hidden lg:block">
				<PlayItem />
			</div>
		</aside>
	);
};

export default Sidebar;
