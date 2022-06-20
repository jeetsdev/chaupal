import axios from "axios";

export const getAllCommentService = (postID) => {
	return axios.get(`/api/comments/${postID}`);
};

export const addCommentService = (postID, commentData, authToken) => {
	return axios.post(
		`/api/comments/add/${postID}`,
		{
			commentData: commentData,
		},
		{
			headers: { authorization: authToken },
		},
	);
};
