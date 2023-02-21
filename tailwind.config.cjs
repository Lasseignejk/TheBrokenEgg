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
				background: "#fcfaf2",
				text: "#523200",
				accent: "#ffd600",
				accent2: "#ffd982",
			},
			gridTemplateColumns: {
				homemd: "1fr 4fr 1fr",
				homexl: "1fr 6fr 1fr",
			},
		},
	},
	plugins: [],
};
