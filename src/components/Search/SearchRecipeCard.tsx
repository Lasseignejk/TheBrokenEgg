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

const RecipeCard = ({ id, title, image }: RecipeProps) => {
	const dispatch = useAppDispatch();

	const apiCall = async () => {
		await apiCallRecipeInstructions();
		// await apiCallRecipeInformation();
	};

	// const apiCallRecipeInformation = async () => {
	// 	const url: string =
	// 		`https://api.spoonacular.com/recipes/${id}/information?apiKey=` +
	// 		import.meta.env.VITE_APIKEY;
	// 	const rawData: Response = await fetch(url);
	// 	const json: JSONInformation = await rawData.json();
	// 	dispatch(searchForInformation(json));
	// 	// console.log(json);
	// };

	const apiCallRecipeInstructions = async () => {
		const url: string =
			`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=` +
			import.meta.env.VITE_APIKEY;

		const rawData: Response = await fetch(url);
		const json: JSONInstructions[] = await rawData.json();
		console.log(json);

		dispatch(searchForInstructions(json));
	};
	return (
		<div className="flex flex-col mx-5 text-center text-2xl rounded-2xl shadow-2xl shadow-[#ab9259] p-5 gap-2 font-light mb-5 justify-center items-center sm:w-[330px] md:w-[500px]  md:hover:scale-105 md:transition-all md:duration-300">
			<Link to={"/search/" + id} onClick={() => apiCall()}>
				<img src={image} alt="" className="md:w-[400px] rounded-2xl" />
			</Link>
			<h2>{title}</h2>
		</div>
	);
};

export default RecipeCard;
