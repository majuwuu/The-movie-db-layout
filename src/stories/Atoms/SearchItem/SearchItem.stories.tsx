import type { Meta, StoryObj } from "@storybook/react";
import SearchItem from "./index";

const meta: Meta<typeof SearchItem> = {
	component: SearchItem,
	title: "Atoms/SearchItem",
};

export default meta;

export const Default: StoryObj<typeof SearchItem> = {
	args: {
		label: "Click me",
	},
};
