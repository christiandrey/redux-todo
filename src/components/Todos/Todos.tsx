import * as React from "react";
import { Todo } from "../../entities/Todo";
import TodoItem from "../TodoItem/TodoItem";

export interface ITodosProps {
	todos?: Array<Todo>;
	removeTodo?(todo: Todo): void;
}

export class Todos extends React.PureComponent<ITodosProps> {
	render() {
		const { todos, removeTodo } = this.props;
		return (
			<React.Fragment>
				{todos.map(todo => (
					<TodoItem todo={todo} handleRemoveTodo={todo => removeTodo(todo)} key={todo.id} />
				))}
			</React.Fragment>
		);
	}
}
