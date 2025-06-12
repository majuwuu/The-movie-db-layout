import type { Meta, StoryObj } from "@storybook/react";
import StarItem from "./index";

const meta: Meta<typeof StarItem> = {
	component: StarItem,
	title: "Atoms/StarItem",
};

export default meta;

export const Default: StoryObj<typeof StarItem> = {
	args: {},
};
