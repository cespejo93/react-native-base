import { all, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/example.actions';

export function exampleSaga(action: Record<string, any>) {
  console.log(action);
}

export function* sagas() {
  yield all([
    takeEvery(actions.SET_MY_STORE_VARIABLE, exampleSaga)
  ]);
}
