import type { Meta, StoryObj } from "@storybook/react";
import ImageBubble from "./index";

const meta: Meta<typeof ImageBubble> = {
	component: ImageBubble,
	title: "Atoms/ImageBubble",
};

export default meta;

export const Default: StoryObj<typeof ImageBubble> = {
	args: {
		children: (
			<img
				src="/static/profile.png"
				alt="Profile"
				style={{ width: 40, height: 40 }}
			/>
		),
	},
};
