import { Route, Routes } from "react-router-dom";
import { NotRequireAuth } from "../components";
import { RequireAuth } from "../components/Auth/RequireAuth";
import {
	Bookmark,
	Explore,
	Home,
	Landing,
	NotFound,
	Profile,
	Login,
	SignUp,
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
			</Route>
			<Route element={<NotRequireAuth />}>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Route>
		</Routes>
	);
};
