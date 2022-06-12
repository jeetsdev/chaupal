import axios from "axios";

export const getAllPostService = () => {
	return axios.get("/api/posts");
};

export const createNewPostService = (postData, authToken) => {
	return axios.post(
		`/api/posts`,
		{
			postData: postData,
		},
		{
			headers: { authorization: authToken },
		},
	);
};

export const updateUserPostService = (postId, postData, authToken) => {
	return axios.post(
		`/api/posts/edit/${postId}`,
		{
			postData: postData,
		},
		{
			headers: { authorization: authToken },
		},
	);
};

export const deleteUserPostService = (postId, authToken) => {
	return axios.delete(`/api/posts/${postId}`, {
		headers: { authorization: authToken },
	});
};

export const likePostService = (postID, authToken) => {
	return axios.post(
		`/api/posts/like/${postID}`,
		{},
		{
			headers: { authorization: authToken },
		},
	);
};

export const dislikePostService = (postID, authToken) => {
	return axios.post(
		`/api/posts/dislike/${postID}`,
		{},
		{
			headers: { authorization: authToken },
		},
	);
};

export const getUserPostService = (username) => {
	return axios.get(`/api/posts/user/${username}`);
};
