import React from "react";
import cuisineOptions from "../../data";

interface OptionsProps {
	title: string;
	values: string[];
}

const DropDownSearch = ({ title, values }: OptionsProps) => {
	return (
		<div>
			<select name={title}>
				{values?.map(
					(item): JSX.Element => (
						<option value={item}>{item}</option>
					)
				)}
			</select>
			{/* <select id="cuisine" name="cuisine">
				<option value="">type of cuisine</option>
				<option value="african">African</option>
				<option value="american">American</option>
				<option value="british">British</option>
			</select> */}
		</div>
	);
};

export default DropDownSearch;
