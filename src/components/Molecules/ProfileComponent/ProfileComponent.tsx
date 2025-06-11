import React, { useState } from "react";
import "../../../tailwind.css";
import CaretDown from "../../Atoms/CaretDown/CaretDown";
import ImageBubble from "../../Atoms/ImageBubble";

interface ProfileComponentProps {
	src: string;
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({ src = "/" }) => {
	return (
		<div
			className="bg-[#17171B] w-9 h-5 flex cursor-pointer justify-between
		 items-center">
			<ImageBubble>
				<img src={src} alt="Profile Picture" />
			</ImageBubble>
			<div className="">
				<CaretDown />
			</div>
		</div>
	);
};

export default ProfileComponent;
