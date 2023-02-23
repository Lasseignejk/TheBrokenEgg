import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InstructionsInitialState {
	name?: string;
	steps?: [
		{
			number?: number;
			step?: string[];
		}
	];
}

const initialState: InstructionsInitialState[] = [{}];

export const instructionsSlice = createSlice({
	name: "instructions",
	initialState,
	reducers: {
		searchForInstructions: (
			state,
			action: PayloadAction<InstructionsInitialState[]>
		) => {
			return action.payload;
		},
	},
});

export const { searchForInstructions } = instructionsSlice.actions;

export default instructionsSlice.reducer;
