import axios from 'axios';
// import { fetchStudents } from '../store';

import {fetchStudents} from './studentsReducer'

const GOT_CURRENT_STUDENT = 'GOT_CURRENT_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT';

//ACTIONS
export const gotCurrentStudent = (currentStudent) => {
  return {
    type: GOT_CURRENT_STUDENT,
    currentStudent,
  };
};

export const addCurrentStudent = (currentStudent) => {
  return {
    type: ADD_STUDENT,
    currentStudent
  };
};

//THUNKS
export const fetchCurrentStudent = (id) => {
  return function(dispatch){
    axios.get(`/api/students/${id}`)
      .then( response => response.data)
      .then( (student) => {
        dispatch(gotCurrentStudent(student));
      })
      .catch(err => {
        console.log('FRIENDLY ERROR: ', err );
      });
  };
};

export const addStudent = (student) => {
  console.log('ADD STUDENT', student)
  return function(dispatch){
    axios.post('/api/students', student)
      .then(response => {
        console.log('response', response)
        response.data})
      .then(() => {
        console.log('axios.post coolllssss')
        dispatch(fetchStudents())
      })
      .catch(err => {
        console.log('FRIENDLY ERROR: ', err );
      });
  }
}



//REDUCER
const currentStudentReducer = function(state = {}, action){

    switch (action.type){

      case GOT_CURRENT_STUDENT:
        return action.currentStudent;

        case ADD_STUDENT:
        return action.currentStudent;

      default:
        return state;
    }
  };

  export default currentStudentReducer;
