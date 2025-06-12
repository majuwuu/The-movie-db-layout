import type { Meta, StoryObj } from "@storybook/react";
import CardDescription from "./index";

const meta: Meta<typeof CardDescription> = {
	component: CardDescription,
	title: "Molecules/CardDescription",
};

export default meta;

export const Default: StoryObj<typeof CardDescription> = {
	args: {
		title: "Lorem ipsum",
		secondaryTitle: "Test",
		link: "/",
		thirdTitle: "3h ago",
		duration: "01:29",
	},
};
