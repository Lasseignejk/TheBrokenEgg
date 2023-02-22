import React from "react";

interface FeaturedRecipe {
	id: number;
	title: string;
	image: string;
	servings: number;
	readyInMinutes: number;
	sourceName: string;
	cuisines: string[];
	dishTypes: string[];
}

const HomeFeaturedRecipe = ({
	id,
	title,
	image,
	servings,
	readyInMinutes,
	sourceName,
	cuisines,
	dishTypes,
}: FeaturedRecipe): JSX.Element => {
	return (
		<div>
			<img src={image} alt="" />
			<h2 className="text-2xl text-center font-grandStand">{title}</h2>
			<div className="lg:flex lg:justify-center">
				<div className="bg-accent rounded-2xl px-3 py-3 text-xl text-center lg:w-[60%]">
					<div className="flex justify-evenly mb-3 md:mb-0">
						<div>
							<p className="font-bold">Servings</p>
							<p className="">{servings}</p>
						</div>
						<div>
							<p className="font-bold">Ready in</p>
							<p className="">{readyInMinutes + " min"}</p>
						</div>
						<div className="hidden md:block">
							<p className="font-bold">Source</p>
							{/* <p className="">I am a very long title of a source</p> */}
							<p className="">{sourceName}</p>
						</div>
					</div>
					<div className="md:hidden">
						<p className="font-bold">Source</p>
						{/* <p className="">I am a very long title of a source</p> */}
						<p className="">{sourceName}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeFeaturedRecipe;
