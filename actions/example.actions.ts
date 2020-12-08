export const SET_MY_STORE_VARIABLE = 'EXAMPLE_SET_MY_STORE_VARIABLE';

export const setMyStoreVariable = (myStoreVariable?: string) => {
  return { type: SET_MY_STORE_VARIABLE, myStoreVariable };
};