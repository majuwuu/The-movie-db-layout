// PreviewCard.tsx
import React, { useState } from "react";
import PrimaryText from "../PrimaryText";

export interface PreviewCardProps {
	imageSrc: string;
	title?: string;
	description?: string;
	genre?: string;
	onHoverChange?: (hovering: boolean) => void;
}

const PreviewCard: React.FC<PreviewCardProps> = ({
	imageSrc,
	title,
	description,
	onHoverChange,
	genre,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
		onHoverChange?.(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		onHoverChange?.(false);
	};

	return (
		<div
			className="relative w-full h-full overflow-hidden rounded-[20px] shadow-lg"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<img
				className="w-full h-full object-cover"
				src={imageSrc}
				alt="Preview"
			/>

			{isHovered && description && (
				<div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
					<div className="pt-3 pl-3 ">
						<PrimaryText size={"14px"} weigth="bold" label={title ?? ""} />
						<PrimaryText size={"10px"} weigth="normal" label={genre ?? ""} />
						<PrimaryText
							size={"12px"}
							weigth="normal"
							label={description ?? ""}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default PreviewCard;
