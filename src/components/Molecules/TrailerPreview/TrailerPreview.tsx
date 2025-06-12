import "../../../tailwind.css";
import PreviewCard from "../../Atoms/PreviewCard";
import CardDescription from "../CardDescription/CardDescription";
import Viewers from "../../Molecules/Viewers";
import TrendingTag from "../TrendingTag";
import CurrentViewers from "../CurrentViewers";
import WatchNowButton from "../WatchNowButton";
import { useState } from "react";

export interface CardDescriptionProps {
	title: string;
	secondaryTitle: string;
	link: string;
	thirdTitle?: string;
	duration: string;
	views?: string;
	stars?: string;
	currentViewers?: {
		imageSrc: string;
		id: string;
	}[];
	trend?: boolean;
	imageSrc: string;
	description?: string;
	genre?: string;
}

const TrailerPreview: React.FC<CardDescriptionProps> = ({
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
			<div>
				{title === "" && (
					<div className="absolute cursor-pointer bottom-0 left-0 ml-6 mb-4">
						<WatchNowButton />
					</div>
				)}
				{currentViewers?.length && (
					<div className="absolute top-0 left-0 ml-6 mt-4">
						<CurrentViewers currentViewers={currentViewers} />
					</div>
				)}
				{trend && (
					<div className="absolute top-0 left-0 ml-6 mt-4">
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
