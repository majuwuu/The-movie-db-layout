import "../../../tailwind.css";
import PreviewCard from "../../Atoms/PreviewCard";
import CardDescription from "../CardDescription/CardDescription";
import Viewers from "../../Molecules/Viewers";
import TrendingTag from "../TrendingTag";
import CurrentViewers from "../CurrentViewers";
import WatchNowButton from "../WatchNowButton";
import { useState } from "react";
import { VideoCardDescriptionProps } from "../../../types/molecules";

const TrailerPreview: React.FC<VideoCardDescriptionProps> = ({
	title,
	secondaryTitle,
	link,
	thirdTitle,
	duration,
	imageSrc,
	views,
	stars,
	currentViewers,
	trend,
	description,
	genre,
}) => {
	const [isHovering, setIsHovering] = useState(false);

	return (
		<div className="w-full h-full relative rounded-[20px] overflow-hidden">
			<div className="relative">
				{currentViewers?.length && !trend && (
					<div className="absolute top-2 left-0 mx-2">
						<CurrentViewers currentViewers={currentViewers} />
					</div>
				)}
				{title === "" && (
					<div className="absolute cursor-pointer -bottom-22 lg:-bottom-24  w-full h-full left-0 ml-6">
						<WatchNowButton />
					</div>
				)}
				{trend && (
					<div className="absolute top-2 lg:-bottom-24  left-0 ml-2">
						<TrendingTag />
					</div>
				)}
				{views && (
					<div className="absolute top-0 right-0 mx-2">
						<Viewers viewers={views} />
					</div>
				)}
				<PreviewCard
					imageSrc={imageSrc}
					title={title}
					description={description}
					genre={genre}
					onHoverChange={(hovering) => {
						if (description) {
							setIsHovering(hovering);
						}
					}}
				/>
			</div>
			<div className="absolute left-0 bottom-0 w-full">
				{title && !isHovering && (
					<div
						className={`absolute left-0 bottom-0 w-full transition-opacity duration-300 ${
							isHovering ? "opacity-0 pointer-events-none" : "opacity-100"
						}`}>
						<CardDescription
							title={title}
							secondaryTitle={secondaryTitle}
							link={link}
							thirdTitle={thirdTitle}
							duration={duration}
							stars={stars}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default TrailerPreview;
