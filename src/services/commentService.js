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

//! Defined wrong on mockbee docs...
export const deleteCommentService = (postID, commentID, authToken) => {
	return axios.post(
		`/api/comments/delete/${postID}/${commentID}`,
		{},
		{
			headers: { authorization: authToken },
		},
	);
};
