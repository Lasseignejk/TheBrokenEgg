import React from "react";
import InstructionsContainer from "./Instructions/InstructionsContainer";
import { useAppSelector, useDocumentTitle } from "../../util/hooks";
import { JSONInstructions } from "../../util/Interfaces";
import LeftImage from "../LeftImage";
import RightImage from "../RightImage";

const RecipePage = (): JSX.Element => {
	const instructions = useAppSelector((state) => state.instructions);
	const information = useAppSelector((state) => state.information);
	useDocumentTitle(`The Broken Egg | ${information.title}`);

	interface Ingredients {
		measures?: {
			metric?: {
				amount?: number;
				unitLong?: string;
				unitShort?: string;
			};
			us: {
				amount?: number;
				unitLong?: string;
				unitShort?: string;
			};
		};
		name?: string;
		original?: string;
		originalName?: string;
		unit?: string;
	}

	return (
		<div className="">
			<div className=" min-h-[calc(100vh-14.3rem)] lg:grid lg:grid-cols-homemd xl:grid-cols-homexl ">
				<LeftImage />
				<div className="w-full flex justify-center md:items-center">
					<div className="flex flex-col px-3 justify-center items-center gap-5 sm:w-3/4 lg:w-full">
						<div className=" flex flex-col gap-5 lg:w-[80%] mb-5">
							<div className="flex justify-center">
								<img src={information.image} alt="" className="rounded-2xl" />
							</div>
							{/* Recipe Title and basic info */}
							<div className="">
								<h1 className="text-3xl font-grandStand text-center my-3">
									{information && information.title}
								</h1>
								<div className="lg:flex lg:justify-center">
									<div className="bg-accent rounded-2xl px-3 py-3 text-xl text-center lg:w-[60%]">
										<div className="flex justify-evenly mb-3 md:mb-0">
											<div>
												<p className="font-bold">Servings</p>
												<p className="">{information.servings}</p>
											</div>
											<div>
												<p className="font-bold">Ready in</p>
												<p className="">
													{information.readyInMinutes + " min"}
												</p>
											</div>
											<div className="hidden md:block">
												<p className="font-bold">Source</p>
												{/* <p className="">I am a very long title of a source</p> */}
												<p className="">{information.sourceName}</p>
											</div>
										</div>
										<div className="md:hidden">
											<p className="font-bold">Source</p>
											{/* <p className="">I am a very long title of a source</p> */}
											<p className="">{information.sourceName}</p>
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
										(ingredient: Ingredients): JSX.Element => (
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
				</div>
				<RightImage />
			</div>
		</div>
	);
};

export default RecipePage;
