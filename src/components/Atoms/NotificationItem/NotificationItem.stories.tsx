import type { Meta, StoryObj } from "@storybook/react";
import NotificationItem from "./index";

const meta: Meta<typeof NotificationItem> = {
	component: NotificationItem,
	title: "Atoms/NotificationItem",
};

export default meta;

export const Default: StoryObj<typeof NotificationItem> = {
	args: {
		label: "Click me",
	},
};
