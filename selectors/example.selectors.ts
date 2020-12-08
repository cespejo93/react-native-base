import { createSelector } from 'reselect';

export const getExampleStore = (store: any) => store.example;

export const getMyStoreVariable = createSelector(
  [getExampleStore],
  moduleStore => moduleStore.myStoreVariable
);
