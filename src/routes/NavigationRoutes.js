import { Route, Routes } from "react-router-dom";
import { Home, Landing, NotFound } from "../pages";

export const NavigationRoutes = () => {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Landing />} />
			<Route path="/home" element={<Home />} />
		</Routes>
	);
};
