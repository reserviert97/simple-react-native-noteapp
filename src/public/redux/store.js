// import create store and apply 
import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers';

// logging for debugging
const logger = createLogger({});

// define store
const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    promiseMiddleware
  )
);

export default store;