import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as i18nSelectors from './i18n/i18n.selectors';
import * as commonActions from "./actions/common.actions";

export default function Root() {
  const colorScheme = useColorScheme();
  const locale: string  = useSelector(i18nSelectors.getI18nLocale);
  const messages: Record<string, string> = useSelector(i18nSelectors.getI18nMessages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commonActions.appInit());
  }, []);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    </IntlProvider>
  );
}
