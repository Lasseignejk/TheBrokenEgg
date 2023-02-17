import { OptionHTMLAttributes } from "react";
import { useAppDispatch, useAppSelector } from "../functions/hooks";
import { useState, useEffect } from "react";
import { searchRecipe, reset } from "../reducers/RecipieSlice";
import RecipeCard from "../components/RecipeCard";

const Search = () => {
	const recipes = useAppSelector((state) => state.recipe);
	const dispatch = useAppDispatch();

	const [recipeToSearch, setRecipeToSearch] = useState<string>("");

	// interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
	// 	name: string;
	// 	value: string;
	// }

	// const cuisineOption = ({name, value, ...props}:OptionProps) {
	// 	return (
	// 		<option {...props} name="boy"></option>
	// 	)
	// }

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
		id: number;
		title: string;
		image: string;
		imageType: string;
	}

	const apiCall = async () => {
		const url: string = import.meta.env.VITE_SEARCH_API + recipeToSearch;
		const rawData = await fetch(url);
		const json: JSON = await rawData.json();
		console.log(json.results);
		dispatch(searchRecipe(json.results));
	};

	return (
		<div className="flex flex-col">
			<div>
				{/* Advanced Search */}
				<div>
					<div>
						<label htmlFor="cuisine"></label>
						<select id="cuisine" name="cuisine">
							<option value="african" name="cuisine">
								African
							</option>
							<option value="american" name="cuisine">
								American
							</option>
							<option value="british" name="cuisine">
								British
							</option>
						</select>
					</div>
				</div>
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
				{recipes?.map(
					(recipe: RecipeProps): JSX.Element => (
						<RecipeCard {...recipe} />
					)
				)}
			</div>
		</div>
	);
};

export default Search;
