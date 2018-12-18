import { AnyAction } from "redux";
import { IStoreState } from "../reducers";
import { Todo } from "../../entities/Todo";
import { Todos, ITodosProps } from "../../components/Todos/Todos";
import { connect } from "react-redux";
import { removeTodo } from "../actions";

const mapStateToProps: (state: IStoreState) => ITodosProps = state => {
	return {
		todos: state.todos
	} as ITodosProps;
};

const mapDispatchToProps: (dispatch: React.Dispatch<AnyAction>) => ITodosProps = dispatch => {
	return {
		removeTodo: (todo: Todo) => dispatch(removeTodo(todo))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Todos);
