import { all } from "redux-saga/effects";

import TodoSagas from "./todo/sagas";
import UserSagas from "./users/sagas";

// single entry point to start all Sagas at once
//
export default function* rootSaga() {
  yield all([TodoSagas(), UserSagas()]);
}
