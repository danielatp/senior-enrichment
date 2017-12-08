import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

import studentsReducer from './reducers/studentsReducer';


const mainReducer = combineReducers({
  students: studentsReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware, loggingMiddleware));

export default store;
