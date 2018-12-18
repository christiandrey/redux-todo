import { AddTodo, IAddTodoProps } from "../../components/AddTodo/AddTodo";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import { Todo } from "../../entities/Todo";
import { addTodo } from "../actions";
import { connect } from "react-redux";

const mapDispatchToProps: (dispatch: Dispatch<AnyAction>) => IAddTodoProps = dispatch => {
	return {
		addTodo: (todo: Todo) => dispatch(addTodo(todo))
	};
};

export default connect(
	null,
	mapDispatchToProps
)(AddTodo);
