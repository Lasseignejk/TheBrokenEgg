import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../util/hooks";
import { searchForInstructions } from "../../reducers/InstructionsSlice";
import { searchForInformation } from "../../reducers/InformationSlice";
import {
	JSONInstructions,
	JSONInformation,
	RecipeProps,
} from "../../util/Interfaces";

const RecipeCard = ({ id, title, image }: RecipeProps): JSX.Element => {
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
		<div className="flex flex-col mx-5 text-center text-2xl rounded-2xl bg-accent2 p-5 gap-2 mb-5 w-[300px] md:w-[300px] md:hover:scale-105 md:transition-all md:duration-300">
			<Link to={"/search/" + id} onClick={(): Promise<void> => apiCall()}>
				<img src={image} alt="" className="md:w-[400px] rounded-2xl" />
			</Link>
			<h2>{title}</h2>
		</div>
	);
};

export default RecipeCard;
