import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import { ActionTypes } from "../constants/actionTypes";
// import { IStoreAction, fetchTodosSuccess, fetchTodosFailure, addTodoSuccess, addTodoFailure, removeTodoSuccess, removeTodoFailure } from "../actions";
import * as Actions from "../actions";
import { Api } from "../../api/api";

function* fetchTodos() {
	try {
		const todos = yield call(Api.fetchTodos);
		yield put(Actions.fetchTodosSuccess(todos.data));
	} catch (error) {
		yield put(Actions.fetchTodosFailure());
	}
}

function* addTodo(action: Actions.IStoreAction) {
	try {
		const todo = yield call(Api.addTodo, action.payload);
		yield put(Actions.addTodoSuccess(todo.data));
	} catch (error) {
		yield put(Actions.addTodoFailure());
	}
}

function* removeTodo(action: Actions.IStoreAction) {
	try {
		const todo = yield call(Api.removeTodo, action.payload);
		yield put(Actions.removeTodoSuccess(action.payload));
	} catch (error) {
		yield put(Actions.removeTodoFailure());
	}
}

function* initializeSagas() {
	yield takeLatest(ActionTypes.FETCH_TODOS, fetchTodos);
	yield takeLatest(ActionTypes.ADD_TODO, addTodo);
	yield takeEvery(ActionTypes.REMOVE_TODO, removeTodo);
}

export default initializeSagas;
