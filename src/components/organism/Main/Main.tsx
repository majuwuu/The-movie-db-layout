import React, { useState } from "react";
import "../../../tailwind.css";
import PrimaryText from "../../Atoms/PrimaryText";
import TrailerPreview from "../../Molecules/TrailerPreview";

export interface MainProps {
	videos: {
		title: string;
		timeAgo: string;
		country: "Test";
		link: "/";
		duration: "01:29";
		views: "2.3m";
		imageSrc: "/static/image_placeholder.jpg";
	};
}
const Main: React.FC<MainProps> = ({ videos }) => {
	return (
		<div className="bg-[#17171B] p-5">
			<div className=" pt-6 pb-8">
				<TrailerPreview
					title={videos.title}
					timeAgo={videos.timeAgo}
					country={videos.country}
					link={videos.link}
					duration={videos.duration}
					views={videos.views}
					imageSrc={videos.imageSrc}
				/>
			</div>
			<div className="flex flex-wrap ">
				<div className="py-4">
					<PrimaryText label="Continue watching" size="18px" weigth="bold" />
				</div>
				<div className="flex flex-row gap-6 ">
					<TrailerPreview
						title={videos.title}
						country={videos.country}
						link={videos.link}
						timeAgo={videos.timeAgo}
						duration={videos.duration}
						views={videos.views}
						imageSrc={videos.imageSrc}
					/>
					<TrailerPreview
						title={videos.title}
						country={videos.country}
						link={videos.link}
						timeAgo={videos.timeAgo}
						duration={videos.duration}
						views={videos.views}
						imageSrc={videos.imageSrc}
					/>
				</div>
			</div>
			<div className="flex flex-wrap">
				<div>
					<PrimaryText label="Continue watching" size="18px" weigth="bold" />
				</div>
				<div className="flex flex-row gap-6 py-4 ">
					<TrailerPreview
						title={videos.title}
						country={videos.country}
						link={videos.link}
						timeAgo={videos.timeAgo}
						duration={videos.duration}
						views={videos.views}
						imageSrc={videos.imageSrc}
					/>
					<TrailerPreview
						title={videos.title}
						country={videos.country}
						link={videos.link}
						timeAgo={videos.timeAgo}
						duration={videos.duration}
						views={videos.views}
						imageSrc={videos.imageSrc}
					/>
					<TrailerPreview
						title={videos.title}
						country={videos.country}
						link={videos.link}
						timeAgo={videos.timeAgo}
						duration={videos.duration}
						views={videos.views}
						imageSrc={videos.imageSrc}
					/>
				</div>
			</div>
		</div>
	);
};

export default Main;
