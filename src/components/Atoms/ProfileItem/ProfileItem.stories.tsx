import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
	component: Button,
	title: "Button/primaryButton",
};

export default meta;

export const Default: StoryObj<typeof Button> = {
	args: {
		label: "Click me",
	},
};
