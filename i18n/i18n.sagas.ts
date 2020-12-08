import 'regenerator-runtime/runtime'; // eslint-disable-line import/no-extraneous-dependencies
import { all, put, takeEvery } from 'redux-saga/effects';

import * as actions from './i18n.actions';
import * as commonActions from '../actions/common.actions';

import * as LanguageImporter from './i18n.helpers';

/**
 *  Load i18n messages acording to locale
 *  @param   {object}     action  Redux action
 */
export function* loadI18nMessages() {
  const locale = window.localStorage.getItem('locale') || 'en';
  const messages = yield LanguageImporter.importLanguage(locale);
  try {
    window.localStorage.setItem('locale', locale);
  } catch (e) {
    // No empty block ;-)
  }

  yield put(actions.i18nSetLocaleAndMessages(locale, messages));
}

/**
 *  Initialize i18n
 */
export function* initI18n() {
  try {
    yield put(actions.loadI18nMessagesStart());
  } catch (e) {
    // No empty block ;-)
  }
}

/**
 *  I18n sagas
 */
export function* sagas() {
  yield all([
    takeEvery([commonActions.APP_INIT], loadI18nMessages),
  ]);
}
