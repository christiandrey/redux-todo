import * as React from "react";
import { Todo } from "../../entities/Todo";

interface ITodoItemProps {
	todo: Todo;
	handleRemoveTodo(todo: Todo): void;
}

export default class TodoItem extends React.PureComponent<ITodoItemProps> {
	render() {
		const { todo, handleRemoveTodo } = this.props;
		const { id, content } = todo;
		return (
			<div className="todo-item">
				<span>{content}</span>
				<button onClick={() => handleRemoveTodo(todo)}>Remove</button>
			</div>
		);
	}
}
