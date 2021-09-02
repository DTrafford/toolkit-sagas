import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    fetchTodos: (state, action) => {
      return {
        todos: action.payload,
      };
    },
    addTodo: (state, action) => {
      console.log("ACTION = ", action);
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    },
  },
});
