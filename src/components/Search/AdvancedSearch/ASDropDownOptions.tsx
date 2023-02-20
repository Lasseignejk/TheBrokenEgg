import React from "react";

interface OptionsProps {
	title: string;
	values: string[];
}

const DropDownSearch = ({ title, values }: OptionsProps): JSX.Element => {
	return (
		<>
			{values?.map(
				(item): JSX.Element => (
					<option className="bg-background hover:bg-accent" value={item}>
						{item}
					</option>
				)
			)}
		</>
	);
};

export default DropDownSearch;
