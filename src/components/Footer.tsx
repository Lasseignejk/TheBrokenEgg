import React from "react";
import { Link } from "react-router-dom";

const Footer = (): JSX.Element => {
	return (
		<div className="bg-[#ffd982] flex flex-col gap-5 py-3">
			<h1 className="text-main font-grandStand text-3xl font-bold text-center">
				The Broken Egg
			</h1>
			<div className="">
				<div className="md:full md:justify-center md:flex">
					<div className="flex justify-evenly text-lg md:w-[70%] lg:w-[50%]">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/search">Search</Link>
					</div>
				</div>
			</div>
			<p className="text-sm text-center">&copy; 2023, All Rights Reserved.</p>
		</div>
	);
};

export default Footer;
