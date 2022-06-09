import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const NotRequireAuth = () => {
	const { authToken } = useSelector((store) => store.auth);
	return authToken ? <Navigate to="/home" replace /> : <Outlet />;
};
