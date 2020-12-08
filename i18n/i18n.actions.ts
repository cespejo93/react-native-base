export const LOAD_MESSAGES_START = 'I18N_LOAD_MESSAGES_START';
export const I18N_SET_LOCALE_AND_MESSAGES = 'I18N_SET_LOCALE_AND_MESSAGES';
export const SYNC_I18N = 'I18N_SYNC_I18N';

export const loadI18nMessagesStart = (locale?: string) => {
  return { type: LOAD_MESSAGES_START, data: locale };
};
export const i18nSetLocaleAndMessages = (locale: string, messages: Record<string, any>) => {
  return { type: I18N_SET_LOCALE_AND_MESSAGES, data: { locale, messages } };
};
export const syncI18n = () => {
  return { type: SYNC_I18N };
};
