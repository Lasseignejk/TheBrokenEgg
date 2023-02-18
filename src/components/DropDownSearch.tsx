import React from "react";

const DropDownSearch = () => {
	return (
		<div>
			<select id="cuisine" name="cuisine">
				<option value="">type of cuisine</option>
				<option value="african">African</option>
				<option value="american">American</option>
				<option value="british">British</option>
			</select>
		</div>
	);
};

export default DropDownSearch;
