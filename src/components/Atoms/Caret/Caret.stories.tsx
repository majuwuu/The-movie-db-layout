import type { Meta, StoryObj } from "@storybook/react";
import Caret from "./index";

const meta: Meta<typeof Caret> = {
	component: Caret,
	title: "Atoms/caret",
};

export default meta;

export const Default: StoryObj<typeof Caret> = {
	args: {
		src: "/static/CaretMenu.svg",
	},
};
