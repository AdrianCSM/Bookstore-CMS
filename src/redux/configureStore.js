import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import categories from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  categories,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;