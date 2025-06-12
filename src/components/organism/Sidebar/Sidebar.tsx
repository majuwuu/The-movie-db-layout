import React from "react";
import "../../../tailwind.css";
import TrailerPreview from "../../Molecules/TrailerPreview";
import PrimaryText from "../../Atoms/PrimaryText";
import FavouriteGenres from "../../Molecules/FavouriteGenres";
import AddGenres from "../../Molecules/AddGenres";
import SortBy from "../../Molecules/SortBy";

export interface SidebarProps {
	videos: {
		title: string;
		secondaryTitle: string;
		link: string;
		thirdTitle: string;
		duration: string;
		views: string;
		imageSrc: string;
		description?: string;
		genre?: string;
	}[];

	category: {
		allCategories: string[];
		favouriteCategorie: string[];
	};
}

const Sidebar: React.FC<SidebarProps> = ({ videos, category }) => {
	return (
		<aside className="bg-[#17171B] xl:w-[450px] lg:w-[450px] sm:w-full pt-8 items-center min-h-full flex flex-col m-0 p-0 border-r border-[#323232]">
			<div className="flex w-full justify-between items-center px-10 ">
				<PrimaryText size={"18px"} label="New trailers" weigth="bold" />
				<div className="flex justify-between items-center w-auto -mr-10">
					<SortBy category={category} />
				</div>
			</div>
			{videos.map((video, idx) => (
				<div className="m-3 w-[370px] rounded-3xl overflow-hidden">
					<TrailerPreview
						key={idx}
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
			<div className="w-full">
				<FavouriteGenres category={category} />
				<AddGenres category={category} />
			</div>
		</aside>
	);
};

export default Sidebar;
