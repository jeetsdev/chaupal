import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { MyToast, NewPostModal } from "./components";
import { getAllPost } from "./features/Post/PostSlice";
import { getAllUsers } from "./features/User/UserSlice";
import { NavigationRoutes } from "./routes/NavigationRoutes";

function App() {
	// Getting all post here
	const dispatch = useDispatch();
	const { authToken } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(getAllPost());
		dispatch(getAllUsers());
	}, [dispatch, authToken]);

	return (
		<div id="main-app">
			<MyToast />
			<NewPostModal />
			<NavigationRoutes />
		</div>
	);
}

export default App;
