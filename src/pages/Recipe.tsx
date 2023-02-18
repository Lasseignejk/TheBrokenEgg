import React from "react";
import RecipeStep from "../components/RecipeStep";
import { useAppSelector } from "../functions/hooks";

const Recipe = () => {
	const instructions = useAppSelector((state) => state.instructions.results);
	const information = useAppSelector((state) => state.information);

	interface InstructionProps {
		steps: [
			{
				number: number;
				step: string;
			}
		];
	}

	return (
		<div>
			<h1>{information.title}</h1>
			<h1>{information.extendedIngredients[0].name}</h1>
			{instructions?.map(
				(steps: InstructionProps): JSX.Element =>
					// <RecipeStep {...steps} />
					console.log(steps)
			)}
		</div>
	);
};

export default Recipe;
