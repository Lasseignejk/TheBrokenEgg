import React from "react";

interface RecipeTagsProps {
	cuisines: string[];
	dishTypes: string[];
}

const HomeRecipeTags = ({
	cuisines,
	dishTypes,
}: RecipeTagsProps): JSX.Element => {
	return (
		<>
			{cuisines.map(
				(cuisine: string): JSX.Element => (
					<span className="text-lg bg-main font-bold px-3 rounded-2xl">
						{cuisine}
					</span>
				)
			)}
			{dishTypes.map(
				(type: string): JSX.Element => (
					<span className="text-lg bg-main font-bold px-3 rounded-2xl">
						{type}
					</span>
				)
			)}
		</>
	);
};

export default HomeRecipeTags;
