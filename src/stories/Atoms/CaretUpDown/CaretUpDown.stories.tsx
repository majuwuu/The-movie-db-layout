import type { Meta, StoryObj } from "@storybook/react";
import CaretUpDown from "./index";

const meta: Meta<typeof CaretUpDown> = {
	component: CaretUpDown,
	title: "Atoms/CaretUpDown",
};

export default meta;

export const Default: StoryObj<typeof CaretUpDown> = {
	args: {},
};
