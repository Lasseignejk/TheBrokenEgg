import React from "react";

interface InstructionProps {
	number?: number;
	step?: string[];
}

const InstructionsSteps = ({ number, step }: InstructionProps): JSX.Element => {
	return (
		<div className="flex text-lg leading-relaxed">
			<p className="w-[35px]">{number}.</p>
			<p className="w-full">{step}</p>
		</div>
	);
};

export default InstructionsSteps;
