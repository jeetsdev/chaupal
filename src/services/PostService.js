import axios from "axios";

export const getAllPostService = async () => {
	const response = await axios.get("/api/posts");
	return response.data;
};

export const createNewPostService = async (postData, authToken) => {
	const response = await axios.post(
		`/api/posts`,
		{
			postData: postData,
		},
		{
			headers: { authorization: authToken },
		},
	);
	return response.data;
};

export const updateUserPostService = async (postId, postData, authToken) => {
	const response = await axios.post(
		`/api/posts/edit/${postId}`,
		{
			postData: postData,
		},
		{
			headers: { authorization: authToken },
		},
	);
	return response.data;
};

export const deleteUserPostService = async (postId, authToken) => {
	const response = await axios.delete(`/api/posts/${postId}`, {
		headers: { authorization: authToken },
	});
	return response.data;
};

export const likePostService = async (postID, authToken) => {
	const response = await axios.post(
		`/api/posts/like/${postID}`,
		{},
		{
			headers: { authorization: authToken },
		},
	);
	return response.data;
};

export const dislikePostService = async (postID, authToken) => {
	const response = await axios.post(
		`/api/posts/dislike/${postID}`,
		{},
		{
			headers: { authorization: authToken },
		},
	);
	return response.data;
};

export const addToBookmarkService = async (postID, authToken) => {
	const response = await axios.post(
		`/api/users/bookmark/${postID}`,
		{},
		{
			headers: { authorization: authToken },
		},
	);
	return response.data;
};

export const removeFromBookmarkService = async (postID, authToken) => {
	const response = await axios.post(
		`/api/users/remove-bookmark/${postID}`,
		{},
		{
			headers: { authorization: authToken },
		},
	);
	return response.data;
};

