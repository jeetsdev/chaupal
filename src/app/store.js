import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "../features";

export const store = configureStore({
	reducer: {
		auth: AuthReducer,
	},
});
