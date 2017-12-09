import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk


import studentsReducer from './reducers/studentsReducer';
import currentStudentReducer from './reducers/currentStudentReducer';
import campusesReducer from './reducers/campusesReducer';


const mainReducer = combineReducers({
  students: studentsReducer,
  currentStudent: currentStudentReducer,
  campuses: campusesReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware, loggingMiddleware));

export default store;
export * from './reducers/studentsReducer';
export * from './reducers/currentStudentReducer';
export * from './reducers/campusesReducer';
