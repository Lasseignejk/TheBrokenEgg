import React from "react";
import { useAppSelector } from "../functions/hooks";
import { InstructionProps, JSONInstructions } from "../functions/Interfaces";

const InstructionsSteps = ({ number, step }: InstructionProps) => {
	return (
		<div className="flex">
			<p className="w-[35px]">{number}.</p>
			<p className="w-full">{step}</p>
		</div>
	);
};

export default InstructionsSteps;
