import type { Meta, StoryObj } from "@storybook/react";
import SecondaryText from "./index";

const meta: Meta<typeof SecondaryText> = {
	component: SecondaryText,
	title: "Atoms/SecondaryText",
};

export default meta;

export const Default: StoryObj<typeof SecondaryText> = {
	args: {
		label: "Secondary Text",
		size: "10px",
		weigth: "thin",
	},
};
