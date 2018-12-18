import createSagaMiddleware from "redux-saga";
import initializeSagas from "../sagas";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { fetchTodos } from "../actions";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "../reducers";

const persistConfig = { key: "root", storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const persistedStore = () => {
	let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
	let persistor = persistStore(store);

	sagaMiddleware.run(initializeSagas);

	store.dispatch(fetchTodos());

	return { store, persistor };
};

export default persistedStore();
