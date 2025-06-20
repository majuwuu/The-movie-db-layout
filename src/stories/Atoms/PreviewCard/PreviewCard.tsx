// PreviewCard.tsx
import React, { useState } from "react";
import PrimaryText from "../PrimaryText";
import { PreviewCardProps } from "../../../types/atoms";

const PreviewCard = ({
	imageSrc,
	title,
	description,
	onHoverChange,
	genre,
}: PreviewCardProps) => {
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
			className="w-full h-full overflow-hidden rounded-[20px] shadow-lg"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<img
				className="w-full h-full max-h-[150px] object-cover"
				src={imageSrc}
				alt="Preview"
			/>

			{isHovered && description && (
				<div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
					<div className="py-5.5 px-6.5">
						<PrimaryText size={"14px"} weigth="bold" label={title ?? ""} />
						<PrimaryText size={"10px"} weigth="normal" label={genre ?? ""} />
						<div className="overflow-hidden text-ellipsis line-clamp-2 max-h-full">
							<PrimaryText
								size={"12px"}
								weigth="normal"
								label={description ?? ""}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PreviewCard;
