import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

import { todoSlice } from "./todo/slice";
import { usersSlice } from "./users/slice";

export const todoActions = todoSlice.actions;
export const userActions = usersSlice.actions;

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    users: usersSlice.reducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
