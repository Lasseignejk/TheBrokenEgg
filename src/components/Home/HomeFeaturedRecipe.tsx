import React from "react";
import { Link } from "react-router-dom";
import { searchForInformation } from "../../reducers/InformationSlice";
import { searchForInstructions } from "../../reducers/InstructionsSlice";
import { useAppDispatch } from "../../util/hooks";
import { JSONInformation, JSONInstructions } from "../../util/Interfaces";
import HomeRecipeTags from "./HomeRecipeTags";

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
	const dispatch = useAppDispatch();

	const apiCall = async (): Promise<void> => {
		await apiCallRecipeInstructions();
		await apiCallRecipeInformation();
	};

	const apiCallRecipeInformation = async (): Promise<Object> => {
		const url: string =
			`https://api.spoonacular.com/recipes/${id}/information?apiKey=` +
			import.meta.env.VITE_APIKEY;
		const rawData: Response = await fetch(url);
		const json: JSONInformation = await rawData.json();
		return dispatch(searchForInformation(json));
	};

	const apiCallRecipeInstructions = async (): Promise<Object> => {
		const url: string =
			`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=` +
			import.meta.env.VITE_APIKEY;
		const rawData: Response = await fetch(url);
		const json: JSONInstructions[] = await rawData.json();
		return dispatch(searchForInstructions(json));
	};
	return (
		<div className="xl:flex xl:flex-col xl:items-center xl:gap-5">
			<Link to={"/search/" + id} onClick={() => apiCall()}>
				<img src={image} alt="" />
			</Link>
			<h2 className="text-2xl text-center font-grandStand">{title}</h2>
			<div className="lg:flex lg:flex-col lg:items-center">
				<div className="bg-accent rounded-2xl px-3 py-3 text-xl text-center lg:w-[100%]">
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

							<p className="">{sourceName}</p>
						</div>
					</div>
					<div className="md:hidden">
						<p className="font-bold">Source</p>

						<p className="">{sourceName}</p>
					</div>
				</div>
				<div className="flex flex-wrap gap-3 mt-3 justify-center xl:mt-5">
					<HomeRecipeTags cuisines={cuisines} dishTypes={dishTypes} />
				</div>
			</div>
		</div>
	);
};

export default HomeFeaturedRecipe;
