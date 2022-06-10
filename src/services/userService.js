import axios from "axios";

export const getAllUsersService = () => {
	return axios.get("/api/users");
};

export const getCurrentUserService = (userId) => {
	return axios.get(`/api/users/${userId}`);
};
