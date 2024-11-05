import { applyMiddleware, createStore } from "redux";
import { todosReducer } from "./services/reducers/todosReducer";
import { thunk } from "redux-thunk";

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;