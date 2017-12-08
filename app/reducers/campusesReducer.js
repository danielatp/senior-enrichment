import axios from 'axios';

const GOT_CAMPUSES = 'GOT_CAMPUSES';

export const gotCampuses = (campuses) => {
  return {
    type: GOT_CAMPUSES,
    campuses
  };
};

export const fetchCampuses = () => {
  return function(dispatch){
    axios.get('/api/campuses')
    .then( response => response.data)
    .then( campuses => {
      dispatch(gotCampuses(campuses));
    })
    .catch(err => {
      console.log('FRIENDLY ERROR: ', err );
    });
  };
};

const campusesReducer = function(state = [], action){

  switch (action.type){
    case GOT_CAMPUSES:
      return action.campuses;

    default:
      return state;
  }
};

export default campusesReducer;

