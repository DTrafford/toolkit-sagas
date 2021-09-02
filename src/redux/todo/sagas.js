import { call, takeEvery, put } from "redux-saga/effects";
import { callAPI } from "../../helpers/api";
import { todoActions } from "../store";
import { sagaActions } from "../sagaActions";

export default function* TodoSagas() {
  yield takeEvery(sagaActions.FETCH_TODOS_SAGA, fetchTodoSaga);
  yield takeEvery(sagaActions.ADD_TODO, addTodoSaga);
}

export function* fetchTodoSaga() {
  try {
    let result = yield call(() =>
      callAPI({ url: "https://api.mocki.io/v1/13f44462" })
    );
    console.log("RESULT = ", result);
    yield put(todoActions.fetchTodos(result.data));
  } catch (e) {
    console.log("FAILED = ", e);
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* addTodoSaga({ payload }) {
  console.log("PAYLOAD = ", payload);
  try {
    yield put(todoActions.addTodo(payload));
  } catch (e) {
    console.log("FAILED = ", e);
    yield put({ type: "TODO_ADD_FAILED" });
  }
}

// export default function* TodoSagas() {
//   yield all([fetchTodoSaga()])
// }
