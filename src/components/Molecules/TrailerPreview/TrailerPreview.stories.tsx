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
		country: "España",
		link: "/",
		timeAgo: "2 días",
		duration: "02:15",
		views: "1.2M",
		imageSrc: "/static/image_placeholder.jpg",
		stars: "4.5", // ejemplo
	},
};

export const WithCurrentViewers: StoryObj<typeof TrailerPreview> = {
	args: {
		title: "Título con viewers",
		country: "México",
		link: "/",
		timeAgo: "1h",
		duration: "00:59",
		views: "540K",
		imageSrc: "/static/image_placeholder.jpg",
		currentViewers: [
			{
				imageSrc1: "/static/avatar1.jpg",
				imageSrc2: "/static/avatar2.jpg",
			},
		],
	},
};

export const Trending: StoryObj<typeof TrailerPreview> = {
	args: {
		title: "Trending",
		country: "Chile",
		link: "/",
		timeAgo: "5h",
		duration: "01:45",
		views: "3.9M",
		imageSrc: "/static/image_placeholder.jpg",
		trend: true,
	},
};

export const FullProps: StoryObj<typeof TrailerPreview> = {
	args: {
		title: "Completo",
		country: "Argentina",
		link: "/",
		timeAgo: "30 min",
		duration: "00:44",
		views: "1.5M",
		imageSrc: "/static/image_placeholder.jpg",
		stars: "5.0",
		currentViewers: [
			{
				imageSrc1: "/static/avatar1.jpg",
				imageSrc2: "/static/avatar2.jpg",
			},
		],
		trend: true,
	},
};
