import { createSelector } from 'reselect';

export const getI18n = state => state.i18n;
export const getI18nMessages = createSelector(
  [getI18n],
  i18n => i18n.messages,
);
export const getI18nLocale = createSelector(
  [getI18n],
  i18n => i18n.locale,
);
