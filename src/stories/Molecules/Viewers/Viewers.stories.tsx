import type { Meta, StoryObj } from "@storybook/react";
import Viewers from "./index";

const meta: Meta<typeof Viewers> = {
	component: Viewers,
	title: "Molecules/Viewers",
};

export default meta;

export const Default: StoryObj<typeof Viewers> = {
	args: {
		viewers: "2.3M",
	},
};
