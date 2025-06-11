import React, { useState } from "react";
import "../../../tailwind.css";
import SearchItem from "../../Atoms/SearchItem";
import NotificationItem from "../../Atoms/NotificationItem";
import SettingsItem from "../../Atoms/SettingsItem";
import ProfileComponent from "../ProfileComponent";

export interface HeaderUtilities {
	src: string;
}

const HeaderUtilities: React.FC<HeaderUtilities> = ({ src = "/" }) => {
	return (
		<nav className="bg-[#17171B] w-min flex relative space-x-6 py-4 px-6 cursor-pointer">
			<SearchItem />
			<NotificationItem />
			<SettingsItem />
			<ProfileComponent src={src} />
		</nav>
	);
};

export default HeaderUtilities;
