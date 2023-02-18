import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InformationInitialState {
	id: number;
	title: string;
	image: string;
	servings: number;
	readyInMinutes: number;
	sourceName: string;
	sourceURL: string;
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
	sourceURL: "",
	spoonacularScore: 0,
	extendedIngredients: [
		{
			name: "",
			original: "",
		},
	],
};

// Use the PayloadAction type to declare the contents of 'action.payload'
// (state, action: PayloadAction<number>)

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
