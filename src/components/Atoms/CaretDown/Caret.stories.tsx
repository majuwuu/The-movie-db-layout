import type { Meta, StoryObj } from "@storybook/react";
import CaretDown from "./index";

const meta: Meta<typeof CaretDown> = {
	component: CaretDown,
	title: "Atoms/CaretDown",
};

export default meta;

export const Default: StoryObj<typeof CaretDown> = {
	args: {
		label: "Click me",
	},
};
