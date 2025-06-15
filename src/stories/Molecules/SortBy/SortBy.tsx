import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import CaretUpDown from "../../Atoms/CaretUpDown";
import { SortByProps } from "../../../types/molecules";

const SortBy: React.FC<SortByProps> = ({ category }) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState("Today");

	const handleSelect = (option: string) => {
		setSelected(option);
		setOpen(false);
	};

	return (
		<div
			className="flex w-full h-full items-center  relative cursor-pointer"
			onClick={() => setOpen((prev) => !prev)}>
			<PrimaryText label={"Sort by"} weigth={"normal"} size={"12px"} />
			<div className="ml-3.5 mr-1  relative">
				<PrimaryText
					label={selected}
					weigth={"normal"}
					size={"12px"}
					color="#606265"
				/>
				{open && (
					<div className="absolute left-0 mt-1 bg-white border rounded shadow z-10 min-w-full">
						{category.allCategories.map((option) => (
							<div
								key={option}
								className="px-4 py-2 hover:bg-gray-100 "
								onClick={() => handleSelect(option)}>
								{option}
							</div>
						))}
					</div>
				)}
			</div>
			<div className="pt-1">
				<CaretUpDown />
			</div>
		</div>
	);
};

export default SortBy;
