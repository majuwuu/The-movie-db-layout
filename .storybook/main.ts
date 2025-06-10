// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	// Required
	framework: "@storybook/react-vite",
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	// Optional
	addons: ["@storybook/addon-docs"],

	staticDirs: ["../public"],
};

export default config;
