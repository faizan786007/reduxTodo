import React from "react";
import { useState } from "react";
import "./ToDoForm.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Actions/TodoActions";

const ToDoForm = () => {
	const [todoText, setTodoTest] = useState("");

	const dispatch = useDispatch();

	function handleSubmit(e) {
		e.preventDefault();
		// onCreateTodo(todoText);
		dispatch(addTodo(todoText));
		setTodoTest("");
	}
	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<input
					className="form-control mb-3"
					type="text"
					placeholder="text"
					value={todoText}
					onChange={(e) => setTodoTest(e.target.value)}
				/>
				<button className="btn btn-success float-end" type="submit">
					Create todo
				</button>
			</form>
		</div>
	);
};

export default ToDoForm;
