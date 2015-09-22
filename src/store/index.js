import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from '../middleware/promise.js';
import createLogger from 'redux-logger';

import * as reducers from '../reducers';

let logger = createLogger();

export default function configureStore(initialState) {
  const reducer = combineReducers(reducers);
  const middlewares = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware,
    logger
  );

  let createStoreWithMiddleware = middlewares(createStore);

  return createStoreWithMiddleware(reducer, initialState);
}
