import type { Meta, StoryObj } from "@storybook/react";
import Main from "./index";

const meta: Meta<typeof Main> = {
	component: Main,
	title: "Organism/Main",
};

export default meta;

export const Default: StoryObj<typeof Main> = {
	args: {
		videos: {
			title: "Lorem ipsum",
			country: "Test",
			link: "/",
			timeAgo: "3h ago",
			duration: "01:29",
			views: "2.3m",
			imageSrc: "/static/image_placeholder.jpg",
		},
	},
};
