import React from "react";
import { useAppDispatch, useAppSelector } from "../functions/hooks";
import { useState, useEffect } from "react";
import { searchRecipe, reset } from "../reducers/AllRecipesSlice";
import RecipeCard from "../components/RecipeCard";
import DropDownSearch from "../components/DropDownSearch";
import { RecipeProps, JSONSearch } from "../functions/Interfaces";
import cuisineOptions, { dietOptions } from "../../data";

const Search = () => {
	const recipes = useAppSelector((state) => state.recipes.results);
	console.log(recipes);

	const dispatch = useAppDispatch();

	const [recipeToSearch, setRecipeToSearch] = useState<string>("");

	const apiCall = async () => {
		const url: string = import.meta.env.VITE_SEARCH_ALL_API + recipeToSearch;
		console.log(url);
		// const rawData: Response = await fetch(url);
		// const json: JSONSearch = await rawData.json();
		// console.log(json.results);
		// dispatch(searchRecipe(json));
	};

	useEffect(() => {
		dispatch(reset());
	}, []);

	return (
		<div className="flex flex-col justify-center items-center">
			<div>
				{/* Advanced Search */}
				<div>
					<div className="flex gap-3">
						<p>Diet:</p>
						<select>
							<DropDownSearch {...cuisineOptions} />
						</select>
					</div>
					<div className="flex gap-3">
						<p>Cuisine:</p>
						<select>
							<DropDownSearch {...dietOptions} />
						</select>
					</div>
				</div>

				{/* Input field and button */}
				<div className="bg-background flex justify-center items-center px-3 pt-6 gap-3">
					<input
						type="text"
						placeholder="Loaded Veggie Omelet"
						onChange={(e) => setRecipeToSearch(e.target.value)}
						value={recipeToSearch}
						className="w-3/4 h-10 pl-4 text-xl rounded-2xl"
					/>
					<button
						onClick={() => apiCall()}
						className="w-1/4 text-xl border-2 border-text py-1 rounded-full hover:bg-main hover:transition-all ease-in-out duration-300 hover:scale-105">
						Search
					</button>
				</div>
			</div>
			<div className="flex flex-col w-full gap-5 my-5 justify-center items-center md:flex-row md:flex-wrap">
				{recipes[0]?.id !== undefined ? (
					recipes?.map(
						(recipe: RecipeProps): JSX.Element => <RecipeCard {...recipe} />
					)
				) : (
					<div className="flex justify-center items-center h-[calc(100vh-21rem)]">
						<div className="flex flex-col px-3 justify-center items-center text-center gap-3 sm:w-3/4 md:w-1/2">
							<p className="text-3xl">
								Search for a recipe and let's get crackin'!
							</p>
							<img src="./tamago_pack.png" alt="" className="w-[300px]" />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Search;
