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
	extraReducers: (builder) => {
		builder
			//! All post reducer here
			.addCase(getAllPost.pending, (state) => {
				state.loading = true;
			})
			.addCase(getAllPost.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.allPosts = payload?.data?.posts;
			})
			.addCase(getAllPost.rejected, (state) => {
				state.loading = false;
				toast.error("Some error occurred while fetching posts.");
			})

			//! Create new post reducer here
			.addCase(createNewPost.pending, (state) => {
				state.loading = true;
			})
			.addCase(createNewPost.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.allPosts = payload?.data?.posts;
				toast.success("Posted successfully.");
			})
			.addCase(createNewPost.rejected, (state) => {
				state.loading = false;
				toast.error("Some error occurred while creating posts.");
			})

			//! Update user post reducer here
			.addCase(updateUserPost.pending, (state) => {
				state.loading = true;
			})
			.addCase(updateUserPost.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.allPosts = payload?.data?.posts;
				toast.success("Updated successfully.");
			})
			.addCase(updateUserPost.rejected, (state) => {
				state.loading = false;
				toast.error("Some error occurred while updating posts.");
			})

			//! Delete user post reducer here
			.addCase(deleteUserPost.pending, (state) => {
				state.loading = true;
			})
			.addCase(deleteUserPost.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.allPosts = payload?.data?.posts;
				toast.success("Deleted successfully.");
			})
			.addCase(deleteUserPost.rejected, (state) => {
				state.loading = false;
				toast.error("Some error occurred while deleting posts.");
			})

			//! Like user post reducer here
			.addCase(likePost.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.allPosts = payload?.data?.posts;
				toast.success("Liked successfully.");
			})
			.addCase(likePost.rejected, (state) => {
				state.loading = false;
				toast.error("Some error occurred while Liking posts.");
			})

			//! Dislike post reducer here
			.addCase(dislikePost.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.allPosts = payload?.data?.posts;
				toast.success("Removed from likes.");
			})
			.addCase(dislikePost.rejected, (state) => {
				state.loading = false;
				toast.error("Some error occurred while Disliking posts.");
			})

			// ! Add to bookmark reducer here
			.addCase(addToBookmark.fulfilled, (state, action) => {
				state.loading = false;
				state.bookmarkedPost = action.payload?.data?.bookmarks;
				toast.success("Added to bookmark.");
			})
			.addCase(addToBookmark.rejected, (state) => {
				state.loading = false;
				toast.error("Error occurred while adding to bookmark.");
			})

			// ! Remove from bookmark reducer here
			.addCase(removeFromBookmark.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.bookmarkedPost = payload?.data?.bookmarks;
				toast.success("Removed from bookmark.");
			})
			.addCase(removeFromBookmark.rejected, (state) => {
				state.loading = false;
				toast.error("Error occurred while removing from bookmark.");
			});
	},
});

export const { toggleNewPostModal } = postSlice.actions;
export default postSlice.reducer;
