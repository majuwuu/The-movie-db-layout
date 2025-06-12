import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
const meta: Meta<typeof Button> = {
	component: Button,
	title: "Atoms/primaryButton",
};

export default meta;

export const Default: StoryObj<typeof Button> = {
	args: {
		label: "Watch Now",
	},
};
