import React from "react";

const Footer = () => {
	return (
		<div className="bg-[#ffd982] flex flex-col gap-5 py-3">
			<h1 className="text-main font-grandStand text-3xl font-bold text-center">
				The Broken Egg
			</h1>
			<div className="flex justify-evenly text-lg">
				<p>Home</p>
				<p>About</p>
				<p>Search Recipes</p>
			</div>
			<p className="text-sm text-center">&copy; 2023, All Rights Reserved.</p>
		</div>
	);
};

export default Footer;
