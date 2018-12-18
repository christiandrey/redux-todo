import axios, { AxiosPromise } from "axios";
import { Todo } from "../entities/Todo";

export namespace Api {
	export function fetchTodos(): AxiosPromise<Array<Todo>> {
		return axios.get<Array<Todo>>("https://jsonplaceholder.typicode.com/todos");
	}

	export function addTodo(todo: Todo): AxiosPromise<Todo> {
		return axios.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo);
	}

	export function removeTodo(todo: Todo): AxiosPromise<Todo> {
		return axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`);
	}
}
