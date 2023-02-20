import React from "react";
import { useAppSelector } from "../functions/hooks";
import { InstructionProps, JSONInstructions } from "../functions/Interfaces";
import InstructionsSteps from "./InstructionsSteps";

const InstructionsContainer = ({ name, steps }: JSONInstructions) => {
	return (
		<>
			<h1 className="text-lg ml-7 font-bold">{name}</h1>
			{steps?.map(
				(item: InstructionProps): JSX.Element => (
					<>
						<InstructionsSteps {...item} />
					</>
				)
			)}
		</>
	);
};

export default InstructionsContainer;
