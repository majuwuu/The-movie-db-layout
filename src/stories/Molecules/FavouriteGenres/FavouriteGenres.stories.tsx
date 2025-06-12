import type { Meta, StoryObj } from "@storybook/react";
import FavouriteGenres from "./index";

const meta: Meta<typeof FavouriteGenres> = {
	component: FavouriteGenres,
	title: "Molecules/FavouriteGenres",
};

export default meta;

export const Default: StoryObj<typeof FavouriteGenres> = {
	args: {
		category: {
			allCategories: ["Action", "Western", "Adventures", "Drama", "Sci-Fi"],
			favouriteCategorie: ["Crime", "Comedy", "Thriller"],
		},
	},
};
