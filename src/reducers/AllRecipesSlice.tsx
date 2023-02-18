import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RecipeInitialState {
	results: [
		{
			id: number;
			title: string;
			image: string;
			imageType: string;
		}
	];
}

const initialState: RecipeInitialState = {
	results: [
		{
			id: 0,
			title: "",
			image: "",
			imageType: "",
		},
	],
};

// Use the PayloadAction type to declare the contents of 'action.payload'
// (state, action: PayloadAction<number>)

export const allRecipesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		searchRecipe: (state, action: PayloadAction<RecipeInitialState>) => {
			return action.payload;
		},
		reset: (state) => {
			return initialState;
		},
	},
});

export const { searchRecipe, reset } = allRecipesSlice.actions;

export default allRecipesSlice.reducer;
