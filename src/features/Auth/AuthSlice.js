import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	authToken: "",
	userData: "",
	error: {
		emailError: "",
		passwordError: "",
	},
	loading: false,
};

export const authSlice = createSlice({
	name: "Auth",
	initialState,
	reducers: {
		// login handler here
		loginHandler: () => {},
	},
});

export default authSlice.reducer;
