import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { MyToast, NewPostModal } from "./components";
import { getAllPost } from "./features/Post/PostSlice";
import { getAllUsers } from "./features/User/UserSlice";
import { NavigationRoutes } from "./routes/NavigationRoutes";

function App() {
	// Getting all post here
    const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPost());
		dispatch(getAllUsers());
	}, [dispatch]);

	return (
		<div id="main-app">
			<MyToast />
			<NewPostModal />
			<NavigationRoutes />
		</div>
	);
}

export default App;
