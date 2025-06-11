import React from "react";
import "../../../tailwind.css";
import HeaderUtilities from "../../Molecules/HeaderUtilities";
import HeaderNavBar from "../../Molecules/HeaderNavBar";
import VideoPreview from "../../Molecules/VideoPreview";

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
		<aside className="bg-[#17171B] min-h-24 flex flex-col m-0 p-0">
			{videos.map((video, idx) => (
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
			))}
		</aside>
	);
};

export default Sidebar;
