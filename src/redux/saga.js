import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { fetchTodos, fetchUsers } from "./store";
import { sagaActions } from "./sagaActions";

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_TODOS_SAGA, fetchTodoSaga);
  yield takeEvery(sagaActions.FETCH_USERS_SAGA, fetchUsersSaga);
}

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
  });
};

export function* fetchTodoSaga() {
  try {
    let result = yield call(() =>
      callAPI({ url: "https://api.mocki.io/v1/13f44462" })
    );
    console.log("RESULT = ", result);
    yield put(fetchTodos(result.data));
  } catch (e) {
    console.log("FAILED = ", e);
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}
export function* fetchUsersSaga() {
  try {
    let result = yield call(() =>
      callAPI({ url: "https://api.mocki.io/v1/b043df5a" })
    );
    console.log("RESULT = ", result);
    yield put(fetchUsers(result.data));
  } catch (e) {
    console.log("FAILED = ", e);
    yield put({ type: "USER_FETCH_FAILED" });
  }
}
