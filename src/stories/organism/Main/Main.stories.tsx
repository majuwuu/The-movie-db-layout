import type { Meta, StoryObj } from "@storybook/react";
import Main from "./index";

const meta: Meta<typeof Main> = {
	component: Main,
	title: "Organism/Main",
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"This component displays the main section including bannerPromo, continueWatching and popular. Use the Skeleton variant to see the loading state.",
			},
		},
	},
};

export default meta;

// Story con datos cargados (vista normal)
export const Default: StoryObj<typeof Main> = {
	args: {
		bannerPromo: {
			id: "1",
			title: "playNow",
			genre: "super heroes",
			imageSrc: "/static/image_placeholder.jpg",
			currentViewers: [
				{ id: "1", imageSrc: "/static/viewer1.png" },
				{ id: "2", imageSrc: "/static/viewer2.png" },
			],
		},
		continueWatching: [
			{
				id: "2",
				title: "Trending",
				secondaryTitle: "Chile",
				link: "/",
				thirdTitle: "5h",
				duration: "01:45",
				imageSrc: "/static/image_placeholder.jpg",
				genre: "super heroes",
				description:
					"For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed...",
				trend: true,
				views: "540K",
			},
			{
				id: "3",
				title: "Título con viewers",
				secondaryTitle: "México",
				link: "/",
				thirdTitle: "1h",
				duration: "00:59",
				views: "540K",
				imageSrc: "/static/image_placeholder.jpg",
				genre: "super heroes",
				description:
					"For the first time in the cinematic history of Spider-Man...",
				currentViewers: [
					{ id: "1", imageSrc: "/static/viewer1.png" },
					{ id: "2", imageSrc: "/static/viewer2.png" },
				],
			},
		],
		popular: [
			{
				id: "4",
				title: "estrellas",
				secondaryTitle: "Drama / Western",
				link: "/",
				duration: "02:15",
				imageSrc: "/static/image_placeholder.jpg",
				stars: "4.5",
				genre: "super heroes",
			},
			{
				id: "5",
				title: "estrellas",
				secondaryTitle: "Sci-fi / Space Opera",
				link: "/",
				duration: "02:15",
				imageSrc: "/static/image_placeholder.jpg",
				stars: "4.5",
				genre: "super heroes",
			},
			{
				id: "6",
				title: "estrellas",
				secondaryTitle: "Action / Adventure",
				link: "/",
				duration: "02:15",
				imageSrc: "/static/image_placeholder.jpg",
				stars: "4.5",
				genre: "super heroes",
			},
		],
	},
};

// Story para mostrar el Skeleton Loader (sin datos)
export const Skeleton: StoryObj<typeof Main> = {
	args: {
		continueWatching: [],
		popular: [],
	},
};
