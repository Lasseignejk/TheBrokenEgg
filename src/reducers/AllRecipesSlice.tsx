import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RecipeInitialState {
	results: [
		{
			id?: number;
			title?: string;
			image?: string;
			imageType?: string;
		}
	];
}

const initialState: RecipeInitialState = {
	results: [{}],
};

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
