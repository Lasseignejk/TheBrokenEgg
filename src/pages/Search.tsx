import React from "react";
import { useAppDispatch, useAppSelector } from "../functions/hooks";
import { useState, useEffect } from "react";
import { searchRecipe, reset } from "../reducers/AllRecipesSlice";
import RecipeCard from "../components/RecipeCard";
import DropDownSearch from "../components/DropDownSearch";
import {
	RecipeProps,
	JSONSearch,
	RecipeParamsState,
	formatParams,
	Event,
} from "../functions/Interfaces";
import cuisineOptions, { dietOptions } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
	const recipes = useAppSelector((state) => state.recipes.results);
	console.log(recipes);

	const dispatch = useAppDispatch();

	const [recipeToSearch, setRecipeToSearch] = useState<string>("");
	const [recipeParams, setRecipeParams] = useState<RecipeParamsState>({});

	const setParamsState = (e: Event) => {
		setRecipeParams({
			...recipeParams,
			[e.target.name]: e.target.value,
		});
	};

	const apiCall = async () => {
		const url: string =
			import.meta.env.VITE_SEARCH_ALL_API +
			recipeToSearch +
			"&" +
			formatParams(recipeParams);

		const rawData: Response = await fetch(url);
		console.log(rawData);
		const json: JSONSearch = await rawData.json();
		console.log(json);
		dispatch(searchRecipe(json));
	};

	useEffect(() => {
		dispatch(reset());
	}, []);

	const showAdvancedSearch = () => {
		const advancedSearchDiv = document.querySelector(
			".advanDiv"
		) as HTMLDivElement;
		advancedSearchDiv.classList.toggle("show");
		const advancedSearchTitle = document.querySelector(
			".advanTitle"
		) as HTMLDivElement;
		advancedSearchTitle.classList.toggle("changeRadius");
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<div>
				{/* Advanced Search */}
				<div
					className="flex justify-between text-xl px-3 py-3 items-center bg-main rounded-xl advanTitle transition-colors duration-300 ease-in-out"
					onClick={() => showAdvancedSearch()}>
					<h1>Advanced Search</h1>
					<div className="">
						<FontAwesomeIcon icon={faPlus} />
					</div>
				</div>

				<div className="hidden advanDiv bg-accent2 py-5 rounded-b-lg text-lg justify-center items-center">
					<div className="flex gap-3">
						<label htmlFor="cuisine" className="w-[60px]">
							Cuisine:
						</label>
						<select
							className="w-[170px]"
							name="cuisine"
							id="cuisine"
							value={recipeParams.cuisine ? recipeParams.cuisine : ""}
							onChange={(e) => setParamsState(e)}>
							<DropDownSearch {...cuisineOptions} />
						</select>
					</div>
					<div className="flex gap-3">
						<label htmlFor="diet" className="w-[60px] text-center">
							Diet:
						</label>
						<select
							className="w-[170px]"
							name="diet"
							id="diet"
							value={recipeParams.diet ? recipeParams.diet : ""}
							onChange={(e) => setParamsState(e)}>
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
					<div className="flex justify-center items-center min-h-[calc(100vh-24rem)]">
						<div className="flex flex-col px-3 justify-center items-center text-center gap-3 sm:w-3/4 md:w-2/3">
							<p className="text-3xl">
								Search for a recipe and let's get crackin'!
							</p>
							<img
								src="./tamago_pack.png"
								alt=""
								className="w-[200px] md:w-[400px]"
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Search;
