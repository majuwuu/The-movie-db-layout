import React from "react";
import "../../../tailwind.css";
import HeaderUtilities from "../../Molecules/HeaderUtilities";
import HeaderNavBar from "../../Molecules/HeaderNavBar";
import VideoPreview from "../../Molecules/VideoPreview";
import PrimaryText from "../../Atoms/PrimaryText";

export interface SidebarProps {
	videos: {
		title: string;
		country: string;
		link: string;
		timeAgo: string;
		duration: string;
		views: string;
		imageSrc: string;
	}[];
}

const Sidebar: React.FC<SidebarProps> = ({ videos }) => {
	return (
		<aside className="bg-[#17171B] w-1/4 px-14 pt-8 pb-6 items-center min-h-full flex flex-col m-0 p-0">
			<div className="flex   w-full justify-start">
				<PrimaryText size={"18px"} label="New trailers" weigth="bold" />
			</div>
			{videos.map((video, idx) => (
				<div className="m-3 w-[370px] rounded-3xl overflow-hidden">
					{/* deberia llamarse trailer preview */}
					<VideoPreview
						key={idx}
						title={video.title}
						country={video.country}
						link={video.link}
						timeAgo={video.timeAgo}
						duration={video.duration}
						views={video.views}
						imageSrc={video.imageSrc}
					/>
				</div>
			))}
		</aside>
	);
};

export default Sidebar;
