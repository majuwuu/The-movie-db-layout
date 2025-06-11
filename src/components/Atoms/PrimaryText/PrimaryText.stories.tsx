import type { Meta, StoryObj } from "@storybook/react";
import PrimaryText from "./index";

const meta: Meta<typeof PrimaryText> = {
	component: PrimaryText,
	title: "Atoms/PrimaryText",
};

export default meta;

export const Default: StoryObj<typeof PrimaryText> = {
	args: {
		label: "Primary Text",
		size: "10px",
		weigth: "bold",
	},
};
