import axios from "axios";

export const getAllUsersService = async () => {
	const response = await axios.get("/api/users");
	return response.data;
};

export const updateUserDataService = async (userData, authToken) => {
	const response = await axios.post(
		`/api/users/edit`,
		{
			userData: userData,
		},
		{
			headers: { authorization: authToken },
		},
	);
	return response.data;
};

export const followUserService = async (followUserID, authToken) => {
	const response = await axios.post(
		`/api/users/follow/${followUserID}`,
		{},
		{
			headers: { authorization: authToken },
		},
	);
	return response.data;
};

export const unfollowUserService = async (unfollowUserID, authToken) => {
	const response = await axios.post(
		`/api/users/unfollow/${unfollowUserID}`,
		{},
		{
			headers: { authorization: authToken },
		},
	);
	return response.data;
};
