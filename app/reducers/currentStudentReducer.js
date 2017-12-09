import axios from 'axios';

const GOT_CURRENT_STUDENT = 'GOT_CURRENT_STUDENT';

//ACTIONS
export const gotCurrentStudent = (currentStudent) => {
  return {
    type: GOT_CURRENT_STUDENT,
    currentStudent,
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

//REDUCER
const currentStudentReducer = function(state = {}, action){

    switch (action.type){

      case GOT_CURRENT_STUDENT:
        return action.currentStudent;

      default:
        return state;
    }
  };

  export default currentStudentReducer;
