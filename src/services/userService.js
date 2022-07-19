import axios from "axios";

export const getAllUsersService = () => {
	return axios.get("/api/users");
};

export const updateUserDataService = (userData, authToken) => {
	return axios.post(
		`/api/users/edit`,
		{
			userData: userData,
		},
		{
			headers: { authorization: authToken },
		},
	);
};

export const followUserService = (followUserID, authToken) => {
	return axios.post(
		`/api/users/follow/${followUserID}`,
		{},
		{
			headers: { authorization: authToken },
		},
	);
};

export const unfollowUserService = (unfollowUserID, authToken) => {
	return axios.post(
		`/api/users/unfollow/${unfollowUserID}`,
		{},
		{
			headers: { authorization: authToken },
		},
	);
};
