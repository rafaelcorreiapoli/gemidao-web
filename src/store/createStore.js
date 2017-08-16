import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createRootReducer from './createRootReducer';
import api from '../api';

const logger = createLogger({
  predicate: (getState, action) => !/router|radar|popover/.test(action.type),
});

const __DEV__ = process.env.NODE_ENV === 'development';

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk.withExtraArgument(api), __DEV__ && logger, routerMiddleware(createBrowserHistory())].filter(Boolean);
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];

  let composeEnhancers = compose;
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );
  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('./createRootReducer', () => {
      const reducers = require('./createRootReducer').default;
      store.replaceReducer(reducers());
    });
  }

  return store;
};