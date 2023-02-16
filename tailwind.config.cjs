/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			grandStand: ["Grandstander", "cursive"],
			nunito: ["Nunito", "sans-serif"],
		},
		extend: {
			colors: {
				main: "#ff9d00",
				background: "#ffefc2",
				text: "#523200",
				accent: "#ffd600",
			},
		},
	},
	plugins: [],
};
