import { call, takeEvery, put } from "redux-saga/effects";
import { callAPI } from "../../helpers/api";
import { userActions } from "../store";
import { sagaActions } from "../sagaActions";

export default function* UserSagas() {
  yield takeEvery(sagaActions.FETCH_USERS_SAGA, fetchUsersSaga);
}

export function* fetchUsersSaga() {
  try {
    let result = yield call(() =>
      callAPI({ url: "https://api.mocki.io/v1/b043df5a" })
    );
    console.log("RESULT = ", result);
    yield put(userActions.fetchUsers(result.data));
  } catch (e) {
    console.log("FAILED = ", e);
    yield put({ type: "USER_FETCH_FAILED" });
  }
}
