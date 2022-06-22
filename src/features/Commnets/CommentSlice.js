import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
	addCommentService,
	deleteCommentService,
	getAllCommentService,
} from "../../services/commentService";

const initialState = {
	postComments: [],
	loading: false,
};

// Get all post here
export const getAllComment = createAsyncThunk(
	"posts/getAllComment",
	async ({ postID }, { rejectWithValue }) => {
		try {
			return await getAllCommentService(postID);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Add a comment on post here
export const addComment = createAsyncThunk(
	"posts/addComment",
	async ({ postID, commentData, authToken }, { rejectWithValue }) => {
		try {
			return await addCommentService(postID, commentData, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Get all post here
export const deleteComment = createAsyncThunk(
	"posts/deleteComment",
	async ({ postID, commentID, authToken }, { rejectWithValue }) => {
		try {
			return await deleteCommentService(postID, commentID, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const commentSlice = createSlice({
	name: "comment",
	initialState,
	reducers: {},
	extraReducers: {
		//! Get all comments reducer
		[getAllComment.pending]: (state, action) => {
			state.loading = true;
			state.postComments = [];
		},
		[getAllComment.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.postComments = payload?.data?.comments;
		},
		[getAllComment.rejected]: (state, action) => {
			state.loading = false;
			toast.error("Some error occured while fetching comments.");
		},

		//! Add new comment reducers here
		[addComment.fulfilled]: (state, { meta, payload }) => {
			state.loading = false;
			const currentPost = payload?.data?.posts?.filter(
				(eachPost) => eachPost._id === meta.arg.postID,
			);
			state.postComments = currentPost[0]?.comments;
			toast.success("Comment added");
		},
		[addComment.rejected]: (state, action) => {
			state.loading = false;
			toast.error("Some error occured while addding comments.");
		},

		[deleteComment.fulfilled]: (state, {payload}) => {
			state.loading = false;
			state.postComments = payload?.data?.comments;
			toast.success("Comment deleted.");
		},
		[deleteComment.rejected]: (state, action) => {
			state.loading = false;
			toast.error("Some error occured while deleting comments.");
		},
	},
});

export default commentSlice.reducer;
