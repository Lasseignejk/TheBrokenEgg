import React from "react";

interface InstructionProps {
	results: [
		{
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
	];
}

const RecipeStep = ({ results }: InstructionProps) => {
	return (
		<div>
			<h1>This is a recipe step.</h1>
			{/* <p>{steps[0].number}</p> */}
		</div>
	);
};

export default RecipeStep;
