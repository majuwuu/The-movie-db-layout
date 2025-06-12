import type { Meta, StoryObj } from "@storybook/react";
import WatchNowButton from "./index";

const meta: Meta<typeof WatchNowButton> = {
	component: WatchNowButton,
	title: "Molecules/WatchNowButton",
};

export default meta;

export const Default: StoryObj<typeof WatchNowButton> = {
	args: {
		label: "Watch Now",
	},
};
