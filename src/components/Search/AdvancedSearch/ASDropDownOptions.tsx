import React from "react";

interface OptionsProps {
	values: string[];
}

const DropDownSearch = ({ values }: OptionsProps): JSX.Element => {
	return (
		<>
			{values?.map(
				(item: string, index: number): JSX.Element => (
					<option
						className="bg-background hover:bg-accent"
						value={item}
						key={index}>
						{item}
					</option>
				)
			)}
		</>
	);
};

export default DropDownSearch;
