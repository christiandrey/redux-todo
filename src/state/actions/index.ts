import { Todo } from "../../entities/Todo";
import { ActionTypes } from "../constants/actionTypes";
import { AnyAction } from "redux";

// export interface IStoreAction {
// 	type: string;
// 	payload?: Todo;
// }

export function addTodo(payload: Todo): AnyAction {
	return {
		type: ActionTypes.addTodo,
		payload
	};
}

export function removeTodo(payload: Todo): AnyAction {
	return {
		type: ActionTypes.removeTodo,
		payload
	};
}
