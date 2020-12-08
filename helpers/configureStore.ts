import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware, thunk);
  // @ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let store: any = createStore(reducers, composeEnhancers(middleware));
  sagaMiddleware.run(sagas);
  return store
}