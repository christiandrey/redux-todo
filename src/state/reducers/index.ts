import update from "immutability-helper";

import { ActionTypes } from "../constants/actionTypes";
import { IStoreAction } from "../actions";
import { Todo } from "../../entities/Todo";

export interface IStoreState {
	readonly todos: ReadonlyArray<Todo>;
	readonly isLoading?: boolean;
}

const initialState: IStoreState = {
	todos: new Array<Todo>(),
	isLoading: true
};

export function rootReducer(state = initialState, action: IStoreAction): IStoreState {
	const { type, payload, payloadList } = action;

	if (type === ActionTypes.ADD_TODO) {
		state = update(state, { isLoading: { $set: true } });
	}

	if (type === ActionTypes.ADD_TODO_SUCCESS) {
		state = update(state, {
			todos: { $unshift: [payload] },
			isLoading: { $set: false }
		});
	}

	if (type === ActionTypes.REMOVE_TODO) {
		state = update(state, { isLoading: { $set: true } });
	}

	if (type === ActionTypes.REMOVE_TODO_SUCCESS) {
		const index = state.todos.findIndex(x => x.id === payload.id);
		state = update(state, {
			todos: { $splice: [[index, 1]] },
			isLoading: { $set: false }
		});
	}

	if (type === ActionTypes.FETCH_TODOS) {
		state = update(state, { isLoading: { $set: true } });
	}

	if (type === ActionTypes.FETCH_TODO_SUCCESS) {
		state = update(state, {
			todos: { $unshift: payloadList },
			isLoading: { $set: false }
		});
	}

	return state;
}
