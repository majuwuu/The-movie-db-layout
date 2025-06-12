import type { Meta, StoryObj } from "@storybook/react";
import HeaderNavBar from "./index";

const meta: Meta<typeof HeaderNavBar> = {
	component: HeaderNavBar,
	title: "Molecules/HeaderNavBar",
};

export default meta;

export const Default: StoryObj<typeof HeaderNavBar> = {
	args: {
		navItems: [
			{ title: "Movies", link: "" },
			{ title: "TV shows", link: "" },
			{ title: "Animations", link: "" },
			{ title: "Plans", link: "" },
		],
	},
};
