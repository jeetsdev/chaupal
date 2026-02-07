import axios from "axios";

export const getAllCommentService = async (postID) => {
	const response = await axios.get(`/api/comments/${postID}`);
	return response.data;
};

export const addCommentService = async (postID, commentData, authToken) => {
	const response = await axios.post(
		`/api/comments/add/${postID}`,
		{
			commentData: commentData,
		},
		{
			headers: { authorization: authToken },
		},
	);
	return response.data;
};

//! Defined wrong on mockbee docs...
export const deleteCommentService = async (postID, commentID, authToken) => {
	const response = await axios.post(
		`/api/comments/delete/${postID}/${commentID}`,
		{},
		{
			headers: { authorization: authToken },
		},
	);
	return response.data;
};
