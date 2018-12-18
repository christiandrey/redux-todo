import { Todo } from "../../entities/Todo";
import { ActionTypes } from "../constants/actionTypes";
import { AnyAction } from "redux";

export interface IStoreAction extends AnyAction {
	type: string;
	payload?: Todo;
	payloadList?: Array<Todo>;
}

export function fetchTodos(): IStoreAction {
	return {
		type: ActionTypes.FETCH_TODOS
	};
}

export function fetchTodosSuccess(payloadList: Array<Todo>) {
	return {
		type: ActionTypes.FETCH_TODO_SUCCESS,
		payloadList
	};
}

export function fetchTodosFailure() {
	return {
		type: ActionTypes.FETCH_TODOS_FAILURE
	};
}

export function addTodo(payload: Todo): IStoreAction {
	return {
		type: ActionTypes.ADD_TODO,
		payload
	};
}

export function addTodoSuccess(payload: Todo) {
	return {
		type: ActionTypes.ADD_TODO_SUCCESS,
		payload
	};
}

export function addTodoFailure() {
	return {
		type: ActionTypes.ADD_TODO_FAILURE
	};
}

export function removeTodo(payload: Todo): IStoreAction {
	return {
		type: ActionTypes.REMOVE_TODO,
		payload
	};
}

export function removeTodoSuccess(payload: Todo) {
	return {
		type: ActionTypes.REMOVE_TODO_SUCCESS,
		payload
	};
}

export function removeTodoFailure() {
	return {
		type: ActionTypes.REMOVE_TODO_FAILURE
	};
}
