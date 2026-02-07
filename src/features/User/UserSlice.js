import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
	followUserService,
	getAllUsersService,
	unfollowUserService,
	updateUserDataService,
} from "../../services/userService";

const initialState = {
	allUsers: [],
	activeUser: {},
	loading: false,
};

// Function to update a user data from all users
const updateSingleUser = (data, currentUser) => {
	const updatedData = data.map((user) => {
		if (user.username === currentUser?.username) {
			return currentUser;
		} else {
			return user;
		}
	});
	return updatedData;
};

// All users here
export const getAllUsers = createAsyncThunk(
	"posts/getAllUsers",
	async (_, { rejectWithValue }) => {
		try {
			return await getAllUsersService();
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Update user data here
export const updateUserData = createAsyncThunk(
	"posts/updateUserData",
	async ({ userData, authToken }, { rejectWithValue }) => {
		try {
			return await updateUserDataService(userData, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Follow user  here
export const followUser = createAsyncThunk(
	"posts/followUser",
	async ({ followUserID, authToken }, { rejectWithValue }) => {
		try {
			return await followUserService(followUserID, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

// Unfollow user  here
export const unfollowUser = createAsyncThunk(
	"posts/unfollowUser",
	async ({ unfollowUserID, authToken }, { rejectWithValue }) => {
		try {
			return await unfollowUserService(unfollowUserID, authToken);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const userSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			//! All users reducer here
			.addCase(getAllUsers.pending, (state) => {
				state.loading = true;
			})
			.addCase(getAllUsers.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.allUsers = payload?.data?.users;
			})
			.addCase(getAllUsers.rejected, (state) => {
				state.loading = false;
				toast.error("Some error occurred getting users.");
			})

			//! Update user reducer here
			.addCase(updateUserData.pending, (state) => {
				state.loading = true;
			})
			.addCase(updateUserData.fulfilled, (state, action) => {
				state.loading = false;
				const updatedUserData = action.payload?.data?.user;

				const updatedUsers = state?.allUsers?.map((user) => {
					if (user.username === updatedUserData?.username) {
						return updatedUserData;
					} else {
						return user;
					}
				});
				state.allUsers = updatedUsers;
				toast.success("User data updated successfully.");
			})
			.addCase(updateUserData.rejected, (state) => {
				state.loading = false;
				toast.error("Some error occurred updating users.");
			})

			// ! Follow user reducer here
			.addCase(followUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(followUser.fulfilled, (state, action) => {
				state.loading = false;
				const currentUser = action.payload?.data?.user;
				const followedUser = action.payload?.data?.followUser;
				state.allUsers = updateSingleUser(
					current(state).allUsers,
					currentUser,
				);
				state.allUsers = updateSingleUser(
					current(state).allUsers,
					followedUser,
				);
				toast.success("User followed.");
			})
			.addCase(followUser.rejected, (state) => {
				state.loading = false;
				toast.error("Some error occurred at following user.");
			})

			// ! Unfollow user reducer here
			.addCase(unfollowUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(unfollowUser.fulfilled, (state, action) => {
				state.loading = false;
				const currentUser = action.payload?.data?.user;
				const unfollowedUser = action.payload?.data?.followUser;
				state.allUsers = updateSingleUser(
					current(state).allUsers,
					currentUser,
				);
				state.allUsers = updateSingleUser(
					current(state).allUsers,
					unfollowedUser,
				);
				toast.success("User unfollowed.");
			})
			.addCase(unfollowUser.rejected, (state) => {
				state.loading = false;
				toast.error("Some error occurred at unfollowing user.");
			});
	},
});

export default userSlice.reducer;
