import React from "react";
import InstructionsContainer from "../components/InstructionsContainer";
import InstructionsSteps from "../components/InstructionsSteps";
import { useAppSelector } from "../functions/hooks";
import { JSONInformation, JSONInstructions } from "../functions/Interfaces";

const Recipe = () => {
	const instructions = useAppSelector((state) => state.instructions);
	const information = useAppSelector((state) => state.information);

	console.log(instructions);

	return (
		<div className="lg:flex lg:justify-center mb-5">
			<div className=" flex flex-col gap-5 lg:w-[80%] lg:border-2 lg:border-black">
				<div className="flex justify-center">
					<img src={information.image} alt="" />
				</div>
				{/* Recipe Title and basic info */}
				<div className="px-3">
					<h1 className="text-3xl font-grandStand text-center mt-3">
						{information && information.title}
					</h1>
					<div className="lg:flex lg:justify-center">
						<div className="bg-accent rounded-2xl px-3 py-3 text-xl text-center lg:w-[60%]">
							<div className="flex gap-3 justify-between">
								<p className="w-full font-bold">Servings</p>
								<p className="w-full font-bold">Ready in</p>
								<p className="w-full font-bold">Source</p>
							</div>
							<div className="flex gap-3 justify-between">
								<p className="w-full">{information.servings}</p>
								<p className="w-full">{information.readyInMinutes + " min"}</p>
								<p className="w-full">{information.sourceName}</p>
							</div>
						</div>
					</div>
				</div>
				{/* Ingredients */}
				<div className="flex flex-col px-3 gap-3">
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
				{/* Instructions */}
				<div className="flex flex-col px-3 gap-3">
					<div>
						<h2 className="text-xl border-b-2 border-text w-[105px]">
							Instructions
						</h2>
					</div>

					<div className="flex flex-col gap-5">
						{instructions?.map(
							// each item is an individual object
							(item: JSONInstructions): JSX.Element => (
								<div className="flex flex-col gap-2">
									<InstructionsContainer {...item} />
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
