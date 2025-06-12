import type { Meta, StoryObj } from "@storybook/react";
import PlayItem from "./index";

const meta: Meta<typeof PlayItem> = {
	component: PlayItem,
	title: "Atoms/PlayItem",
};

export default meta;

export const Default: StoryObj<typeof PlayItem> = {
	args: {},
};
