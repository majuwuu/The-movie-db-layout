import type { Meta, StoryObj } from "@storybook/react";
import SettingsItem from "./index";

const meta: Meta<typeof SettingsItem> = {
	component: SettingsItem,
	title: "Atoms/SettingsItem",
};

export default meta;

export const Default: StoryObj<typeof SettingsItem> = {
	args: {
		label: "Click me",
	},
};
