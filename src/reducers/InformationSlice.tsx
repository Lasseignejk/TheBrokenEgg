import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InformationInitialState {
	id: number;
	title: string;
	image: string;
	servings: number;
	readyInMinutes: number;
	sourceName: string;
	sourceUrl: string;
	spoonacularScore: number;
	extendedIngredients: [
		{
			name: string;
			original: string;
		}
	];
}

const initialState: InformationInitialState = {
	id: 0,
	title: "",
	image: "",
	servings: 0,
	readyInMinutes: 0,
	sourceName: "",
	sourceUrl: "",
	spoonacularScore: 0,
	extendedIngredients: [
		{
			name: "",
			original: "",
		},
	],
};

export const informationSlice = createSlice({
	name: "information",
	initialState,
	reducers: {
		searchForInformation: (
			state,
			action: PayloadAction<InformationInitialState>
		) => {
			return action.payload;
		},
	},
});

export const { searchForInformation } = informationSlice.actions;

export default informationSlice.reducer;
