import React from "react";
import { useAppSelector } from "../../../util/hooks";
import { JSONInstructions } from "../../../util/Interfaces";
import InstructionsSteps from "./InstructionsSteps";

const InstructionsContainer = ({ name, steps }: JSONInstructions) => {
	interface InstructionProps {
		number?: number;
		step?: string[];
	}

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
