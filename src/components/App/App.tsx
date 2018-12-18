import * as React from "react";
import AddTodo from "../../state/containers/AddTodo";
import Todos from "../../state/containers/Todos";

export default class App extends React.PureComponent {
	render() {
		return (
			<div className="app">
				<h3>My Redux todo app</h3>
				<AddTodo />
				<Todos />
			</div>
		);
	}
}
