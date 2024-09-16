// import redux from "redux";
import { createStore } from "redux";
import { todoReducer } from "./Reducers/TodoReducer";

export const store = createStore(todoReducer);
