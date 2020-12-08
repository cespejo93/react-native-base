import React from 'react';
import { Provider } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';

import configureStore from './helpers/configureStore';
import Root from "./Root";

const store = configureStore();

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
