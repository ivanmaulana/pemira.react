import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducers.js';
import createLogger from 'redux-logger';

export default function configureStore(initialState, history) {
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });

  const middlewares = [thunkMiddleware, logger];
  const enhancer = compose(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}
