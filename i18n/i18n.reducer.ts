import * as actions from './i18n.actions';

const initialState = {
  locale: 'en',
  messages: {
    loading: 'Loading...'
  },
};

const actionsMap = {
  [actions.I18N_SET_LOCALE_AND_MESSAGES]: (state, action) => {
    const { locale, messages } = action.data;
    return { locale, messages };
  },
};

/* eslint require-jsdoc: 0 */
export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
