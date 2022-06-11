import "./App.css";
import { MyToast, NewPostModal } from "./components";
import { NavigationRoutes } from "./routes/NavigationRoutes";

function App() {
	return (
		<div id="main-app">
			<MyToast />
			<NewPostModal />
			<NavigationRoutes />
		</div>
	);
}

export default App;
