import type { Preview } from "@storybook/react";
import "../";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on.*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
