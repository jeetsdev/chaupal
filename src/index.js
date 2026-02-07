import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);

// Use basename only in production for GitHub Pages
const basename = process.env.NODE_ENV === "production" ? "/chaupal" : "/";

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename={basename}>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
