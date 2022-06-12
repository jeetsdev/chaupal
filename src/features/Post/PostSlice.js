import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
	createNewPostService,
	getAllPostService,
	getUserPostService,
	updateUserPostService,
	deleteUserPostService,
	likePostService,
	dislikePostService,
} from "../../services/PostService";

const initialState = {
	allPosts: [],
	posts: [],
	loading: false,
	postModal: false,
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
		console.log("authToken: ", authToken);
		try {
			return await createNewPostService(postData, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Update user post
export const updateUserPost = createAsyncThunk(
	"posts/updateUserPost",
	async ({ postID, postData, authToken }, { rejectWithValue }) => {
		console.log("authToken: ", authToken);
		try {
			return await updateUserPostService(postID, postData, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Delete user post
export const deleteUserPost = createAsyncThunk(
	"posts/deleteUserPost",
	async ({ postID, authToken }, { rejectWithValue }) => {
		try {
			return await deleteUserPostService(postID, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Like post
export const likePost = createAsyncThunk(
	"posts/likePost",
	async ({ postID, authToken }, { rejectWithValue }) => {
		console.log("authToken: ", authToken);
		try {
			return await likePostService(postID, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Dislike post
export const dislikePost = createAsyncThunk(
	"posts/dislikePost",
	async ({ postID, authToken }, { rejectWithValue }) => {
		console.log("authToken: ", authToken);
		try {
			return await dislikePostService(postID, authToken);
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
	reducers: {
		toggleNewPostModal: (state) => {
			state.postModal = !state.postModal;
		},
	},
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
		[createNewPost.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.allPosts = payload?.data?.posts;
			toast.success("Posted successfully.");
		},
		[createNewPost.rejected]: (state, action) => {
			console.log("action: ", action);
			state.loading = false;
			toast.error("Some error occured while creating posts.");
		},

		//! Update user post reducer here
		[updateUserPost.pending]: (state) => {
			state.loading = true;
		},
		[updateUserPost.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.allPosts = payload?.data?.posts;
			toast.success("Updated successfully.");
		},
		[updateUserPost.rejected]: (state, action) => {
			state.loading = false;
			toast.error("Some error occured while updating posts.");
		},

		//! Delete user post reducer here
		[deleteUserPost.pending]: (state) => {
			state.loading = true;
		},
		[deleteUserPost.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.allPosts = payload?.data?.posts;
			toast.success("Deleted successfully.");
		},
		[deleteUserPost.rejected]: (state, action) => {
			console.log("action: ", action);
			state.loading = false;
			toast.error("Some error occured while deleting posts.");
		},

		//! Like user post reducer here
		[likePost.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.allPosts = payload?.data?.posts;
			toast.success("Liked successfully.");
		},
		[likePost.rejected]: (state, action) => {
			console.log("action: ", action);
			state.loading = false;
			toast.error("Some error occured while Liking posts.");
		},

		//! Dislike post reducer here
		[dislikePost.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.allPosts = payload?.data?.posts;
			toast.success("Removed from likes.");
		},
		[dislikePost.rejected]: (state, action) => {
			console.log("action: ", action);
			state.loading = false;
			toast.error("Some error occured while Disliking posts.");
		},

		// ! Single user post reducer headers
		[getUserPost.pending]: (state) => {
			state.loading = true;
		},
		[getUserPost.fulfilled]: (state, action) => {
			state.loading = false;
			// state.allPosts = payload?.data?.posts;
		},
		[getUserPost.rejected]: (state, action) => {
			state.loading = false;
			toast.error("Some error occured while fetching posts.");
		},
	},
});

export const { toggleNewPostModal } = postSlice.actions;
export default postSlice.reducer;
