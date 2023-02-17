import React from "react";
interface RecipeProps {
	id: number;
	title: string;
	image: string;
	imageType: string;
}

const RecipeCard = ({ id, title, image }: RecipeProps) => {
	return (
		<div className="flex flex-col mx-5 text-center text-2xl rounded-lg bg-main p-5 gap-2 font-grandStand font-bold">
			<img src={image} alt="" className="rounded-2xl" />
			<h2>{title}</h2>
		</div>
	);
};

export default RecipeCard;
