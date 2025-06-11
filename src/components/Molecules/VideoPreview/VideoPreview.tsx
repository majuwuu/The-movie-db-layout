import "../../../tailwind.css";
import PreviewCard from "../../Atoms/PreviewCard";
import CardDescription from "../CardDescription";

export interface CardDescriptionProps {
	title: string;
	country: string;
	link: string;
	timeAgo: string;
	duration: string;
	views: string;
	imageSrc: string;
}

const VideoPreview: React.FC<CardDescriptionProps> = ({
	title,
	country,
	link,
	timeAgo,
	duration,
	views,
	imageSrc,
}) => {
	return (
		<div className="w-full relative bg-black">
			<div className="h-[150px] w-full bg-red-400">
				<PreviewCard imageSrc={imageSrc} />
			</div>
			<div className="absolute left-0 bottom-0 w-full">
				<CardDescription
					title={title}
					country={country}
					link={link}
					timeAgo={timeAgo}
					duration={duration}
				/>
			</div>
		</div>
	);
};

export default VideoPreview;
