import type { Meta, StoryObj } from "@storybook/react";
import Main from "./index";
import CurrentViewers from "../../Molecules/CurrentViewers";

const meta: Meta<typeof Main> = {
	component: Main,
	title: "Organism/Main",
};

export default meta;

export const Default: StoryObj<typeof Main> = {
	args: {
		bannerPromo: {
			genre: "super heroes",
			description:
				"For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk...",
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
		},
		continueWatching: [
			{
				title: "Trending",
				secondaryTitle: "Chile",
				link: "/",
				thirdTitle: "5h",
				duration: "01:45",
				imageSrc: "/static/image_placeholder.jpg",
				genre: "super heroes",
				description:
					"For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk...",
				trend: true,
			},
			{
				title: "Título con viewers",
				secondaryTitle: "México",
				link: "/",
				thirdTitle: "1h",
				duration: "00:59",
				views: "540K",
				imageSrc: "/static/image_placeholder.jpg",
				genre: "super heroes",

				description:
					"For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life and putting those he cares about most at risk...",

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
		],
		popular: [
			{
				title: "estrellas",
				secondaryTitle: "Drama / Western",
				link: "/",
				duration: "02:15",
				imageSrc: "/static/image_placeholder.jpg",
				stars: "4.5",
				genre: "super heroes",
			},
			{
				title: "estrellas",
				secondaryTitle: "Sci-fi / Space Opera",
				link: "/",
				duration: "02:15",
				imageSrc: "/static/image_placeholder.jpg",
				stars: "4.5",
				genre: "super heroes",
			},
			{
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
