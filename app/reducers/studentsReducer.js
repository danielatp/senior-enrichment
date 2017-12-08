import axios from 'axios';

const GOT_STUDENTS = 'GOT_STUDENTS';

export const gotStudents = (students) => {
  return {
    type: GOT_STUDENTS,
    students,
  };
};

export const fetchStudents = () =>  {
  return function(dispatch){
    axios.get('/api/students')
      .then( response => response.data)
      .then( students => {
        dispatch(gotStudents(students));
      })
      .catch(err => {
        console.log('FRIENDLY ERROR: ', err );
      });
  };
};


const studentsReducer = function(state = [], action){

  switch (action.type){
    case GOT_STUDENTS:
      return action.students;

    default:
      return state;
  }
};

export default studentsReducer;
