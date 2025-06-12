import type { Meta, StoryObj } from "@storybook/react";
import Header from "./index";

const meta: Meta<typeof Header> = {
	component: Header,
	title: "Organism/Header",
};

export default meta;

export const Default: StoryObj<typeof Header> = {
	args: {
		navItems: [
			{ title: "Movies", link: "" },
			{ title: "TV shows", link: "" },
			{ title: "Animations", link: "" },
			{ title: "Plans", link: "" },
		],
		userData: [
			{
				name: "Joe",
				imageSrc: "/static/Profile.png",
			},
		],
	},
};
