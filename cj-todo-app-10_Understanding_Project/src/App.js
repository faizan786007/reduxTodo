import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";

function App() {
	const [todos, setTodos] = useState([]);
	function onCreateTodo(text) {
		setTodos([...todos, { id: todos.length - 1, text, completed: false }]);
	}
	function toggleTodo(index) {
		setTodos(
			todos.map((todo, i) =>
				i == index ? { ...todo, completed: !todo.completed } : todo
			)
		);
	}
	return (
		<div>
			<h1>To Do App</h1>
			<Provider store={store}>
				<ToDoForm onCreateTodo={onCreateTodo} />
				<ToDoList onToggle={toggleTodo} todos={todos} />
			</Provider>
		</div>
	);
}

export default App;
