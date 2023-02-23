import React from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../util/hooks";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";

const ErrorPage = (): JSX.Element => {
	useDocumentTitle("The Broken Egg | Error");
	return (
		<div className="">
			<div className="min-h-[calc(100vh-14.3rem)] lg:grid lg:grid-cols-homemd xl:grid-cols-homexl">
				<LeftImage />
				<div className="w-full flex md:items-center sm:justify-center md:min-h-[calc(100vh-14.3rem)]">
					<div className="flex flex-col px-3 justify-center items-center gap-5 mb-3 sm:w-3/4 lg:w-1/2">
						<h1 className="text-5xl font-bold font-grandStand">Oh no! </h1>
						<img src="../../food_egg_broken.png" alt="" className="w-[200px]" />
						<p className="text-2xl text-center">
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
				<RightImage />
			</div>
		</div>
	);
};

export default ErrorPage;
