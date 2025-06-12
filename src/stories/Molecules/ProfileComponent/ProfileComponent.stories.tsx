import type { Meta, StoryObj } from "@storybook/react";
import ProfileComponent from "./index";

const meta: Meta<typeof ProfileComponent> = {
	component: ProfileComponent,
	title: "Molecules/ProfileComponent",
};

export default meta;

export const Default: StoryObj<typeof ProfileComponent> = {
	args: {
		imageSrc: "/static/Profile.png",
	},
};
