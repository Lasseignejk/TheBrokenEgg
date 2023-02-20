import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = (): JSX.Element => {
	return (
		<div className="flex flex-col justify-center items-center h-[calc(100vh-14.5rem)]">
			<div className="flex flex-col justify-center items-center gap-5 text-center sm:w-3/4 md:w-1/2">
				<h1 className="text-5xl font-bold font-grandStand">Oh no! </h1>
				<img src="../../food_egg_broken.png" alt="" className="w-[200px]" />
				<p className="text-2xl">
					It looks like the page you're looking for doesn't exist. Click
					<Link
						to="/search"
						className="font-bold hover:text-main duration-300 transition-colors ease-in-out">
						{" "}
						here
					</Link>{" "}
					to go to the search page.
				</p>
			</div>
		</div>
	);
};

export default ErrorPage;
