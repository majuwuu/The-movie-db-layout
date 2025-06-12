import type { Meta, StoryObj } from "@storybook/react";
import PlusIcon from "./index";

const meta: Meta<typeof PlusIcon> = {
	component: PlusIcon,
	title: "Atoms/PlusIcon",
};

export default meta;

export const Default: StoryObj<typeof PlusIcon> = {
	args: {
		src: "/static/CaretMenu.svg",
	},
};
