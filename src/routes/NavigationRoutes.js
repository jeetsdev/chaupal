import { Route, Routes } from "react-router-dom";
import { NotRequireAuth, RequireAuth } from "../components";
import {
	Bookmark,
	Explore,
	Home,
	Landing,
	NotFound,
	Profile,
	Login,
	SignUp,
	Post,
	OtherProfile,
} from "../pages";

export const NavigationRoutes = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route element={<RequireAuth />}>
				<Route path="/home" element={<Home />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/bookmark" element={<Bookmark />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/profile/:username" element={<OtherProfile />} />
				<Route path="/post/:postID" element={<Post />} />
			</Route>
			<Route element={<NotRequireAuth />}>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Route>
		</Routes>
	);
};
