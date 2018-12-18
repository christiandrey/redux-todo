import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App/App";
import persistedStore from "./state/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

console.log(persistedStore.persistor);

ReactDOM.render(
	<Provider store={persistedStore.store}>
		<PersistGate loading={null} persistor={persistedStore.persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("app")
);
