import type { Meta, StoryObj } from "@storybook/react";
import Rated from "./index";

const meta: Meta<typeof Rated> = {
	component: Rated,
	title: "Atoms/Rated",
};

export default meta;

export const Default: StoryObj<typeof Rated> = {
	args: {
		rate: "4.8",
	},
};
