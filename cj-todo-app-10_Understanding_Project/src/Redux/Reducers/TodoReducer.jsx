import { ADD_TODO, TOGGLE_TODO } from "../Actions/TodoActions";

const initialState = {
	todos: [
		{ text: "wake up in mrg", completed: false },
		{ text: "go to gym", completed: true },
	],
};

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, { text: action.text, completed: false }],
			};
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map((todo, i) =>
					i == action.index ? { ...todo, completed: !todo.completed } : todo
				),
			};

		default:
			return state;
	}
}
