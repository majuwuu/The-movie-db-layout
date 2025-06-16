import React, { useState } from "react";
import PrimaryText from "../../Atoms/PrimaryText";
import "../../../tailwind.css";
import TagItem from "../../Atoms/TagItem";
import { FavouriteGenresProps } from "../../../types/molecules";

const FavouriteGenres = ({ category }: FavouriteGenresProps) => {
	const tagColors = ["#F36F45", "#8769FF", "#61D1EA"] as const;
	let lastColor: (typeof tagColors)[number] | null = null;

	const getRandomColor = (): (typeof tagColors)[number] => {
		const filtered = tagColors.filter((c) => c !== lastColor);
		const color = filtered[Math.floor(Math.random() * filtered.length)];
		lastColor = color;
		return color;
	};
	return (
		<div className=" w-full px-6 lg:px-12.5 ">
			<div className="pb-7.5 pt-6">
				<PrimaryText size={"18px"} label="Favourite Genres" weigth="bold" />
			</div>
			<div className="flex flex-wrap gap-5 w-58  ">
				{category.allCategories.map((genre: string, idx: number) => (
					<div className="cursor-pointer">
						<TagItem key={idx} color={getRandomColor()} label={genre} />
					</div>
				))}
			</div>
		</div>
	);
};

export default FavouriteGenres;
