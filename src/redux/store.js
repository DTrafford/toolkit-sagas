import {
  createSlice,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const todoSlice = createSlice({
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
  },
});
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    fetchUsers: (state, action) => {
      return {
        users: action.payload,
      };
    },
  },
});

export const { fetchTodos } = todoSlice.actions;
export const { fetchUsers } = usersSlice.actions;

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    users: usersSlice.reducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
