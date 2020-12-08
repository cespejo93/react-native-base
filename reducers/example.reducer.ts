import * as actions from "../actions/example.actions";

const initialStore: Record<string, any> = {
  myStoreVariable: null
};

const actionsMap: Record<string, any> = {
  [actions.SET_MY_STORE_VARIABLE]: (store: Record<string, any>, action: Record<string, any>) => {
    const { myStoreVariable } = action;
    return {
      ...store,
      myStoreVariable
    };
  }
};

export default function reducer(store = initialStore, action: Record<string, any> = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(store, action) : store;
}
