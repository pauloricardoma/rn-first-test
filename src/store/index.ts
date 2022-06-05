import { rootReducer } from './rootReducer';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const localStorage = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return localStorage;
};

export const store = configureStore();
