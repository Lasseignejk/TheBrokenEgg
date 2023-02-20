import React from "react";
import { useAppSelector } from "../../../util/hooks";
import { InstructionProps, JSONInstructions } from "../../../util/Interfaces";

const InstructionsSteps = ({ number, step }: InstructionProps): JSX.Element => {
	return (
		<div className="flex">
			<p className="w-[35px]">{number}.</p>
			<p className="w-full">{step}</p>
		</div>
	);
};

export default InstructionsSteps;
