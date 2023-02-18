import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./src/reducers/AllRecipesSlice";
import instructionReducer from "./src/reducers/InstructionsSlice";
import informationReducer from "./src/reducers/InformationSlice";

export const store = configureStore({
	reducer: {
		recipes: recipeReducer,
		instructions: instructionReducer,
		information: informationReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
