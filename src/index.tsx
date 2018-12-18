import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./state/store";

declare var window: any;

window.store = store;

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
