import React from "react";

import {
	useAppDispatch,
	useAppSelector,
	useDocumentTitle,
} from "../../util/hooks";
import { useState, useEffect } from "react";
import { searchRecipe, reset } from "../../reducers/AllRecipesSlice";
import RecipeCard from "./SearchRecipeCard";
import DropDownSearch from "./AdvancedSearch/ASDropDownOptions";
import cuisineOptions, {
	dietOptions,
	intoleranceOptions,
	typeOptions,
} from "./AdvancedSearch/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { RecipeProps } from "../../util/Interfaces";
import RightImage from "../RightImage";
import LeftImage from "../LeftImage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchPage = (): JSX.Element => {
	useDocumentTitle("The Broken Egg | Search");
	const recipes = useAppSelector((state) => state.recipes.results);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(reset());
	}, []);

	interface RecipeParamsState {
		cuisine?: string;
		diet?: string;
		intolerances?: string;
		type?: string;
		includeIngredients?: string;
		excludeIngredients?: string;
		maxReadyTime?: string;
	}

	interface JSONSearch {
		results: [
			{
				id: number;
				title: string;
				image: string;
				imageType: string;
			}
		];
		totalResults: number;
	}

	interface Event {
		target: HTMLSelectElement | HTMLInputElement;
	}

	interface CheckKeyE {
		key: string;
	}

	const setParamsState = (e: Event): void => {
		setRecipeParams({
			...recipeParams,
			[e.target.name]: e.target.value,
		});
	};

	const [recipeToSearch, setRecipeToSearch] = useState<string>("");
	const [recipeParams, setRecipeParams] = useState<RecipeParamsState>({});

	const formatParams = (recipeParams: RecipeParamsState): string => {
		const formattedParams: string[] = [];
		for (const param in recipeParams) {
			formattedParams.push(
				param + "=" + recipeParams[param as keyof typeof recipeParams]
			);
		}
		return formattedParams.join("&");
	};

	const apiCall = async (): Promise<Object | void> => {
		const url: string =
			"https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
			import.meta.env.VITE_APIKEY +
			"&query=" +
			recipeToSearch +
			"&" +
			formatParams(recipeParams);

		const rawData: Response = await fetch(url);
		const json: JSONSearch = await rawData.json();
		if (json.totalResults === 0) {
			noResultsAlert();
		} else {
			return dispatch(searchRecipe(json));
		}
	};

	const noResultsAlert = (): void => {
		toast.error(
			"Oh no! It looks like your search yielded no eggs. Please try again."
		);
	};

	const checkKeyDown = (e: CheckKeyE): void => {
		if (e.key === "Enter") {
			apiCall();
		}
	};

	const showAdvancedSearch = (): void => {
		const advancedSearchDiv: HTMLDivElement = document.querySelector(
			".advanDiv"
		) as HTMLDivElement;
		advancedSearchDiv.classList.toggle("show");
		const advancedSearchTitle: HTMLDivElement = document.querySelector(
			".advanTitle"
		) as HTMLDivElement;
		advancedSearchTitle.classList.toggle("changeRadius");
		const advancedSearchX: HTMLDivElement = document.querySelector(
			".advanX"
		) as HTMLDivElement;
		advancedSearchX.classList.toggle("moveX");
	};

	return (
		<div className="">
			<div className=" min-h-[calc(100vh-14.3rem)] lg:grid lg:grid-cols-homemd xl:grid-cols-homexl ">
				<LeftImage />
				<div className="w-full flex">
					<div className="flex flex-col items-center px-3 w-full">
						<div className="flex flex-col md:w-[80%] items-center">
							{/* Advanced Search */}
							<div className="w-full lg:max-w-[1000px] px-3">
								<ToastContainer position="top-center" />

								<div
									className="flex justify-between text-xl px-3 py-3 items-center border-b-2 rounded-tl-2xl rounded-tr-2xl border-main advanTitle transition-colors duration-300 ease-in-out cursor-pointer md-w"
									onClick={() => showAdvancedSearch()}>
									<h1>Advanced Search</h1>
									<div className="advanX transition-all duration-300 ease-in-out">
										<FontAwesomeIcon icon={faPlus} />
									</div>
								</div>

								<div className="hidden advanDiv bg-accent2 py-5 rounded-b-2xl text-lg justify-center items-center px-5">
									<div className="flex gap-3">
										<label
											htmlFor="cuisine"
											className="w-[90px] cursor-pointer xl:text-right">
											Cuisine:
										</label>
										<select
											className="w-[170px] cursor-pointer pl-1 rounded-2xl"
											name="cuisine"
											id="cuisine"
											value={recipeParams.cuisine ? recipeParams.cuisine : ""}
											onChange={(e) => setParamsState(e)}>
											<DropDownSearch {...cuisineOptions} />
										</select>
									</div>
									<div className="flex gap-3">
										<label
											htmlFor="diet"
											className="w-[90px] cursor-pointer xl:text-right">
											Diet:
										</label>
										<select
											className="w-[170px] cursor-pointer pl-1 rounded-2xl"
											name="diet"
											id="diet"
											value={recipeParams.diet ? recipeParams.diet : ""}
											onChange={(e) => setParamsState(e)}>
											<DropDownSearch {...dietOptions} />
										</select>
									</div>
									<div className="flex gap-3">
										<label
											htmlFor="allergens"
											className="w-[90px] cursor-pointer xl:text-right">
											Allergens:
										</label>
										<select
											className="w-[170px] cursor-pointer pl-1 rounded-2xl"
											name="intolerances"
											id="allergens"
											value={
												recipeParams.intolerances
													? recipeParams.intolerances
													: ""
											}
											onChange={(e) => setParamsState(e)}>
											<DropDownSearch {...intoleranceOptions} />
										</select>
									</div>
									<div className="flex gap-3">
										<label
											htmlFor="type"
											className="w-[90px] cursor-pointer xl:text-right">
											Type:
										</label>
										<select
											className="w-[170px] cursor-pointer pl-1 rounded-2xl"
											name="type"
											id="type"
											value={recipeParams.type ? recipeParams.type : ""}
											onChange={(e) => setParamsState(e)}>
											<DropDownSearch {...typeOptions} />
										</select>
									</div>
									<div className="flex gap-3">
										<label
											htmlFor="include"
											className="w-[90px] cursor-pointer  xl:text-right">
											Include:
										</label>
										<input
											type="text"
											className="w-[170px] cursor-pointer pl-3 rounded-2xl"
											name="includeIngredients"
											id="include"
											placeholder="'bread, beef'"
											value={
												recipeParams.includeIngredients
													? recipeParams.includeIngredients
													: ""
											}
											onChange={(e) => setParamsState(e)}
										/>
									</div>
									<div className="flex gap-3">
										<label
											htmlFor="exclude"
											className="w-[90px] cursor-pointer  xl:text-right">
											Exclude:
										</label>
										<input
											type="text"
											className="w-[170px] cursor-pointer pl-3 rounded-2xl"
											name="excludeIngredients"
											id="include"
											placeholder="'eggs, chicken'"
											value={
												recipeParams.excludeIngredients
													? recipeParams.excludeIngredients
													: ""
											}
											onChange={(e) => setParamsState(e)}
										/>
									</div>
									<div className="flex gap-3 flex-wrap justify-center items-center">
										<label
											htmlFor="time"
											className="w-[90px] cursor-pointer  xl:text-right xl:w-[110px]">
											Max Time: (min)
										</label>
										<input
											type="text"
											className="w-[170px] cursor-pointer pl-3 rounded-2xl"
											name="maxReadyTime"
											id="time"
											placeholder="30"
											value={
												recipeParams.maxReadyTime
													? recipeParams.maxReadyTime
													: ""
											}
											onChange={(e) => setParamsState(e)}
										/>
									</div>
								</div>
							</div>

							{/* Input field and button */}
							<div className="bg-background flex justify-center items-center px-3 pt-6 gap-3">
								<input
									type="text"
									placeholder="Loaded Veggie Omelet"
									onChange={(e) => setRecipeToSearch(e.target.value)}
									value={recipeToSearch}
									className="w-3/4 h-10 pl-4 text-xl rounded-2xl bg-background border-2 border-text"
									onKeyDown={(e) => checkKeyDown(e)}
								/>
								<button
									onClick={() => apiCall()}
									className="w-1/4 text-xl border-2 border-text py-1 px-1 rounded-full hover:bg-main hover:transition-all ease-in-out duration-300 hover:scale-105">
									Search
								</button>
							</div>
						</div>
						<div className="flex flex-col w-full gap-5 my-5 justify-center items-center md:flex-row md:flex-wrap md:w-[90%] md:gap-3">
							{recipes[0]?.id !== undefined ? (
								recipes?.map(
									(recipe: RecipeProps): JSX.Element => (
										<RecipeCard {...recipe} />
									)
								)
							) : (
								<div className="flex justify-center items-center min-h-[calc(100vh-25rem)]">
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
				</div>
				<RightImage />
			</div>
		</div>
	);
};

export default SearchPage;
