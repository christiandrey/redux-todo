import { IStoreState } from "../reducers";
import { Todo } from "../../entities/Todo";
import { Todos, ITodosProps } from "../../components/Todos/Todos";
import { connect } from "react-redux";
import { removeTodo, IStoreAction } from "../actions";

const mapStateToProps: (state: IStoreState) => ITodosProps = state => {
	return {
		todos: state.todos,
		isLoading: state.isLoading
	} as ITodosProps;
};

const mapDispatchToProps: (dispatch: React.Dispatch<IStoreAction>) => ITodosProps = dispatch => {
	return {
		removeTodo: (todo: Todo) => dispatch(removeTodo(todo))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Todos);
