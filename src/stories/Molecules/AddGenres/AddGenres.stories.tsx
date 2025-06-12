import type { Meta, StoryObj } from "@storybook/react";
import AddGenres from "./index";

const meta: Meta<typeof AddGenres> = {
	component: AddGenres,
	title: "Molecules/AddGenres",
};

export default meta;

export const Default: StoryObj<typeof AddGenres> = {
	args: {
		category: {
			allCategories: ["Action", "Western", "Adventures", "Drama", "Sci-Fi"],
			favouriteCategorie: ["Crime", "Comedy", "Thriller"],
		},
	},
};
