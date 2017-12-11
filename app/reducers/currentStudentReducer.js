import axios from 'axios';

import {fetchStudents} from './studentsReducer'

const GOT_CURRENT_STUDENT = 'GOT_CURRENT_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

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

export const updateCurrentStudent = (currentStudent) => {
  return {
    type: UPDATE_STUDENT,
    currentStudent
  };
};

//THUNKS
export const fetchCurrentStudent = (id) => {
  return function(dispatch){
    axios.get(`/api/students/${id}`)
      .then( response => response.data)
      .then( student => {
        dispatch(gotCurrentStudent(student));
      })
      .catch(err => {
        console.log('FRIENDLY ERROR: ', err );
      });
  };
};

export const addStudent = (student) => {
  return function(dispatch){
    axios.post('/api/students', student)
      .then(response => {
        response.data})
      .then(() => {
        dispatch(fetchStudents())
      })
      .catch(err => {
        console.log('FRIENDLY ERROR: ', err );
      });
  }
}

export const updateStudent = (student) => {
  return function(dispatch){
    axios.put(`/api/students/${student.id}`, student)
      .then(response => {
        response.data})
      .then(() => {
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

      case UPDATE_STUDENT:
      return action.currentStudent;

    default:
      return state;
  }
};

export default currentStudentReducer;
