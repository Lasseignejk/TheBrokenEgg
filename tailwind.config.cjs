/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			grandStand: ["Grandstander", "cursive"],
			nunito: ["Nunito", "sans-serif"],
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
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
