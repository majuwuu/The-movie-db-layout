import type { Meta, StoryObj } from "@storybook/react";
import TrailerPreview from "./index";

const meta: Meta<typeof TrailerPreview> = {
	component: TrailerPreview,
	title: "Molecules/TrailerPreview",
};

export default meta;

export const WithStars: StoryObj<typeof TrailerPreview> = {
	args: {
		title: "Título con estrellas",
		secondaryTitle: "España",
		link: "/",
		thirdTitle: "2 días",
		duration: "02:15",
		imageSrc: "/static/image_placeholder.jpg",
		stars: "4.5",
		genre: "super heroes",
		description:
			"For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk...",
	},
};

export const WithCurrentViewers: StoryObj<typeof TrailerPreview> = {
	args: {
		title: "Título con viewers",
		secondaryTitle: "México",
		link: "/",
		thirdTitle: "1h",
		duration: "00:59",
		views: "540K",
		imageSrc: "/static/image_placeholder.jpg",
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
		genre: "super heroes",
		description:
			"For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk...",
	},
};

export const Trending: StoryObj<typeof TrailerPreview> = {
	args: {
		title: "Trending",
		secondaryTitle: "Chile",
		link: "/",
		thirdTitle: "5h",
		duration: "01:45",
		imageSrc: "/static/image_placeholder.jpg",
		trend: true,
	},
};
