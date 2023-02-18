import React from "react";
import { useAppDispatch, useAppSelector } from "../functions/hooks";
import { useState, useEffect } from "react";
import { searchRecipe, reset } from "../reducers/RecipeSlice";
import RecipeCard from "../components/RecipeCard";
import DropDownSearch from "../components/DropDownSearch";
import { cuisineOptions, dietOptions } from "../../data";

const Search = () => {
	const recipes = useAppSelector((state) => state.recipe.results);
	const dispatch = useAppDispatch();

	const [recipeToSearch, setRecipeToSearch] = useState<string>("");

	interface JSON {
		results: [
			{
				id: number;
				title: string;
				image: string;
				imageType: string;
			}
		];
	}

	interface RecipeProps {
		id?: number;
		title?: string;
		image?: string;
		imageType?: string;
	}

	const apiCall = async () => {
		const url: string = import.meta.env.VITE_SEARCH_API + recipeToSearch;
		const rawData: Response = await fetch(url);
		const json: JSON = await rawData.json();
		console.log(json.results);
		dispatch(searchRecipe(json));
	};

	interface OptionsProps {
		title: string;
		values: string[];
	}

	return (
		<div className="flex flex-col">
			<div>
				{/* Advanced Search */}
				{/* <DropDownSearch {...props:OptionsProps} />
				<DropDownSearch {...dietOptions} /> */}
				{/* Input field and button */}
				<div>
					<input
						type="text"
						placeholder="Search for a recipe"
						onChange={(e) => setRecipeToSearch(e.target.value)}
						value={recipeToSearch}
					/>
					<button onClick={() => apiCall()}>Search</button>
				</div>
			</div>
			<div className="flex flex-col w-full gap-5 border-2 border-black mt-5">
				{recipes?.length !== 1 ? (
					recipes?.map(
						(recipe: RecipeProps): JSX.Element => <RecipeCard {...recipe} />
					)
				) : (
					<p></p>
				)}

				{/* {recipes?.map(
					(recipe: RecipeProps): JSX.Element => (
						<RecipeCard {...recipe} />
					)
				)} */}
			</div>
		</div>
	);
};

export default Search;
