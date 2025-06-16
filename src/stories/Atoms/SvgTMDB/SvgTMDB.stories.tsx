import type { Meta, StoryObj } from "@storybook/react";
import SvgTMDB from "./index";

const meta: Meta<typeof SvgTMDB> = {
	title: "Logos/SvgTMDB",
	component: SvgTMDB,
	tags: ["autodocs"],
	argTypes: {
		active: {
			control: "boolean",
			description: "Activa o desactiva la animación de relleno",
		},
	},
};

export default meta;
type Story = StoryObj<typeof SvgTMDB>;

export const Default: Story = {
	args: {
		active: false,
	},
};

export const Animated: Story = {
	args: {
		active: true,
	},
};
