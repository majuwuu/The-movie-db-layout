import type { Meta, StoryObj } from "@storybook/react";
import SortBy from "./index";

const meta: Meta<typeof SortBy> = {
	component: SortBy,
	title: "Molecules/SortBy",
};

export default meta;

export const Default: StoryObj<typeof SortBy> = {
	args: {
		category: {
			allCategories: ["Action", "Western", "Adventures", "Drama", "Sci-Fi"],
			favouriteCategorie: ["Crime", "Comedy", "Thriller"],
		},
	},
};
