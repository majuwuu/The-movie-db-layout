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
				title: "Lorem ipsum",
				country: "Test",
				link: "/",
				timeAgo: "3h ago",
				duration: "01:29",
				views: "2.3m",
				imageSrc: "/static/image_placeholder.jpg",
			},
			{
				title: "Lorem ipsum",
				country: "Test",
				link: "/",
				timeAgo: "3h ago",
				duration: "01:29",
				views: "2.3m",
				imageSrc: "/static/image_placeholder.jpg",
			},
		],
	},
};
