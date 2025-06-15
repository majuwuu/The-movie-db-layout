import React, { useState } from "react";
import "../../../tailwind.css";
import SearchItem from "../../Atoms/SearchItem";
import NotificationItem from "../../Atoms/NotificationItem";
import SettingsItem from "../../Atoms/SettingsItem";
import ProfileComponent from "../ProfileComponent";
import { HeaderUtilitiesProps } from "../../../types/molecules";

const HeaderUtilities: React.FC<HeaderUtilitiesProps> = ({ userData }) => {
	return (
		<nav className="bg-[#17171B] w-min flex relative gap-5.5 pt-10.5 px-6 cursor-pointer">
			<SearchItem />
			<NotificationItem />
			<SettingsItem />
			<ProfileComponent imageSrc={userData[0].imageSrc} />
		</nav>
	);
};

export default HeaderUtilities;
