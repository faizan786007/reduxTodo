//action const
export const ADD_TODO = "add todo";
export const TOGGLE_TODO = "toggle todo";

//action creators

export const addTodo = (text) => ({ text, type: ADD_TODO });
export const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });
