import "../../../tailwind.css";
import PreviewCard from "../../Atoms/PreviewCard";
import CardDescription from "../CardDescription/CardDescription";
import Viewers from "../../Molecules/Viewers";

export interface CardDescriptionProps {
	title: string;
	country: string;
	link: string;
	timeAgo: string;
	duration: string;
	views?: string;
	stars?: string;
	currentViewers?: {
		imageSrc1: string;
		imageSrc2: string;
	}[];
	trend?: boolean;
	imageSrc: string;
}

const TrailerPreview: React.FC<CardDescriptionProps> = ({
	title,
	country,
	link,
	timeAgo,
	duration,
	imageSrc,
	views,
	stars,
	currentViewers,
	trend,
}) => {
	return (
		<div className="w-full relative overflow-hidden ">
			<div>
				{currentViewers && <></>}
				{trend && <></>}
				{views && (
					<div className="absolute top-0 right-0 mx-2">
						<Viewers viewers={views} />
					</div>
				)}
				<PreviewCard imageSrc={imageSrc} />
			</div>
			<div className="absolute left-0 bottom-0 w-full">
				<CardDescription
					title={title}
					country={country}
					link={link}
					timeAgo={timeAgo}
					duration={duration}
					stars={stars}
				/>
			</div>
		</div>
	);
};

export default TrailerPreview;
