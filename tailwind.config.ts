// tailwind.config.js
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primaryGray: "#C4C4C4",
			},
			fontFamily: {
				quicksand: ["Quicksand", "sans-serif"],
			},
		},
	},
	plugins: [],
};
