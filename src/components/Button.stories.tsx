import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

export const meta: Meta<typeof Button> = {
	component: Button,
	title: "Components/Button",
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		label: "Click me",
	},
};
