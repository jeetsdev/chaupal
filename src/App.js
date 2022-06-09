import "./App.css";
import { MyToast } from "./components";
import { NavigationRoutes } from "./routes/NavigationRoutes";

function App() {
	return (
		<div id="main-app">
			<MyToast />
			<NavigationRoutes />
		</div>
	);
}

export default App;
