import * as React from "react";
import { Todo } from "../../entities/Todo";
import update from "immutability-helper";

export interface IAddTodoProps {
	addTodo(todo: Todo): void;
}

interface IAddTodoState {
	todo: Todo;
}

export class AddTodo extends React.PureComponent<IAddTodoProps, IAddTodoState> {
	constructor(props: IAddTodoProps) {
		super(props);

		this.state = {
			todo: new Todo({
				userId: 1
			})
		} as IAddTodoState;
	}

	handleChangeTodoContent(value: string) {
		const todo = update(this.state.todo, { title: { $set: value } });
		this.setState({ todo });
	}

	handleSubmit() {
		this.props.addTodo(this.state.todo);
		this.handleChangeTodoContent(null);
	}

	handleKeyPress(key: string) {
		if (key === "Enter") this.handleSubmit();
	}

	render() {
		const { todo } = this.state;
		return (
			<div className="add-todo">
				<input type="text" autoFocus value={todo.title || ""} onChange={e => this.handleChangeTodoContent(e.target.value)} onKeyPress={e => this.handleKeyPress(e.key)} />
				<button type="submit" onClick={() => this.handleSubmit()}>
					Submit
				</button>
			</div>
		);
	}
}
