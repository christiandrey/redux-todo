import { AddTodo, IAddTodoProps } from "../../components/AddTodo/AddTodo";
import { Dispatch } from "react";
import { Todo } from "../../entities/Todo";
import { addTodo, IStoreAction } from "../actions";
import { connect } from "react-redux";

const mapDispatchToProps: (dispatch: Dispatch<IStoreAction>) => IAddTodoProps = dispatch => {
	return {
		addTodo: (todo: Todo) => dispatch(addTodo(todo))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(AddTodo);
