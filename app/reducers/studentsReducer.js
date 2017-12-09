import axios from 'axios';

const GOT_STUDENTS = 'GOT_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT';
// const GOT_CURRENT_STUDENT = 'GOT_CURRENT_STUDENT';

//ACTIONS
export const gotStudents = (students) => {
  return {
    type: GOT_STUDENTS,
    students,
  };
};

export const deleteStudent = (id) => {
  return {
    type: DELETE_STUDENT,
    id,
  };
};

// export const gotCurrentStudent = (currentStudent) => {
//   return {
//     type: GOT_CURRENT_STUDENT,
//     currentStudent,
//   };
// };

//THUNKS
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

export const removeStudent = (students, id) => {
  return function(dispatch){
    axios.delete(`/api/students/${id}`)
      .then( () => {
        dispatch(gotStudents(students))
        dispatch(deleteStudent(id));
      })
      .catch(err => {
        console.log('FRIENDLY ERROR: ', err );
      });
  }
};

// export const fetchCurrentStudent = (id) => {
//   return function(dispatch){
//     axios.get(`/api/students/${id}`)
//       .then( () => {
//         dispatch(gotCurrentStudent(id));
//       })
//       .catch(err => {
//         console.log('FRIENDLY ERROR: ', err );
//       });
//   };
// };

//REDUCER
const studentsReducer = function(state = [], action){

  switch (action.type){
    case GOT_STUDENTS:
      return action.students;

    case DELETE_STUDENT:
      return state.filter(student => {
        return student.id !== Number(action.id);
      });

    // case GOT_CURRENT_STUDENT:
    //   return action.currentStudent;

    default:
      return state;
  }
};

export default studentsReducer;
