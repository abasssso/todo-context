import React, { useReducer } from "react";
import axios from "axios";
import { action } from "@mui/base";

export const todoContext = React.createContext();

const INIT_STATE = {
  todos: [],
  oneTodo: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, todos: action.payload };
    case "GET_ONE_TODO":
      return { ...state, oneTodo: action.payload };
    default:
      return state;
  }
}
const ToDoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // ! CRUD
  const API = "http://localhost:8000/todos";
  // !CREATE
  async function createTodo(newTodo) {
    await axios.post(API, newTodo);
  }
  async function getTodos() {
    let res = await axios(API);
    dispatch({
      type: "GET_TODOS",
      payload: res.data,
    });
    console.log(res);
  }
  // !DELETE
  async function deleteTodo(id) {
    await axios.delete(`${API}/${id}`);
    getTodos();
  }
  // ! get for edit
  async function getOneTodo(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_TODO",
      payload: res.data,
    });
    // console.log(res);
  }
  // !UPDATE
  async function updateTodo(id, editedTodo) {
    await axios.patch(`${API}/${id}`, editedTodo);
    getTodos();
  }
  return (
    <todoContext.Provider
      value={{
        todos: state.todos,
        createTodo,
        oneTodo: state.oneTodo,
        getTodos,
        deleteTodo,
        getOneTodo,
        updateTodo,
      }}>
      {children}
    </todoContext.Provider>
  );
};
export default ToDoContextProvider;
