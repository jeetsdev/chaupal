import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import toast from "react-hot-toast";

// Getting data from localStorage
const token = localStorage.getItem("encoded-token") || "";
const userInfo = JSON.parse(localStorage.getItem("user-data")) || null;

const initialState = {
	authToken: token,
	userData: userInfo,
	error: {
		usernameError: "",
		emailError: "",
		passwordError: "",
	},
	loading: false,
};

// User login here
export const userLogin = createAsyncThunk(
	"auth/userLogin",
	async (loginFromData, { rejectWithValue }) => {
		try {
			return await axios.post("/api/auth/login", loginFromData);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// User SignUp here
export const userSignUp = createAsyncThunk(
	"auth/userSignUp",
	async (singUpFormData, { rejectWithValue }) => {
		try {
			return await axios.post("/api/auth/signup", singUpFormData);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		userSignOut: (state) => {
			state.authToken = "";
			state.userData = "";
			localStorage.removeItem("encoded-token");
			localStorage.removeItem("user-data");
			toast.success("Sign out successful");
		},
	},

	extraReducers: {
		//! User login reducer here
		[userLogin.pending]: (state) => {
			state.loading = true;
		},
		[userLogin.fulfilled]: (state, { meta, payload }) => {
			state.loading = false;
			const {
				data: { encodedToken, foundUser },
			} = payload;

			// If remember me is true then save
			if (meta.arg.rememberMe) {
				localStorage.setItem("encoded-token", encodedToken);
				localStorage.setItem("user-data", JSON.stringify(foundUser));
			}
			toast.success(`Welcome back ${foundUser.fullName}`);
			state.authToken = encodedToken;
			state.userData = foundUser;
		},
		[userLogin.rejected]: (state, { payload }) => {
			state.loading = false;
			const { status, statusText } = payload?.response;

			// If email not found
			if (status === 404) {
				toast.error(`Username ${statusText}`);
				state.error.usernameError = `User ${statusText}`;
				state.error.passwordError = ``;
			}

			// If password does not match
			if (status === 401) {
				toast.error(`Wrong password!`);
				state.error.usernameError = ``;
				state.error.passwordError = `Wrong password!`;
			}
		},

		//! User sign up reducer here
		[userSignUp.pending]: (state) => {
			state.loading = true;
		},
		[userSignUp.fulfilled]: (state, { payload }) => {
			state.loading = false;
			const {
				data: { encodedToken, createdUser },
			} = payload;
			toast.success(`Welcome ${createdUser.fullName}`);
			state.authToken = encodedToken;
			state.userData = createdUser;
		},
		[userSignUp.rejected]: (state, { payload }) => {
			state.loading = false;
			const { statusText } = payload?.response;
			toast.error(`${statusText}`);
		},
	},
});

export const { userSignOut } = authSlice.actions;
export default authSlice.reducer;
