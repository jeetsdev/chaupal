import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getAllUsersService } from "../../services/userService";

const initialState = {
	allUsers: [],
	loading: false,
};

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

export const userSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: {
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
	},
});

export default userSlice.reducer;
