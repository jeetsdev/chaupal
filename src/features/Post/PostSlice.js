import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
	createNewPostService,
	getAllPostService,
	updateUserPostService,
	deleteUserPostService,
	likePostService,
	dislikePostService,
	addToBookmarkService,
	removeFromBookmarkService,
} from "../../services/PostService";

const initialState = {
	allPosts: [],
	posts: [],
	bookmarkedPost: [],
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
		try {
			return await dislikePostService(postID, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Add to bookmark post
export const addToBookmark = createAsyncThunk(
	"posts/addToBookmark",
	async ({ postID, authToken }, { rejectWithValue }) => {
		try {
			return await addToBookmarkService(postID, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Remove from bookmark post
export const removeFromBookmark = createAsyncThunk(
	"posts/removeFromBookmark",
	async ({ postID, authToken }, { rejectWithValue }) => {
		try {
			return await removeFromBookmarkService(postID, authToken);
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
			state.loading = false;
			toast.error("Some error occured while Disliking posts.");
		},

		// ! Add to bookmark reducer here
		[addToBookmark.fulfilled]: (state, action) => {
			state.loading = false;
			state.bookmarkedPost = action.payload?.data?.bookmarks;
			toast.success("Added to bookmark.");
		},
		[addToBookmark.rejected]: (state, action) => {
			state.loading = false;
			toast.error("Error occured while adding to bookmark.");
		},

		// ! Remove from bookmark reducer here
		[removeFromBookmark.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.bookmarkedPost = payload?.data?.bookmarks;
			toast.success("Removed from bookmark.");
		},
		[removeFromBookmark.rejected]: (state, action) => {
			state.loading = false;
			toast.error("Error occured while removing from bookmark.");
		},
	},
});

export const { toggleNewPostModal } = postSlice.actions;
export default postSlice.reducer;
