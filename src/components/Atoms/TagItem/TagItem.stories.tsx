import type { Meta, StoryObj } from "@storybook/react";
import TagItem from "./index";

const meta: Meta<typeof TagItem> = {
	component: TagItem,
	title: "Atoms/TagItem",
	argTypes: {
		color: {
			control: {
				type: "select",
				options: ["#F36F45", "#8769FF", "#61D1EA", "#262629"],
			},
		},
	},
};

export default meta;

export const Default: StoryObj<typeof TagItem> = {
	args: {
		label: "Category",
		color: "#FFFFFF",
	},
};
