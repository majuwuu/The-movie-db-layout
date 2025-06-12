import type { Meta, StoryObj } from "@storybook/react";
import TrendingTag from "./index";

const meta: Meta<typeof TrendingTag> = {
	component: TrendingTag,
	title: "Molecules/TrendingTag",
};

export default meta;

export const Default: StoryObj<typeof TrendingTag> = {
	args: {},
};
