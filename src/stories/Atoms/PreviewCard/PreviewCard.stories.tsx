import type { Meta, StoryObj } from "@storybook/react";
import PreviewCard from "./index";

const meta: Meta<typeof PreviewCard> = {
	component: PreviewCard,
	title: "Atoms/PreviewCard",
};

export default meta;

export const Default: StoryObj<typeof PreviewCard> = {
	args: {
		imageSrc: "/static/image_placeholder.jpg",
	},
};
