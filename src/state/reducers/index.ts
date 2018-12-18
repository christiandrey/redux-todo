import { Todo } from "../../entities/Todo";
import { ActionTypes } from "../constants/actionTypes";
import update from "immutability-helper";
import { AnyAction } from "redux";

export interface IStoreState {
	todos: Array<Todo>;
}

const initialState: IStoreState = {
	todos: new Array<Todo>()
};

export function rootReducer(state = initialState, action: AnyAction): IStoreState {
	const { type, payload } = action;

	if (type === ActionTypes.addTodo) {
		state = update(state, { todos: { $unshift: [payload] } });
	}

	if (type === ActionTypes.removeTodo) {
		const index = state.todos.findIndex(x => x.id === payload.id);
		state = update(state, { todos: { $splice: [[index, 1]] } });
	}

	return state;
}
