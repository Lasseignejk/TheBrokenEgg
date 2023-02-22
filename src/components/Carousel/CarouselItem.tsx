import React from "react";
import { Link } from "react-router-dom";
import { searchForInformation } from "../../reducers/InformationSlice";
import { searchForInstructions } from "../../reducers/InstructionsSlice";
import { useAppDispatch } from "../../util/hooks";
import { JSONInformation, JSONInstructions } from "../../util/Interfaces";

interface CarouselItemProps {
	id?: number;
	url?: string;
	index?: number;
	stopSlide?: () => void;
	startSlide?: () => void;
}

const CarouselItem = ({
	id,
	url,
	stopSlide,
	startSlide,
}: CarouselItemProps): JSX.Element => {
	const dispatch = useAppDispatch();

	const apiCall = async (): Promise<void> => {
		await apiCallRecipeInstructions();
		await apiCallRecipeInformation();
	};

	const apiCallRecipeInformation = async (): Promise<Object> => {
		const url: string =
			`https://api.spoonacular.com/recipes/${id}/information?apiKey=` +
			import.meta.env.VITE_APIKEY;
		const rawData: Response = await fetch(url);
		const json: JSONInformation = await rawData.json();
		return dispatch(searchForInformation(json));
		// console.log(json);
	};

	const apiCallRecipeInstructions = async (): Promise<Object> => {
		const url: string =
			`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=` +
			import.meta.env.VITE_APIKEY;

		const rawData: Response = await fetch(url);
		const json: JSONInstructions[] = await rawData.json();
		// console.log(json);

		return dispatch(searchForInstructions(json));
	};
	return (
		<div
			className="carousel-item"
			onMouseEnter={() => stopSlide}
			onMouseOut={() => startSlide}>
			<Link to={"/search/" + id} onClick={() => apiCall()}>
				<img src={url} alt="" className="w-full" />
			</Link>
		</div>
	);
};

export default CarouselItem;
