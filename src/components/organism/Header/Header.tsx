import React, { useState } from "react";
import "../../../tailwind.css";
import HeaderUtilities from "../../Molecules/HeaderUtilities";
import HeaderNavBar from "../../Molecules/HeaderNavBar";
export interface HeaderNavBarProps {
	navItems: {
		title: string;
		link: string;
	}[];
	userData: {
		name: string;
		imageSrc: string;
	}[];
}
const Header: React.FC<HeaderNavBarProps> = ({ navItems, userData }) => {
	return (
		<header className="bg-[#17171B] min-h-24 flex m-0 p-0 items-center border-b border-[#323232]">
			<div className="flex w-[60%] justify-center">
				<HeaderNavBar navItems={navItems} />
			</div>
			<div className="w-full flex justify-end pr-4">
				<HeaderUtilities userData={userData} />
			</div>
		</header>
	);
};

export default Header;
