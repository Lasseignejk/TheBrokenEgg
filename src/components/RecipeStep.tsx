import React from "react";

interface InstructionProps {
	steps: [
		{
			number: number;
			step: string;
		}
	];
}

const RecipeStep = ({ steps }: InstructionProps) => {
	return <div>RecipeStep</div>;
};

export default RecipeStep;
