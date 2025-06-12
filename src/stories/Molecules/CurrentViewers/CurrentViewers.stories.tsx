import type { Meta, StoryObj } from "@storybook/react";
import CurrentViewers from "./index";

const meta: Meta<typeof CurrentViewers> = {
	component: CurrentViewers,
	title: "Molecules/CurrentViewers",
};

export default meta;

export const Default: StoryObj<typeof CurrentViewers> = {
	args: {
		currentViewers: [
			{
				id: "1",
				imageSrc: "/static/viewer1.png",
			},
			{
				id: "2",
				imageSrc: "/static/viewer2.png",
			},
		],
	},
};
