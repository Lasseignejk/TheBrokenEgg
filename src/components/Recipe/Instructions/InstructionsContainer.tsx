import React from "react";
import { JSONInstructions } from "../../../util/Interfaces";
import InstructionsSteps from "./InstructionsSteps";

const InstructionsContainer = ({
	name,
	steps,
}: JSONInstructions): JSX.Element => {
	interface InstructionProps {
		number?: number;
		step?: string[];
	}

	return (
		<>
			<h1 className="ml-7 font-bold">{name}</h1>
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
