import React, { useState } from "react";
import "../../../tailwind.css";
import CaretDown from "../../Atoms/CaretDown/CaretDown";
import ImageBubble from "../../Atoms/ImageBubble";

import { ProfileComponentProps } from "../../../types/molecules";

const ProfileComponent = ({ imageSrc }: ProfileComponentProps) => {
	return (
		<div
			className="bg-primary-gray w-9 h-5 flex cursor-pointer justify-between
		 items-center">
			<ImageBubble>
				<img src={imageSrc} alt="Profile Picture" />
			</ImageBubble>
			<div className="">
				<CaretDown />
			</div>
		</div>
	);
};

export default ProfileComponent;
