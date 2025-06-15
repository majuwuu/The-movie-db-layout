import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import Caret from "../../Atoms/Caret";
import "../../../tailwind.css";

export interface HeaderNavBarProps {
	navItems: {
		title: string;
		link: string;
	}[];
}

const HeaderNavBar: React.FC<HeaderNavBarProps> = ({ navItems }) => {
	const [activeItem, setActiveItem] = useState("Movies");

	return (
		<nav
			className="bg-[#17171B] w-min flex relative gap-2
		 lg:gap-15 pt-9.5 px-6 cursor-pointer lg:ml-[226px]">
			{navItems.map((item) => (
				<div
					key={item.title}
					className="relative bg-red flex flex-col items-center"
					onClick={() => setActiveItem(item.title)}>
					<a className=" whitespace-nowrap">
						<PrimaryText
							label={item.title}
							size="12px"
							weigth={item.title === activeItem ? "bold" : "normal"}
							color={item.title !== activeItem ? "#606265" : undefined}
						/>
					</a>
					{item.title === activeItem && (
						<div className="absolute -bottom-7 sm:-bottom-2 sm:pb-1 xl:-bottom-5  transition-all duration-100 ease-in-out">
							<Caret />
						</div>
					)}
				</div>
			))}
		</nav>
	);
};

export default HeaderNavBar;
