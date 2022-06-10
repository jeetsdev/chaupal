import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
	createNewPostService,
	getAllPostService,
	getUserPostService,
} from "../../services/PostService";

const initialState = {
	allPosts: [],
	posts: [],
	loading: false,
};

// All post here
export const getAllPost = createAsyncThunk(
	"posts/getAllPost",
	async (_, { rejectWithValue }) => {
		try {
			return await getAllPostService();
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Create new post here
export const createNewPost = createAsyncThunk(
	"posts/createNewPost",
	async ({ postData, authToken }, { rejectWithValue }) => {
		console.log('authToken: ', authToken);
		try {
			return await createNewPostService(postData, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Get specific user posts here
export const getUserPost = createAsyncThunk(
	"posts/getUserPost",
	async (username, { rejectWithValue }) => {
		try {
			return await getUserPostService();
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: {
		//! All post reducer here
		[getAllPost.pending]: (state) => {
			state.loading = true;
		},
		[getAllPost.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.allPosts = payload?.data?.posts;
		},
		[getAllPost.rejected]: (state, action) => {
			state.loading = false;
			toast.error("Some error occured while fetching posts.");
		},


		//! Create new post reducer here
		[createNewPost.pending]: (state) => {
			state.loading = true;
		},
		[createNewPost.fulfilled]: (state, {payload}) => {
			state.loading = false;
			state.allPosts = payload?.data?.posts;
			toast.success("Posted successfully.")
		},
		[createNewPost.rejected]: (state, action) => {
			console.log('action: ', action);
			state.loading = false;
			toast.error("Some error occured while creating posts.");
		},

		// ! Single user post reducer headers

		[getUserPost.pending]: (state) => {
			state.loading = true;
		},
		[getUserPost.fulfilled]: (state, action) => {
			console.log("action: ", action);
			state.loading = false;
			// state.allPosts = payload?.data?.posts;
		},
		[getUserPost.rejected]: (state, action) => {
			state.loading = false;
			toast.error("Some error occured while fetching posts.");
		},
	},
});

export default postSlice.reducer;
