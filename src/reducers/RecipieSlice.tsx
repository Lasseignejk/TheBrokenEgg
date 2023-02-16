import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface recipeInitialState {
	value: [];
}

const initialState: recipeInitialState = {
	value: [],
};

// Use the PayloadAction type to declare the contents of 'action.payload'
// (state, action: PayloadAction<number>)

export const recipeSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		searchRecipe: (state, action) => {
			return action.payload;
		},
		searchOneRecipe: (state, action) => {
			return action.payload;
		},
		reset: (state) => {
			return initialState;
		},
	},
});

export const { searchRecipe, searchOneRecipe, reset } = recipeSlice.actions;

export default recipeSlice.reducer;
