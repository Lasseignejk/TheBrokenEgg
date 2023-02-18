import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../functions/hooks";
import { searchForInstructions } from "../reducers/InstructionsSlice";
import { searchForInformation } from "../reducers/InformationSlice";

interface RecipeProps {
	id?: number;
	title?: string;
	image?: string;
	imageType?: string;
}

const RecipeCard = ({ id, title, image }: RecipeProps) => {
	interface JSONInstructions {
		results: [
			{
				name: string;
				steps: [
					{
						ingredients: [
							{
								image: string;
								name: string;
							}
						];
						number: number;
						step: string;
					}
				];
			}
		];
	}

	interface JSONInformation {
		id: number;
		title: string;
		image: string;
		servings: number;
		readyInMinutes: number;
		sourceName: string;
		sourceURL: string;
		spoonacularScore: number;
		extendedIngredients: [
			{
				name: string;
				original: string;
			}
		];
		summary: string;
	}

	const dispatch = useAppDispatch();

	const apiCall = async () => {
		await apiCallRecipeInstructions();
		await apiCallRecipeInformation();
	};

	const apiCallRecipeInformation = async () => {
		const url: string =
			`https://api.spoonacular.com/recipes/${id}/information?apiKey=` +
			import.meta.env.VITE_APIKEY;
		const rawData: Response = await fetch(url);
		const json: JSONInformation = await rawData.json();
		dispatch(searchForInformation(json));
		// console.log(json);
	};

	const apiCallRecipeInstructions = async () => {
		const url: string =
			`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=` +
			import.meta.env.VITE_APIKEY;
		const rawData: Response = await fetch(url);
		const json: JSONInstructions = await rawData.json();
		console.log(json);
		dispatch(searchForInstructions(json));
	};
	return (
		<div className="flex flex-col mx-5 text-center text-2xl rounded-lg bg-main p-5 gap-2 font-grandStand font-bold">
			<Link to={"/search/" + id} onClick={() => apiCall()}>
				<img src={image} alt="" className="rounded-2xl" />
			</Link>
			<h2>{title}</h2>
		</div>
	);
};

export default RecipeCard;
