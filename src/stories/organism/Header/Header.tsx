import React, { useState } from "react";
import "../../../tailwind.css";
import HeaderUtilities from "../../Molecules/HeaderUtilities";
import { HeaderProps } from "../../../types/organism";
import HeaderNavBar from "../../Molecules/HeaderNavBar";
import "./Header.css";

const Header = ({ navItems, userData }: HeaderProps) => {
	return (
		<header className="header-gradient-border bg-primary-gray lg:pl-[40px] flex flex-col-reverse md:flex-row justify-between min-h-22 p-1 xl:p-4 ">
			<div className="w-full md:w-auto mb-6 md:mb-0 flex justify-center md:justify-start">
				<HeaderNavBar navItems={navItems} />
			</div>
			<div className="w-full md:w-auto flex justify-center md:justify-end">
				<HeaderUtilities userData={userData} />
			</div>
		</header>
	);
};

export default Header;
