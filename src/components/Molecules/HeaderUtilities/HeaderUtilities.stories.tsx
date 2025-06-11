import type { Meta, StoryObj } from "@storybook/react";
import HeaderUtilities from "./index";

const meta: Meta<typeof HeaderUtilities> = {
	component: HeaderUtilities,
	title: "Molecules/HeaderUtilities",
};

export default meta;

export const Default: StoryObj<typeof HeaderUtilities> = {
	args: {
		src: "/static/Profile.png",
	},
};
