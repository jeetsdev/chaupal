import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/Auth/AuthSlice";
import PostReducer from "../features/Post/PostSlice";
import CommentReducer from "../features/Commnets/CommentSlice";
import userReducer from "../features/User/UserSlice";

export const store = configureStore({
	reducer: {
		auth: AuthReducer,
		post: PostReducer,
		comment: CommentReducer,
		user:userReducer,
	},
});
