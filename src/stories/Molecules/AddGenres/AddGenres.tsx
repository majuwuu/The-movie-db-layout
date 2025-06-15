import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import TagItem from "../../Atoms/TagItem";
import PlusIcon from "../../Atoms/PlusIcon";
import { AddGenresProps } from "../../../types/molecules";

const AddGenres: React.FC<AddGenresProps> = ({ category }) => {
	return (
		<div className=" w-full h-full px-6 lg:px-12.5 lg:pb-6  ">
			<div className=" py-5 gap-2 flex items-center">
				<div className="pt-1 h-4">
					<PlusIcon />
				</div>
				<PrimaryText
					size={"11px"}
					label="Add your favourite genres"
					weigth="thin"
				/>
			</div>
			<div className="flex flex-wrap gap-5 w-58 pb-4.5 ">
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
