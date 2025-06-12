import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import TagItem from "../../Atoms/TagItem";
import PlusIcon from "../../Atoms/PlusIcon";
import { AddGenresProps } from "../../../types/molecules";

const AddGenres: React.FC<AddGenresProps> = ({ category }) => {
	return (
		<div className="bg-[#1E1E21] w-full h-full px-6 lg:px-12  ">
			<div className="pb-6 gap-1 flex items-center">
				<PlusIcon />
				<PrimaryText
					size={"11px"}
					label="Add your favourite genres"
					weigth="thin"
				/>
			</div>
			<div className="flex flex-wrap gap-5 w-58 pb-8 ">
				{category.favouriteCategorie.map((genre: string, idx: number) => (
					<div className="cursor-pointer">
						<TagItem key={idx} label={genre} color={"#FFFFFF"} />
					</div>
				))}
			</div>
		</div>
	);
};

export default AddGenres;
