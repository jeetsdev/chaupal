import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
	getAllUsersService,
	getCurrentUserService,
	updateUserDataService,
} from "../../services/userService";

const initialState = {
	allUsers: [],
	activeUser: {},
	loading: false,
};

// All users here
export const getAllUsers = createAsyncThunk(
	"posts/getAllUsers",
	async (_, { rejectWithValue }) => {
		try {
			return await getAllUsersService();
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Axctive user here
export const getCurrentUser = createAsyncThunk(
	"posts/getCurrentUser",
	async ({ userId }, { rejectWithValue }) => {
		try {
			return await getCurrentUserService(userId);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Axctive user here
export const updateUserData = createAsyncThunk(
	"posts/updateUserData",
	async ({ userData, authToken }, { rejectWithValue }) => {
		try {
			return await updateUserDataService(userData, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const userSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	extraReducers: {
		//! All users reducer here
		[getAllUsers.pending]: (state) => {
			state.loading = true;
		},
		[getAllUsers.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.allUsers = payload?.data?.users;
		},
		[getAllUsers.rejected]: (state, action) => {
			state.loading = false;
			toast.error("Some error occured getting users.");
		},

		//! Current users reducer here
		[getCurrentUser.pending]: (state) => {
			state.loading = true;
		},
		[getCurrentUser.fulfilled]: (state, { payload }) => {
			state.loading = false;
			// state.allUsers = payload?.data?.users;
		},
		[getCurrentUser.rejected]: (state, action) => {
			state.loading = false;
			toast.error("Some error occured getting users.");
		},

		//! All users reducer here
		[updateUserData.pending]: (state) => {
			state.loading = true;
		},
		[updateUserData.fulfilled]: (state, action) => {
			state.loading = false;
			const updatedUserData = action.payload?.data?.user;

			const updatedUsers = state?.allUsers?.map((user) => {
				if (user.username === updatedUserData?.username) {
					return updatedUserData;
				} else {
					return user;
				}
			});
			state.allUsers = updatedUsers;
			toast.success("User data updated successfully.");
		},
		[updateUserData.rejected]: (state, action) => {
			state.loading = false;
			toast.error("Some error occured getting users.");
		},
	},
});

export default userSlice.reducer;
