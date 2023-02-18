import React from "react";
import RecipeStep from "../components/RecipeStep";
import { useAppSelector } from "../functions/hooks";

const Recipe = () => {
	const instructions = useAppSelector((state) => state.instructions);
	const information = useAppSelector((state) => state.information);

	console.log(instructions);

	interface InstructionProps {
		name: "";
		steps: [
			{
				ingredients: [
					{
						image: "";
						name: "";
					}
				];
				number: 0;
				step: "";
			}
		];
	}

	return (
		<div className="lg:flex lg:justify-center">
			<div className=" flex  flex-col gap-5 lg:w-[80%] lg:border-2 lg:border-black">
				<div className="md:flex md:justify-center">
					<img src={information.image} alt="" />
				</div>
				<div className="px-3">
					<h1 className="text-3xl font-grandStand text-center mt-3">
						{information && information.title}
					</h1>
					<div className="bg-accent rounded-2xl px-3 py-3 text-xl text-center lg:w-[80%]">
						<div className="flex gap-3 justify-between">
							<p className="w-full font-bold">Servings</p>
							<p className="w-full font-bold">Ready in</p>
							<p className="w-full font-bold">Source</p>
						</div>
						<div className="flex gap-3 justify-between">
							<p className="w-full">{information.servings}</p>
							<p className="w-full">{information.readyInMinutes}</p>
							<p className="w-full">{information.sourceName}</p>
						</div>
					</div>
				</div>
				<div className="px-3">
					<h2 className="text-xl border-b-2 border-text w-[102px]">
						Ingredients
					</h2>
					<ul>
						{information?.extendedIngredients?.map(
							(ingredient): JSX.Element => (
								<li className="my-2 text-lg">{ingredient.original}</li>
							)
						)}
					</ul>
				</div>
				{/* <div>
				{instructions ? (
					<p>{`The name is ${instructions?.name}`}</p>
				) : (
					<p>Loading</p>
				)}{" "}
			</div> */}
				<div>
					{instructions ? (
						<p>{`The name is ${instructions?.steps?.length}`}</p>
					) : (
						<p>Loading</p>
					)}{" "}
				</div>
				<div>
					{instructions && (
						<p>{`The length is ${instructions?.steps?.length}`}</p>
					)}
				</div>
				<div>
					{/* {instructions?.steps.map(
				(steps: InstructionProps): JSX.Element => (
					return <RecipeStep {...steps} />
				)
			)} */}
				</div>

				{/* <p>{instructions?.steps[0]?.step}</p> */}
				{/* {instructions?.results.length !== 1 ? (
				instructions?.results.map(
					(results: InstructionProps): JSX.Element => (
						<RecipeStep {...results} />
					)
				)
			) : (
				<p></p>
			)} */}
			</div>
		</div>
	);
};

export default Recipe;
