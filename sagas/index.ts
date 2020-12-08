import { all, fork } from 'redux-saga/effects';
import * as i18n from '../i18n/i18n.sagas';
import * as example from './example.sagas';

export default function* rootSaga() {
  yield all([
    fork(i18n.sagas),
    fork(example.sagas)
  ]);
}
