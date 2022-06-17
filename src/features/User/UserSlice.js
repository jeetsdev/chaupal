import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getAllPostService } from "../../services/PostService";
import { getCurrentUserService } from "../../services/userService";

const initialState = {
	allUser: [],
	posts: [],
	loading: false,
};

export const getAllUsers = createAsyncThunk(
	"posts/getAllPost",
	async (_, { rejectWithValue }) => {
		try {
			return await getAllPostService();
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const getCurrentUser = createAsyncThunk(
	"posts/getAllPost",
	async (userId, { rejectWithValue }) => {
		try {
			return await getCurrentUserService();
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
		[getCurrentUser.pending]: (state) => {
			state.loading = true;
		},
		[getCurrentUser.fulfilled]: (state, action) => {
			console.log("action: ", action);
			state.loading = false;
			// state.allPost = payload?.data?.posts;
		},
		[getCurrentUser.rejected]: (state, action) => {
			console.log('action: ', action);
			state.loading = false;
			toast.error("Some error occured while fetching posts.");
		},
	},
});

export default userSlice.reducer;
