import type { Meta, StoryObj } from "@storybook/react";
import VideoPreview from "./index";

const meta: Meta<typeof VideoPreview> = {
	component: VideoPreview,
	title: "Molecules/VideoPreview",
};

export default meta;

export const Default: StoryObj<typeof VideoPreview> = {
	args: {
		title: "Lorem ipsum",
		country: "Test",
		link: "/",
		timeAgo: "3h ago",
		duration: "01:29",
		views: "2.3m",
		imageSrc: "/static/image_placeholder.jpg",
	},
};
