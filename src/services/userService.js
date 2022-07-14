import axios from "axios";

export const getAllUsersService = () => {
	return axios.get("/api/users");
};

export const getCurrentUserService = (userId) => {
	return axios.get(`/api/users/${userId}`, {});
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
