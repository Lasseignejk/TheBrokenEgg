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
				overlay: "rgba(255, 217, 130, 0.5)",
			},
			gridTemplateColumns: {
				homemd: "1fr 4fr 1fr",
				homelg: "1fr 6fr 1fr",
				homexl: "1fr 8fr 1fr",
			},
			backgroundImage: {
				leftImage: "url('../../LeftLarge.png')",
				rightImage: "url('../../RightLarge.png')",
				mobileBanner: "url('../../HomeMobileBanner.png')",
			},
		},
	},
	plugins: [],
};
