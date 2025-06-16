import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./index";

const meta: Meta<typeof Sidebar> = {
	component: Sidebar,
	title: "Organism/Sidebar",
};

export default meta;

export const Default: StoryObj<typeof Sidebar> = {
	args: {
		videos: [
			{
				id: "1",
				title: "Lorem ipsum",
				secondaryTitle: "Test",
				link: "/",
				thirdTitle: "3h ago",
				duration: "01:29",
				views: "2.3m",
				imageSrc: "/static/image_placeholder.jpg",
				genre: "super heroes",
				description:
					"For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk...",
			},
			{
				id: "2",
				title: "Lorem ipsum",
				secondaryTitle: "Test",
				link: "/",
				thirdTitle: "3h ago",
				duration: "01:29",
				views: "2.3m",
				imageSrc: "/static/image_placeholder.jpg",
				genre: "super heroes",
				description:
					"For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk...",
			},
		],

		category: {
			allCategories: ["Action", "Western", "Adventures", "Drama", "Sci-Fi"],
			favouriteCategorie: ["Crime", "Comedy", "Thriller"],
		},
	},
};

export const Skeleton: StoryObj<typeof Sidebar> = {
	args: {
		videos: [],
		category: {
			allCategories: ["Action", "Western", "Adventures", "Drama", "Sci-Fi"],
			favouriteCategorie: ["Crime", "Comedy", "Thriller"],
		},
	},
};
