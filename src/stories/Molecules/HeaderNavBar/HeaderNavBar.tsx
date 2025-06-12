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
		 lg:gap-13 py-4 px-6 cursor-pointer lg:ml-[260px]">
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
						<div className="absolute -bottom-9 mt-1 transition-all duration-100 ease-in-out">
							<Caret />
						</div>
					)}
				</div>
			))}
		</nav>
	);
};

export default HeaderNavBar;
