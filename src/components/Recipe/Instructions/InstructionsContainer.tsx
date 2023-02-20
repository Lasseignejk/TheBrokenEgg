import React from "react";
import { useAppSelector } from "../../../util/hooks";
import { InstructionProps, JSONInstructions } from "../../../util/Interfaces";
import InstructionsSteps from "./InstructionsSteps";

const InstructionsContainer = ({
	name,
	steps,
}: JSONInstructions): JSX.Element => {
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
